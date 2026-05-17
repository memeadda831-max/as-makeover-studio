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
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 48,
            paddingBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                fontWeight: 700,
                color: "#C4956A",
                marginBottom: 8,
              }}
            >
              AS Makeover
            </div>

            <p style={{ color: "#B09880", lineHeight: 1.7 }}>
              Jodhpur's premier makeup studio led by certified artist Shila
              Kashyap.
            </p>

            {/* REAL ICONS */}
            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 20,
              }}
            >
              {/* Instagram */}
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  filter: "drop-shadow(0 0 12px #ff2d95)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 4a6 6 0 110 12 6 6 0 010-12zm6.5-.8a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/posts/shila-kashyap-4a9b36277_soft-makeup-look-dm-me-9549336555-activity-7403035533339377664-LQwO"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0A66C2",
                  filter: "drop-shadow(0 0 12px #0A66C2)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 117.5 6a2.5 2.5 0 01-2.52-2.5zM3 8h4v13H3zm7 0h3.8v1.8h.1c.5-.9 1.8-2.3 3.8-2.3 4 0 4.8 2.6 4.8 6V21h-4v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-4z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com/shilaasmek3772"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffffff",
                  filter: "drop-shadow(0 0 12px #ffffff)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.3L6.5 22H3.4l7.3-8.4L1 2h6.3l4.3 5.7L18.9 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#C4956A" }}>Our Services</h4>

            {SERVICES.map((s) => (
              <div key={s} style={{ color: "#B09880", marginBottom: 8 }}>
                ◆ {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#C4956A" }}>Contact Us</h4>

            <div style={{ color: "#B09880", marginBottom: 12 }}>
              📍 {CONTACT.address}
            </div>

            <div style={{ color: "#C4956A", marginBottom: 20 }}>
              📱 {CONTACT.phone}
            </div>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                borderRadius: 50,
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                boxShadow: "0 0 25px rgba(37,211,102,.8)",
              }}
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
