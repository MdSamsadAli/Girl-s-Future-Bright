"use client";
import { useState } from "react";

const INFO = [
  { icon: "📍", label: "Address", val: "Janakpur, Madhesh Province, Nepal" },
  { icon: "📞", label: "Phone", val: "+977-041-XXXXXX" },
  { icon: "✉️", label: "Email", val: "info@girlsfuturebrightacademy.edu.np" },
  { icon: "🕐", label: "Hours", val: "Sun – Fri: 6:00 AM – 6:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="anim-fade-up">
          <div className="sec-tag">Get in touch</div>
          <div className="sec-title">Contact us</div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mt-8">
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <input
              type="text"
              placeholder="Your name"
              required
              className="glass-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email address"
              required
              className="glass-input"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="glass-input"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <textarea
              placeholder="Your message..."
              rows={5}
              required
              className="glass-input"
              style={{ resize: "none" }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary"
              style={{
                width: "100%",
                padding: 14,
                borderRadius: 999,
                fontSize: 14,
                opacity: status === "loading" ? 0.7 : 1,
              }}
            >
              {status === "loading"
                ? "Sending..."
                : status === "sent"
                  ? "✓ Message sent!"
                  : "Send message"}
            </button>

            {status === "sent" && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  color: "#be185d",
                  fontWeight: 600,
                }}
              >
                {"Thank you! Check your email — we'll get back to you soon. 🌸"}
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  color: "#dc2626",
                  fontWeight: 600,
                }}
              >
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>

          <div>
            {INFO.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(255,255,255,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    flexShrink: 0,
                    boxShadow: "0 2px 10px rgba(168,85,247,0.08)",
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ paddingTop: 2 }}>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#7c3aed",
                      opacity: 0.5,
                      marginBottom: 2,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{ fontSize: 13, fontWeight: 600, color: "#2d1b69" }}
                  >
                    {item.val}
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.9)",
                borderRadius: 18,
                height: 110,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                color: "rgba(109,33,168,0.4)",
                backdropFilter: "blur(8px)",
                marginTop: 8,
              }}
            >
              📍 Map — Janakpur, Madhesh, Nepal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
