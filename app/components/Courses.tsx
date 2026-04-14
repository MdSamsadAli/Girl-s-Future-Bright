import Image from "next/image";
import image1 from "../../public/images/science.jpg";
import image2 from "../../public/images/computercourse.jpg";
import image3 from "../../public/images/IELTS.png";
import image4 from "../../public/images/loksewa.png";

const COURSES = [
  {
    img: image1,
    icon: "🔬",
    title: "+2 Science",
    desc: "Physics, Chemistry, Biology & Mathematics with expert faculty and full lab facilities.",
    dur: "2 years",
    pill: "pill-pk",
    bg: "linear-gradient(135deg,rgba(252,231,243,1),rgba(251,207,232,0.8))",
    border: "rgba(236,72,153,0.2)",
  },
  {
    img: image2,
    icon: "💻",
    title: "Computer Courses",
    desc: "From basics to advanced programming, web design, and Microsoft Office suite.",
    dur: "3–6 months",
    pill: "pill-pu",
    bg: "linear-gradient(135deg,rgba(237,233,254,1),rgba(221,214,254,0.8))",
    border: "rgba(168,85,247,0.2)",
  },
  {
    img: image3,
    icon: "🌐",
    title: "IELTS Prep",
    desc: "Speaking, Writing, Reading & Listening — targeted coaching for band 7+.",
    dur: "3 months",
    pill: "pill-pk",
    bg: "linear-gradient(135deg,rgba(255,240,249,1),rgba(252,231,243,0.8))",
    border: "rgba(236,72,153,0.18)",
  },
  {
    img: image4,
    icon: "📋",
    title: "Loksewa",
    desc: "Nepal government exam preparation with mock tests, GK, and current affairs.",
    dur: "6 months",
    pill: "pill-pu",
    bg: "linear-gradient(135deg,rgba(245,243,255,1),rgba(237,233,254,0.8))",
    border: "rgba(168,85,247,0.18)",
  },
];

export default function Courses() {
  return (
    <section id="courses">
      <div className="section-inner">
        <div className="anim-fade-up text-center">
          <div className="sec-tag">What we offer</div>
          <div className="sec-title">Our courses</div>
          <div className="sec-sub">
            Carefully designed programs for every ambitious girl in Janakpur.
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-3.5">
          {COURSES.map((c, i) => (
            <div
              key={c.title}
              className="glass-card grid place-items-center"
              style={{
                padding: "24px 18px",
                background: c.bg,
                borderColor: c.border,
                animation: `fadeUp 0.7s ease ${0.1 + i * 0.1}s both`,
              }}
            >
              {/* <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.75)",
                  border: `1px solid ${c.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  fontSize: 22,
                }}
              >
                {c.icon}
              </div> */}

              <div className="course_img">
                <Image src={c.img} alt="c.img" />
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#2d1b69",
                  marginBottom: 8,
                }}
              >
                {c.title}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#6b21a8",
                  opacity: 0.6,
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                {c.desc}
              </div>
              <span className={c.pill}>{c.dur}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
