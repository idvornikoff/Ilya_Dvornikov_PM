/**
 * Competencies — Two-column layout: core skills + tools
 * Design: Clean grid, section label, rule dividers
 */

import { useRef, useEffect } from "react";

const COMPETENCIES = [
  "Координация команды",
  "Работа с распределёнными командами (до 15 чел)",
  "Управление ресурсами",
  "Управление рисками и сроками",
  "Жизненный цикл команды",
  "Управление коммуникациями",
  "Бюджетирование",
  "Agile (Scrum, Kanban) / Waterfall",
];

const TOOLS = [
  {
    category: "Задачи и бэклог",
    items: "YouTrack, Jira, Planfix",
  },
  {
    category: "Документация",
    items: "Кайтен, Miro",
  },
  {
    category: "Диаграммы и планирование",
    items: "GanttPRO, Google Workspace, Excel",
  },
  {
    category: "Коммуникация",
    items: "Telegram, Zoom, Slack, Яндекс Телемост, Google Meet, SaluteJazz",
  },
];

export default function Competencies() {
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
      id="competencies"
      ref={containerRef as unknown as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "#F5F5F5", padding: "6rem 0" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="fade-up mb-12" data-delay="0">
          <div className="section-label mb-3">02 — Компетенции</div>
          <h2 className="section-heading">Ключевые компетенции<br />и инструменты</h2>
          <div className="rule-divider mt-6" style={{ maxWidth: "80px", height: "2px", backgroundColor: "#111111" }} />
        </div>

        {/* Two-column grid */}
        <div
          className="grid gap-12"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {/* Left: Core Competencies */}
          <div className="fade-up" data-delay="80">
            <div className="tool-category mb-6">Ключевые компетенции</div>
            <div>
              {COMPETENCIES.map((item, i) => (
                <div
                  key={i}
                  className="comp-tag"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tools */}
          <div className="fade-up" data-delay="160">
            <div className="tool-category mb-6">Инструменты и метрики</div>
            <div className="flex flex-col gap-6">
              {TOOLS.map((tool, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#6B6B6B",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {tool.category}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "#111111",
                      lineHeight: 1.6,
                    }}
                  >
                    {tool.items}
                  </div>
                  {i < TOOLS.length - 1 && (
                    <div className="rule-divider mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
