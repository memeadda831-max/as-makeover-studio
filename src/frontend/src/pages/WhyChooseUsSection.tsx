import { motion } from "motion/react";

const reasons = [
  {
    icon: "🏛️",
    title: "Bombay School Trained",
    desc: "Formally trained at India’s most prestigious makeup institution — the Bombay School of Makeup & Hair. Our foundation is unmatched technical excellence combined with artistic vision.",
  },
  {
    icon: "🎭",
    title: "Specialized SFX Expertise",
    desc: "One of the very few artists in Rajasthan offering Hollywood-grade Special Effects and Prosthetic makeup. Silicone prosthetics, creature design, and theatrical transformations at your service.",
  },
  {
    icon: "👑",
    title: "Celebrity-Trusted",
    desc: "Trusted by celebrities, T-Series artists, and Bollywood film productions. Our work has appeared on national and international screens — the same quality available for your special occasion.",
  },
  {
    icon: "✨",
    title: "Luxury Personalized Experience",
    desc: "Every client receives a private consultation, customized look design, and dedicated artistry session. No templates — every look is designed uniquely for you.",
  },
  {
    icon: "🌟",
    title: "Premium Products Only",
    desc: "We use only top-tier international makeup brands: MAC, NARS, Charlotte Tilbury, Kryolan, and Ben Nye. Long-stay, skin-safe, and camera-perfect for every occasion.",
  },
  {
    icon: "📍",
    title: "Serving Across India",
    desc: "Based in the royal city of Jodhpur, we travel across Rajasthan and all of India for destination weddings, film shoots, and celebrity events.",
  },
  {
    icon: "⭐",
    title: "5-Star Satisfaction",
    desc: "Consistently rated 5 stars by hundreds of clients. Our track record of 100% client satisfaction speaks for itself — from first consultation to final reveal.",
  },
  {
    icon: "🕰️",
    title: "Punctual & Professional",
    desc: "We understand the importance of timing on your special day. Our team is punctual, professional, and fully equipped to handle every situation with grace and efficiency.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #F5EDE0 0%, #EDD9C0 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(196,149,106,0.2) 0%, transparent 60%)",
        }}
      />
      {/* Floating accent orbs */}
      <div
        className="absolute top-10 right-10 w-48 h-48 rounded-full pointer-events-none float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(196,149,106,0.18), transparent)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-20 left-10 w-56 h-56 rounded-full pointer-events-none float-medium"
        style={{
          background:
            "radial-gradient(circle, rgba(139,94,60,0.15), transparent)",
          filter: "blur(50px)",
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
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4"
            style={{
              background: "rgba(196,149,106,0.12)",
              border: "1px solid rgba(196,149,106,0.3)",
              backdropFilter: "blur(8px)",
              boxShadow:
                "0 0 20px rgba(196,149,106,0.15), inset 0 0 12px rgba(255,248,240,0.1)",
            }}
          >
            <span>👑</span>
            <p
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#C4956A" }}
            >
              Why AS Makeover
            </p>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
            style={{
              color: "#2A1A10",
              textShadow: "0 4px 24px rgba(139,94,60,0.1)",
            }}
          >
            Why Choose Us
          </h2>
          <p
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#7A5C4F" }}
          >
            Excellence is not an accident — it is the result of years of
            training, passion, and an uncompromising commitment to the art of
            makeup.
          </p>
          <div
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C4956A, transparent)",
              boxShadow: "0 0 16px rgba(196,149,106,0.4)",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, rotateX: -12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: i * 0.09,
                type: "spring",
                stiffness: 90,
              }}
              whileHover={{ y: -12, scale: 1.04, rotateX: -4, rotateY: 4 }}
              data-ocid={`why.item.${i + 1}`}
              className="relative p-6 rounded-2xl text-center group cursor-default transition-smooth border-spin shimmer-shine"
              style={{
                background: "rgba(255,248,240,0.85)",
                border: "1px solid rgba(196,149,106,0.22)",
                boxShadow:
                  "0 8px 32px rgba(139,94,60,0.1), 0 2px 8px rgba(139,94,60,0.06)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(196,149,106,0.1), rgba(255,248,240,0.3), rgba(139,94,60,0.05))",
                  backdropFilter: "blur(4px)",
                }}
              />
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 transition-smooth group-hover:scale-115 group-hover:rotate-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(196,149,106,0.25), rgba(139,94,60,0.12))",
                  boxShadow:
                    "0 4px 16px rgba(196,149,106,0.2), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                {reason.icon}
              </div>
              <h3
                className="font-display text-base font-bold mb-3"
                style={{ color: "#2A1A10" }}
              >
                {reason.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#7A5C4F" }}
              >
                {reason.desc}
              </p>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-smooth"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #C4956A, #E8C99A, transparent)",
                  boxShadow: "0 0 12px rgba(196,149,106,0.5)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
