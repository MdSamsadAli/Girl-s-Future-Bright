"use client";
import { useState } from "react";

const quotes = [
  {
    text: "Education is the most powerful weapon you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    text: "A girl with a book in her hand can change the destiny of a nation.",
    author: "Girls' Future Bright Academy",
  },
  {
    text: "When girls are educated, entire communities thrive.",
    author: "Global Education Report",
  },
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

  const [activeQuote, setActiveQuote] = useState(0);

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

          <div className="info-side">
            <div className="mission-card">
              <div className="mission-glow" />
              <span className="mission-label">Our Mission</span>
              <h2 className="mission-heading">
                Shaping Futures,
                <br />
                One Girl at a Time.
              </h2>
              <p className="mission-body">
                Every question you ask, every dream you dare to dream — it
                matters. We are here to walk alongside you, fuel your ambitions,
                and help you rise into the leader the world is waiting for.
              </p>
              <div className="mission-divider" />
              <div className="mission-stats">
                <div className="stat">
                  <span className="stat-num">500+</span>
                  <span className="stat-label">Girls empowered</span>
                </div>
                <div className="stat">
                  <span className="stat-num">14+</span>
                  <span className="stat-label">Years of impact</span>
                </div>
                <div className="stat">
                  <span className="stat-num">95%</span>
                  <span className="stat-label">Graduation rate</span>
                </div>
              </div>
            </div>

            {/* Rotating quote */}
            {/* <div className="quote-card">
              <span className="quote-mark">&ldquo;</span>
              <p className="quote-text">{quotes[activeQuote].text}</p>
              <p className="quote-author">— {quotes[activeQuote].author}</p>
              <div className="quote-dots">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === activeQuote ? "dot--active" : ""}`}
                    onClick={() => setActiveQuote(i)}
                  />
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #fdf4ff 0%, #fef1fb 50%, #f0f4ff 100%);
          display: flex;
          align-items: center;
          padding: 4rem 2rem;
          font-family: 'Georgia', serif;
        }
        .contact-grid {
          max-width: 1100px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;
        }
        .form-side { display: flex; flex-direction: column; gap: 1rem; }
        .eyebrow {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          color: #c026d3; font-family: sans-serif; font-weight: 600; margin: 0;
        }
        .form-title { font-size: 2.5rem; font-weight: 700; color: #1e1346; margin: 0; line-height: 1.1; }
        .form-subtitle { font-size: 14px; color: #6b7280; font-family: sans-serif; margin: 0; line-height: 1.6; }
        .fields { display: flex; flex-direction: column; gap: 0.75rem; }
        .field {
          width: 100%; padding: 13px 16px; border-radius: 14px;
          border: 1.5px solid #e9d5ff; background: rgba(255,255,255,0.75);
          font-size: 14px; color: #1e1346; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: sans-serif; box-sizing: border-box; resize: none;
        }
        .field::placeholder { color: #c4b5d6; }
        .field:focus { border-color: #a855f7; box-shadow: 0 0 0 3px rgba(168,85,247,0.12); }
        .textarea { min-height: 120px; }
        .send-btn {
          padding: 15px; border-radius: 50px; border: none;
          background: linear-gradient(135deg, #c026d3, #7c3aed);
          color: #fff; font-size: 15px; font-weight: 600;
          font-family: sans-serif; cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
        }
        .send-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .send-btn.sent { background: linear-gradient(135deg, #10b981, #059669); }

        .info-side { display: flex; flex-direction: column; gap: 1rem; }

        .mission-card {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #6d28d9 0%, #a21caf 100%);
          border-radius: 20px; padding: 2rem;
        }
        .mission-glow {
          position: absolute; top: -40px; right: -40px;
          width: 180px; height: 180px; border-radius: 50%;
          background: rgba(255,255,255,0.07); pointer-events: none;
        }
        .mission-label {
          display: inline-block; background: rgba(255,255,255,0.18); color: #fff;
          font-size: 10px; font-family: sans-serif; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 4px 12px; border-radius: 20px; margin-bottom: 0.85rem;
        }
        .mission-heading { font-size: 1.65rem; font-weight: 700; color: #fff; margin: 0 0 0.85rem; line-height: 1.25; }
        .mission-body { font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.75; margin: 0; font-family: sans-serif; }
        .mission-divider { height: 1px; background: rgba(255,255,255,0.2); margin: 1.25rem 0; }
        .mission-stats { display: flex; gap: 1.5rem; }
        .stat { display: flex; flex-direction: column; gap: 2px; }
        .stat-num { font-size: 1.5rem; font-weight: 700; color: #fff; line-height: 1; }
        .stat-label { font-size: 11px; color: rgba(255,255,255,0.7); font-family: sans-serif; }

        .quote-card {
          background: rgba(255,255,255,0.8); border: 1.5px solid #ede9fe;
          border-radius: 16px; padding: 1.5rem; backdrop-filter: blur(8px);
        }
        .quote-mark { font-size: 3rem; color: #c026d3; line-height: 0.5; display: block; margin-bottom: 0.5rem; }
        .quote-text { font-size: 14px; color: #1e1346; line-height: 1.7; margin: 0 0 0.5rem; font-style: italic; }
        .quote-author { font-size: 12px; color: #9ca3af; font-family: sans-serif; margin: 0 0 0.85rem; }
        .quote-dots { display: flex; gap: 6px; }
        .dot {
          width: 8px; height: 8px; border-radius: 50%; border: none;
          background: #e9d5ff; cursor: pointer; padding: 0; transition: background 0.2s, transform 0.2s;
        }
        .dot--active { background: #a855f7; transform: scale(1.3); }

        .value-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .value-card {
          background: rgba(255,255,255,0.75); border: 1px solid #ede9fe;
          border-radius: 14px; padding: 1.1rem; backdrop-filter: blur(6px);
        }
        .value-icon { font-size: 20px; display: block; margin-bottom: 6px; }
        .value-title { font-size: 13px; font-weight: 700; color: #1e1346; font-family: sans-serif; margin: 0 0 4px; }
        .value-desc { font-size: 12px; color: #6b7280; font-family: sans-serif; line-height: 1.55; margin: 0; }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-title { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}
