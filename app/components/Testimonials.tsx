"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import image1 from "../../public/images/face-1.jpeg";
import image2 from "../../public/images/face-2.jpeg";
import image3 from "../../public/images/face-3.jpeg";
import image4 from "../../public/images/face-4.jpeg";
import image5 from "../../public/images/face-5.jpeg";

const SLIDES = [
  {
    name: "Sabila Khatun",
    course: "B.Ed Student · Tribhuvan University",
    // age: "Age 21 · Kathmandu",
    image: image1,
    text1:
      "My name is Sabila Khatun. I am 21 years old and currently pursuing a Bachelor of Education (B.Ed) degree from Tribhuvan University. I am a student and have started my journey with an online business opportunity, where I am growing step by step. My goal is to become self-independent, improve my life, and support others in improving theirs.",
    text2:
      "I am working on my personal growth and business at the same time. The personality test helped me understand my strengths, weaknesses, and mindset, which is helping me improve my life and business.",
    tags: [
      "Personal Growth",
      "Online Business",
      "Self-Independent",
      "Personality Test",
    ],
  },
  {
    name: "Ritu Maharjan",
    course: "+2 Science · Ratna Rajya Campus",
    // age: "Age 19 · Lalitpur",
    image: image2,
    text1:
      "My name is Ritu Maharjan. I am 19 years old and currently studying +2 Science at Ratna Rajya Campus. I am a student and have started my journey with an online business opportunity, where I am growing step by step. My goal is to become self-independent, improve my life, and support others in improving theirs.",
    text2:
      "I am working on my personal growth and business at the same time. The personality test helped me understand my strengths, weaknesses, and mindset, which is helping me improve my life and business.",
    tags: [
      "Personal Growth",
      "Online Business",
      "Self-Independent",
      "Personality Test",
    ],
  },
  {
    name: "Kavita Thapa",
    course: "Loksewa Prep · Shankar Dev Campus",
    // age: "Age 24 · Bhaktapur",
    image: image3,
    text1:
      "My name is Kavita Thapa. I am 24 years old and currently preparing for Loksewa at Shankar Dev Campus. I am a student and have started my journey with an online business opportunity, where I am growing step by step. My goal is to become self-independent, improve my life, and support others in improving theirs.",
    text2:
      "I am working on my personal growth and business at the same time. The personality test helped me understand my strengths, weaknesses, and mindset, which is helping me improve my life and business.",
    tags: [
      "Personal Growth",
      "Online Business",
      "Self-Independent",
      "Personality Test",
    ],
  },
  {
    name: "Kaniza Fatima",
    course: "IELTS Preparation · British Council",
    // age: "Age 22 · Pokhara",
    image: image4,
    text1: `
    I am Kaniza Fatima, 19 years old.
Before joining “Girls Future Bright,” there was confusion about direction, self-doubt, and challenges in relationships. There was no clear understanding of purpose or true identity.
After joining “Girls Future Bright,” the personality type  Helper  was discovered, which brought a new level of self-understanding. With step-by-step guidance, mindset improved, confidence grew, and relationships became better.
    `,
    text2: `
    Today, there is more clarity, confidence, and happiness. Truly thankful to “Girls Future Bright” for the guidance and for helping in becoming a better version.
    `,
    tags: [
      "Personal Growth",
      "Online Business",
      "Self-Independent",
      "Personality Test",
    ],
  },

  {
    name: "Sangita Kumari Ram",
    course: "IELTS Preparation · British Council",
    // age: "Age 22 · Pokhara",
    image: image5,
    text1:
      "My name is Sangita Kumari Ram. There was a time when I struggled with a lack of confidence, unhealthy relationships, and a constant feeling of emptiness inside. I felt stuck, and opportunities in my life had almost stopped. Deep down, I knew I was missing something, but I didn’t know how to fix it.",
    text2: `Then I joined “Girls Future Bright” under the guidance of Farida Shah, and my journey completely changed. I worked on my mindset, rebuilt my confidence, improved my relationships, and started understanding myself on a deeper level. I also began receiving new opportunities that helped me grow.
Today, I feel more confident, clear, and positive about my future. I am truly grateful to Farida Shah for her guidance and support in helping me become a better version of myself.`,
    tags: [
      "Personal Growth",
      "Online Business",
      "Self-Independent",
      "Personality Test",
    ],
  },
];

function SlideCard({ slide }: { slide: (typeof SLIDES)[0] }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: 0,
        overflow: "hidden",
        background:
          "linear-gradient(135deg,rgba(252,231,243,0.82),rgba(237,233,254,0.82))",
        borderColor: "rgba(236,72,153,0.2)",
      }}
    >
      <div className="grid gridTemplateColumns">
        {/* ── Left panel ── */}
        <div
          style={{
            background:
              "linear-gradient(160deg,rgba(236,72,153,0.15) 0%,rgba(168,85,247,0.15) 100%)",
            borderRight: "1px solid rgba(255,255,255,0.7)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 32,
            gap: 16,
          }}
        >
          <div className="testi_i">
            <Image src={slide.image} alt={slide.name} />
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 16,
                fontWeight: 800,
                color: "#2d1b69",
              }}
            >
              {slide.name}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "#7c3aed",
                // opacity: 0.65,
                marginTop: 4,
              }}
            >
              {slide.course}
            </div>
            {/* <div
              style={{
                fontSize: 14,
                color: "#be185d",
                fontWeight: 700,
                marginTop: 6,
              }}
            >
              {slide.age}
            </div> */}
          </div>

          <div style={{ color: "#ec4899", fontSize: 18, letterSpacing: 3 }}>
            ★★★★★
          </div>
        </div>

        {/* ── Right panel ── */}
        <div style={{ padding: "36px 36px 32px" }}>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 72,
              color: "#ec4899",
              opacity: 0.15,
              lineHeight: 0.8,
              marginBottom: 4,
            }}
          >
            {'"'}
          </div>

          <p
            className="line-clamp-3"
            style={{
              fontSize: 15,
              color: "#4c1d95",
              lineHeight: 1.78,
              marginBottom: 20,
              fontStyle: "italic",
              opacity: 0.82,
            }}
          >
            {slide.text1}
          </p>

          <p
            className="line-clamp-2"
            style={{
              fontSize: 15,
              color: "#4c1d95",
              lineHeight: 1.78,
              marginBottom: 24,
              fontStyle: "italic",
              opacity: 0.82,
            }}
          >
            {slide.text2}
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {slide.tags.map((tag) => (
              <span key={tag} className="pill-pk" style={{ fontSize: 11 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    startTimer();
  };

  return (
    <section id="testimonials" className="bg-white">
      <div className="section-inner">
        <div
          className="anim-fade-up"
          style={{ textAlign: "center", marginBottom: 44 }}
        >
          <div
            className="sec-tag"
            style={{ display: "block", textAlign: "center" }}
          >
            Student voices
          </div>
          <div className="sec-title" style={{ textAlign: "center" }}>
            What our students say
          </div>
          <p
            style={{
              fontSize: 15,
              color: "#6b21a8",
              opacity: 0.6,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Real stories from real girls who dared to rise.
          </p>
        </div>

        {/* ── Slider ── */}
        <div style={{ marginBottom: 16 }}>
          <SlideCard slide={SLIDES[current]} />
        </div>

        {/* ── Dots ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 40,
          }}
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 20 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: i === current ? "#ec4899" : "rgba(236,72,153,0.25)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
