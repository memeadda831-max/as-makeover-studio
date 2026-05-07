import { CONTACT } from "@/utils/assets";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Celebrity", href: "#celebrity" },
  { label: "About", href: "#about" },
  { label: "Book Now", href: "#appointment" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const isGlassy = isMobile || scrolled;

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
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
          background: isGlassy ? "rgba(255,248,240,0.92)" : "transparent",
          backdropFilter: isGlassy ? "blur(20px) saturate(1.5)" : "none",
          WebkitBackdropFilter: isGlassy ? "blur(20px) saturate(1.5)" : "none",
          boxShadow: isGlassy
            ? "0 2px 24px rgba(139,94,60,0.14), 0 1px 0 rgba(196,149,106,0.18)"
            : "none",
          borderBottom: isGlassy ? "1px solid rgba(196,149,106,0.22)" : "none",
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
            onClick={() => scrollTo("#home")}
            data-ocid="navbar.logo_link"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#3D2B1F",
              letterSpacing: "0.04em",
              textShadow: "0 0 20px rgba(196,149,106,0.5)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            \u2726 AS Makeover
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
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                data-ocid={`navbar.${link.label.toLowerCase().replace(/ /g, "_")}_link`}
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
            <button
              type="button"
              data-ocid="navbar.book_cta_button"
              onClick={() => scrollTo("#appointment")}
              style={{
                marginLeft: 8,
                padding: "10px 22px",
                background: "linear-gradient(135deg, #C4956A 0%, #8B5E3C 100%)",
                color: "#FFF8F0",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 50,
                boxShadow:
                  "0 4px 16px rgba(196,149,106,0.4), 0 0 20px rgba(196,149,106,0.15)",
                transition: "all 0.25s ease",
                border: "1px solid rgba(232,201,154,0.3)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 6px 24px rgba(196,149,106,0.6), 0 0 30px rgba(196,149,106,0.2)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 16px rgba(196,149,106,0.4), 0 0 20px rgba(196,149,106,0.15)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
            >
              \u2726 Book Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex md:hidden"
            data-ocid="navbar.hamburger_button"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: menuOpen
                ? "rgba(196,149,106,0.15)"
                : "rgba(255,248,240,0.6)",
              border: "1.5px solid rgba(196,149,106,0.35)",
              borderRadius: 10,
              cursor: "pointer",
              padding: "7px 9px",
              color: "#3D2B1F",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s ease",
            }}
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3D2B1F"
              strokeWidth="2.5"
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
            background: "rgba(255,248,240,0.97)",
            backdropFilter: "blur(24px) saturate(1.6)",
            WebkitBackdropFilter: "blur(24px) saturate(1.6)",
            borderBottom: "1px solid rgba(196,149,106,0.25)",
            padding: "12px 20px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            boxShadow: "0 16px 48px rgba(139,94,60,0.16)",
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
                padding: "13px 16px",
                color: "#3D2B1F",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 10,
                borderBottom: "1px solid rgba(196,149,106,0.12)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("#appointment")}
            style={{
              marginTop: 10,
              padding: "14px 16px",
              background: "linear-gradient(135deg, #C4956A, #8B5E3C)",
              color: "#FFF8F0",
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 12,
              letterSpacing: "0.08em",
              boxShadow: "0 4px 20px rgba(196,149,106,0.4)",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            \u2726 Book Appointment
          </button>
          <a
            href={`tel:${CONTACT.phone}`}
            style={{
              padding: "14px 16px",
              background: "rgba(196,149,106,0.08)",
              border: "1px solid rgba(196,149,106,0.25)",
              color: "#C4956A",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 12,
              textAlign: "center",
              letterSpacing: "0.08em",
            }}
          >
            \uD83D\uDCDE Call: {CONTACT.phone}
          </a>
        </div>
      )}
    </>
  );
}
