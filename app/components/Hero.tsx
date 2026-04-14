const STATS = [
  { num: "500+", label: "Students enrolled" },
  { num: "20+", label: "Expert teachers" },
  { num: "95%", label: "Pass rate" },
  { num: "10+", label: "Years of service" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{ position: "relative", overflow: "hidden", paddingTop: 90 }}
    >
      {/* Animated blobs */}
      <div className="blob blob_1" />
      <div className="blob blob_2" />
      <div className="blob blob_3" />

      {/* Floating orbs */}
      <div className="orb anim-float orb_1" />
      <div className="orb anim-float-r orb_2" />
      <div className="orb anim-float-s orb_3" />
      <div className="orb anim-float orb_4" />

      <div className="hero__wrap">
        {/* Left content */}
        <div className="anim-fade-up wrapping">
          {/* Badge */}
          <div className="hero_item">
            <span />
            {"Nepal's #1 Girls Coaching Institute"}
          </div>

          <h1>
            Learn. Grow.
            <br />
            <span className="grad-text" style={{ fontStyle: "italic" }}>
              Rise Together.
            </span>
          </h1>

          <p>
            A safe, empowering space where every girl discovers her potential
            through quality education, mentorship, and community.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a href="#contact" className="btn-primary">
              Enroll Now
            </a>
            <a href="#courses" className="btn-secondary">
              Explore Courses
            </a>
          </div>
        </div>

        {/* Stats grid */}
        <div className="anim-fade-up-2 grid grid-cols-2 gap-3.5">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="glass-card"
              style={{
                animation: `fadeUp 0.8s ease ${0.3 + i * 0.1}s both`,
              }}
            >
              <div className="grad-text">{s.num}</div>
              <div
                style={{
                  fontSize: 13,
                  color: "#7c3aed",
                  opacity: 0.55,
                  marginTop: 6,
                  fontWeight: 600,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
