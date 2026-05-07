import { CONTACT } from "@/utils/assets";

const GUARANTEES = [
  { icon: "⭐", label: "100% Satisfaction", sub: "Guaranteed every time" },
  { icon: "🎓", label: "Certified Artist", sub: "Bombay School Alumni" },
  { icon: "🎥", label: "Premium Products", sub: "Top-tier cosmetics only" },
  { icon: "🎦", label: "T-Series Trusted", sub: "Bollywood proven" },
];

export default function CtaSection() {
  return (
    <section
      data-ocid="cta.section"
      style={{
        background:
          "linear-gradient(160deg, #3D2B1F 0%, #5C3D2E 50%, #3D2B1F 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated glow particles */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,149,106,0.15) 0%, transparent 70%)",
          filter: "blur(30px)",
          pointerEvents: "none",
          animation: "ctaFloat 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,149,106,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          animation: "ctaFloat 8s ease-in-out infinite reverse",
        }}
      />

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            background: "rgba(196,149,106,0.12)",
            border: "1px solid rgba(196,149,106,0.35)",
            borderRadius: 50,
            marginBottom: 28,
            backdropFilter: "blur(8px)",
            fontSize: 12,
            fontWeight: 700,
            color: "#C4956A",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          ✦ TRANSFORM YOUR LOOK TODAY
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 6vw, 68px)",
            fontWeight: 700,
            color: "#FFF8F0",
            lineHeight: 1.1,
            marginBottom: 20,
            textShadow: "0 0 40px rgba(196,149,106,0.4)",
          }}
        >
          Ready for Your Dream Look?
        </h2>

        <p
          style={{
            fontSize: 18,
            color: "#C4956A",
            lineHeight: 1.65,
            marginBottom: 48,
            maxWidth: 620,
            margin: "0 auto 48px",
          }}
        >
          Book Your Appointment with{" "}
          <strong style={{ color: "#E8C99A" }}>Shila Kashyap</strong> —
          Jodhpur's Premier SFX & Bridal Makeup Artist. Trusted by Bollywood,
          loved by brides.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            marginBottom: 56,
          }}
        >
          <a
            href={`tel:${CONTACT.phone}`}
            data-ocid="cta.call_button"
            style={{
              padding: "18px 40px",
              background: "linear-gradient(135deg, #C4956A 0%, #8B5E3C 100%)",
              color: "#FFF8F0",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 16,
              borderRadius: 50,
              letterSpacing: "0.04em",
              boxShadow: "0 8px 32px rgba(196,149,106,0.45)",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-3px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 16px 48px rgba(196,149,106,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 32px rgba(196,149,106,0.45)";
            }}
          >
            📞 Call: {CONTACT.phone}
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cta.whatsapp_button"
            style={{
              padding: "18px 40px",
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 16,
              borderRadius: 50,
              letterSpacing: "0.04em",
              boxShadow: "0 8px 32px rgba(37,211,102,0.4)",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            💬 WhatsApp Us
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cta.instagram_button"
            style={{
              padding: "18px 40px",
              background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 16,
              borderRadius: 50,
              letterSpacing: "0.04em",
              boxShadow: "0 8px 32px rgba(225,48,108,0.35)",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            📸 Instagram
          </a>
        </div>

        {/* Guarantee badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
          }}
        >
          {GUARANTEES.map((g) => (
            <div
              key={g.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 24px",
                background: "rgba(196,149,106,0.06)",
                border: "1px solid rgba(196,149,106,0.2)",
                borderRadius: 14,
                minWidth: 130,
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#C4956A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(196,149,106,0.2)";
              }}
            >
              <span style={{ fontSize: 24, marginBottom: 6 }}>{g.icon}</span>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#E8C99A",
                  textAlign: "center",
                  marginBottom: 2,
                }}
              >
                {g.label}
              </div>
              <div
                style={{ fontSize: 10, color: "#9A7B5C", textAlign: "center" }}
              >
                {g.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ctaFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `}</style>
    </section>
  );
}
