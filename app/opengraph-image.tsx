import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "DucLe — Digital design that refuses to blend.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f4f1ec",
          fontFamily: "sans-serif",
          color: "#0a0a0a",
          position: "relative",
        }}
      >
        {/* top row: logo + meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6b6b6b",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="" width={76} height={57} />
            <span
              style={{
                color: "#0a0a0a",
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "none",
              }}
            >
              DucLe
            </span>
          </div>
          <span>Hanoi · Worldwide</span>
        </div>

        {/* big headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 110,
            fontWeight: 600,
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
          }}
        >
          <span>We design &amp; build</span>
          <span style={{ display: "flex", alignItems: "center", gap: 18 }}>
            digital
            <span
              style={{
                background: "#ffd60a",
                padding: "0 22px",
                borderRadius: 16,
              }}
            >
              brands
            </span>
            that
          </span>
          <span>
            refuse to blend
            <span style={{ color: "#ffd60a" }}>.</span>
          </span>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6b6b6b",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#ffd60a",
              }}
            />
            Available · 2026
          </span>
          <span style={{ color: "#0a0a0a" }}>ducle.studio</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
