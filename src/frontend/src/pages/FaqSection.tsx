import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    q: "What areas do you serve for bridal makeup?",
    a: "We are based in Jodhpur, Rajasthan, but we serve clients across all of Rajasthan including Jaipur, Udaipur, Jodhpur, Bikaner, and Jaisalmer. We also travel pan-India for destination weddings, film shoots, and celebrity events. Travel charges apply for outstation bookings.",
  },
  {
    q: "How far in advance should I book for my wedding makeup?",
    a: "For bridal bookings, we recommend booking at least 3-6 months in advance, especially for peak wedding season (October to March). This ensures your preferred date is secured. For pre-wedding shoots, 1-2 months advance booking is recommended. Contact us immediately to check availability.",
  },
  {
    q: "What is SFX and Prosthetic makeup? Do you offer trials?",
    a: "SFX (Special Effects) and Prosthetic makeup involves creating realistic illusions using silicone appliances, foam latex, and body paint. This includes aging effects, wounds, scars, character transformations, and creature designs for films and theater. Yes, we offer trial sessions for SFX projects to ensure the final look meets your vision.",
  },
  {
    q: "Do you use skin-safe, cruelty-free products?",
    a: "Absolutely. We exclusively use premium international makeup brands — MAC, NARS, Charlotte Tilbury, Kryolan, and Ben Nye — all of which are dermatologically tested and skin-safe. For bridal makeup, we perform a patch test to ensure no allergic reactions. Our prosthetic materials are medical-grade and skin-safe.",
  },
  {
    q: "What is included in the bridal makeup package?",
    a: "Our bridal packages typically include a pre-wedding consultation, trial makeup session, full bridal day makeup, and touch-up services. We also offer packages that include makeup for the brides family members. Contact us for detailed package information and customized pricing based on your requirements.",
  },
  {
    q: "Can you replicate celebrity or Bollywood looks?",
    a: "Yes! Having worked with Bollywood celebrities and on T-Series productions, we have deep expertise in recreating celebrity-inspired looks. Whether you want to look like your favourite Bollywood actress for your wedding or a film-inspired character for a themed event, we can create it to perfection.",
  },
  {
    q: "How long does the makeup session take?",
    a: "Timing varies by service: Bridal makeup typically takes 2-4 hours for a complete look. Airbrush makeup takes 1.5-2 hours. SFX/Prosthetic makeup can take 3-8 hours depending on complexity. Editorial/fashion looks take 1-2 hours. We always factor in ample time to ensure there is no rushing on your big day.",
  },
  {
    q: "Do you offer airbrush makeup for functions other than weddings?",
    a: "Yes! Airbrush makeup is available for all occasions — pre-wedding shoots, fashion photoshoots, film/TV productions, red carpet events, corporate events, and sangeet/mehendi ceremonies. It is especially popular for its long-lasting waterproof formula that withstands the Rajasthan climate beautifully.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#F5EDE0" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,149,106,0.15), transparent)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Got Questions?
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-5"
            style={{ color: "#2A1A10" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base" style={{ color: "#7A5C4F" }}>
            Everything you need to know about our services and booking process.
          </p>
          <div
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C4956A, transparent)",
            }}
          />
        </motion.div>

        <div className="space-y-3" data-ocid="faq.list">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              data-ocid={`faq.item.${i + 1}`}
              className="rounded-2xl overflow-hidden transition-smooth shadow-card"
              style={{
                border: `1px solid ${open === i ? "rgba(196,149,106,0.5)" : "rgba(196,149,106,0.2)"}`,
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                data-ocid={`faq.toggle.${i + 1}`}
                className="w-full flex items-center justify-between p-5 text-left transition-smooth"
                style={{
                  background:
                    open === i
                      ? "rgba(196,149,106,0.12)"
                      : "rgba(255,248,240,0.9)",
                }}
              >
                <span
                  className="font-semibold text-sm md:text-base pr-4"
                  style={{ color: "#2A1A10" }}
                >
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: "rgba(196,149,106,0.2)",
                    color: "#8B5E3C",
                  }}
                >
                  &#9660;
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-5 pb-5 pt-2">
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#5C3D2E" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
