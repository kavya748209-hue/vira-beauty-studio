import { motion } from "motion/react";
import { useState } from "react";

interface ServiceData {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  price: string;
  features: string[];
  accentColor: string;
}

const SERVICES: ServiceData[] = [
  {
    id: "bridal",
    emoji: "👰",
    title: "Bridal Makeup",
    tagline: "The perfect look for your perfect day",
    price: "From ₹8,000",
    features: [
      "Full bridal look consultation",
      "HD flawless makeup",
      "Pre-wedding trial session",
      "Long-wearing formula",
      "Touch-up kit included",
    ],
    accentColor: "oklch(0.55 0.09 50)",
  },
  {
    id: "party",
    emoji: "✨",
    title: "Party & Occasion Makeup",
    tagline: "Glow for every celebration",
    price: "From ₹3,000",
    features: [
      "Event-ready look",
      "Airbrush option available",
      "Eye-catching statement styles",
      "8-hour lasting formula",
    ],
    accentColor: "oklch(0.75 0.10 75)",
  },
  {
    id: "film",
    emoji: "🎬",
    title: "Film & Television Makeup",
    tagline: "Camera-ready perfection",
    price: "From ₹5,000",
    features: [
      "HD/4K camera-ready finish",
      "Character & editorial makeup",
      "On-set continuity service",
      "Industry-grade products only",
    ],
    accentColor: "oklch(0.60 0.09 60)",
  },
  {
    id: "engagement",
    emoji: "💍",
    title: "Engagement Makeup",
    tagline: "Begin your forever beautifully",
    price: "From ₹4,000",
    features: [
      "Romantic & elegant look",
      "Photography-optimized finish",
      "Traditional & fusion styles",
      "Skin-tone matched palette",
    ],
    accentColor: "oklch(0.72 0.12 80)",
  },
  {
    id: "mehendi",
    emoji: "🌿",
    title: "Mehendi Ceremony Makeup",
    tagline: "Radiant looks for pre-wedding rituals",
    price: "From ₹2,500",
    features: [
      "Fresh dewy finish",
      "Festival-ready style",
      "Lightweight breathable formula",
      "Complements mehendi colours",
    ],
    accentColor: "oklch(0.68 0.10 70)",
  },
  {
    id: "editorial",
    emoji: "📸",
    title: "Editorial & Fashion Makeup",
    tagline: "High-fashion artistry for shoots & campaigns",
    price: "From ₹6,000",
    features: [
      "Creative concept development",
      "Avant-garde & bold looks",
      "Editorial styling support",
      "Campaign & magazine ready",
    ],
    accentColor: "oklch(0.55 0.08 55)",
  },
];

function ServiceCard({
  service,
  index,
}: { service: ServiceData; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`services.item.${index + 1}`}
      className="relative h-80"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      tabIndex={0}
      aria-label={service.title}
    >
      {/* Inner 3D container */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT FACE */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4 p-6"
          style={{
            backfaceVisibility: "hidden",
            background:
              "linear-gradient(145deg, var(--color-cream) 0%, var(--color-beige) 60%, oklch(0.90 0.04 75) 100%)",
            border: "1px solid oklch(0.55 0.09 50 / 0.25)",
            boxShadow:
              "0 8px 32px oklch(0.35 0.07 50 / 0.12), inset 0 2px 0 oklch(0.75 0.06 55 / 0.4)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${service.accentColor}, transparent)`,
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, var(--color-cream), oklch(0.75 0.06 55 / 0.5))",
              boxShadow:
                "0 4px 20px oklch(0.55 0.09 50 / 0.3), inset 0 1px 0 oklch(0.99 0.01 85 / 0.8)",
              border: "1px solid oklch(0.55 0.09 50 / 0.4)",
            }}
          >
            {service.emoji}
          </div>
          <h3
            className="font-display text-xl text-center leading-tight"
            style={{ color: "var(--color-brown-dark)" }}
          >
            {service.title}
          </h3>
          <p
            className="text-sm text-center"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {service.tagline}
          </p>
          <div
            className="px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
            style={{
              background:
                "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)",
              color: "var(--color-brown-dark)",
              boxShadow: "0 2px 12px oklch(0.55 0.09 50 / 0.35)",
            }}
          >
            {service.price}
          </div>
          <p className="text-xs" style={{ color: "var(--color-brown)" }}>
            Hover to see details →
          </p>
        </div>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-between p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(145deg, oklch(0.88 0.05 70) 0%, oklch(0.82 0.06 65) 100%)",
            border: "1px solid oklch(0.55 0.09 50 / 0.35)",
            boxShadow: "0 8px 32px oklch(0.35 0.07 50 / 0.18)",
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{service.emoji}</span>
              <h3
                className="font-display text-lg"
                style={{ color: "var(--color-brown-dark)" }}
              >
                {service.title}
              </h3>
            </div>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <span
                    className="mt-0.5 text-xs flex-shrink-0"
                    style={{ color: "var(--color-gold)" }}
                  >
                    ✦
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#contact"
            data-ocid={`services.book_button.${index + 1}`}
            className="block text-center py-2.5 px-4 rounded-xl text-sm font-semibold transition-smooth"
            style={{
              background:
                "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)",
              color: "var(--color-brown-dark)",
              boxShadow: "0 4px 16px oklch(0.55 0.09 50 / 0.4)",
            }}
          >
            Book This Service
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold-light), transparent)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-gold), transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--color-gold)" }}
            data-ocid="services.section"
          >
            ✦ Our Services ✦
          </span>
          <h2
            className="font-display text-4xl md:text-5xl mb-5"
            style={{ color: "var(--color-brown-dark)" }}
          >
            Transforming Beauty,
            <br />
            <em>One Brushstroke at a Time</em>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Each service is a bespoke experience crafted exclusively for you —
            from your first consultation to your final look.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="text-sm mb-5"
            style={{ color: "var(--color-text-secondary)" }}
          >
            All prices are starting rates. Custom packages available.
          </p>
          <a
            href="#contact"
            data-ocid="services.pricing_button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-smooth hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)",
              color: "var(--color-brown-dark)",
              boxShadow: "0 6px 24px oklch(0.55 0.09 50 / 0.4)",
            }}
          >
            View Full Pricing →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
