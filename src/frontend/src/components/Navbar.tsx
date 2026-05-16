import { CONTACT } from "@/utils/assets";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Celebrity", href: "#celebrity" },
  { label: "About", href: "#about" },
  { label: "Book Now", href: "#appointment" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 70,
          zIndex: 1000,
          background: "rgba(255,248,240,0.95)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(196,149,106,0.2)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            height: "100%",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            style={{
              background: "none",
              border: "none",
              fontSize: 22,
              fontWeight: 700,
              color: "#3D2B1F",
              cursor: "pointer",
            }}
          >
            AS Makeover
          </button>

          {/* Desktop */}
          <div
            className="hidden md:flex"
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                style={{
                  padding: "8px 16px",
                  color: "#3D2B1F",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: 44,
              height: 44,
              border: "none",
              borderRadius: 12,
              background: "rgba(61,43,31,0.08)",
              color: "#3D2B1F",
              fontSize: 26,
              cursor: "pointer",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: 70,
            left: 12,
            right: 12,
            zIndex: 999,
            borderRadius: 24,
            background: "rgba(245,238,228,0.92)",
            backdropFilter: "blur(20px)",
            padding: 24,
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              style={{
                display: "block",
                padding: "16px 0",
                color: "#3D2B1F",
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 600,
                borderBottom: "1px solid rgba(61,43,31,0.08)",
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => scrollTo("#appointment")}
            style={{
              width: "100%",
              marginTop: 16,
              padding: 14,
              border: "none",
              borderRadius: 12,
              background: "linear-gradient(135deg,#C4956A,#8B5E3C)",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Book Appointment
          </button>

          <a
            href={`tel:${CONTACT.phone}`}
            style={{
              display: "block",
              textAlign: "center",
              marginTop: 12,
              padding: 14,
              borderRadius: 12,
              textDecoration: "none",
              color: "#C4956A",
              border: "1px solid rgba(196,149,106,0.2)",
            }}
          >
            Call: {CONTACT.phone}
          </a>
        </div>
      )}
    </>
  );
}
