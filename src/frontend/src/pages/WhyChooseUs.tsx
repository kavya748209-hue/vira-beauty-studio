import { motion } from "motion/react";

interface FeatureCard {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const FEATURES: FeatureCard[] = [
  {
    id: "celebrity",
    emoji: "⭐",
    title: "Celebrity-Trusted Artist",
    description:
      "Worked with Bollywood actresses, TV stars, and public figures across Maharashtra. Our portfolio speaks for itself — trusted by the biggest names.",
  },
  {
    id: "experience",
    emoji: "🎨",
    title: "8+ Years of Mastery",
    description:
      "Over 8 years crafting perfect looks for 300+ happy clients. Unmatched experience you can trust on your most important and memorable day.",
  },
  {
    id: "products",
    emoji: "✨",
    title: "Premium International Products",
    description:
      "Only the finest — MAC, NARS, Charlotte Tilbury, and Kryolan. Your skin deserves the highest quality, and we never compromise.",
  },
  {
    id: "award",
    emoji: "🏆",
    title: "Award-Winning Artistry",
    description:
      "Recognized as Best Bridal Makeup Artist in western Maharashtra. Excellence is not just our goal — it is our standard, every single time.",
  },
  {
    id: "bespoke",
    emoji: "💎",
    title: "Completely Bespoke Service",
    description:
      "Every look is custom-crafted for your unique features, skin tone, and personal style. No templates, no shortcuts — no two looks are ever alike.",
  },
  {
    id: "location",
    emoji: "🌸",
    title: "On-Location & Studio Service",
    description:
      "We come to you or welcome you in our luxury studio in Keshav Nagar, Akola. Convenience without compromise, beauty without boundaries.",
  },
];

const STATS = [
  { value: "300+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Celebrity Clients" },
  { value: "1000+", label: "Looks Created" },
];

const TESTIMONIAL = {
  quote:
    '"Vira transformed my bridal look beyond imagination. She has this magical ability to understand your vision and bring it to life. Every guest at my wedding could not stop complimenting my makeup."',
  author: "Priya Sharma",
  role: "Bride, Nagpur",
  stars: 5,
};

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(155deg, var(--color-beige) 0%, oklch(0.90 0.04 78) 40%, var(--color-beige) 100%)",
      }}
    >
      {/* Diagonal texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.55 0.09 50 / 0.06) 0px, oklch(0.55 0.09 50 / 0.06) 1px, transparent 1px, transparent 12px)",
        }}
      />
      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.06 55 / 0.25), transparent)",
          filter: "blur(80px)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
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
            data-ocid="why-us.section"
          >
            ✦ Why Choose Vira ✦
          </span>
          <h2
            className="font-display text-4xl md:text-5xl mb-5"
            style={{ color: "var(--color-brown-dark)" }}
          >
            The Vira Difference
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Beyond makeup — an experience that transforms and elevates every
            detail of your most cherished moments.
          </p>
          <div className="section-divider mt-8 max-w-xs mx-auto" />
        </motion.div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center py-6 px-4 rounded-2xl glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4, scale: 1.02 }}
              data-ocid={`why-us.stat.${i + 1}`}
            >
              <div className="font-display text-3xl md:text-4xl mb-1 gold-gradient-text">
                {stat.value}
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              className="glass-card rounded-2xl p-7 group cursor-default"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              data-ocid={`why-us.item.${i + 1}`}
            >
              {/* Icon bubble */}
              <div className="mb-5">
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background:
                      "radial-gradient(circle at 35% 35%, var(--color-cream), var(--color-beige))",
                    border: "1px solid oklch(0.55 0.09 50 / 0.4)",
                    boxShadow:
                      "0 4px 16px oklch(0.55 0.09 50 / 0.25), inset 0 1px 0 oklch(0.95 0.01 55 / 0.6)",
                  }}
                >
                  {feature.emoji}
                </motion.div>
              </div>

              <h3
                className="font-display text-xl mb-3 leading-tight"
                style={{ color: "var(--color-brown-dark)" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {feature.description}
              </p>

              <div
                className="mt-5 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-smooth"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-gold), var(--color-gold-light), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          data-ocid="why-us.testimonial"
          className="relative rounded-3xl overflow-hidden px-8 md:px-16 py-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, var(--color-brown-dark) 0%, var(--color-brown) 100%)",
            boxShadow: "0 20px 60px oklch(0.35 0.07 50 / 0.3)",
          }}
        >
          <div
            className="absolute top-6 left-8 text-7xl leading-none opacity-10 select-none font-display"
            style={{ color: "var(--color-gold)" }}
          >
            “
          </div>
          <div
            className="absolute bottom-6 right-8 text-7xl leading-none opacity-10 select-none font-display"
            style={{ color: "var(--color-gold)" }}
          >
            ”
          </div>

          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: TESTIMONIAL.stars }, (_, i) => i + 1).map(
              (starNum) => (
                <motion.span
                  key={`star-${starNum}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + (starNum - 1) * 0.08,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="text-2xl"
                  style={{ color: "var(--color-gold)" }}
                >
                  ★
                </motion.span>
              ),
            )}
          </div>

          <blockquote
            className="font-display text-xl md:text-2xl italic leading-relaxed mb-6 max-w-3xl mx-auto"
            style={{ color: "var(--color-cream)" }}
          >
            {TESTIMONIAL.quote}
          </blockquote>

          <div>
            <p
              className="font-semibold text-base"
              style={{ color: "var(--color-gold)" }}
            >
              — {TESTIMONIAL.author}
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(0.75 0.06 60)" }}
            >
              {TESTIMONIAL.role}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
