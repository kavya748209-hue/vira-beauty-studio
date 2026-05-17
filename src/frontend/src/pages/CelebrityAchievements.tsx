import { Award, Camera, Film, Sparkles, Star, Tv } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const achievements = [
  {
    icon: Film,
    title: "Bollywood Events",
    description:
      "Makeup artist for multiple Bollywood celebrity appearances and film shoots in Maharashtra region. Trusted by A-list talent for on-screen and off-screen looks.",
    quote: "Flawless execution, every single time.",
  },
  {
    icon: Tv,
    title: "Television Productions",
    description:
      "Official makeup artist for regional TV shows and Maharashtra's leading entertainment productions. Hundreds of episodes of premium broadcast-quality artistry.",
    quote: "The camera loves what Vira creates.",
  },
  {
    icon: Award,
    title: "Award Ceremonies",
    description:
      "Honored with 'Best Bridal Makeup Artist' award — recognized for excellence across western Maharashtra. The gold standard in bridal and event makeup.",
    quote: "An award-winning touch that speaks for itself.",
  },
  {
    icon: Camera,
    title: "Fashion & Editorial",
    description:
      "Featured in fashion editorials and luxury brand campaigns across India. Vira's editorial eye brings high-fashion aesthetics to every editorial shoot.",
    quote: "Magazine-perfect, every frame.",
  },
];

const floatingParticles = [
  { size: 8, top: "10%", left: "5%", delay: 0, duration: 6 },
  { size: 12, top: "20%", right: "8%", delay: 1, duration: 8 },
  { size: 6, top: "60%", left: "3%", delay: 2, duration: 7 },
  { size: 10, top: "75%", right: "5%", delay: 0.5, duration: 9 },
  { size: 5, top: "40%", left: "12%", delay: 1.5, duration: 5 },
  { size: 7, top: "85%", left: "20%", delay: 3, duration: 7 },
  { size: 9, top: "30%", right: "15%", delay: 2, duration: 6 },
  { size: 4, top: "50%", right: "20%", delay: 1, duration: 8 },
];

export function CelebrityAchievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="celebrity"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.22 0.06 50) 0%, oklch(0.28 0.07 55) 40%, oklch(0.32 0.08 58) 100%)",
      }}
    >
      {/* CSS Floating Particles */}
      {floatingParticles.map((p, _i) => (
        <div
          key={`particle-${p.size}-${p.top}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: "left" in p ? p.left : undefined,
            right: "right" in p ? (p as { right?: string }).right : undefined,
            background: "var(--color-gold)",
            opacity: 0.25,
            filter: `blur(${p.size > 8 ? 2 : 1}px)`,
            animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Large glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase gold-gradient-text">
            <Sparkles
              className="w-3 h-3"
              style={{ color: "var(--color-gold)" }}
            />
            Celebrity Collaborations
            <Sparkles
              className="w-3 h-3"
              style={{ color: "var(--color-gold)" }}
            />
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight"
          style={{ color: "var(--color-cream)" }}
        >
          The Face Behind
          <span className="block gold-gradient-text">the Stars</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-base md:text-lg mb-16 max-w-xl mx-auto"
          style={{ color: "oklch(0.75 0.05 65)" }}
        >
          Trusted by Bollywood celebrities, TV stars, and influencers across
          India
        </motion.p>

        {/* Center Feature — Golden frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 80,
          }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            {/* Multi-layer glow rings */}
            <div
              className="absolute inset-0 rounded-full animate-ping opacity-10"
              style={{
                background: "var(--color-gold)",
                animationDuration: "3s",
              }}
            />
            <div
              className="absolute -inset-3 rounded-full opacity-20 blur-md"
              style={{ background: "var(--color-gold)" }}
            />
            <div
              className="absolute -inset-6 rounded-full opacity-10 blur-xl"
              style={{ background: "var(--color-gold-light)" }}
            />

            {/* Award photo frame */}
            <div
              className="relative w-56 h-56 rounded-2xl overflow-hidden glow-gold"
              style={{
                border: "3px solid var(--color-gold)",
                boxShadow:
                  "0 0 30px oklch(0.75 0.06 55 / 0.6), 0 0 60px oklch(0.55 0.09 50 / 0.3), inset 0 0 20px oklch(0.55 0.09 50 / 0.1)",
              }}
            >
              <img
                src="/assets/user-photos/celebrity-award.png"
                alt="Vira — Celebrity Award Recognition"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src =
                    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80";
                  t.onerror = null;
                }}
              />
              {/* Gold overlay shimmer */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.75 0.06 55 / 0.12) 0%, transparent 50%, oklch(0.55 0.09 50 / 0.08) 100%)",
                }}
              />
              {/* Award badge overlay */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                  style={{
                    background: "oklch(0.15 0.05 50 / 0.85)",
                    color: "var(--color-gold)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid oklch(0.55 0.09 50 / 0.4)",
                  }}
                >
                  ★ Award Winner
                </span>
              </div>
            </div>

            {/* Orbiting ring */}
            <div
              className="absolute -inset-4 rounded-full border-2 border-dashed opacity-30 animate-spin"
              style={{
                borderColor: "var(--color-gold-light)",
                animationDuration: "20s",
              }}
            />
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-2xl p-6 group transition-smooth cursor-default"
              style={{
                background: "oklch(0.97 0.02 85 / 0.06)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid oklch(0.55 0.09 50 / 0.25)",
                boxShadow: "0 4px 24px oklch(0 0 0 / 0.25)",
              }}
            >
              {/* Gold border top accent */}
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
                }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth"
                style={{
                  background: "oklch(0.55 0.09 50 / 0.15)",
                  border: "1px solid oklch(0.55 0.09 50 / 0.3)",
                }}
              >
                <item.icon
                  className="w-6 h-6"
                  style={{ color: "var(--color-gold)" }}
                />
              </div>

              <h3
                className="font-display text-lg font-semibold mb-2"
                style={{ color: "var(--color-cream)" }}
              >
                {item.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "oklch(0.72 0.04 65)" }}
              >
                {item.description}
              </p>

              <p className="text-xs italic font-medium gold-gradient-text">
                &ldquo;{item.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider opacity-30 mb-12" />

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div
            className="relative rounded-3xl px-8 py-8"
            style={{
              background: "oklch(0.97 0.02 85 / 0.05)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid oklch(0.55 0.09 50 / 0.3)",
              boxShadow:
                "0 8px 40px oklch(0 0 0 / 0.3), inset 0 1px 0 oklch(0.75 0.06 55 / 0.15)",
            }}
          >
            {/* Opening quote mark */}
            <span
              className="absolute -top-6 left-8 font-display text-7xl leading-none opacity-30"
              style={{ color: "var(--color-gold)" }}
            >
              &ldquo;
            </span>

            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className="w-5 h-5 fill-current"
                  style={{ color: "var(--color-gold)" }}
                />
              ))}
            </div>

            <p
              className="font-display text-xl md:text-2xl italic leading-relaxed mb-4"
              style={{ color: "var(--color-cream)" }}
            >
              Vira&apos;s artistry transformed my look for the award ceremony.
              Absolutely breathtaking work!
            </p>

            <div className="flex items-center justify-center gap-3">
              <div
                className="w-8 h-px"
                style={{ background: "var(--color-gold)" }}
              />
              <p
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                A Bollywood Actress
              </p>
              <div
                className="w-8 h-px"
                style={{ background: "var(--color-gold)" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
