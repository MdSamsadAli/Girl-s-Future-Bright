const GAL = [
  {
    label: "Classroom sessions",
    bg: "linear-gradient(135deg,rgba(252,231,243,0.85),rgba(251,207,232,0.65))",
    border: "rgba(236,72,153,0.2)",
    img: "/images/classroomsession.webp",
  },
  {
    label: "Science lab",
    bg: "linear-gradient(135deg,rgba(237,233,254,0.85),rgba(221,214,254,0.65))",
    border: "rgba(168,85,247,0.2)",
    img: "/images/sciencelab.jpg",
  },
  {
    label: "Library & study",
    bg: "linear-gradient(135deg,rgba(255,240,249,0.85),rgba(252,231,243,0.65))",
    border: "rgba(236,72,153,0.15)",
    img: "/images/librarystudy.png",
  },
  {
    label: "Cultural events",
    bg: "linear-gradient(135deg,rgba(245,243,255,0.85),rgba(237,233,254,0.65))",
    border: "rgba(168,85,247,0.15)",
    img: "/images/curriculamevent.jpg",
  },
  {
    label: "Sports & wellness",
    bg: "linear-gradient(135deg,rgba(252,231,243,0.75),rgba(245,243,255,0.75))",
    border: "rgba(196,132,252,0.2)",
    img: "/images/wellness.png",
  },
  {
    label: "Graduation day",
    bg: "linear-gradient(135deg,rgba(237,233,254,0.75),rgba(252,231,243,0.75))",
    border: "rgba(236,72,153,0.15)",
    img: "/images/graduationsday.webp",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="glass-section">
      <div className="section-inner">
        <div className="anim-fade-up text-center">
          <div className="sec-tag">Our campus</div>
          <div className="sec-title">
            {"Life at Girl's Future Bright Academy"}
          </div>
          <p
            style={{
              fontSize: 14,
              color: "#7c3aed",
              opacity: 0.45,
              marginBottom: 0,
            }}
          >
            Enjoy yourself while you can.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-3 mt-7">
          {GAL.map((g, i) => (
            <div
              key={i}
              style={{
                background: `url(${g.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: `1px solid ${g.border}`,
                borderRadius: 22,
                aspectRatio: "4/3",
                display: "flex",
                alignItems: "flex-end",
                padding: 14,
                backdropFilter: "blur(10px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                animation: `fadeUp 0.6s ease ${0.05 + i * 0.08}s both`,
              }}
              //   onMouseEnter={(e) => {
              //     e.currentTarget.style.transform = "scale(1.025)";
              //     e.currentTarget.style.boxShadow =
              //       "0 14px 40px rgba(168,85,247,0.15)";
              //   }}
              //   onMouseLeave={(e) => {
              //     e.currentTarget.style.transform = "scale(1)";
              //     e.currentTarget.style.boxShadow = "none";
              //   }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#4c1d95",
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(8px)",
                  padding: "5px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.9)",
                }}
              >
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
