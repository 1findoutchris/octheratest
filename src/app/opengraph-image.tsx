import { ImageResponse } from "next/og";
import { SITE_TAGLINE } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori (next/og's renderer) doesn't support CSS custom properties, so the
// hex/rgba values below are duplicated from src/app/globals.css by hand.
// Update them here too whenever the --octhera-* tokens change.

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "96px",
          background: "linear-gradient(135deg, #050609 0%, #0a0c12 55%, #10141f 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,106,19,0.35) 0%, rgba(255,106,19,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            right: 80,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(242,169,59,0.35) 0%, rgba(242,169,59,0) 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #ff6a13, #f2a93b)",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 44, fontWeight: 700, color: "#f4f5fa", letterSpacing: -1 }}>
            OCTHERA
          </span>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#f4f5fa",
            maxWidth: 900,
            display: "flex",
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#a6acc4", maxWidth: 780, display: "flex" }}>
          B2B gaming technology, turnkey platforms &amp; API infrastructure for modern operators.
        </div>
      </div>
    ),
    { ...size }
  );
}
