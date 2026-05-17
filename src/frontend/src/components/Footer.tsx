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
          {/* Column 1 */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#C4956A",
                marginBottom: 8,
              }}
            >
              AS Makeover
            </div>

            <p style={{ fontSize: 14, color: "#B09880" }}>
              Jodhpur's premier makeup studio led by certified artist Shila
              Kashyap.
            </p>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#C4956A",
                  textDecoration: "none",
                }}
              >
                📸 Instagram
              </a>

              <a
                href="https://www.linkedin.com/posts/shila-kashyap-4a9b36277_soft-makeup-look-dm-me-9549336555-activity-7403035533339377664-LQwO"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#C4956A",
                  textDecoration: "none",
                }}
              >
                💼 LinkedIn
              </a>

              <a
                href="https://x.com/shilaasmek3772"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#C4956A",
                  textDecoration: "none",
                }}
              >
                ✖ X
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 style={{ color: "#C4956A" }}>Our Services</h4>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {SERVICES.map((s) => (
                <li key={s} style={{ marginBottom: 8 }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 style={{ color: "#C4956A" }}>Contact Us</h4>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div>📍 {CONTACT.address}</div>

              <a
                href={`tel:${CONTACT.phone}`}
                style={{ color: "#C4956A", textDecoration: "none" }}
              >
                📱 {CONTACT.phone}
              </a>

              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#B09880", textDecoration: "none" }}
              >
                📸 Instagram
              </a>

              <a
                href="https://www.linkedin.com/posts/shila-kashyap-4a9b36277_soft-makeup-look-dm-me-9549336555-activity-7403035533339377664-LQwO"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#B09880", textDecoration: "none" }}
              >
                💼 LinkedIn
              </a>

              <a
                href="https://x.com/shilaasmek3772"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#B09880", textDecoration: "none" }}
              >
                ✖ X
              </a>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 20px",
                  background: "#25D366",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: 50,
                  width: "fit-content",
                }}
              >
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(196,149,106,0.15)",
          padding: "20px",
          textAlign: "center",
          fontSize: 13,
          color: "#7A6050",
        }}
      >
        © {new Date().getFullYear()} AS Makeover and Makeup Studio
      </div>
    </footer>
  );
}
