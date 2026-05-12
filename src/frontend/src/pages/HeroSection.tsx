import { CONTACT, IMAGES } from "@/utils/assets";
import { Suspense, lazy } from "react";

const HeroCanvas = lazy(() => import("@/components/HeroCanvas"));

const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction" },
  { value: "T-Series", label: "Official Artist" },
  { value: "Film", label: "Screen Credit" },
];

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-ocid="hero.section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(160deg, #FFF8F0 0%, #F5EDE0 40%, #EDD9C0 100%)",
      }}
    >
      {/* 3D Canvas Background */}
      <Suspense fallback={null}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            display: "block",
          }}
        >
          <HeroCanvas />
        </div>
      </Suspense>

      {/* Mobile gradient depth enhancer */}
      <div
        className="block md:hidden"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse 120% 80% at 50% 30%, rgba(232,201,154,0.22) 0%, rgba(196,149,106,0.12) 40%, rgba(245,237,224,0.05) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Desktop overlay for legibility */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,248,240,0.3) 0%, rgba(245,237,224,0.15) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "90px 20px 70px",
          display: "flex",
          alignItems: "center",
          gap: 40,
          flexWrap: "wrap",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Left: Text */}
        <div style={{ flex: "1 1 280px", minWidth: 0, maxWidth: 640 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              background: "rgba(196,149,106,0.12)",
              border: "1px solid rgba(196,149,106,0.35)",
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 600,
              color: "#8B5E3C",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 24,
              backdropFilter: "blur(8px)",
              boxShadow: "0 0 20px rgba(196,149,106,0.15)",
            }}
          >
            ✨ Jodhpur's Premier Makeup Studio
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(52px, 8vw, 88px)",
              fontWeight: 700,
              color: "#3D2B1F",
              lineHeight: 1.05,
              marginBottom: 16,
              letterSpacing: "-0.02em",
              textShadow:
                "0 0 40px rgba(196,149,106,0.35), 0 4px 24px rgba(61,43,31,0.1)",
            }}
          >
            AS Makeover
          </h1>

          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              fontWeight: 500,
              color: "#C4956A",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 20,
              textShadow: "0 0 12px rgba(196,149,106,0.3)",
            }}
          >
            SFX & Prosthetic &nbsp;•&nbsp; Bridal &nbsp;•&nbsp; Celebrity
            &nbsp;•&nbsp; Film Makeup
          </h2>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: "#5C3D2E",
              marginBottom: 32,
              maxWidth: 520,
            }}
          >
            Trained at the prestigious{" "}
            <strong>Bombay School of Make-up & Hair</strong>. Trusted by{" "}
            <strong>Bollywood & T-Series</strong>. Creating extraordinary looks
            that tell your story — from intimate bridal moments to dramatic
            cinematic transformations.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 36,
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "12px 20px",
                  background: "rgba(255,248,240,0.88)",
                  backdropFilter: "blur(16px) saturate(1.4)",
                  border: "1px solid rgba(196,149,106,0.28)",
                  borderRadius: 12,
                  textAlign: "center",
                  boxShadow:
                    "0 8px 28px rgba(196,149,106,0.14), 0 2px 6px rgba(139,94,60,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#C4956A",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#8B5E3C",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginTop: 2,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.book_cta"
              style={{
                padding: "16px 36px",
                background: "linear-gradient(135deg, #C4956A 0%, #8B5E3C 100%)",
                color: "#FFF8F0",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: 50,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                boxShadow:
                  "0 8px 36px rgba(196,149,106,0.5), 0 0 30px rgba(196,149,106,0.15)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 10px 40px rgba(196,149,106,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 6px 30px rgba(196,149,106,0.45)";
              }}
            >
              Book Your Look
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("#portfolio")}
              data-ocid="hero.portfolio_cta"
              style={{
                padding: "16px 36px",
                background: "transparent",
                color: "#3D2B1F",
                border: "2px solid rgba(196,149,106,0.5)",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: 50,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#C4956A";
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(196,149,106,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(196,149,106,0.5)";
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* Right: Owner Photo Card */}
        <div
          style={{
            flex: "0 1 300px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              perspective: "1000px",
            }}
          >
            <div
              style={{
                width: 280,
                background: "rgba(255,248,240,0.85)",
                backdropFilter: "blur(20px)",
                borderRadius: 24,
                padding: 12,
                boxShadow:
                  "0 30px 100px rgba(139,94,60,0.4), 0 0 80px rgba(196,149,106,0.2), inset 0 1px 0 rgba(255,255,255,0.6)",
                border: "1px solid rgba(196,149,106,0.3)",
                animation: "float3d 4s ease-in-out infinite",
              }}
            >
              <img
                src={IMAGES.owner}
                alt="Shila Kashyap — Certified Makeup Artist"
                style={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: 16,
                  display: "block",
                }}
              />
              <div style={{ padding: "16px 8px 8px", textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#C4956A",
                    textShadow: "0 0 16px rgba(196,149,106,0.4)",
                  }}
                >
                  Shila Kashyap
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#8B5E3C",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
                  Certified Makeup Artist
                </div>
                <div
                  style={{
                    marginTop: 10,
                    display: "inline-block",
                    padding: "5px 14px",
                    background:
                      "linear-gradient(135deg, rgba(196,149,106,0.15), rgba(196,149,106,0.05))",
                    border: "1px solid rgba(196,149,106,0.25)",
                    borderRadius: 50,
                    fontSize: 11,
                    color: "#6B4423",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                  }}
                >
                  🎓 Bombay School of Make-up & Hair
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                background: "linear-gradient(135deg, #C4956A, #8B5E3C)",
                color: "#FFF8F0",
                borderRadius: "50%",
                width: 72,
                height: 72,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1.3,
                boxShadow: "0 8px 24px rgba(196,149,106,0.5)",
                animation: "float3d 3s ease-in-out infinite 1s",
              }}
            >
              <span style={{ fontSize: 14 }}>⭐</span>
              <span>5 Star</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
          animation: "float3d 2s ease-in-out infinite",
          background: "none",
          border: "none",
          padding: 0,
        }}
        onClick={() => scrollToSection("#services")}
        aria-label="Scroll to services"
      >
        <div
          style={{
            fontSize: 11,
            color: "#8B5E3C",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Explore
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C4956A"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <polyline points="6,9 12,15 18,9" />
        </svg>
      </button>

      <style>{`
        @keyframes float3d {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
