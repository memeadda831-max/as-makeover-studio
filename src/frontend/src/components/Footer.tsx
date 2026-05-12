import { CONTACT } from "@/utils/assets";

const SERVICES = [
  "Bridal Makeup",
  "SFX & Prosthetic",
  "Airbrush Makeup",
  "Celebrity HD Makeup",
  "Editorial Makeup",
  "Face Painting",
  "Film & Theatre Makeup",
  "Bald Cap Application",
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#2A1F17",
        borderTop: "1px solid #C4956A",
        color: "#E8D5B7",
        padding: "60px 0 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 48,
            paddingBottom: 48,
          }}
        >
          {/* Column 1: Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#C4956A",
                marginBottom: 8,
                textShadow: "0 0 20px rgba(196,149,106,0.5)",
                letterSpacing: "0.04em",
              }}
            >
              AS Makeover
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#C4956A",
                marginBottom: 16,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              SFX & Prosthetic | Bridal | Celebrity Makeup
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "#B09880",
                maxWidth: 280,
              }}
            >
              Jodhpur's premier makeup studio led by certified artist Shila
              Kashyap — trained at Bombay School of Make-up & Hair. Creating
              extraordinary looks for weddings, films, and celebrity events.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram_link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#C4956A",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "8px 16px",
                  border: "1px solid rgba(196,149,106,0.3)",
                  borderRadius: 50,
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(196,149,106,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-label="Instagram"
                  role="img"
                >
                  <title>Instagram</title>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @asmekover_studio_96
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 700,
                color: "#C4956A",
                marginBottom: 20,
                letterSpacing: "0.04em",
              }}
            >
              Our Services
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {SERVICES.map((s) => (
                <li
                  key={s}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 14,
                    color: "#B09880",
                  }}
                >
                  <span style={{ color: "#C4956A", fontSize: 10 }}>◆</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 700,
                color: "#C4956A",
                marginBottom: 20,
                letterSpacing: "0.04em",
              }}
            >
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div
                style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
              >
                <span style={{ fontSize: 16, marginTop: 2 }}>📍</span>
                <p
                  style={{
                    fontSize: 13,
                    color: "#B09880",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {CONTACT.address}
                </p>
              </div>
              <a
                href={`tel:${CONTACT.phone}`}
                data-ocid="footer.phone_link"
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  color: "#C4956A",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <span>📱</span> {CONTACT.phone}
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram_handle"
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  color: "#B09880",
                  textDecoration: "none",
                  fontSize: 13,
                }}
              >
                <span>📸</span> @asmekover_studio_96
              </a>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  fontSize: 13,
                  color: "#B09880",
                }}
              >
                <span>🕐</span> Mon–Sat: 9AM–8PM | Sun: By Appointment
              </div>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp_button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 4,
                  padding: "10px 20px",
                  background: "#25D366",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 700,
                  borderRadius: 50,
                  width: "fit-content",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                }}
              >
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(196,149,106,0.15)",
          padding: "20px 24px",
          textAlign: "center",
          fontSize: 13,
          color: "#7A6050",
          letterSpacing: "0.04em",
        }}
      >
        © {new Date().getFullYear()} AS Makeover and Makeup Studio, Jodhpur |
        Designed with ♥ in Jodhpur
      </div>
    </footer>
  );
}
