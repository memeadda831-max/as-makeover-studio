import { IMAGES } from "@/utils/assets";
import { useState } from "react";

type Category = "all" | "sfx" | "prosthetic" | "tseries" | "movie" | "face";

interface PortfolioItem {
  src: string;
  label: string;
  category: Category;
  description: string;
}

const PORTFOLIO: PortfolioItem[] = [
  {
    src: IMAGES.sfx.joker,
    label: "Joker SFX",
    category: "sfx",
    description: "Full character SFX transformation",
  },
  {
    src: IMAGES.TSERIES,
    label: "TSERIES",
    category: "TSERIES",
    description: "TSERIES MUSIC VIDEO",
  },
  {
    src: IMAGES.Face.makeup,
    label: "Joker Face ",
    category: "prosthetic",
    description: "Realistic Joker prosthetic application",
  },
  {
    src: IMAGES.Prosthetic,
    label: "OLD Age  Effects",
    category: "Prosthetic",
    description: "Film-grade wound old age  makeup",
  },
  {
    src: IMAGES.sfx.wound2,
    label: "Injury SFX",
    category: "sfx",
    description: "Detailed injury simulation",
  },
  {
    src: IMAGES.prosthetic.eye,
    label: " Prosthetic",
    category: "prosthetic",
    description: "Custom injury prosthetic design",
  },
  {
    src: IMAGES.sfx.faceWounds,
    label: "Face SFX",
    category: "sfx",
    description: "EYE Injury face SFX for film",
  },
  {
    src: IMAGES.Certificate,
    label: "Certiciate",
    category: "Achievements",
    description: "Certificate",
  },
  {
    src: IMAGES.prosthetic.baldCap,
    label: "Bald Cap",
    category: "prosthetic",
    description: "Professional bald cap application",
  },
  {
    src: IMAGES.face.accident,
    label: "Face Accident ",
    category: "Film",
    description: "Face Accident",
  },
  {
    src: IMAGES.tseries.chitarJy,
    label: "T-Series: Chitar Jyo",
    category: "tseries",
    description: "T-Series Rajasthani production",
  },
  {
    src: IMAGES.Face.injury,
    label: "Film",
    category: "Injury",
    description: "Realistic LOOKS",
  },
  {
    src: IMAGES.tseries.italPital,
    label: "T-Series: Ital Pital",
    category: "tseries",
    description: "Maati Beats T-Series music video",
  },
  {
    src: IMAGES.song,
    label: "Dhora Mathe Jhupadi",
    category: "Tseries Song ",
    description: "Celebrity collaboration Musics",
  },
  {
    src: IMAGES.song.Saajan,
    label: "TSERIES SAAJAN",
    category: "SONG",
    description: "TSERIES MUSIC",
  },
  {
    src: IMAGES.SONG,
    label: "Tseries song ",
    category: "Chitar Jayio JI Mhane",
    description: "Music Video",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "sfx", label: "SFX Work" },
  { id: "prosthetic", label: "Prosthetic" },
  { id: "tseries", label: "T-Series" },
  { id: "movie", label: "Movie / Celebrity" },
  { id: "face", label: "Face Painting" },
];

export default function PortfolioSection() {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      style={{ background: "#F5EDE0", padding: "100px 0" }}
      data-ocid="portfolio.section"
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
            Portfolio Gallery
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              color: "#3D2B1F",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Our Work Portfolio
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
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            From dramatic SFX transformations to radiant bridal looks — every
            creation is a masterpiece.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              data-ocid={`portfolio.${cat.id}_tab`}
              style={{
                padding: "10px 22px",
                borderRadius: 50,
                border:
                  active === cat.id
                    ? "2px solid #C4956A"
                    : "2px solid rgba(196,149,106,0.25)",
                background:
                  active === cat.id
                    ? "linear-gradient(135deg, #C4956A, #8B5E3C)"
                    : "rgba(255,248,240,0.7)",
                color: active === cat.id ? "#FFF8F0" : "#6B4423",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "all 0.25s ease",
                backdropFilter: "blur(8px)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {filtered.map((item, i) => (
            <button
              key={item.src}
              type="button"
              data-ocid={`portfolio.item.${i + 1}`}
              onClick={() => setLightbox(i)}
              onMouseEnter={() => {
                setHoveredIndex(i);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                cursor: "pointer",
                height: 280,
                boxShadow:
                  hoveredIndex === i
                    ? "0 16px 48px rgba(196,149,106,0.4)"
                    : "0 4px 24px rgba(139,94,60,0.15)",
                transition: "all 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                transformStyle: "preserve-3d",
                transform:
                  hoveredIndex === i
                    ? "scale(1.04) rotateX(3deg)"
                    : "scale(1) rotateX(0)",
                display: "block",
                width: "100%",
                padding: 0,
                border: "none",
                background: "none",
                textAlign: "left",
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
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(61,43,31,0.85) 0%, transparent 55%)",
                  opacity: hoveredIndex === i ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "16px",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "#C4956A",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {item.category}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "#FFF8F0",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: 12, color: "#E8D5B7", marginTop: 4 }}>
                  {item.description}
                </div>
              </div>
            </button>
          ))}
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
            background: "rgba(26,16,10,0.92)",
            backdropFilter: "blur(16px)",
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
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].label}
              style={{
                maxWidth: "80vw",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: 16,
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -48,
                left: 0,
                right: 0,
                textAlign: "center",
                color: "#E8D5B7",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              {filtered[lightbox].label}
            </div>
            <button
              type="button"
              data-ocid="portfolio.lightbox_close"
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: -48,
                right: 0,
                background: "rgba(196,149,106,0.2)",
                border: "1px solid #C4956A",
                color: "#FFF8F0",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 18,
              }}
            >
              ×
            </button>
            <button
              type="button"
              data-ocid="portfolio.lightbox_prev"
              onClick={prev}
              style={{
                position: "absolute",
                left: -56,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(196,149,106,0.15)",
                border: "1px solid #C4956A",
                color: "#FFF8F0",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 18,
              }}
            >
              ‹
            </button>
            <button
              type="button"
              data-ocid="portfolio.lightbox_next"
              onClick={next}
              style={{
                position: "absolute",
                right: -56,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(196,149,106,0.15)",
                border: "1px solid #C4956A",
                color: "#FFF8F0",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: 18,
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
