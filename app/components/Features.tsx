const FEATS = [
  {
    icon: "👩‍🏫",
    title: "Experienced teachers",
    desc: "Faculty with 10+ years of proven teaching excellence and consistently strong results.",
    bg: "linear-gradient(135deg,#fce7f3,#fbcfe8)",
    border: "rgba(236,72,153,0.2)",
  },
  {
    icon: "🛡️",
    title: "Safe environment",
    desc: "Girls-only campus with CCTV surveillance and trained security staff 24/7.",
    bg: "linear-gradient(135deg,#ede9fe,#ddd6fe)",
    border: "rgba(168,85,247,0.2)",
  },
  {
    icon: "🏅",
    title: "Scholarships",
    desc: "Merit and need-based scholarships available for all deserving students every year.",
    bg: "linear-gradient(135deg,#fce7f3,#ede9fe)",
    border: "rgba(196,132,252,0.2)",
  },
  {
    icon: "🧭",
    title: "Career guidance",
    desc: "One-on-one mentorship and career planning sessions tailored for every student.",
    bg: "linear-gradient(135deg,#ede9fe,#fce7f3)",
    border: "rgba(236,72,153,0.2)",
  },
];

export default function Features() {
  return (
    <section className="glass-section">
      <div className="section-inner">
        <div className="anim-fade-up text-center">
          <div className="sec-tag">Why choose us</div>
          <div className="sec-title">Built for girls. Designed to excel.</div>
          <div className="sec-sub">
            {
              "Every detail of our institute is crafted with girls' success in mind."
            }
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-3.5">
          {FEATS.map((f, i) => (
            <div
              key={f.title}
              className="glass-card grid place-items-center"
              style={{
                padding: 24,
                background: f.bg,
                borderColor: f.border,
                animation: `fadeUp 0.7s ease ${0.1 + i * 0.1}s both`,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.72)",
                  border: `1px solid ${f.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  fontSize: 20,
                }}
              >
                {f.icon}
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#2d1b69",
                  marginBottom: 7,
                }}
              >
                {f.title}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#6b21a8",
                  opacity: 0.6,
                  lineHeight: 1.55,
                }}
              >
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
