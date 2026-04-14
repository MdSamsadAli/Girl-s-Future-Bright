const PILLARS = [
  {
    num: "01",
    icon: "🌍",
    title: "Global Mindset",
    desc: "Global mindset is the confidence to see the world as full of opportunities to explore, learn, and grow without fear.",
    bg: "linear-gradient(135deg,rgba(252,231,243,0.9),rgba(251,207,232,0.7))",
    border: "rgba(236,72,153,0.22)",
    numColor: "#ec4899",
  },
  {
    num: "02",
    icon: "🧭",
    title: "Your Personal Blueprint to Confidence",
    desc: "Creating your personal blueprint to unlock confidence, discover your identity, and live your true purpose.",
    bg: "linear-gradient(135deg,rgba(237,233,254,0.9),rgba(221,214,254,0.7))",
    border: "rgba(168,85,247,0.22)",
    numColor: "#a855f7",
  },
  {
    num: "03",
    icon: "💎",
    title: "Personality Development",
    desc: "Transforming your personality into a powerful, confident, and impactful presence.",
    bg: "linear-gradient(135deg,rgba(255,240,249,0.9),rgba(252,231,243,0.7))",
    border: "rgba(236,72,153,0.18)",
    numColor: "#ec4899",
  },
  {
    num: "04",
    icon: "⚡",
    title: "Confidence",
    desc: "Building unstoppable confidence to own your voice, take bold action, and lead without fear.",
    bg: "linear-gradient(135deg,rgba(245,243,255,0.9),rgba(237,233,254,0.7))",
    border: "rgba(168,85,247,0.18)",
    numColor: "#a855f7",
  },
  {
    num: "05",
    icon: "👑",
    title: "Women Empowerment",
    desc: "Inspiring women to rise with confidence, embrace their power, and lead with purpose and independence.",
    bg: "linear-gradient(135deg,rgba(252,231,243,0.9),rgba(237,233,254,0.8))",
    border: "rgba(196,132,252,0.22)",
    numColor: "#c084fc",
  },
];

export default function KeyPillars() {
  return (
    <section className="glass-section">
      <div className="section-inner">
        {/* Header */}
        <div
          className="anim-fade-up"
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <div className="sec-tag" style={{ textAlign: "center" }}>
            Foundation of Growth
          </div>
          <h2
            className="sec-title"
            style={{ fontSize: 38, textAlign: "center" }}
          >
            Our Key{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#ec4899,#a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Pillars
            </span>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#6b21a8",
              opacity: 0.6,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Five powerful pillars designed to transform you from the inside out
            — building confidence, purpose, and unstoppable growth.
          </p>
        </div>

        {/* Top row — 3 cards */}
        <div
          className="grid lg:grid-cols-3"
          style={{
            gap: 16,
            marginBottom: 16,
          }}
        >
          {PILLARS.slice(0, 3).map((p, i) => (
            <PillarCard key={p.num} pillar={p} delay={0.1 + i * 0.1} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div
          className="grid lg:grid-cols-2"
          style={{
            gap: 16,
            maxWidth: 740,
            margin: "0 auto",
          }}
        >
          {PILLARS.slice(3).map((p, i) => (
            <PillarCard key={p.num} pillar={p} delay={0.4 + i * 0.1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pillars-top, .pillars-bottom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function PillarCard({
  pillar,
  delay,
}: {
  pillar: (typeof PILLARS)[0];
  delay: number;
}) {
  return (
    <div
      className="glass-card"
      style={{
        padding: "28px 24px",
        background: pillar.bg,
        borderColor: pillar.border,
        animation: `fadeUp 0.7s ease ${delay}s both`,
        position: "relative",
        overflow: "hidden",
      }}
      //   onMouseEnter={(e) => {
      //     e.currentTarget.style.transform = "translateY(-6px)";
      //     e.currentTarget.style.boxShadow = "0 16px 44px rgba(168,85,247,0.16)";
      //   }}
      //   onMouseLeave={(e) => {
      //     e.currentTarget.style.transform = "translateY(0)";
      //     e.currentTarget.style.boxShadow = "0 4px 24px rgba(168,85,247,0.07)";
      //   }}
    >
      {/* Big faint number in background */}
      <div
        style={{
          position: "absolute",
          top: -10,
          right: 16,
          fontSize: 80,
          fontWeight: 900,
          color: pillar.numColor,
          opacity: 0.07,
          lineHeight: 1,
          fontFamily: "var(--font-playfair)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {pillar.num}
      </div>

      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 18,
          background: "rgba(255,255,255,0.75)",
          border: `1px solid ${pillar.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 18,
          boxShadow: "0 2px 12px rgba(168,85,247,0.1)",
        }}
      >
        {pillar.icon}
      </div>

      {/* Number badge */}
      {/* <div
        style={{
          display: "inline-block",
          fontSize: 10,
          fontWeight: 800,
          color: pillar.numColor,
          background: "rgba(255,255,255,0.7)",
          border: `1px solid ${pillar.border}`,
          padding: "3px 10px",
          borderRadius: 999,
          marginBottom: 10,
          letterSpacing: 1,
        }}
      >
        PILLAR {pillar.num}
      </div> */}

      <h3
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: 17,
          fontWeight: 700,
          color: "#2d1b69",
          marginBottom: 10,
          lineHeight: 1.3,
        }}
      >
        {pillar.title}
      </h3>

      <p
        style={{
          fontSize: 14,
          color: "#6b21a8",
          opacity: 0.65,
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {pillar.desc}
      </p>
    </div>
  );
}
