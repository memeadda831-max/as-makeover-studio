import { IMAGES } from "@/utils/assets";
import { useEffect, useRef, useState } from "react";

type TSeriesWork = {
  img: string;
  title: string;
  subtitle: string;
  viewCount: number;
  featured: boolean;
};

const TSERIES_WORKS: TSeriesWork[] = [
  {
    img: IMAGES.movie.bmVyas,
    title: "BM Vyas — Bollywood Celebrity",
    subtitle: "Exclusive Celebrity Makeup",
    viewCount: 10,
    featured: false,
  },
  {
    img: IMAGES.movie.eightOClock,
    title: '"Eight O Clock" — Short Film',
    subtitle: "Screen Credit: Shila Kashyap",
    viewCount: 8,
    featured: true,
  },
];

const ACHIEVEMENTS = [
  {
    icon: "\uD83C\uDFAC",
    label: "Official T-Series Artist",
    sub: "Multiple music videos",
  },
  { icon: "\uD83C\uDFA5", label: "Film Credited", sub: "Eight O Clock" },
  {
    icon: "\u2B50",
    label: "Celebrity Makeup",
    sub: "Bollywood collaborations",
  },
  {
    icon: "\uD83C\uDF93",
    label: "Bombay School Alumni",
    sub: "Advance Prosthetic Certified",
  },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    setCount(0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [active, target]);
  return count;
}

function TSeriesCard({
  work,
  index,
  inView,
}: {
  work: TSeriesWork;
  index: number;
  inView: boolean;
}) {
  const count = useCountUp(work.viewCount, inView);

  return (
    <div
      data-ocid={`celebrity.tseries_item.${index + 1}`}
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        border: work.featured
          ? "1px solid rgba(196,149,106,0.6)"
          : "1px solid rgba(196,149,106,0.3)",
        boxShadow: work.featured
          ? "0 8px 40px rgba(0,0,0,0.4), 0 0 40px rgba(196,149,106,0.18)"
          : "0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(196,149,106,0.08)",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform =
          "perspective(800px) rotateX(-3deg) rotateY(4deg) translateY(-10px) scale(1.03)";
        el.style.boxShadow =
          "0 30px 80px rgba(0,0,0,0.55), 0 0 70px rgba(196,149,106,0.3), 8px 20px 40px rgba(139,94,60,0.2)";
        el.style.borderColor = "#C4956A";
        const shimmer = el.querySelector(
          ".tseries-shimmer",
        ) as HTMLDivElement | null;
        if (shimmer) shimmer.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform =
          "perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)";
        el.style.boxShadow = work.featured
          ? "0 8px 40px rgba(0,0,0,0.4), 0 0 40px rgba(196,149,106,0.18)"
          : "0 8px 40px rgba(0,0,0,0.4), 0 0 30px rgba(196,149,106,0.08)";
        el.style.borderColor = work.featured
          ? "rgba(196,149,106,0.6)"
          : "rgba(196,149,106,0.3)";
        const shimmer = el.querySelector(
          ".tseries-shimmer",
        ) as HTMLDivElement | null;
        if (shimmer) shimmer.style.opacity = "0";
      }}
    >
      <div style={{ position: "relative" }}>
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
        {/* Hover shimmer */}
        <div
          className="tseries-shimmer"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,248,240,0.12) 50%, transparent 70%)",
            opacity: 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        />
        {/* Featured ribbon */}
        {work.featured && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "linear-gradient(135deg, #C4956A, #E8C99A)",
              color: "#3D2B1F",
              fontSize: 9,
              fontWeight: 900,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "6px 14px 6px 20px",
              clipPath: "polygon(12px 0%, 100% 0%, 100% 100%, 0% 100%)",
              boxShadow: "0 2px 12px rgba(196,149,106,0.5)",
            }}
          >
            FEATURED
          </div>
        )}
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
      </div>

      <div
        style={{ padding: "16px 18px 20px", background: "rgba(26,16,10,0.95)" }}
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
        <div style={{ fontSize: 12, color: "#9A7B5C", marginBottom: 12 }}>
          {work.subtitle}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(196,149,106,0.2)",
            paddingTop: 10,
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "#C4956A",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Makeup by Shila Kashyap
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#E8C99A",
              background: "rgba(196,149,106,0.1)",
              border: "1px solid rgba(196,149,106,0.3)",
              padding: "2px 8px",
              borderRadius: 20,
            }}
          >
            {inView ? `${count}M+` : "\u2014"} \uD83D\uDC41
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CelebritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
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
            <span style={{ fontSize: 18 }}>\uD83C\uDFA6</span>
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
            <strong style={{ color: "#E8C99A" }}>Shila Kashyap</strong> \u2014
            Official Artist for Major Bollywood Music Videos & Films
          </p>
        </div>

        {/* T-Series Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {TSERIES_WORKS.map((work, i) => (
            <TSeriesCard
              key={work.title}
              work={work}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Golden divider between T-Series and Celebrity Collaborations */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 56,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(196,149,106,0.4))",
            }}
          />
          <div
            style={{
              padding: "8px 20px",
              border: "1px solid rgba(196,149,106,0.4)",
              borderRadius: 50,
              fontSize: 12,
              fontWeight: 700,
              color: "#C4956A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              backdropFilter: "blur(8px)",
              background: "rgba(196,149,106,0.05)",
            }}
          >
            Celebrity Collaborations
          </div>
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(196,149,106,0.4), transparent)",
            }}
          />
        </div>

        {/* Celebrity collaborations */}
        <div style={{ marginBottom: 72 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            {[
              {
                img: IMAGES.tseries.dhoraMathJhupadi,
                alt: "Dhora Mathe Jhupadi \u2014 T-Series",
                title: "Dhora Mathe Jhupadi",
                sub: "Rajasthani Folk \u2014 T-Series Production",
                badge: "T-SERIES",
                ocid: "celebrity.collab_item.1",
              },
              {
                img: IMAGES.tseries.chitarJyo,
                alt: "Chitar Jyo Ji Mhane \u2014 T-Series",
                title: "Chitar Jyo Ji Mhane",
                sub: "T-Series Rajasthani Production",
                badge: "T-SERIES",
                ocid: "celebrity.collab_item.2",
              },
              {
                img: IMAGES.tseries.saajan,
                alt: "Saajan \u2014 T-Series Music Video",
                title: "Saajan",
                sub: "T-Series Music Video",
                badge: "T-SERIES",
                ocid: "celebrity.collab_item.3",
              },
              {
                img: IMAGES.tseries.italPital,
                alt: "Ital Pital \u2014 T-Series",
                title: "Ital Pital",
                sub: "Maati Beats \u2014 T-Series",
                badge: "T-SERIES",
                ocid: "celebrity.collab_item.4",
              },
            ].map((collab) => (
              <div
                key={collab.ocid}
                data-ocid={collab.ocid}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid rgba(196,149,106,0.3)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform =
                    "perspective(900px) rotateX(-3deg) rotateY(5deg) translateY(-8px) scale(1.02)";
                  el.style.boxShadow =
                    "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(196,149,106,0.2)";
                  el.style.borderColor = "#C4956A";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform =
                    "perspective(900px) rotateX(0) rotateY(0) translateY(0) scale(1)";
                  el.style.boxShadow = "0 8px 40px rgba(0,0,0,0.4)";
                  el.style.borderColor = "rgba(196,149,106,0.3)";
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={collab.img}
                    alt={collab.alt}
                    style={{
                      width: "100%",
                      height: 300,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: "rgba(26,16,10,0.85)",
                      border: "1px solid rgba(196,149,106,0.4)",
                      color: "#E8C99A",
                      padding: "4px 12px",
                      borderRadius: 6,
                      fontSize: 11,
                      fontWeight: 800,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {collab.badge}
                  </div>
                </div>
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
                    {collab.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#9A7B5C" }}>
                    {collab.sub}
                  </div>
                </div>
              </div>
            ))}
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
            FROM JODHPUR TO BOLLYWOOD
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
