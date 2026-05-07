import { CONTACT, IMAGES } from "@/utils/assets";

const CREDENTIALS = [
  "Bombay School of Make-up & Hair — Certified Artist",
  "Advance Prosthetic Make-up Artistry (June 2025)",
  "T-Series Official Music Video Artist",
  'Film Makeup — "Eight O Clock" Screen Credit',
  "Celebrity Collaborations (BM Vyas & more)",
  "500+ Satisfied Clients Across India",
  "5★ Google Reviews — 100% Satisfaction",
];

export default function AboutSection() {
  return (
    <section
      data-ocid="about.section"
      style={{
        background: "linear-gradient(160deg, #FFF8F0 0%, #F5EDE0 100%)",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 700,
              color: "#C4956A",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Meet the Artist
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 54px)",
              fontWeight: 700,
              color: "#3D2B1F",
              lineHeight: 1.1,
            }}
          >
            About The Artist
          </h2>
          <div
            style={{
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, #C4956A, #8B5E3C)",
              borderRadius: 4,
              margin: "16px auto 0",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 60,
            alignItems: "flex-start",
          }}
        >
          {/* Left: Images */}
          <div style={{ flex: "0 1 380px" }}>
            {/* Main owner photo */}
            <div
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow:
                  "0 20px 80px rgba(139,94,60,0.3), 0 0 60px rgba(196,149,106,0.15)",
                border: "3px solid rgba(196,149,106,0.4)",
                marginBottom: 24,
              }}
            >
              <img
                src={IMAGES.owner}
                alt="Shila Kashyap — Makeup Artist"
                style={{
                  width: "100%",
                  height: 480,
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(61,43,31,0.6) 0%, transparent 50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#FFF8F0",
                    textShadow: "0 0 20px rgba(196,149,106,0.5)",
                  }}
                >
                  Shila Kashyap
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#C4956A",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Certified Professional Makeup Artist
                </div>
              </div>
            </div>

            {/* Certificate photo */}
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(139,94,60,0.2)",
                border: "2px solid rgba(196,149,106,0.25)",
                marginBottom: 20,
              }}
            >
              <img
                src={IMAGES.certificate}
                alt="Bombay School Certificate"
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  padding: "12px 16px",
                  background: "rgba(255,248,240,0.9)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#8B5E3C",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                🎓 Bombay School of Make-up & Hair — Official Certificate
              </div>
            </div>

            {/* Instagram */}
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="about.instagram_link"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "14px 24px",
                background:
                  "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 14,
                borderRadius: 50,
                boxShadow: "0 6px 24px rgba(225,48,108,0.35)",
                letterSpacing: "0.04em",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
                aria-label="Instagram"
                role="img"
              >
                <title>Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @asmekover_studio_96
            </a>
          </div>

          {/* Right: Bio */}
          <div style={{ flex: "1 1 340px" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 48px)",
                fontWeight: 700,
                color: "#C4956A",
                marginBottom: 8,
                textShadow: "0 0 30px rgba(196,149,106,0.4)",
                lineHeight: 1.1,
              }}
            >
              Shila Kashyap
            </h3>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#8B5E3C",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 28,
              }}
            >
              Professional Makeup Artist | Jodhpur, Rajasthan
            </div>

            <div
              style={{
                width: "100%",
                height: 2,
                background: "linear-gradient(90deg, #C4956A, transparent)",
                marginBottom: 28,
                borderRadius: 2,
              }}
            />

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#5C3D2E",
                marginBottom: 20,
              }}
            >
              Shila Kashyap is a professional makeup artist based in Jodhpur,
              Rajasthan, trained from the prestigious
              <strong> Bombay School of Make-up & Hair</strong> in Mumbai —
              certified in Advance Prosthetic Make-up Artistry (June 2025).
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#5C3D2E",
                marginBottom: 20,
              }}
            >
              With expertise spanning Bridal, SFX, Prosthetics, Film, and
              Celebrity makeup, Shila has worked with
              <strong> T-Series</strong> on multiple Rajasthani music videos and
              received screen credit for the short film
              <strong> "Eight O Clock"</strong>.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#5C3D2E",
                marginBottom: 36,
              }}
            >
              Her studio <strong>AS Makeover</strong> is located in the heart of
              Jodhpur, serving clients from across India for weddings, shoots,
              films, and special events. Every look is crafted with precision,
              passion, and the highest professional standards.
            </p>

            {/* Credentials */}
            <div
              style={{
                background: "rgba(255,248,240,0.8)",
                border: "1px solid rgba(196,149,106,0.2)",
                borderRadius: 20,
                padding: "24px 28px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(139,94,60,0.1)",
                marginBottom: 28,
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#3D2B1F",
                  marginBottom: 16,
                  letterSpacing: "0.04em",
                }}
              >
                Credentials & Achievements
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {CREDENTIALS.map((cred) => (
                  <li
                    key={cred}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 14,
                      color: "#5C3D2E",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 22,
                        height: 22,
                        background: "linear-gradient(135deg, #C4956A, #8B5E3C)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        color: "#FFF8F0",
                        fontWeight: 700,
                        marginTop: 1,
                      }}
                    >
                      ✓
                    </span>
                    {cred}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <div
              style={{
                background: "linear-gradient(135deg, #3D2B1F, #5C3D2E)",
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 8px 32px rgba(61,43,31,0.2)",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <a
                  href={`tel:${CONTACT.phone}`}
                  data-ocid="about.phone_link"
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    color: "#C4956A",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 700,
                  }}
                >
                  <span>📱</span> {CONTACT.phone}
                </a>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    fontSize: 13,
                    color: "#B09880",
                  }}
                >
                  <span style={{ marginTop: 2 }}>📍</span>
                  <span>{CONTACT.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
