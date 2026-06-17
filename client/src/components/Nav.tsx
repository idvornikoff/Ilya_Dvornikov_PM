/**
 * Nav — sticky header with scroll-aware background
 * Design: Corporate Minimalism — transparent → white on scroll
 */

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Компетенции", href: "#competencies" },
  { label: "Кейсы", href: "#cases" },
  { label: "Сертификаты", href: "#certificates" },
  { label: "Контакты", href: "#footer" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E5E5E5" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo text */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3 no-underline"
          aria-label="На главную"
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "-0.01em",
              color: "#111111",
            }}
          >
            ИД
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="nav-link bg-transparent border-none p-0"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span
            className="block w-5 h-px bg-[#111111] transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none" }}
          />
          <span
            className="block w-5 h-px bg-[#111111] transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-[#111111] transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white border-t border-[#E5E5E5]"
          style={{ borderTop: "1px solid #E5E5E5" }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="w-full text-left px-6 py-4 bg-transparent border-none border-b border-[#E5E5E5]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#111111",
                borderBottom: "1px solid #E5E5E5",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
