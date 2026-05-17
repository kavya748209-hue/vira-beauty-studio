import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const particles = [
  { id: "p0", size: 5, left: "8%", top: "12%", delay: 0, dur: 9 },
  { id: "p1", size: 8, left: "22%", top: "55%", delay: 1.2, dur: 13 },
  { id: "p2", size: 4, left: "38%", top: "28%", delay: 2.5, dur: 7 },
  { id: "p3", size: 10, left: "52%", top: "72%", delay: 0.8, dur: 11 },
  { id: "p4", size: 6, left: "67%", top: "18%", delay: 3.1, dur: 8 },
  { id: "p5", size: 12, left: "78%", top: "48%", delay: 1.7, dur: 14 },
  { id: "p6", size: 4, left: "88%", top: "33%", delay: 0.3, dur: 10 },
  { id: "p7", size: 7, left: "14%", top: "80%", delay: 2.0, dur: 12 },
  { id: "p8", size: 9, left: "44%", top: "90%", delay: 4.2, dur: 9 },
  { id: "p9", size: 5, left: "93%", top: "65%", delay: 1.5, dur: 7 },
];

const philosophyValues = [
  {
    icon: "🎨",
    title: "Every Face is a Canvas",
    desc: "Each client has unique beauty we celebrate and elevate with artistry and care.",
  },
  {
    icon: "✨",
    title: "Perfection in Every Detail",
    desc: "From skin prep to final setting, we never cut corners on quality.",
  },
  {
    icon: "💎",
    title: "Premium Products Only",
    desc: "We use only high-end, skin-safe products on every single client.",
  },
  {
    icon: "🌸",
    title: "Timeless Meets Modern",
    desc: "Classic techniques enhanced with contemporary artistry and trends.",
  },
];

const specialties = [
  { icon: "👰", label: "Bridal Makeup" },
  { icon: "📸", label: "Editorial & Fashion" },
  { icon: "⭐", label: "Celebrity Collaborations" },
  { icon: "✨", label: "Party & Event Glam" },
  { icon: "💍", label: "Pre-Wedding Shoots" },
  { icon: "🌺", label: "Engagement Ceremonies" },
];

function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial =
    direction === "up"
      ? { opacity: 0, y: 40 }
      : direction === "left"
        ? { opacity: 0, x: -40 }
        : direction === "right"
          ? { opacity: 0, x: 40 }
          : { opacity: 0 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "About Vira | Vira Makeup Artistry & Beauty Studio";
  }, []);

  return (
    <main
      className="min-h-screen pt-20 overflow-x-hidden"
      style={{ background: "var(--color-cream)" }}
      data-ocid="about.page"
    >
      {/* Floating background particles */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              background: "oklch(0.48 0.07 48 / 0.12)",
            }}
            animate={{
              y: ["-12px", "16px", "-8px", "12px", "-12px"],
              x: ["-6px", "10px", "-10px", "6px", "-6px"],
              opacity: [0.08, 0.18, 0.12, 0.2, 0.08],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Large soft glow orbs */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 500,
            height: 500,
            left: "-10%",
            top: "5%",
            background: "oklch(0.92 0.02 81 / 0.15)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 400,
            height: 400,
            right: "-8%",
            top: "40%",
            background: "oklch(0.86 0.03 72 / 0.12)",
          }}
        />
      </div>

      {/* ===== 1. PAGE HERO ===== */}
      <section className="relative pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <FadeIn delay={0.1}>
                <span
                  className="text-xs tracking-[0.3em] uppercase font-medium block mb-4"
                  style={{ color: "var(--color-brown-light)" }}
                >
                  The Art of Beauty
                </span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1
                  className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight"
                  style={{ color: "var(--color-brown-dark)" }}
                >
                  Meet Vira —{" "}
                  <span className="gold-gradient-text">Your Beauty Artist</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p
                  className="text-lg mb-10 leading-relaxed max-w-lg"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  For over 8 years, Vira has been transforming brides,
                  celebrities, and individuals across Maharashtra with the art
                  of premium makeup.
                </p>
              </FadeIn>
              <FadeIn delay={0.45}>
                <div
                  ref={statsRef}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                >
                  {[
                    { val: "300+", lbl: "Clients" },
                    { val: "8+", lbl: "Years" },
                    { val: "50+", lbl: "Celebrities" },
                    { val: "100%", lbl: "Premium" },
                  ].map((s) => (
                    <div
                      key={s.lbl}
                      className="glass-card rounded-2xl px-4 py-5 text-center"
                    >
                      <div
                        className="text-3xl font-display font-bold"
                        style={{ color: "var(--color-brown-dark)" }}
                      >
                        {s.val}
                      </div>
                      <div
                        className="text-xs mt-1 font-medium tracking-wide"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {s.lbl}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right — hero image */}
            <FadeIn delay={0.3} direction="right">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "oklch(0.48 0.07 48 / 0.18)",
                    filter: "blur(40px)",
                    transform: "scale(0.88) translateY(6%)",
                  }}
                  aria-hidden="true"
                />
                <motion.img
                  src="/assets/user-photos/studio-exterior.png"
                  alt="Vira Beauty Studio — Keshav Nagar, Akola"
                  className="relative z-10 w-full rounded-3xl shadow-2xl object-cover"
                  style={{
                    aspectRatio: "1/1",
                    boxShadow:
                      "0 25px 60px oklch(0.48 0.07 48 / 0.25), 0 8px 24px oklch(0.48 0.07 48 / 0.15)",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Decorative corner accent */}
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl z-0"
                  style={{
                    background: "oklch(0.86 0.03 72 / 0.4)",
                    border: "1px solid oklch(0.92 0.02 81 / 0.5)",
                  }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <hr className="section-divider mx-8" />

      {/* ===== 2. ARTIST BIO ===== */}
      <section
        className="relative py-24"
        style={{ background: "oklch(0.98 0.008 96)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
              style={{ color: "var(--color-brown-dark)" }}
            >
              A Passion Born from Art
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              {[
                "Vira, the visionary behind Vira Makeup Artistry & Beauty Studio, discovered her passion for makeup art as a young girl in Akola. Trained under some of Maharashtra's most respected beauty professionals, she has spent over 8 years perfecting the delicate balance between timeless elegance and contemporary trends.",
                "Her expertise spans bridal makeup, editorial fashion looks, and celebrity collaborations — each crafted with meticulous attention to skin tone, occasion, and the client's unique personality. Vira's approach is deeply personal: she spends time understanding her clients before ever picking up a brush.",
                "Based in Keshav Nagar, Akola, Vira has earned a reputation as one of Vidarbha's most sought-after makeup artists. Her work has been featured in regional publications, and she has collaborated with notable personalities from Bollywood and the regional television industry.",
              ].map((para, i) => (
                <FadeIn key={para.slice(0, 20)} delay={i * 0.15}>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {para}
                  </p>
                </FadeIn>
              ))}
            </div>

            {/* Image */}
            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl"
                  style={{ background: "oklch(0.92 0.02 81 / 0.35)" }}
                  aria-hidden="true"
                />
                <motion.img
                  src="/assets/user-photos/celebrity-award.png"
                  alt="Vira receiving celebrity industry recognition award"
                  className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
                  style={{ aspectRatio: "4/3" }}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== 3. PHILOSOPHY / VALUES ===== */}
      <section className="py-24" style={{ background: "var(--color-cream)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-center mb-4"
              style={{ color: "var(--color-brown-dark)" }}
            >
              Our Philosophy
            </h2>
            <p
              className="text-center text-base mb-14 max-w-xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Four guiding principles that define every look we create.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyValues.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <motion.div
                  data-ocid={`about.philosophy.${i + 1}`}
                  className="glass-card rounded-2xl p-7 text-center cursor-default h-full"
                  style={{ background: "oklch(0.95 0.018 88 / 0.7)" }}
                  whileHover={{
                    y: -10,
                    rotateX: 4,
                    rotateY: -4,
                    boxShadow:
                      "0 20px 50px oklch(0.48 0.07 48 / 0.18), 0 8px 20px oklch(0.48 0.07 48 / 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-5">{v.icon}</div>
                  <h3
                    className="font-display font-bold text-lg mb-3"
                    style={{ color: "var(--color-brown-dark)" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {v.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider mx-8" />

      {/* ===== 4. EXPERTISE ===== */}
      <section className="py-24" style={{ background: "oklch(0.96 0.015 85)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-center mb-4"
              style={{ color: "var(--color-brown-dark)" }}
            >
              Our Specialties
            </h2>
            <p
              className="text-center text-base mb-14 max-w-xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              From intimate ceremonies to grand celebrations, we bring our full
              artistry to every occasion.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {specialties.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <motion.div
                  data-ocid={`about.specialty.${i + 1}`}
                  className="rounded-2xl px-6 py-7 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-brown-dark) 0%, var(--color-brown) 100%)",
                    color: "var(--color-cream)",
                    boxShadow: "0 8px 24px oklch(0.32 0.06 45 / 0.25)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div className="font-display font-semibold text-base">
                    {s.label}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. STUDIO SECTION ===== */}
      <section className="py-24" style={{ background: "oklch(0.98 0.008 96)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Studio image */}
            <FadeIn direction="left">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl"
                  style={{ background: "oklch(0.86 0.03 72 / 0.25)" }}
                  aria-hidden="true"
                />
                <motion.img
                  src="/assets/user-photos/bride-kundan-jewelry.png"
                  alt="Stunning Kundan bridal look by Vira"
                  className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
                  style={{ aspectRatio: "4/3" }}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </FadeIn>

            {/* Studio info */}
            <div>
              <FadeIn delay={0.1}>
                <span
                  className="text-xs tracking-[0.3em] uppercase font-medium block mb-3"
                  style={{ color: "var(--color-brown-light)" }}
                >
                  Your Sanctuary
                </span>
                <h2
                  className="text-4xl md:text-5xl font-display font-bold mb-6"
                  style={{ color: "var(--color-brown-dark)" }}
                >
                  Visit Our Studio
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Our studio in Keshav Nagar, Akola is a sanctuary of beauty —
                  thoughtfully designed to make every client feel relaxed and
                  pampered from the moment they walk in.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: "📍",
                      label: "Address",
                      value:
                        "M2FG+XXW, Keshav Nagar, Akola, Maharashtra 444004",
                    },
                    {
                      icon: "📞",
                      label: "Phone",
                      value: "07721848035",
                    },
                    {
                      icon: "🕐",
                      label: "Hours",
                      value: "9AM – 7PM, Monday to Saturday",
                    },
                  ].map((d) => (
                    <div key={d.label} className="flex items-start gap-4">
                      <span className="text-xl mt-0.5">{d.icon}</span>
                      <div>
                        <div
                          className="text-xs font-medium tracking-wide uppercase mb-0.5"
                          style={{ color: "var(--color-brown-light)" }}
                        >
                          {d.label}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {d.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <a
                  href="/book"
                  data-ocid="about.studio_book_button"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-smooth hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-brown-dark) 0%, var(--color-brown) 100%)",
                    color: "var(--color-cream)",
                    boxShadow: "0 8px 24px oklch(0.32 0.06 45 / 0.35)",
                  }}
                >
                  Book a Session
                  <span aria-hidden="true">→</span>
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. BOTTOM CTA ===== */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-brown-dark) 0%, var(--color-brown) 60%, oklch(0.60 0.06 55) 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "oklch(0.92 0.02 81 / 0.08)",
            transform: "translate(-30%, -40%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "oklch(0.86 0.03 72 / 0.1)",
            transform: "translate(30%, 40%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2
              className="text-4xl md:text-5xl font-display font-bold mb-4"
              style={{ color: "var(--color-cream)" }}
            >
              Start Your Beauty Journey
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="text-lg mb-10"
              style={{ color: "oklch(0.92 0.02 81 / 0.8)" }}
            >
              Experience the Vira difference today
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <a
              href="/book"
              data-ocid="about.bottom_book_button"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-base transition-smooth hover:scale-105"
              style={{
                background: "var(--color-cream)",
                color: "var(--color-brown-dark)",
                boxShadow: "0 10px 40px oklch(0.32 0.06 45 / 0.4)",
              }}
            >
              Book Now
              <span aria-hidden="true">✦</span>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer spacing */}
      <div style={{ background: "var(--color-cream)", height: 32 }} />
    </main>
  );
}
