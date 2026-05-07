import { CONTACT } from "@/utils/assets";

export default function MapSection() {
  return (
    <section
      data-ocid="map.section"
      style={{ background: "#F5EDE0", padding: "100px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
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
            Location
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 54px)",
              fontWeight: 700,
              color: "#3D2B1F",
              marginBottom: 16,
            }}
          >
            Find Us in Jodhpur
          </h2>
          <div
            style={{
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, #C4956A, #8B5E3C)",
              borderRadius: 4,
              margin: "0 auto",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            alignItems: "stretch",
          }}
        >
          {/* Map embed */}
          <div
            style={{
              flex: "1 1 400px",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(139,94,60,0.2)",
              border: "2px solid rgba(196,149,106,0.25)",
              minHeight: 400,
            }}
          >
            <iframe
              src={CONTACT.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AS Makeover Studio Location"
            />
          </div>

          {/* Contact card */}
          <div
            style={{
              flex: "0 1 360px",
              background: "linear-gradient(160deg, #FFF8F0 0%, #F5EDE0 100%)",
              borderRadius: 20,
              padding: "36px 32px",
              boxShadow: "0 8px 40px rgba(139,94,60,0.15)",
              border: "1px solid rgba(196,149,106,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 700,
                color: "#3D2B1F",
                marginBottom: 0,
              }}
            >
              Studio Details
            </h3>

            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #C4956A, #8B5E3C)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                📍
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#3D2B1F",
                    marginBottom: 4,
                  }}
                >
                  Address
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#6B4423",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {CONTACT.address}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #C4956A, #8B5E3C)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                📱
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#3D2B1F",
                    marginBottom: 4,
                  }}
                >
                  Phone
                </div>
                <a
                  href={`tel:${CONTACT.phone}`}
                  data-ocid="map.phone_link"
                  style={{
                    fontSize: 16,
                    color: "#C4956A",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                📸
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#3D2B1F",
                    marginBottom: 4,
                  }}
                >
                  Instagram
                </div>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="map.instagram_link"
                  style={{
                    fontSize: 14,
                    color: "#C4956A",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  @asmekover_studio_96
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #C4956A, #8B5E3C)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  flexShrink: 0,
                }}
              >
                🕐
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#3D2B1F",
                    marginBottom: 4,
                  }}
                >
                  Studio Hours
                </div>
                <div style={{ fontSize: 13, color: "#6B4423" }}>
                  Mon – Sat: 9:00 AM – 8:00 PM
                </div>
                <div style={{ fontSize: 13, color: "#6B4423" }}>
                  Sunday: By Appointment
                </div>
              </div>
            </div>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="map.book_button"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "14px 24px",
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: 50,
                marginTop: 8,
                boxShadow: "0 6px 24px rgba(37,211,102,0.35)",
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
              💬 Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
