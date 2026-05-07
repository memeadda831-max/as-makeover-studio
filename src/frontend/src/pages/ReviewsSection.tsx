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
      style={{ background: "#FFF8F0", padding: "100px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Heading */}
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
            Client Testimonials
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
            What Our Clients Say
          </h2>
          <div
            style={{
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, #C4956A, #8B5E3C)",
              borderRadius: 4,
              margin: "0 auto 16px",
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
              fontSize: 28,
              color: "#C4956A",
              letterSpacing: 4,
              marginBottom: 8,
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
                background: "#fff",
                borderRadius: 20,
                padding: 28,
                boxShadow:
                  "0 4px 24px rgba(139,94,60,0.1), 0 1px 4px rgba(139,94,60,0.06)",
                border: "1px solid rgba(196,149,106,0.12)",
                transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-8px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 20px 60px rgba(196,149,106,0.2), 0 0 40px rgba(196,149,106,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(196,149,106,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 24px rgba(139,94,60,0.1), 0 1px 4px rgba(139,94,60,0.06)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(196,149,106,0.12)";
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  fontFamily: "Georgia, serif",
                  fontSize: 72,
                  lineHeight: 1,
                  color: "rgba(196,149,106,0.12)",
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
                  borderTop: "1px solid rgba(196,149,106,0.1)",
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
                    boxShadow: "0 4px 12px rgba(196,149,106,0.35)",
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
                  }}
                >
                  VERIFIED ✓
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
