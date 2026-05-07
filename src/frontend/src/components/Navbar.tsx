import { CONTACT } from "@/utils/assets";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Celebrity", href: "#celebrity" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        data-ocid="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 70,
          transition:
            "background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "rgba(255,248,240,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(139,94,60,0.12)" : "none",
          borderBottom: scrolled ? "1px solid rgba(196,149,106,0.18)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          {/* Logo */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(
                e as unknown as React.MouseEvent<HTMLAnchorElement>,
                "#home",
              );
            }}
            data-ocid="navbar.logo_link"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: 24,
              fontWeight: 700,
              color: "#3D2B1F",
              textDecoration: "none",
              letterSpacing: "0.04em",
              textShadow: "0 0 20px rgba(196,149,106,0.5)",
            }}
          >
            ✦ AS Makeover
          </button>

          {/* Desktop nav */}
          <div
            style={{ display: "flex", gap: 8, alignItems: "center" }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                style={{
                  padding: "8px 16px",
                  color: "#3D2B1F",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: 14,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  borderRadius: 8,
                  transition: "all 0.25s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#C4956A";
                  (e.currentTarget as HTMLAnchorElement).style.textShadow =
                    "0 0 12px rgba(196,149,106,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#3D2B1F";
                  (e.currentTarget as HTMLAnchorElement).style.textShadow =
                    "none";
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${CONTACT.phone}`}
              data-ocid="navbar.book_button"
              style={{
                marginLeft: 8,
                padding: "10px 22px",
                background: "linear-gradient(135deg, #C4956A 0%, #8B5E3C 100%)",
                color: "#FFF8F0",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 50,
                boxShadow: "0 4px 16px rgba(196,149,106,0.4)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 6px 24px rgba(196,149,106,0.6)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 16px rgba(196,149,106,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex md:hidden"
            data-ocid="navbar.hamburger_button"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "#3D2B1F",
            }}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              role="presentation"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          data-ocid="navbar.mobile_menu"
          style={{
            position: "fixed",
            top: 70,
            left: 0,
            right: 0,
            zIndex: 999,
            background: "rgba(255,248,240,0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(196,149,106,0.2)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            boxShadow: "0 12px 40px rgba(139,94,60,0.12)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                padding: "14px 16px",
                color: "#3D2B1F",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 16,
                borderRadius: 8,
                borderBottom: "1px solid rgba(196,149,106,0.1)",
                letterSpacing: "0.04em",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${CONTACT.phone}`}
            style={{
              marginTop: 8,
              padding: "14px 16px",
              background: "linear-gradient(135deg, #C4956A, #8B5E3C)",
              color: "#FFF8F0",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 12,
              textAlign: "center",
              letterSpacing: "0.08em",
            }}
          >
            📞 Call: {CONTACT.phone}
          </a>
        </div>
      )}
    </>
  );
}
