import { IMAGES } from "@/utils/assets";

const TSERIES_WORKS = [
  {
    img: IMAGES.tseries.dhoraMathJhupadi,
    title: "Dhora Mathe Jhupadi",
    subtitle: "Rajasthani T-Series Music Video",
    views: "10M+ Views",
  },
  {
    img: IMAGES.tseries.chitarJyo,
    title: "Chitar Jyo Ji Mhane",
    subtitle: "T-Series Rajasthani Production",
    views: "8M+ Views",
  },
  {
    img: IMAGES.tseries.saajan,
    title: "Saajan",
    subtitle: "T-Series Music Video",
    views: "5M+ Views",
  },
  {
    img: IMAGES.tseries.italPital,
    title: "Ital Pital",
    subtitle: "Maati Beats T-Series",
    views: "6M+ Views",
  },
];

const ACHIEVEMENTS = [
  {
    icon: "🎬",
    label: "Official T-Series Artist",
    sub: "Multiple music videos",
  },
  { icon: "🎥", label: "Film Credited", sub: "Eight O Clock" },
  { icon: "⭐", label: "Celebrity Makeup", sub: "Bollywood collaborations" },
  {
    icon: "🎓",
    label: "Bombay School Alumni",
    sub: "Advance Prosthetic Certified",
  },
];

export default function CelebritySection() {
  return (
    <section
      data-ocid="celebrity.section"
      style={{
        background:
          "linear-gradient(160deg, #3D2B1F 0%, #2A1F17 60%, #1A0F09 100%)",
        padding: "100px 0 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,149,106,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,149,106,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 28px",
              background: "rgba(196,149,106,0.12)",
              border: "1px solid rgba(196,149,106,0.35)",
              borderRadius: 50,
              marginBottom: 24,
              backdropFilter: "blur(8px)",
            }}
          >
            <span style={{ fontSize: 18 }}>🎦</span>
            <span
              style={{
                color: "#C4956A",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Trusted by Bollywood & T-Series
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              color: "#FFF8F0",
              lineHeight: 1.1,
              marginBottom: 16,
              textShadow: "0 0 40px rgba(196,149,106,0.3)",
            }}
          >
            T-Series & Celebrity Work
          </h2>
          <div
            style={{
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, #C4956A, #8B5E3C)",
              borderRadius: 4,
              margin: "0 auto 20px",
            }}
          />
          <p
            style={{
              fontSize: 17,
              color: "#C4956A",
              letterSpacing: "0.04em",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Makeup by{" "}
            <strong style={{ color: "#E8C99A" }}>Shila Kashyap</strong> —
            Official Artist for Major Bollywood Music Videos & Films
          </p>
        </div>

        {/* T-Series Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 64,
          }}
        >
          {TSERIES_WORKS.map((work, i) => (
            <div
              key={work.title}
              data-ocid={`celebrity.tseries_item.${i + 1}`}
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(196,149,106,0.3)",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(196,149,106,0.1)",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-6px) scale(1.02)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 20px 60px rgba(0,0,0,0.5), 0 0 50px rgba(196,149,106,0.2)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#C4956A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0) scale(1)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(196,149,106,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(196,149,106,0.3)";
              }}
            >
              <img
                src={work.img}
                alt={work.title}
                style={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* T-Series badge */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  background: "#FF0000",
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  boxShadow: "0 2px 12px rgba(255,0,0,0.4)",
                }}
              >
                T-SERIES
              </div>
              {/* Views badge */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  background: "rgba(196,149,106,0.9)",
                  color: "#3D2B1F",
                  padding: "4px 10px",
                  borderRadius: 6,
                  fontSize: 10,
                  fontWeight: 800,
                }}
              >
                {work.views}
              </div>
              <div
                style={{
                  padding: "16px 18px 20px",
                  background: "rgba(26,16,10,0.9)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#E8C99A",
                    marginBottom: 4,
                  }}
                >
                  {work.title}
                </div>
                <div
                  style={{ fontSize: 12, color: "#9A7B5C", marginBottom: 10 }}
                >
                  {work.subtitle}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#C4956A",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderTop: "1px solid rgba(196,149,106,0.2)",
                    paddingTop: 10,
                  }}
                >
                  ✦ MAKEUP BY SHILA KASHYAP
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Celebrity collaborations */}
        <div style={{ marginBottom: 72 }}>
          <h3
            style={{
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontSize: 30,
              fontWeight: 700,
              color: "#E8C99A",
              marginBottom: 32,
              letterSpacing: "0.02em",
            }}
          >
            Celebrity Collaborations
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            <div
              data-ocid="celebrity.collab_item.1"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(196,149,106,0.3)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              <img
                src={IMAGES.movie.bmVyas}
                alt="BM Vyas Celebrity"
                style={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  padding: "16px 18px",
                  background: "rgba(26,16,10,0.9)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#E8C99A",
                    marginBottom: 4,
                  }}
                >
                  BM Vyas — Celebrity Collaboration
                </div>
                <div style={{ fontSize: 12, color: "#9A7B5C" }}>
                  Professional celebrity makeup services
                </div>
              </div>
            </div>
            <div
              data-ocid="celebrity.collab_item.2"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(196,149,106,0.3)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              <img
                src={IMAGES.movie.eightOClock}
                alt="Eight O Clock Film"
                style={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  padding: "16px 18px",
                  background: "rgba(26,16,10,0.9)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#E8C99A",
                    marginBottom: 4,
                  }}
                >
                  "Eight O Clock" — Short Film
                </div>
                <div style={{ fontSize: 12, color: "#9A7B5C" }}>
                  Screen Credit: Makeup by Shila Kashyap
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated tagline */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-block",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 700,
              color: "#C4956A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textShadow:
                "0 0 30px rgba(196,149,106,0.5), 0 0 60px rgba(196,149,106,0.2)",
            }}
          >
            ✦ FROM JODHPUR TO BOLLYWOOD ✦
          </div>
        </div>

        {/* Achievement badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
          }}
        >
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.label}
              data-ocid="celebrity.achievement_badge"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px 28px",
                background: "rgba(196,149,106,0.07)",
                border: "1px solid rgba(196,149,106,0.25)",
                borderRadius: 16,
                minWidth: 160,
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#C4956A";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 10px 30px rgba(196,149,106,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(196,149,106,0.25)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.2)";
              }}
            >
              <span style={{ fontSize: 28, marginBottom: 8 }}>{ach.icon}</span>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#E8C99A",
                  textAlign: "center",
                  marginBottom: 4,
                }}
              >
                {ach.label}
              </div>
              <div
                style={{ fontSize: 11, color: "#9A7B5C", textAlign: "center" }}
              >
                {ach.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
