/**
 * Certificates — Clean list of four certificates
 * Design: Numbered list with year callouts, rule dividers
 */

import { useRef, useEffect } from "react";

const CERTS = [
  {
    title: "Свидетельство участника команды разработки АИС «Эксперт»",
    year: "2025",
    issuer: "",
  },
  {
    title: "Менеджер проектов",
    year: "2024",
    issuer: "Яндекс Практикум",
  },
  {
    title: "Продуктовый менеджмент",
    year: "2021",
    issuer: "Product University",
  },
  {
    title: "Цифровой Маркетинг и Социальные Сети",
    year: "2019",
    issuer: "СПбПУ Петра Великого",
  },
];

export default function Certificates() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = parseInt(target.dataset.delay || "0");
            setTimeout(() => target.classList.add("visible"), delay);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.08 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certificates"
      ref={containerRef as unknown as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "#F5F5F5", padding: "6rem 0" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="fade-up mb-12" data-delay="0">
          <div className="section-label mb-3">04 — Сертификаты</div>
          <h2 className="section-heading">Образование<br />и сертификаты</h2>
          <div
            className="rule-divider mt-6"
            style={{ maxWidth: "80px", height: "2px", backgroundColor: "#111111" }}
          />
        </div>

        {/* Certificates list */}
        <div className="max-w-3xl">
          {CERTS.map((cert, i) => (
            <div
              key={i}
              className="fade-up cert-item"
              data-delay={`${i * 80}`}
            >
              {/* Year */}
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "#E5E5E5",
                  minWidth: "5rem",
                  flexShrink: 0,
                }}
              >
                {cert.year}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                    letterSpacing: "-0.01em",
                    color: "#111111",
                    marginBottom: cert.issuer ? "0.25rem" : 0,
                  }}
                >
                  {cert.title}
                </div>
                {cert.issuer && (
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#6B6B6B",
                    }}
                  >
                    {cert.issuer}
                  </div>
                )}
              </div>

              {/* Index number */}
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  color: "#E5E5E5",
                  flexShrink: 0,
                  alignSelf: "flex-start",
                  paddingTop: "0.25rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
