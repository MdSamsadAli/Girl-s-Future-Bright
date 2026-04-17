"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
const LINKS = ["Home", "About", "Courses", "Gallery", "Contact"];

import logo from "../../public/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="anim-fade-in"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled
          ? "rgba(255,255,255,0.72)"
          : "rgba(255,255,255,0.55)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.9)",
        boxShadow: scrolled
          ? "0 4px 24px rgba(168,85,247,0.1)"
          : "0 2px 16px rgba(168,85,247,0.05)",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "15px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#home">
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 28 }} className="nav-desktop">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize: 13,
                color: "#6b21a8",
                textDecoration: "none",
                fontWeight: 500,
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              {l}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-primary nav-desktop"
          style={{ padding: "10px 22px", fontSize: 13 }}
        >
          Enroll Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#6b21a8",
            display: "none",
          }}
          className="nav-mobile-btn"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.8)",
            padding: "20px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 14,
                color: "#6b21a8",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{ textAlign: "center", padding: "12px" }}
          >
            Enroll Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
