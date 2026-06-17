/**
 * Footer — Contact info repeated, minimal dark footer
 * Design: Dark background, white text, clean grid
 */

const CONTACTS = [
  {
    label: "+7 921 588-81-11",
    href: "tel:+79215888111",
    type: "Телефон",
  },
  {
    label: "dvornikofff@gmail.com",
    href: "mailto:dvornikofff@gmail.com",
    type: "Email",
  },
  {
    label: "@idvornikoff",
    href: "https://t.me/idvornikoff",
    type: "Telegram",
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/ilya-dvornikov-3b3519230/",
    type: "LinkedIn",
  },
  {
    label: "Max Profile",
    href: "https://max.ru/u/f9LHodD0cOKD4PSBCxZQu0OJIyfEnMDXAvTsqrvihftq1ffpqywxQOFueWY",
    type: "Max",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "#111111",
        color: "#FFFFFF",
        padding: "5rem 0 3rem",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          className="flex flex-wrap justify-between gap-12 mb-16"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "3rem" }}
        >
          {/* Identity */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "0.75rem",
              }}
            >
              Дворников Илья
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
              }}
            >
              Project Manager&nbsp;&nbsp;|&nbsp;&nbsp;Engagement Management
              <br />
              Client Partner&nbsp;&nbsp;|&nbsp;&nbsp;Account Management
            </div>
          </div>

          {/* Contacts grid */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "1.25rem",
              }}
            >
              Контакты
            </div>
            <div className="flex flex-col gap-3">
              {CONTACTS.map((c) => (
                <div key={c.href} className="flex items-center gap-4">
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.625rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                      minWidth: "4.5rem",
                    }}
                  >
                    {c.type}
                  </span>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "#FFFFFF",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                    }}
                  >
                    {c.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-wrap justify-between items-center gap-4"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} Дворников Илья Евгеньевич
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.04em",
            }}
          >
            IT Project Manager Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
}
