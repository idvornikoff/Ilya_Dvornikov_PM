/**
 * Hero — Full-width header with name, role, credo, contacts, and profile photo
 * Design: Large display type, photo on right of name with gray decorative element
 */

import { useEffect, useRef } from "react";

const CONTACTS = [
  {
    icon: "📞",
    label: "+7 921 588-81-11",
    href: "tel:+79215888111",
    ariaLabel: "Телефон",
  },
  {
    icon: "✉",
    label: "dvornikofff@gmail.com",
    href: "mailto:dvornikofff@gmail.com",
    ariaLabel: "Email",
  },
  {
    icon: "TG",
    label: "@idvornikoff",
    href: "https://t.me/idvornikoff",
    ariaLabel: "Telegram",
  },
  {
    icon: "LI",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ilya-dvornikov-3b3519230/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: "MX",
    label: "Max",
    href: "https://max.ru/u/f9LHodD0cOKD4PSBCxZQu0OJIyfEnMDXAvTsqrvihftq1ffpqywxQOFueWY",
    ariaLabel: "Max",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.dataset.delay || "0";
            setTimeout(() => target.classList.add("visible"), parseInt(delay));
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663769252830/5YPim8A6zpHjD8uP5d5qHH/hero-bg-ccBVbsttKrFY4iYnQHCLfc.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#FFFFFF",
      }}
      ref={containerRef}
    >
      {/* Left vertical rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
        style={{
          left: "calc(max(1.5rem, (100% - 1280px) / 2 + 4rem))",
          backgroundColor: "#E5E5E5",
        }}
      />

      <div className="container pt-32 pb-32">
        <div className="max-w-5xl">
          {/* Section label */}
          <div className="fade-up section-label mb-6" data-delay="0">
            01 — Portfolio — IT Project Manager
          </div>

          {/* Name + Photo container */}
          <div className="fade-up relative mb-8" data-delay="80">
            <div className="flex items-start gap-8 lg:gap-12">
              {/* Left: Name */}
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1.0,
                  color: "#111111",
                  flex: "0 1 auto",
                }}
              >
                Дворников
                <br />
                <span style={{ fontWeight: 300, color: "#6B6B6B" }}>Илья</span>
              </h1>

              {/* Right: Photo with gray decorative element */}
              <div className="hidden lg:block relative flex-shrink-0" style={{ marginTop: "-1rem" }}>
                {/* Gray decorative vertical element */}
                <div
                  className="absolute"
                  style={{
                    left: "-40px",
                    top: "0",
                    width: "200px",
                    height: "280px",
                    backgroundColor: "#E5E5E5",
                    zIndex: 0,
                  }}
                />

                {/* Photo on top of gray element */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    width: "180px",
                    height: "auto",
                    borderRadius: "0",
                    overflow: "hidden",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                  }}
                >
                  <img
                    src="/manus-storage/profile-photo-full-bw_57c6dada.jpg"
                    alt="Дворников Илья"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Role */}
          <div
            className="fade-up"
            data-delay="160"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.875rem, 1.5vw, 1.0625rem)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "#6B6B6B",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
              lineHeight: 1.6,
            }}
          >
            Project Manager (B2B, B2C IT / Digital)&nbsp;&nbsp;|&nbsp;&nbsp;
            Engagement Management&nbsp;&nbsp;|&nbsp;&nbsp;Client Partner
            <br />
            Project Sales&nbsp;&nbsp;|&nbsp;&nbsp;Account Management &amp; Pre-sales focus
          </div>

          {/* Horizontal rule */}
          <div
            className="fade-up rule-divider mb-8"
            data-delay="220"
            style={{ maxWidth: "480px" }}
          />

          {/* Credo */}
          <blockquote
            className="fade-up"
            data-delay="280"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              letterSpacing: "-0.01em",
              color: "#111111",
              lineHeight: 1.5,
              borderLeft: "3px solid #111111",
              paddingLeft: "1.25rem",
              marginBottom: "3rem",
              maxWidth: "600px",
            }}
          >
            «Цель — это не точка на карте. Это смелость продолжать движение, когда карта ещё не нарисована»
          </blockquote>

          {/* Contacts */}
          <div
            className="fade-up flex flex-wrap gap-4"
            data-delay="360"
          >
            {CONTACTS.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={c.ariaLabel}
                className="contact-link"
                style={{
                  border: "1px solid #E5E5E5",
                  padding: "0.5rem 1rem",
                  fontSize: "0.8125rem",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#111111";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#111111";
                  (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#E5E5E5";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#111111";
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.625rem",
                    letterSpacing: "0.08em",
                    marginRight: "0.375rem",
                  }}
                >
                  {c.icon}
                </span>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.4 }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.625rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6B6B6B",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "#6B6B6B",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
        }
      `}</style>
    </section>
  );
}
