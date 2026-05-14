"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  imagePath: string;
  text?: string;
  className?: string;
}

const waveVert = `void main(){gl_Position=vec4(position,1.0);}`;
const waveFrag = `
uniform sampler2D tPrev,tCurr;
uniform vec2 uMouse,uResolution;
uniform float uRadius;
uniform bool uAddDrop;
void main(){
  vec2 uv=gl_FragCoord.xy/uResolution;
  vec2 t=1.0/uResolution;
  float c=texture2D(tCurr,uv).r;
  float p=texture2D(tPrev,uv).r;
  float n=(2.0*c-p+0.98*((texture2D(tCurr,uv-vec2(t.x,0)).r+texture2D(tCurr,uv+vec2(t.x,0)).r+texture2D(tCurr,uv+vec2(0,t.y)).r+texture2D(tCurr,uv-vec2(0,t.y)).r)-4.0*c))*0.982;
  if(uAddDrop)n+=(1.0-smoothstep(0.0,uRadius,length(uv-uMouse)))*0.4;
  gl_FragColor=vec4(clamp(n,-1.0,1.0),0,0,1);
}`;
const dispVert = `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.0);}`;
const dispFrag = `
uniform sampler2D tWave,tImage;
uniform vec2 uResolution;
varying vec2 vUv;
void main(){
  vec2 t=1.0/uResolution;
  vec2 n=vec2(texture2D(tWave,vUv-vec2(t.x,0)).r-texture2D(tWave,vUv+vec2(t.x,0)).r,texture2D(tWave,vUv+vec2(0,t.y)).r-texture2D(tWave,vUv-vec2(0,t.y)).r);
  gl_FragColor=texture2D(tImage,vUv+n*0.06);
}`;

export function LiquidSimulation({ imagePath, text, className = "" }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let rafId: number;
    let renderer: THREE.WebGLRenderer;
    let rtA: THREE.WebGLRenderTarget, rtB: THREE.WebGLRenderTarget;
    let started = false;

    const init = (W: number, H: number) => {
      if (started || W === 0 || H === 0) return;
      started = true;

      renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setSize(W, H);
      renderer.setPixelRatio(1);
      Object.assign(renderer.domElement.style, {
        position: "absolute", top: "0", left: "0", width: "100%", height: "100%",
      });
      wrap.appendChild(renderer.domElement);

      const rtOpts: THREE.RenderTargetOptions = {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.HalfFloatType,
      };
      rtA = new THREE.WebGLRenderTarget(W, H, rtOpts);
      rtB = new THREE.WebGLRenderTarget(W, H, rtOpts);

      const geo = new THREE.PlaneGeometry(2, 2);
      const quad = new THREE.Mesh(geo);
      const scene = new THREE.Scene();
      scene.add(quad);
      const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const waveMat = new THREE.ShaderMaterial({
        vertexShader: waveVert, fragmentShader: waveFrag,
        uniforms: {
          tPrev: { value: null }, tCurr: { value: null },
          uMouse: { value: new THREE.Vector2(-9, -9) },
          uResolution: { value: new THREE.Vector2(W, H) },
          uRadius: { value: 0.07 }, uAddDrop: { value: false },
        },
      });

      let addDrop = false;
      const mouse = { x: -9, y: -9 };
      const onMove = (e: MouseEvent) => {
        const r = wrap.getBoundingClientRect();
        mouse.x = (e.clientX - r.left) / W;
        mouse.y = 1 - (e.clientY - r.top) / H;
        addDrop = true;
      };
      wrap.addEventListener("mousemove", onMove);

      new THREE.TextureLoader().load(imagePath, (tex) => {
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;

        const dispMat = new THREE.ShaderMaterial({
          vertexShader: dispVert, fragmentShader: dispFrag,
          uniforms: {
            tWave: { value: null }, tImage: { value: tex },
            uResolution: { value: new THREE.Vector2(W, H) },
          },
        });

        const tick = () => {
          rafId = requestAnimationFrame(tick);
          waveMat.uniforms.tPrev.value = rtA.texture;
          waveMat.uniforms.tCurr.value = rtB.texture;
          waveMat.uniforms.uMouse.value.set(mouse.x, mouse.y);
          waveMat.uniforms.uAddDrop.value = addDrop;
          addDrop = false;
          quad.material = waveMat as any;
          renderer.setRenderTarget(rtA);
          renderer.render(scene, cam);
          [rtA, rtB] = [rtB, rtA];
          dispMat.uniforms.tWave.value = rtA.texture;
          quad.material = dispMat as any;
          renderer.setRenderTarget(null);
          renderer.render(scene, cam);
        };
        tick();
      });
    };

    // Wait for real dimensions via ResizeObserver
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      init(Math.floor(width), Math.floor(height));
    });
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      if (renderer) {
        if (wrap.contains(renderer.domElement)) wrap.removeChild(renderer.domElement);
        renderer.dispose();
      }
      rtA?.dispose();
      rtB?.dispose();
    };
  }, [imagePath]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div ref={wrapRef} className="absolute inset-0" />
      {text && (
        <div className="absolute inset-0 flex items-end p-8 pointer-events-none z-10">
          <span className="font-display font-medium text-[clamp(24px,3.5vw,60px)] leading-[0.95] tracking-[-0.04em] text-white drop-shadow-2xl">
            {text}
          </span>
        </div>
      )}
    </div>
  );
}
