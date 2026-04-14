"use client";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const SOCIALS = [
  {
    icon: <FaFacebookF size={14} />,
    href: "https://www.facebook.com/atmossofttech",
    color: "#1877f2",
  },
  {
    icon: <FaYoutube size={14} />,
    href: "https://www.youtube.com/@shamskhus5063",
    color: "#ff0000",
  },
  {
    icon: <FaInstagram size={14} />,
    href: "https://www.instagram.com/atmossofttech/",
    color: "#e1306c",
  },
  {
    icon: <FaWhatsapp size={14} />,
    href: "https://wa.me/9813381892",
    color: "#25d366",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(255,255,255,0.48)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.85)",
        padding: "48px 40px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="grid lg:grid-cols-3 gap-8 mt-7">
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 20,
                fontWeight: 800,
                color: "#4c1d95",
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg,#ec4899,#a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                She
              </span>
              Rise Academy
            </div>
            <p
              style={{
                fontSize: 15,
                color: "#7c3aed",
                opacity: 0.6,
                lineHeight: 1.72,
                marginBottom: 14,
              }}
            >
              Empowering girls through quality education since 2014. Building a
              brighter Nepal, one girl at a time.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 38,
                    height: 38,
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(168,85,247,0.2)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7c3aed",
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s, transform 0.2s",
                  }}
                  // onMouseEnter={(e) => {
                  //   e.currentTarget.style.background = s.color;
                  //   e.currentTarget.style.color = "#fff";
                  //   e.currentTarget.style.transform = "translateY(-2px)";
                  // }}
                  // onMouseLeave={(e) => {
                  //   e.currentTarget.style.background = "rgba(255,255,255,0.72)";
                  //   e.currentTarget.style.color = "#7c3aed";
                  //   e.currentTarget.style.transform = "translateY(0)";
                  // }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Quick links",
              links: ["Home", "About us", "Courses", "Gallery", "Contact"],
            },
            {
              title: "Courses",
              links: [
                "+2 Science",
                "Computer Courses",
                "IELTS Preparation",
                "Loksewa Prep",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#4c1d95",
                  textTransform: "uppercase" as const,
                  letterSpacing: 2,
                  marginBottom: 14,
                }}
              >
                {col.title}
              </div>
              {col.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    display: "block",
                    fontSize: 14,
                    color: "#7c3aed",
                    opacity: 0.6,
                    textDecoration: "none",
                    marginBottom: 8,
                    transition: "opacity 0.2s",
                  }}
                  //   onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  //   onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(168,85,247,0.1)",
            paddingTop: 16,
            textAlign: "center",
            fontSize: 15,
            opacity: 0.6,
            color: "#7c3aed",
          }}
        >
          © {new Date().getFullYear()} {"Girl's Future Bright Academy"}. All
          rights reserved. | Kathmandu, Nepal. Crafted By{" "}
          <a href="https://atmossofttech.com/">
            <strong>Atmos Soft Tech</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
