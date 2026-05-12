const REVIEWS = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    text: "Shila transformed my bridal look beyond imagination! The airbrush makeup lasted through the entire wedding ceremony and reception without touching up. I received compliments from every guest — worth every penny!",
    initial: "P",
  },
  {
    name: "Anjali Singh",
    location: "Jaipur",
    text: "Got my SFX makeup done for a Halloween photoshoot — the wound effects looked absolutely real! Professional, creative, and so talented. My photos went viral on Instagram!",
    initial: "A",
  },
  {
    name: "Meera Rajput",
    location: "Mumbai",
    text: "I flew in from Mumbai specifically for Shila's prosthetic work for a short film. Her skills are on par with the best in Bollywood. The aging effect was photorealistic and lasted 8 hours.",
    initial: "M",
  },
  {
    name: "Kavita Verma",
    location: "Jodhpur",
    text: "AS Makeover did my pre-wedding shoot makeup and I looked like a queen! The beige-gold editorial look she created was perfect for my Rajput bride theme. Booking again for my wedding!",
    initial: "K",
  },
  {
    name: "Sunita Patel",
    location: "Ahmedabad",
    text: "As a T-Series music video artist, I needed someone who understood film makeup. Shila's work on set was impeccable — from touch-ups to character creation. She's the real deal!",
    initial: "S",
  },
  {
    name: "Roshni Mehta",
    location: "Udaipur",
    text: "The face painting she did for my daughter's birthday party was extraordinary — all the kids were amazed! Clean, safe products and incredible artistry. Highly recommend AS Makeover!",
    initial: "R",
  },
];

export default function ReviewsSection() {
  return (
    <section
      data-ocid="reviews.section"
      style={{
        background: "linear-gradient(160deg, #FFF8F0 0%, #F5EDE0 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background floating orbs */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,149,106,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "floatSlow 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,94,60,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          animation: "floatSlow 8s ease-in-out infinite 2s",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              background: "rgba(196,149,106,0.1)",
              border: "1px solid rgba(196,149,106,0.3)",
              borderRadius: 50,
              marginBottom: 16,
              backdropFilter: "blur(8px)",
              boxShadow: "0 0 20px rgba(196,149,106,0.15)",
            }}
          >
            <span style={{ fontSize: 14 }}>⭐</span>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#C4956A",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Client Testimonials
            </div>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 54px)",
              fontWeight: 700,
              color: "#3D2B1F",
              marginBottom: 16,
              textShadow: "0 4px 24px rgba(139,94,60,0.12)",
            }}
          >
            What Our Clients Say
          </h2>
          <div
            style={{
              width: 80,
              height: 3,
              background:
                "linear-gradient(90deg, transparent, #C4956A, #E8C99A, transparent)",
              borderRadius: 4,
              margin: "0 auto 16px",
              boxShadow: "0 0 16px rgba(196,149,106,0.4)",
            }}
          />
          <p
            style={{
              fontSize: 16,
              color: "#6B4423",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Real stories from real clients — transformations that speak for
            themselves.
          </p>
        </div>

        {/* Stars row */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              fontSize: 30,
              color: "#C4956A",
              letterSpacing: 4,
              marginBottom: 8,
              textShadow: "0 0 20px rgba(196,149,106,0.5)",
              animation: "floatSlow 3s ease-in-out infinite",
              display: "inline-block",
            }}
          >
            ★★★★★
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#8B5E3C",
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            5.0 / 5 • Based on 500+ Client Reviews
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              data-ocid={`reviews.item.${i + 1}`}
              style={{
                background: "rgba(255,252,248,0.95)",
                borderRadius: 20,
                padding: 28,
                boxShadow:
                  "0 8px 32px rgba(139,94,60,0.12), 0 2px 8px rgba(139,94,60,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
                border: "1px solid rgba(196,149,106,0.15)",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform =
                  "perspective(900px) rotateX(-3deg) rotateY(3deg) translateY(-10px) scale(1.02)";
                el.style.boxShadow =
                  "0 24px 70px rgba(139,94,60,0.2), 0 0 50px rgba(196,149,106,0.15), 8px 16px 40px rgba(139,94,60,0.1)";
                el.style.borderColor = "rgba(196,149,106,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "none";
                el.style.boxShadow =
                  "0 8px 32px rgba(139,94,60,0.12), 0 2px 8px rgba(139,94,60,0.06), inset 0 1px 0 rgba(255,255,255,0.8)";
                el.style.borderColor = "rgba(196,149,106,0.15)";
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  borderRadius: "20px 20px 0 0",
                  background:
                    "linear-gradient(90deg, transparent, rgba(196,149,106,0.5), #C4956A, rgba(196,149,106,0.5), transparent)",
                  opacity: 0.6,
                }}
              />

              {/* Quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  fontFamily: "Georgia, serif",
                  fontSize: 80,
                  lineHeight: 1,
                  color: "rgba(196,149,106,0.1)",
                  fontWeight: 900,
                  pointerEvents: "none",
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div
                style={{
                  color: "#C4956A",
                  fontSize: 16,
                  letterSpacing: 2,
                  marginBottom: 14,
                  textShadow: "0 0 8px rgba(196,149,106,0.4)",
                }}
              >
                ★★★★★
              </div>

              {/* Review text */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: "#5C3D2E",
                  marginBottom: 20,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderTop: "1px solid rgba(196,149,106,0.12)",
                  paddingTop: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #C4956A, #8B5E3C)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFF8F0",
                    fontWeight: 800,
                    fontSize: 18,
                    boxShadow:
                      "0 4px 16px rgba(196,149,106,0.4), 0 0 20px rgba(196,149,106,0.15)",
                    flexShrink: 0,
                  }}
                >
                  {review.initial}
                </div>
                <div>
                  <div
                    style={{ fontWeight: 700, fontSize: 15, color: "#3D2B1F" }}
                  >
                    {review.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#9A7B5C",
                      letterSpacing: "0.04em",
                    }}
                  >
                    📍 {review.location}
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    fontSize: 11,
                    color: "#C4956A",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    padding: "4px 10px",
                    background: "rgba(196,149,106,0.1)",
                    borderRadius: 20,
                    border: "1px solid rgba(196,149,106,0.2)",
                  }}
                >
                  VERIFIED ✓
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
}
