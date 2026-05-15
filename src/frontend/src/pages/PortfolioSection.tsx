import { IMAGES } from "@/utils/assets";
import { useEffect, useRef, useState } from "react";

type Category = "all" | "sfx" | "prosthetic" | "tseries" | "movie" | "face";

interface PortfolioItem {
  src: string;
  label: string;
  category: Category;
  description: string;
  badge?: string;
}

// Category display names for badge labels
const CATEGORY_LABELS: Record<Category, string> = {
  all: "All",
  sfx: "SFX",
  prosthetic: "Prosthetic",
  tseries: "T-Series",
  movie: "Film",
  face: "Face Art",
};

// 16 portfolio items in exact order the user specified
const PORTFOLIO: PortfolioItem[] = [
  // 1st
  {
    src: IMAGES.sfx.joker,
    label: "Joker SFX Transformation",
    category: "sfx",
    description: "Full character SFX transformation — complete Joker look",
    badge: "SFX",
  },
  // 2nd — T-Series Ital Pital Music Video
  {
    src: IMAGES.sfx.skull,
    label: "T-Series Ital Pital Music Video",
    category: "tseries",
    description:
      "Makeup artistry for T-Series Ital Pital music video production",
    badge: "T-Series",
  },
  // 3rd — Face Skull Painting Work
  {
    src: IMAGES.prosthetic.oldAge,
    label: "Face Skull Painting",
    category: "face",
    description: "Artistic face skull painting — creative SFX body art",
    badge: "Face Art",
  },
  // 4th — Aging Prosthetic Work
  {
    src: IMAGES.sfx.wound1,
    label: "Aging Prosthetic Work",
    category: "prosthetic",
    description: "Advanced aging prosthetic makeup transformation",
    badge: "Prosthetic",
  },
  // 5th — Injury Makeup
  {
    src: IMAGES.sfx.wound2,
    label: "Injury Makeup",
    category: "sfx",
    description: "Realistic injury SFX makeup — cuts and wounds",
    badge: "SFX",
  },
  // 6th — Injury Makeup
  {
    src: IMAGES.prosthetic.eye,
    label: "Injury Makeup",
    category: "sfx",
    description: "Realistic SFX injury makeup application",
    badge: "SFX",
  },
  // 7th — Eye Prosthetic
  {
    src: IMAGES.sfx.faceWounds,
    label: "Eye Prosthetic",
    category: "prosthetic",
    description: "Custom eye prosthetic design and application",
    badge: "Prosthetic",
  },
  // 8th — Certificate
  {
    src: IMAGES.sfx.faceScar,
    label: "Certificate & Achievement",
    category: "movie",
    description:
      "Professional certification from Bombay School of Makeup & Hair",
    badge: "Achievement",
  },
  // 9th — Short Movie
  {
    src: IMAGES.prosthetic.baldCap,
    label: "Short Movie Work",
    category: "movie",
    description: "Makeup artistry for short film production",
    badge: "Film",
  },
  // 10th — Injury Makeup
  {
    src: IMAGES.tseries.dhoraMathJhupadi,
    label: "Injury Makeup",
    category: "sfx",
    description: "Professional SFX injury and wound makeup",
    badge: "SFX",
  },
  // 11th — Chitar Jyo Ji Mhane T-Series
  {
    src: IMAGES.tseries.chitarJyo,
    label: "Chitar Jyo Ji Mhane — T-Series",
    category: "tseries",
    description: "Makeup artistry for T-Series music video Chitar Jyo Ji Mhane",
    badge: "T-Series",
  },
  // 12th — Injury Accident Face Makeup
  {
    src: IMAGES.tseries.saajan,
    label: "Injury Accident Face Makeup",
    category: "sfx",
    description: "Realistic accident and injury face SFX makeup",
    badge: "SFX",
  },
  // 13th — Ital Pital Music Video
  {
    src: IMAGES.tseries.italPital,
    label: "Ital Pital Music Video",
    category: "tseries",
    description: "Makeup work for Ital Pital music video",
    badge: "T-Series",
  },
  // 14th — Dhora Mathe Jhupadi T-Series
  {
    src: IMAGES.movie.bmVyas,
    label: "Dhora Mathe Jhupadi — T-Series",
    category: "tseries",
    description: "Makeup for T-Series Dhora Mathe Jhupadi music video",
    badge: "T-Series",
  },
  // 15th — Saajan T-Series Music
  {
    src: IMAGES.movie.eightOClock,
    label: "Saajan — T-Series Music",
    category: "tseries",
    description: "Makeup artistry for T-Series Saajan music video",
    badge: "T-Series",
  },
  // 16th — Chitar Jyo Ji Mhane T-Series
  {
    src: IMAGES.facePainting,
    label: "Chitar Jyo Ji Mhane — T-Series",
    category: "tseries",
    description: "Makeup artistry for T-Series Chitar Jyo Ji Mhane",
    badge: "T-Series",
  },
];

const CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: "all", label: "All Work", icon: "✦" },
  { id: "sfx", label: "SFX Work", icon: "⚡" },
  { id: "prosthetic", label: "Prosthetic", icon: "🎭" },
  { id: "tseries", label: "T-Series", icon: "🎵" },
  { id: "movie", label: "Film & Certs", icon: "🎬" },
  { id: "face", label: "Face Art", icon: "🎨" },
];

// Intersection Observer hook for staggered entrance
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function PortfolioSection() {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: gridRef, inView } = useInView();

  const filtered =
    active === "all"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === active);

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };
  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  };

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #F5EDE0 0%, #FAEEE0 35%, #F0E4D0 70%, #EDD9C0 100%)",
        padding: "120px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
      data-ocid="portfolio.section"
    >
      {/* Decorative background orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-8%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,149,106,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          right: "-5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,94,60,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      />
      {/* Dot grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(196,149,106,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(196,149,106,0.12)",
              border: "1px solid rgba(196,149,106,0.3)",
              borderRadius: 50,
              padding: "7px 20px",
              marginBottom: 20,
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#C4956A",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#C4956A",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Portfolio Gallery
            </span>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#C4956A",
                display: "inline-block",
              }}
            />
          </div>

          <h2
            className="title-shimmer"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 5.5vw, 64px)",
              fontWeight: 700,
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Our Work Portfolio
          </h2>

          {/* Gold accent line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 60,
                height: 1,
                background: "linear-gradient(90deg, transparent, #C4956A)",
              }}
            />
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #C4956A, #E8C99A)",
                boxShadow: "0 0 14px rgba(196,149,106,0.6)",
              }}
            />
            <div
              style={{
                width: 60,
                height: 1,
                background: "linear-gradient(90deg, #C4956A, transparent)",
              }}
            />
          </div>

          <p
            style={{
              fontSize: 17,
              color: "#6B4423",
              maxWidth: 580,
              margin: "0 auto",
              lineHeight: 1.75,
              opacity: 0.85,
            }}
          >
            From dramatic SFX transformations to radiant bridal looks — every
            creation is a masterpiece of artistry and passion.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 56,
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                data-ocid={`portfolio.${cat.id}_tab`}
                style={{
                  padding: "10px 22px",
                  borderRadius: 50,
                  border: isActive
                    ? "1.5px solid transparent"
                    : "1.5px solid rgba(196,149,106,0.28)",
                  background: isActive
                    ? "linear-gradient(135deg, #C4956A 0%, #E8C99A 50%, #8B5E3C 100%)"
                    : "rgba(255,248,240,0.65)",
                  color: isActive ? "#FFF8F0" : "#6B4423",
                  fontWeight: 700,
                  fontSize: 12,
                  cursor: "pointer",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "all 0.28s cubic-bezier(0.23,1,0.32,1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: isActive
                    ? "0 6px 24px rgba(196,149,106,0.45), 0 0 0 1px rgba(196,149,106,0.3)"
                    : "0 2px 8px rgba(139,94,60,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transform: isActive ? "translateY(-2px)" : "none",
                }}
              >
                <span style={{ fontSize: 13, lineHeight: 1 }}>{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div ref={gridRef}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 22,
            }}
          >
            {filtered.map((item, i) => (
              <button
                key={`${item.src}-${i}`}
                type="button"
                data-ocid={`portfolio.item.${i + 1}`}
                onClick={() => setLightbox(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  borderRadius: 18,
                  overflow: "hidden",
                  cursor: "pointer",
                  height: 290,
                  border:
                    hoveredIndex === i
                      ? "1.5px solid rgba(196,149,106,0.5)"
                      : "1.5px solid rgba(196,149,106,0.12)",
                  boxShadow:
                    hoveredIndex === i
                      ? "0 20px 60px rgba(139,94,60,0.32), 0 0 40px rgba(196,149,106,0.2)"
                      : "0 4px 20px rgba(139,94,60,0.12)",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  transform:
                    hoveredIndex === i
                      ? "scale(1.04) translateY(-6px)"
                      : "scale(1) translateY(0)",
                  display: "block",
                  width: "100%",
                  padding: 0,
                  background: "none",
                  textAlign: "left",
                  // Staggered entrance animation
                  opacity: inView ? 1 : 0,
                  animation: inView
                    ? `entranceFade 0.65s cubic-bezier(0.23,1,0.32,1) ${Math.min(i * 0.07, 0.9)}s both`
                    : undefined,
                }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
                    transform: hoveredIndex === i ? "scale(1.08)" : "scale(1)",
                  }}
                />

                {/* Hover overlay — rich gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(30,14,5,0.92) 0%, rgba(61,43,31,0.55) 45%, transparent 72%)",
                    opacity: hoveredIndex === i ? 1 : 0,
                    transition: "opacity 0.35s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "20px",
                    pointerEvents: "none",
                  }}
                >
                  {/* Category badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      alignSelf: "flex-start",
                      background:
                        "linear-gradient(135deg, rgba(196,149,106,0.35), rgba(232,201,154,0.2))",
                      border: "1px solid rgba(196,149,106,0.5)",
                      borderRadius: 30,
                      padding: "3px 10px",
                      marginBottom: 8,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        color: "#E8C99A",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.badge ?? CATEGORY_LABELS[item.category]}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: 16,
                      color: "#FFF8F0",
                      fontWeight: 700,
                      fontFamily: "var(--font-display)",
                      lineHeight: 1.3,
                      textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(232,213,183,0.9)",
                      marginTop: 5,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </div>
                </div>

                {/* Always-visible item number chip */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "rgba(26,16,10,0.55)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(196,149,106,0.3)",
                    borderRadius: 6,
                    padding: "2px 8px",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "rgba(232,201,154,0.9)",
                    letterSpacing: "0.05em",
                    pointerEvents: "none",
                  }}
                >
                  {String(PORTFOLIO.indexOf(item) + 1).padStart(2, "0")}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div
          style={{
            marginTop: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(196,149,106,0.35))",
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#C4956A",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            16 Works of Art
          </span>
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(196,149,106,0.35), transparent)",
            }}
          />
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <dialog
          data-ocid="portfolio.lightbox"
          open
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "rgba(12,6,2,0.96)",
            backdropFilter: "blur(24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            padding: 0,
            margin: 0,
            maxWidth: "100vw",
            maxHeight: "100vh",
            width: "100%",
            height: "100%",
          }}
          onClick={() => setLightbox(null)}
          onKeyDown={(e: React.KeyboardEvent<HTMLDialogElement>) => {
            if (e.key === "Escape") setLightbox(null);
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
          }}
        >
          {/* Ambient glow behind image */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              height: 400,
              background:
                "radial-gradient(ellipse, rgba(196,149,106,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
              filter: "blur(30px)",
            }}
          />

          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {/* Image with golden border */}
            <div
              style={{
                borderRadius: 20,
                padding: 3,
                background:
                  "linear-gradient(135deg, #C4956A, #E8C99A, #8B5E3C, #C4956A)",
                boxShadow:
                  "0 0 60px rgba(196,149,106,0.3), 0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].label}
                style={{
                  maxWidth: "80vw",
                  maxHeight: "78vh",
                  objectFit: "contain",
                  borderRadius: 18,
                  display: "block",
                }}
              />
            </div>

            {/* Caption */}
            <div
              style={{
                position: "absolute",
                bottom: -58,
                left: 0,
                right: 0,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(30,14,5,0.75)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(196,149,106,0.3)",
                  borderRadius: 30,
                  padding: "6px 20px",
                }}
              >
                <span
                  style={{ color: "#E8C99A", fontSize: 13, fontWeight: 600 }}
                >
                  {filtered[lightbox].label}
                </span>
                <span
                  style={{ color: "rgba(196,149,106,0.5)", margin: "0 8px" }}
                >
                  ·
                </span>
                <span style={{ color: "rgba(232,213,183,0.6)", fontSize: 12 }}>
                  {lightbox + 1} / {filtered.length}
                </span>
              </div>
            </div>

            {/* Close */}
            <button
              type="button"
              data-ocid="portfolio.close_button"
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: -52,
                right: 0,
                background: "rgba(196,149,106,0.18)",
                border: "1.5px solid rgba(196,149,106,0.5)",
                color: "#FFF8F0",
                borderRadius: "50%",
                width: 42,
                height: 42,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 20,
                transition: "all 0.2s ease",
                boxShadow: "0 0 16px rgba(196,149,106,0.25)",
              }}
            >
              ×
            </button>

            {/* Prev */}
            <button
              type="button"
              data-ocid="portfolio.lightbox_prev"
              onClick={prev}
              style={{
                position: "absolute",
                left: -60,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(196,149,106,0.18)",
                border: "1.5px solid rgba(196,149,106,0.4)",
                color: "#FFF8F0",
                borderRadius: "50%",
                width: 46,
                height: 46,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 22,
                transition: "all 0.2s ease",
                boxShadow: "0 0 20px rgba(196,149,106,0.2)",
              }}
            >
              ‹
            </button>

            {/* Next */}
            <button
              type="button"
              data-ocid="portfolio.lightbox_next"
              onClick={next}
              style={{
                position: "absolute",
                right: -60,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(196,149,106,0.18)",
                border: "1.5px solid rgba(196,149,106,0.4)",
                color: "#FFF8F0",
                borderRadius: "50%",
                width: 46,
                height: 46,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 22,
                transition: "all 0.2s ease",
                boxShadow: "0 0 20px rgba(196,149,106,0.2)",
              }}
            >
              ›
            </button>
          </div>
        </dialog>
      )}
    </section>
  );
}
