import { motion } from "motion/react";

const services = [
  {
    icon: "💍",
    title: "Bridal Makeup",
    desc: "From traditional Rajasthani bridal elegance to modern glamour — custom designed for your perfect wedding day. HD & airbrush finish with long-stay techniques ensuring flawless looks from ceremony to reception.",
    tags: ["HD Finish", "Airbrush", "Waterproof"],
  },
  {
    icon: "🎭",
    title: "SFX & Prosthetic Makeup",
    desc: "Cinematic-level special effects makeup featuring custom silicone prosthetics, realistic wounds, aging effects, creature design, and theatrical transformations. Bollywood and Hollywood quality at your service.",
    tags: ["Silicone Prosthetics", "Creature Design", "Theatrical"],
  },
  {
    icon: "🌬️",
    title: "Airbrush Makeup",
    desc: "Ultra-smooth, camera-ready airbrush application that creates a flawless second-skin finish. Perfect for photography, film, and TV. Long-lasting, waterproof, and feather-light on skin.",
    tags: ["Photography", "Film Ready", "Long-stay"],
  },
  {
    icon: "⭐",
    title: "Celebrity & HD Makeup",
    desc: "Designed for celebrities, models, and public figures. High-definition makeup engineered to look impeccable on 4K cameras, film sets, and red-carpet events. Trusted by Bollywood artists and T-Series.",
    tags: ["Red Carpet", "4K Ready", "Bollywood"],
  },
  {
    icon: "🎨",
    title: "Face & Body Painting",
    desc: "Artistic face and body painting for films, events, festivals, and creative shoots. From intricate tribal art to fantasy characters — each piece is a wearable masterpiece of color and design.",
    tags: ["Film", "Events", "Fantasy Art"],
  },
  {
    icon: "📸",
    title: "Editorial Makeup",
    desc: "High-fashion editorial looks for magazine shoots, brand campaigns, and fashion weeks. Bold, conceptual, avant-garde artistry that makes a powerful visual statement through makeup.",
    tags: ["Fashion Week", "Brand Shoots", "Avant-garde"],
  },
  {
    icon: "🎬",
    title: "Movie & Theatrical Makeup",
    desc: "Full production makeup for films, web series, theater, and stage performances. Continuity-perfect looks that maintain integrity across long shooting schedules under intense lighting conditions.",
    tags: ["Film Sets", "Web Series", "Continuity"],
  },
  {
    icon: "💫",
    title: "Pre-Wedding Shoots",
    desc: "Curated makeup looks for pre-wedding photography sessions — romantic, bohemian, royal, or editorial. Tailored to each theme, location, and vision for breathtaking photographs.",
    tags: ["Photography", "Custom Looks", "Romantic"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
      style={{ background: "#F5EDE0" }}
    >
      {/* Background orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,149,106,0.3), transparent)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,94,60,0.3), transparent)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#C4956A" }}
          >
            What We Offer
          </p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
            style={{ color: "#2A1A10" }}
          >
            Our Premium Services
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#7A5C4F" }}
          >
            Every service is a carefully crafted experience — from concept to
            final look — delivered with precision, artistry, and luxury.
          </p>
          <div
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C4956A, transparent)",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              data-ocid={`services.item.${i + 1}`}
              className="relative rounded-2xl p-6 transition-smooth group cursor-default shadow-card hover:shadow-elevated"
              style={{
                background: "rgba(255,248,240,0.9)",
                border: "1px solid rgba(196,149,106,0.2)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(196,149,106,0.08), rgba(139,94,60,0.04))",
                }}
              />
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3
                className="font-display text-lg font-bold mb-3"
                style={{ color: "#2A1A10" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#7A5C4F" }}
              >
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(196,149,106,0.15)",
                      color: "#8B5E3C",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
