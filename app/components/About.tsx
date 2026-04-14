import Image from "next/image";
import vision from "../../public/images/vision.webp";
export default function About() {
  return (
    <section id="about" className="glass-section">
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 items-center">
          <div className="anim-fade-up">
            <div className="sec-tag">About us</div>
            <div className="sec-title">
              Our mission is <br /> your success
            </div>
            <p
              style={{
                fontSize: 15,
                color: "#6b21a8",
                opacity: 0.68,
                lineHeight: 1.78,
                marginBottom: 14,
                textAlign: "justify",
              }}
            >
              Hi, my name is Farida Shah. Every young woman today is a future
              leader, entrepreneur, and changemaker in the making. What they
              need is not only education, but also confidence, real-life skills,
              leadership mindset, and opportunities to grow through experience.
            </p>
            <p
              style={{
                fontSize: 15,
                color: "#6b21a8",
                opacity: 0.68,
                marginBottom: 14,
                lineHeight: 1.78,
                textAlign: "justify",
              }}
            >
              As a Business Studies student and youth activist, I am committed
              to empowering young girls through my initiative “Girls Future
              Bright.” Along with education, I focus on personal development,
              communication skills, decision-making ability, and self-belief, so
              they can become independent, strong, and future-ready individuals.
            </p>
            {/* <p
              style={{
                fontSize: 15,
                color: "#6b21a8",
                opacity: 0.68,
                lineHeight: 1.78,
              }}
            >
              My goal is to help young women not just learn, but also grow,
              lead, and create meaningful change in their lives and society.
            </p> */}
          </div>
          <div className="anim-fade-up-2 flex flex-col gap-3.5">
            {/* {[
              {
                emoji: "✨",
                color: "#9d174d",
                bg: "rgba(252,231,243,0.88)",
                border: "rgba(236,72,153,0.2)",
                title: "Our vision",
                text: "To create confident, educated, empowered women who lead change in their communities and nation.",
              },
              {
                emoji: "🎯",
                color: "#5b21b6",
                bg: "rgba(237,233,254,0.88)",
                border: "rgba(168,85,247,0.2)",
                title: "Our mission",
                text: "Quality education, scholarship support, and career guidance — accessible to every girl regardless of background.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="glass-card"
                style={{ padding: 26, borderColor: c.border, background: c.bg }}
              >
                <div style={{ fontSize: 22, marginBottom: 10 }}>{c.emoji}</div>
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 18,
                    fontWeight: 700,
                    color: c.color,
                    marginBottom: 8,
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#6b21a8",
                    opacity: 0.65,
                    lineHeight: 1.65,
                  }}
                >
                  {c.text}
                </div>
              </div>
            ))} */}

            <div className="mission-img">
              {/* <Image src={vision_mission} alt="mission" /> */}
              <Image src={vision} alt="mission" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
