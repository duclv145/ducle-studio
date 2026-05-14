"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface LiquidSimulationProps {
  imagePath: string;
  text?: string;
}

const waveVert = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const waveFrag = `
  uniform sampler2D tPrev;
  uniform sampler2D tCurr;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uRadius;
  uniform bool uAddDrop;

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    vec2 texel = 1.0 / uResolution;

    float curr  = texture2D(tCurr, uv).r;
    float prev  = texture2D(tPrev, uv).r;
    float left  = texture2D(tCurr, uv - vec2(texel.x, 0.0)).r;
    float right = texture2D(tCurr, uv + vec2(texel.x, 0.0)).r;
    float up    = texture2D(tCurr, uv + vec2(0.0, texel.y)).r;
    float down  = texture2D(tCurr, uv - vec2(0.0, texel.y)).r;

    float next = (2.0 * curr - prev + 0.98 * ((left + right + up + down) - 4.0 * curr));
    next *= 0.982;

    if (uAddDrop) {
      float dist = length(uv - uMouse);
      next += (1.0 - smoothstep(0.0, uRadius, dist)) * 0.35;
    }

    gl_FragColor = vec4(clamp(next, -1.0, 1.0), 0.0, 0.0, 1.0);
  }
`;

const displayVert = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const displayFrag = `
  uniform sampler2D tWave;
  uniform sampler2D tImage;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    vec2 texel = 1.0 / uResolution;

    float wL = texture2D(tWave, vUv - vec2(texel.x, 0.0)).r;
    float wR = texture2D(tWave, vUv + vec2(texel.x, 0.0)).r;
    float wU = texture2D(tWave, vUv + vec2(0.0, texel.y)).r;
    float wD = texture2D(tWave, vUv - vec2(0.0, texel.y)).r;

    vec2 normal = vec2(wL - wR, wU - wD);
    vec2 distUV = vUv + normal * 0.06;

    gl_FragColor = texture2D(tImage, distUV);
  }
`;

export function LiquidSimulation({ imagePath, text }: LiquidSimulationProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const W = container.clientWidth;
    const H = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(1);
    container.appendChild(renderer.domElement);

    // Render targets (ping-pong)
    const rtOpts: THREE.RenderTargetOptions = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    };
    let rtA = new THREE.WebGLRenderTarget(W, H, rtOpts);
    let rtB = new THREE.WebGLRenderTarget(W, H, rtOpts);

    // Fullscreen quad geometry
    const quad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      undefined
    );
    const scene = new THREE.Scene();
    scene.add(quad);
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Wave material
    const waveMat = new THREE.ShaderMaterial({
      vertexShader: waveVert,
      fragmentShader: waveFrag,
      uniforms: {
        tPrev: { value: null },
        tCurr: { value: null },
        uMouse: { value: new THREE.Vector2(-9, -9) },
        uResolution: { value: new THREE.Vector2(W, H) },
        uRadius: { value: 0.06 },
        uAddDrop: { value: false },
      },
    });

    // Load image texture
    const loader = new THREE.TextureLoader();
    const imageTex = loader.load(imagePath);
    imageTex.minFilter = THREE.LinearFilter;

    // Display material
    const displayMat = new THREE.ShaderMaterial({
      vertexShader: displayVert,
      fragmentShader: displayFrag,
      uniforms: {
        tWave: { value: null },
        tImage: { value: imageTex },
        uResolution: { value: new THREE.Vector2(W, H) },
      },
    });

    // Mouse state
    const mouse = { x: -9, y: -9, active: false };
    let addDrop = false;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / W;
      mouse.y = 1.0 - (e.clientY - rect.top) / H;
      mouse.active = true;
      addDrop = true;
    };
    const onLeave = () => { mouse.active = false; };
    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    // Animation loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Step 1: simulate wave into rtB
      waveMat.uniforms.tPrev.value = rtA.texture;
      waveMat.uniforms.tCurr.value = rtB.texture;
      waveMat.uniforms.uMouse.value.set(mouse.x, mouse.y);
      waveMat.uniforms.uAddDrop.value = addDrop;
      addDrop = false;

      quad.material = waveMat;
      renderer.setRenderTarget(rtA);
      renderer.render(scene, camera);

      // Swap buffers
      const tmp = rtA; rtA = rtB; rtB = tmp;

      // Step 2: display with distortion
      displayMat.uniforms.tWave.value = rtA.texture;
      quad.material = displayMat;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      renderer.dispose();
      rtA.dispose();
      rtB.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [imagePath]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {text && (
        <div className="absolute inset-0 flex items-end justify-start p-10 pointer-events-none">
          <h2 className="font-display font-medium text-[clamp(32px,5vw,80px)] leading-[0.95] tracking-[-0.04em] text-white drop-shadow-lg">
            {text}
          </h2>
        </div>
      )}
    </div>
  );
}
