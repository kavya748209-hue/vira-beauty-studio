import { Award, Clock, MapPin, Sparkles, Star, Users } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({
  target,
  suffix = "+",
  duration = 2000,
}: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 300, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 8, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 50, suffix: "+", label: "Celebrity Events", icon: Star },
  { value: 100, suffix: "%", label: "Premium Products", icon: Award },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--color-cream) 0%, var(--color-beige) 50%, oklch(0.92 0.02 55) 100%)",
      }}
    >
      {/* Decorative background orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-[80px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold-light), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-[60px] pointer-events-none"
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
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: "var(--color-gold)" }}
          >
            <Sparkles className="w-3 h-3" />
            Our Story
            <Sparkles className="w-3 h-3" />
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight"
          style={{ color: "var(--color-brown-dark)" }}
        >
          Where Artistry
          <span className="block gold-gradient-text">Meets Luxury</span>
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Vira Makeup Artistry &amp; Beauty Studio has been redefining
              beauty in Akola, Maharashtra since 2016. Founded by lead artist
              Vira, the studio blends international makeup techniques with a
              deep understanding of Indian bridal traditions, creating looks
              that are timeless, luminous, and uniquely personal. From intimate
              mehendi evenings to grand Bollywood productions, every client
              receives bespoke, five-star service.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Vira has collaborated with renowned celebrities, TV personalities,
              and film productions across Maharashtra and beyond. Her
              award-winning artistry has graced red carpets, magazine
              editorials, and landmark weddings — bringing Hollywood-level
              precision to every look.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Bridal Artistry",
                "Celebrity Makeup",
                "International Techniques",
                "Luxury Products",
                "Editorial Shoots",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border"
                  style={{
                    background: "oklch(0.97 0.02 85 / 0.8)",
                    borderColor: "var(--color-gold-light)",
                    color: "var(--color-brown)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Location */}
            <div
              className="flex items-center gap-2 pt-4 text-sm font-medium"
              style={{ color: "var(--color-brown)" }}
            >
              <MapPin
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--color-gold)" }}
              />
              Serving Akola and surrounding regions of Maharashtra
            </div>
          </motion.div>

          {/* Right: visual collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative flex items-center justify-center"
          >
            {/* Golden glow orb */}
            <div
              className="absolute inset-0 rounded-3xl blur-[40px] opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse, var(--color-gold), transparent 70%)",
              }}
            />

            {/* Main card */}
            <div
              className="relative glass-card rounded-3xl p-6 w-full max-w-sm mx-auto"
              style={{ border: "1px solid oklch(0.55 0.09 50 / 0.35)" }}
            >
              {/* Primary image */}
              <div
                className="rounded-2xl overflow-hidden mb-4 aspect-[4/5] relative"
                style={{
                  background:
                    "linear-gradient(160deg, var(--color-beige-dark), var(--color-brown))",
                }}
              >
                <img
                  src="/assets/user-photos/studio-exterior.png"
                  alt="Vira Makeup Studio — Lead Artist"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.src =
                      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80";
                    t.onerror = null;
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 glow-gold"
                    style={{ background: "var(--color-gold)" }}
                  >
                    <span className="text-3xl">✨</span>
                  </div>
                  <p
                    className="font-display text-2xl font-semibold"
                    style={{ color: "var(--color-cream)" }}
                  >
                    Vira
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.75 0.06 55)" }}
                  >
                    Lead Makeup Artist
                  </p>
                  <p
                    className="text-xs mt-2 opacity-80"
                    style={{ color: "var(--color-cream)" }}
                  >
                    8+ Years of Excellence
                  </p>
                </div>
              </div>

              {/* Floating stat pill */}
              <div
                className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-2 text-center"
                style={{ border: "1px solid oklch(0.55 0.09 50 / 0.4)" }}
              >
                <p className="font-display text-lg font-bold gold-gradient-text">
                  300+
                </p>
                <p className="text-xs" style={{ color: "var(--color-brown)" }}>
                  Happy Clients
                </p>
              </div>

              {/* Bottom badge */}
              <div
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-2 text-center"
                style={{ border: "1px solid oklch(0.55 0.09 50 / 0.4)" }}
              >
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className="w-3 h-3 fill-current"
                      style={{ color: "var(--color-gold)" }}
                    />
                  ))}
                </div>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--color-brown)" }}
                >
                  Award Winner
                </p>
              </div>

              {/* Micro caption */}
              <p
                className="text-center text-xs mt-3"
                style={{ color: "var(--color-brown)" }}
              >
                Akola's Premier Luxury Studio
              </p>
            </div>

            {/* Floating decorative circles */}
            <div
              className="absolute -top-8 left-4 w-16 h-16 rounded-full border-2 opacity-40 animate-spin"
              style={{
                borderColor: "var(--color-gold-light)",
                animationDuration: "12s",
              }}
            />
            <div
              className="absolute -bottom-6 right-8 w-10 h-10 rounded-full border opacity-30 animate-spin"
              style={{
                borderColor: "var(--color-gold)",
                animationDuration: "8s",
                animationDirection: "reverse",
              }}
            />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-16" />

        {/* Stat Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-smooth"
              style={{ border: "1px solid oklch(0.55 0.09 50 / 0.25)" }}
            >
              <stat.icon
                className="w-6 h-6 mx-auto mb-3"
                style={{ color: "var(--color-gold)" }}
              />
              <p className="font-display text-3xl md:text-4xl font-bold gold-gradient-text mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-center mt-16"
        >
          <p
            className="font-display text-xl italic"
            style={{ color: "var(--color-brown)" }}
          >
            &ldquo;Every face is a canvas. Every look, a masterpiece.&rdquo;
          </p>
          <p
            className="text-sm mt-2 tracking-widest uppercase"
            style={{ color: "var(--color-gold)" }}
          >
            — Vira, Lead Artist &amp; Founder
          </p>
        </motion.div>
      </div>
    </section>
  );
}
