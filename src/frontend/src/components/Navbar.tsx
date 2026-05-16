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
          height: "72px",
          zIndex: 1000,
          background: "rgba(255,248,240,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(196,149,106,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            height: "100%",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* logo */}
          <button
            onClick={() => scrollTo("#home")}
            style={{
              background: "none",
              border: "none",
              color: "#3D2B1F",
              fontSize: "20px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            AS Makeover
          </button>

          {/* desktop nav */}
          <div
            className="hidden md:flex"
            style={{
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
                  padding: "10px 16px",
                  color: "#3D2B1F",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* mobile button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              border: "none",
              background: "rgba(61,43,31,0.08)",
              color: "#3D2B1F",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: "82px",
            left: "12px",
            right: "12px",
            zIndex: 999,
            borderRadius: "24px",
            background: "rgba(245,238,228,0.94)",
            backdropFilter: "blur(24px)",
            padding: "20px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
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
              marginTop: "16px",
              padding: "14px",
              border: "none",
              borderRadius: "12px",
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
              marginTop: "12px",
              padding: "14px",
              borderRadius: "12px",
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
