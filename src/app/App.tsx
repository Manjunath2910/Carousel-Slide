import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import svgPaths from "@/imports/Component2/svg-6e1et1mmyt";
import imgBg0 from "@/imports/Component2/dbdee0f2309cac6408de59ba3d77502698a7be1b.png";
import imgBg2 from "@/imports/Component2/1cfefd8f0acfb77cb88d5a6382bc36c1d7f80bfe.png";
import imgBg3 from "@/imports/Component2/f61e95b32e992ccbeeb665551752926ac4f715e6.png";

const SLIDES = [
  { bg: imgBg0, amount: null as string | null, label: null as string | null },
  { bg: imgBg0, amount: "$ 800", label: "Sent to  family" },
  { bg: imgBg2, amount: "₱ 1500", label: "Sent to  Home" },
  { bg: imgBg3, amount: "€ 2000", label: "Sent for  STUDY" },
];

const BG_IMAGES = [imgBg0, imgBg2, imgBg3];

// Purple wave left positions per slide (px in the 1440-wide design space)
const WAVE_LEFT = [-2400, -1634.73, -927.01, -367.01];
const WAVE_OPACITY = [0, 1, 1, 1];

function PandaLogo() {
  return (
    <svg width="165" height="40" viewBox="0 0 165.394 39.602" fill="none">
      {/* Panda icon — positioned at x=6.27 y=6.5, sized 24.25×24.23 */}
      <svg x="6.27" y="6.5" width="24.2531" height="24.2281" viewBox="0 0 24.2531 24.2281">
        <path d={svgPaths.p2fd33900} fill="white" />
        <path d={svgPaths.p1bd05b80} fill="white" />
        <path d={svgPaths.p2aae1d40} fill="white" />
      </svg>
      {/* "PANDA" text — positioned at x=37.19 y=9.83 */}
      <svg x="37.19" y="9.83" width="44.5108" height="17.5755" viewBox="0 0 44.5108 17.5755">
        <path d={svgPaths.p295ea700} fill="white" />
        <path d={svgPaths.p2d00f80} fill="white" />
        <path d={svgPaths.p1bc91f00} fill="white" />
        <path d={svgPaths.p1e4e7b80} fill="white" />
      </svg>
      {/* "MONEY" text — positioned at x=85.01 y=9.83 */}
      <svg x="85.01" y="9.83" width="74.1274" height="23.2742" viewBox="0 0 74.1274 23.2742">
        <path d={svgPaths.p1832d100} fill="white" />
        <path d={svgPaths.p8b3ccf2} fill="white" />
        <path d={svgPaths.p5a09d00} fill="white" />
        <path d={svgPaths.pf095f00} fill="white" />
        <path d={svgPaths.p10c6a780} fill="white" />
      </svg>
    </svg>
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / 1440);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const advance = useCallback((to: number) => {
    setCurrent(((to % 4) + 4) % 4);
  }, []);

  // Auto-advance every 5 s unless user is hovering
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => advance(current + 1), 5000);
    return () => clearTimeout(t);
  }, [current, paused, advance]);

  const isHero = current === 0;
  const slide = SLIDES[current];

  return (
    <div
      style={{
        width: "100vw",
        height: `${800 * scale}px`,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#1a0012",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fixed 1440×800 canvas, scaled to viewport */}
      <div
        style={{
          position: "absolute",
          width: 1440,
          height: 800,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {/* ── Background images ───────────────────────────────────── */}
        {BG_IMAGES.map((bg) => (
          <motion.img
            key={bg}
            src={bg}
            alt=""
            initial={{ opacity: slide.bg === bg ? 1 : 0 }}
            animate={{ opacity: slide.bg === bg ? 1 : 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ))}

        {/* Gradient vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,2,4,0.65) 0%, rgba(204,175,72,0) 52%, rgba(0,2,4,0.45) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* ── Purple wave ──────────────────────────────────────────── */}
        <motion.div
          animate={{
            left: WAVE_LEFT[current],
            opacity: WAVE_OPACITY[current],
          }}
          transition={{
            left: {
              type: "spring",
              stiffness: 42,
              damping: 15,
              mass: 1.3,
            },
            opacity: { duration: 0.55, ease: "easeOut" },
          }}
          style={{
            position: "absolute",
            top: 0,
            width: 3074.73,
            height: 800,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <svg
            style={{ display: "block", width: "100%", height: "100%" }}
            viewBox="0 0 3074.73 800.3"
            fill="none"
            preserveAspectRatio="none"
          >
            <path d={svgPaths.p30995a80} fill="#750558" />
          </svg>
        </motion.div>

        {/* ── Navigation bar ───────────────────────────────────────── */}
        <motion.div
          animate={{
            backgroundColor: isHero ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.12)",
            paddingLeft: isHero ? 0 : 16,
            paddingRight: isHero ? 0 : 8,
            paddingTop: isHero ? 0 : 8,
            paddingBottom: isHero ? 0 : 8,
          }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute",
            top: 54,
            left: "50%",
            x: "-50%",
            display: "flex",
            alignItems: "center",
            gap: 88,
            borderRadius: 99,
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
            {/* Logo + product label */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <PandaLogo />
              <motion.span
                animate={{ fontSize: isHero ? 16.8 : 19.8 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: "white",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 600,
                  lineHeight: "25px",
                  whiteSpace: "nowrap",
                  marginLeft: 2,
                }}
              >
                Personal
              </motion.span>
            </div>

            {/* Nav links */}
            <div
              style={{
                display: "flex",
                gap: 24,
                color: "white",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "28px",
              }}
            >
              {["Business", "About Us", "Blog"].map((item) => (
                <span
                  key={item}
                  style={{ cursor: "pointer", opacity: 0.9, whiteSpace: "nowrap" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <button
            style={{
              backgroundColor: "white",
              color: "#36052a",
              borderRadius: 999,
              padding: "6px 16px",
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              lineHeight: "28px",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Download App
          </button>
        </motion.div>

        {/* ── Slide 0: Hero headline ───────────────────────────────── */}
        <motion.div
          animate={{ opacity: isHero ? 1 : 0, y: isHero ? 0 : 28 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: 52,
            top: 614,
            zIndex: 5,
            pointerEvents: isHero ? "auto" : "none",
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 700,
              fontSize: 60,
              lineHeight: "73px",
              textTransform: "uppercase",
              width: 796,
              margin: 0,
              letterSpacing: "-0.2px",
            }}
          >
            One financial home for life across borders.
          </p>
        </motion.div>

        {/* ── Slides 1-3: Centered transfer amount ─────────────────── */}
        <motion.div
          animate={{ opacity: isHero ? 0 : 1, y: isHero ? -24 : 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "50%",
            top: 340,
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            textTransform: "uppercase",
            gap: 2,
            zIndex: 5,
            pointerEvents: isHero ? "none" : "auto",
            minWidth: 240,
          }}
        >
          <motion.p
            key={`amount-${current}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22, ease: "easeOut" }}
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              fontSize: 69,
              lineHeight: "85px",
              margin: 0,
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            {slide.amount ?? ""}
          </motion.p>
          <motion.p
            key={`label-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.34, ease: "easeOut" }}
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              fontSize: 25.6,
              lineHeight: "31px",
              margin: 0,
              textAlign: "center",
            }}
          >
            {slide.label ?? ""}
          </motion.p>
        </motion.div>

        {/* ── Arrow navigation ─────────────────────────────────────── */}
        {[
          { dir: -1, side: "left" as const, symbol: "‹" },
          { dir: 1, side: "right" as const, symbol: "›" },
        ].map(({ dir, side, symbol }) => (
          <button
            key={side}
            onClick={() => advance(current + dir)}
            style={{
              position: "absolute",
              [side]: 28,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "50%",
              width: 48,
              height: 48,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 20,
              color: "white",
              fontSize: 26,
              lineHeight: 1,
              backdropFilter: "blur(6px)",
            }}
          >
            {symbol}
          </button>
        ))}

        {/* ── Progress dots ─────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
            zIndex: 20,
          }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => advance(i)}
              style={{
                height: 8,
                width: i === current ? 30 : 8,
                borderRadius: 4,
                backgroundColor:
                  i === current ? "white" : "rgba(255,255,255,0.35)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.35s ease, background-color 0.35s ease",
              }}
            />
          ))}
        </div>

        {/* ── Auto-progress bar ─────────────────────────────────────── */}
        {!paused && (
          <motion.div
            key={current}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5, ease: "linear" }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 3,
              width: "100%",
              backgroundColor: "rgba(255,255,255,0.5)",
              transformOrigin: "left center",
              zIndex: 25,
            }}
          />
        )}
      </div>
    </div>
  );
}
