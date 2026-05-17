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
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#C4956A",
                marginBottom: 8,
                textShadow: "0 0 20px rgba(196,149,106,0.5)",
              }}
            >
              AS Makeover
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
              Kashyap.
            </p>

            {/* Social icons */}
            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 30,
                  textDecoration: "none",
                  filter: "drop-shadow(0 0 12px #ff4aa2)",
                }}
              >
                📸
              </a>

              <a
                href="https://www.linkedin.com/posts/shila-kashyap-4a9b36277_soft-makeup-look-dm-me-9549336555-activity-7403035533339377664-LQwO"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 30,
                  textDecoration: "none",
                  filter: "drop-shadow(0 0 12px #0A66C2)",
                }}
              >
                💼
              </a>

              <a
                href="https://x.com/shilaasmek3772"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 30,
                  textDecoration: "none",
                  filter: "drop-shadow(0 0 12px #ffffff)",
                }}
              >
                ✖
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 700,
                color: "#C4956A",
                marginBottom: 20,
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
                <li key={s} style={{ color: "#B09880" }}>
                  ◆ {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 700,
                color: "#C4956A",
                marginBottom: 20,
              }}
            >
              Contact Us
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ color: "#B09880" }}>
                📍 {CONTACT.address}
              </div>

              <a
                href={`tel:${CONTACT.phone}`}
                style={{
                  color: "#C4956A",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                📱 {CONTACT.phone}
              </a>

              <div style={{ color: "#B09880" }}>
                🕐 Mon–Sat: 9AM–8PM | Sun: By Appointment
              </div>

              {/* WhatsApp button */}
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 8,
                  padding: "12px 24px",
                  background: "#25D366",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 700,
                  borderRadius: 50,
                  width: "fit-content",
                  boxShadow: "0 0 25px rgba(37,211,102,0.7)",
                }}
              >
                💬 WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: "1px solid rgba(196,149,106,0.15)",
          padding: "20px 24px",
          textAlign: "center",
          fontSize: 13,
          color: "#7A6050",
        }}
      >
        © {new Date().getFullYear()} AS Makeover and Makeup Studio, Jodhpur |
        Designed with ♥ in Jodhpur
      </div>
    </footer>
  );
}
