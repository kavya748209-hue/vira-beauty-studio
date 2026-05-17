import { motion, useInView } from "motion/react";
import { useRef } from "react";

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: 6 + (i % 4) * 4,
  top: `${8 + ((i * 19) % 80)}%`,
  left: `${5 + ((i * 27) % 90)}%`,
  delay: `${(i * 0.5) % 3}s`,
  duration: `${4 + (i % 3)}s`,
}));

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="book"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #3D1F0D 0%, #6B4423 60%, #4a2810 100%)",
      }}
    >
      {/* Radial overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196,149,106,0.10) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 20% 80%, rgba(232,213,196,0.06) 0%, transparent 60%)",
        }}
      />
      {/* Shimmer stripe */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, transparent 30%, rgba(196,149,106,0.06) 50%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: `rgba(232,213,196,${0.12 + (p.id % 4) * 0.06})`,
            filter: "blur(2px)",
            animation: `floatParticle ${p.duration} ${p.delay} ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <span
            className="inline-block text-sm font-semibold tracking-[0.3em] uppercase mb-5"
            style={{ color: "rgba(232,213,196,0.75)" }}
          >
            Ready for a Transformation?
          </span>

          {/* Headline */}
          <h2
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            style={{ color: "#FAF7F2" }}
          >
            Your Dream Look
            <br />
            <span style={{ color: "#E8D5C4" }}>Awaits</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
            style={{ color: "rgba(250,247,242,0.88)" }}
          >
            Every bride deserves to feel like royalty on her wedding day.
          </p>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(232,213,196,0.80)" }}
          >
            Let Vira Makeup Artistry transform your vision into reality with{" "}
            <span className="font-semibold" style={{ color: "#E8D5C4" }}>
              8+ years of luxury bridal expertise.
            </span>
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="/book"
              data-ocid="cta.book_button"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-base tracking-wide transition-smooth hover:scale-105"
              style={{
                background: "#FAF7F2",
                color: "#3D1F0D",
                boxShadow:
                  "0 6px 32px rgba(250,247,242,0.25), 0 2px 8px rgba(61,31,13,0.3)",
              }}
            >
              ✦ Book Your Appointment
            </a>

            <a
              href="/bridal-packages"
              data-ocid="cta.packages_button"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-base tracking-wide transition-smooth hover:scale-105"
              style={{
                border: "2px solid rgba(250,247,242,0.6)",
                color: "#FAF7F2",
                background: "transparent",
              }}
            >
              View Bridal Packages
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="inline-flex flex-wrap items-center justify-center gap-4 px-8 py-4 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(250,247,242,0.07)",
              border: "1px solid rgba(232,213,196,0.25)",
            }}
          >
            <span style={{ color: "#E8D5C4" }}>★ 4.9 Rating</span>
            <span style={{ color: "rgba(232,213,196,0.35)" }}>|</span>
            <span style={{ color: "#E8D5C4" }}>500+ Happy Brides</span>
            <span style={{ color: "rgba(232,213,196,0.35)" }}>|</span>
            <span style={{ color: "#E8D5C4" }}>Celebrity Approved</span>
            <span style={{ color: "rgba(232,213,196,0.35)" }}>|</span>
            <span style={{ color: "#E8D5C4" }}>8+ Years Experience</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
