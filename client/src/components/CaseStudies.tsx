/**
 * CaseStudies — Three case studies in STAR format
 * Design: Left-bordered cards, large metric callouts, label pills
 */

import { useRef, useEffect } from "react";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  number: string;
  title: string;
  role: string;
  stack: string;
  situation: string;
  task: string;
  actions: string[];
  conflict?: string;
  results: string[];
  metrics: Metric[];
}

const CASES: CaseStudy[] = [
  {
    number: "01",
    title: "Риск срыва сдачи этапа проекта по договору. Штрафные санкции / риск недополучения прибыли.",
    role: "Ведущий PM",
    stack: "YouTrack, Figma, Google Sheets",
    situation:
      "Команда 7 человек: 2 backend, 1 frontend, 1 DevOps, 1 QA, 1 аналитик, 1 дизайнер. Проект — автоматизированная система учёта преподавателей «Эксперт» для внутренних нужд РАНХиГС. На третьем этапе («Разработка функциональности системы») возникла угроза срыва сроков по договору. В первую неделю выяснилось: серверная часть пишется медленнее плана, единственный backend-разработчик на старте проекта оказался перегружен.",
    task: "За неделю пересобрать бэклог, декомпозировать backend-задачи, завершить этап в срок, сдать результат заказчику и получить оплату.",
    actions: [
      "Провёл анализ задач вместе с backend-разработчиком, декомпозировали — количество задач выросло на 30%.",
      "Проанализировал бюджет, понял, что можно привлечь ещё одного разработчика на грейде junior.",
      "Поднял вопрос перед руководителем с готовым решением. Получил согласование.",
      "Ввёл daily и демки для заказчика дважды в неделю.",
      "Внедрил правило: о любом блоке PM узнаёт в тот же день.",
    ],
    results: [
      "Релиз сдали в срок по договору.",
      "Пересогласования задач сократил с 10 до 2–3 в неделю.",
      "Сэкономил бюджетный буфер на 70% (из 500 тыс. потратил 150 тыс.).",
      "Заказчик подписал акт приёмки, оплата этапа поступила.",
    ],
    metrics: [
      { value: "70%", label: "экономия бюджетного буфера" },
      { value: "−7", label: "пересогласований в неделю" },
      { value: "0", label: "дней просрочки" },
    ],
  },
  {
    number: "02",
    title: "Актуализация бэклога. Регламент постановки задач. Проверка гипотезы о недополучении средств.",
    role: "Ведущий PM",
    stack: "YouTrack, Google Sheets, GanttPRO",
    situation:
      "Получил в управление действующий проект LMS для Сбер Университета. Многолетний проект с утерянными работами без статуса, но с треком затраченного времени за предыдущие периоды. Бэклог перегружен задачами, назначение и актуальность которых не могут вспомнить ни клиент, ни команда. Беспорядок в истории работ и бэклоге тормозит текущие процессы. Была гипотеза об утерянной прибыли.",
    task: "Привести бэклог к актуальному состоянию, обновить регламенты постановки задач, проверить гипотезу о потерянных деньгах.",
    actions: [
      "Запросил встречу с представителем клиента один на один. Совместно проработали бэклог, актуализировали необходимые работы.",
      "Свёл до минимума создание подзадач внутри эпиков — теперь задачи заводятся только через PM.",
      "Проанализировал платёжную документацию за предыдущие периоды, сопоставил с треком времени.",
      "Обсудил с клиентом стратегию погашения неоплаченных работ без нагрузки на ежемесячный бюджет, распределили суммы по будущим сметам.",
    ],
    conflict:
      "Клиент дал однозначный отказ с негативной реакцией. Не был готов к дополнительной нагрузке. Я принёс извинения за сложившуюся ситуацию, подсветил нашу лояльность к овертаймам и внеплановым изменениям логики. Предложил альтернативный бартер — месяц пострелизной поддержки за счёт компании. Месяц поддержки обошёлся в 300 тыс. рублей, но это позволило сохранить клиента и привлечь неочевидную прибыль в виде дополнительного оборота в 1,5 млн.",
    results: [
      "Скорость выполнения задач выросла на 20%.",
      "В бэклоге остались только актуальные задачи с конкретными сроками.",
      "Нашёл неоплаченных работ на совокупную сумму 1,5 млн рублей (эквивалент месячного оборота по проекту).",
      "Достиг договорённости о плавном включении этих сумм в последующие счета.",
    ],
    metrics: [
      { value: "+20%", label: "скорость выполнения задач" },
      { value: "1,5 млн", label: "найдено неоплаченных работ" },
      { value: "×1", label: "клиент сохранён" },
    ],
  },
  {
    number: "03",
    title: "Презентация и запуск продаж нового продукта.",
    role: "Ведущий PM",
    stack: "CRM Dynamics, Google Sheets, STAR-методология",
    situation:
      "Продукт довели до MVP, требовалось протестировать его на реальных пользователях. HR и РОП получили задачу: за месяц сформировать группу из 10 менеджеров по продажам с компетенциями под новый продукт. Но кроме команды разработки, продукт никто в деталях не знал.",
    task: "Проконсультировать процесс найма как эксперт от разработки и поддержки. Оценить нагрузку на продукт (пропускную способность с учётом роста пользователей). Помочь с профилем кандидата и участвовать в финальном отборе.",
    actions: [
      "Провёл презентацию продукта для РОП и HR с акцентом на реальные сценарии.",
      "Обозначил пределы нагрузки на продукт.",
      "Сформулировал требования к кандидатам.",
      "Участвовал в финальных собеседованиях и утверждении.",
      "Вместе с РОП проанализировал первичные скрипты продаж.",
    ],
    conflict:
      "РОП настаивал на кандидатах с сильными софт-скилами без акцента на технические компетенции. Я убедил его, что этого недостаточно: менеджер без технического стека не сможет быстро ориентироваться в условиях ограниченного времени (презентация до 5 минут). РОП согласился.",
    results: [
      "РОП и HR получили полное понимание ожиданий от отдела продаж.",
      "Сократил время собеседований на 30% за счёт отсева нерелевантных кандидатов.",
      "Процесс найма уложили в три недели вместо месяца.",
      "В срок сформирована группа из 10 менеджеров, соответствующих техническим и бизнес-требованиям продукта.",
    ],
    metrics: [
      { value: "−30%", label: "время собеседований" },
      { value: "3 нед.", label: "вместо месяца" },
      { value: "10", label: "менеджеров в команде" },
    ],
  },
];

function CaseCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <div
      className="fade-up"
      data-delay={`${index * 100}`}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E5E5",
        borderLeft: "3px solid #111111",
        padding: "clamp(1.5rem, 4vw, 3rem)",
        marginBottom: "2rem",
      }}
    >
      {/* Case header */}
      <div
        className="flex flex-wrap items-start justify-between gap-4 mb-8"
        style={{ borderBottom: "1px solid #E5E5E5", paddingBottom: "1.5rem" }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#E5E5E5",
              marginBottom: "0.5rem",
            }}
          >
            {cs.number}
          </div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              color: "#111111",
              maxWidth: "600px",
            }}
          >
            {cs.title}
          </h3>
        </div>
        <div className="flex flex-col gap-2 text-right">
          <div>
            <span className="star-label">Роль</span>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                color: "#6B6B6B",
                marginTop: "0.25rem",
              }}
            >
              {cs.role}
            </div>
          </div>
          <div>
            <span className="star-label">Стек</span>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                color: "#6B6B6B",
                marginTop: "0.25rem",
              }}
            >
              {cs.stack}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics row */}
      <div
        className="grid gap-6 mb-8"
        style={{
          gridTemplateColumns: `repeat(${cs.metrics.length}, minmax(0, 1fr))`,
          backgroundColor: "#F5F5F5",
          padding: "1.5rem",
        }}
      >
        {cs.metrics.map((m, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "#111111",
                marginBottom: "0.375rem",
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#6B6B6B",
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* STAR content */}
      <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {/* Situation */}
        <div>
          <div className="star-label mb-3">Situation — Ситуация</div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              color: "#111111",
              lineHeight: 1.7,
            }}
          >
            {cs.situation}
          </p>
        </div>

        {/* Task */}
        <div>
          <div className="star-label mb-3">Task — Задача</div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              color: "#111111",
              lineHeight: 1.7,
            }}
          >
            {cs.task}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div style={{ marginTop: "2rem" }}>
        <div className="star-label mb-4">Action — Действия</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {cs.actions.map((action, i) => (
            <li
              key={i}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                color: "#111111",
                lineHeight: 1.7,
                padding: "0.625rem 0",
                borderBottom: "1px solid #E5E5E5",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.6875rem",
                  color: "#6B6B6B",
                  minWidth: "1.5rem",
                  paddingTop: "0.2rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {action}
            </li>
          ))}
        </ul>
      </div>

      {/* Conflict resolution (if present) */}
      {cs.conflict && (
        <div
          style={{
            marginTop: "2rem",
            backgroundColor: "#F5F5F5",
            padding: "1.25rem 1.5rem",
            borderLeft: "2px solid #6B6B6B",
          }}
        >
          <div className="star-label mb-3">Разрешение конфликта / спора</div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9375rem",
              color: "#111111",
              lineHeight: 1.7,
            }}
          >
            {cs.conflict}
          </p>
        </div>
      )}

      {/* Results */}
      <div style={{ marginTop: "2rem" }}>
        <div className="star-label mb-4">Result — Результат</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {cs.results.map((result, i) => (
            <li
              key={i}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                color: "#111111",
                lineHeight: 1.7,
                padding: "0.625rem 0",
                borderBottom: i < cs.results.length - 1 ? "1px solid #E5E5E5" : "none",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#111111",
                  borderRadius: "0",
                  flexShrink: 0,
                  marginTop: "0.6rem",
                }}
              />
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CaseStudies() {
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
      { threshold: 0.05 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cases"
      ref={containerRef as unknown as React.RefObject<HTMLElement>}
      style={{
        backgroundColor: "#FFFFFF",
        padding: "6rem 0",
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663769252830/5YPim8A6zpHjD8uP5d5qHH/case-study-bg-7aPvb8EVnMcwKdciPptn5U.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        {/* Section header */}
        <div className="fade-up mb-12" data-delay="0">
          <div className="section-label mb-3">03 — Кейсы</div>
          <h2 className="section-heading">Проектные кейсы</h2>
          <div
            className="rule-divider mt-6"
            style={{ maxWidth: "80px", height: "2px", backgroundColor: "#111111" }}
          />
        </div>

        {/* Cases */}
        {CASES.map((cs, i) => (
          <CaseCard key={cs.number} cs={cs} index={i} />
        ))}
      </div>
    </section>
  );
}
