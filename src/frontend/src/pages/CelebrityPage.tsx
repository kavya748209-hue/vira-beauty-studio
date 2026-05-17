import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ──────────────────────────────────────────────
   Animated Counter
────────────────────────────────────────────── */
function AnimatedCounter({
  target,
  suffix = "",
}: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
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
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ──────────────────────────────────────────────
   3D Tilt Card
────────────────────────────────────────────── */
function TiltCard({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    el.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "transform 0.2s ease",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Data
────────────────────────────────────────────── */
const STATS = [
  { value: 50, suffix: "+", label: "Celebrity Clients" },
  { value: 300, suffix: "+", label: "Happy Brides" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Award Events" },
];

const WORKS = [
  {
    src: "https://images.unsplash.com/photo-1512257595225-0f2fd30b1ec7?w=600&q=80",
    label: "Bollywood Feature",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    label: "Fashion Editorial",
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
    label: "Award Night",
  },
  {
    src: "https://images.unsplash.com/photo-1620065571946-4b62ffbb025d?w=600&q=80",
    label: "Celebrity Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    label: "Film Shoot",
  },
  {
    src: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=600&q=80",
    label: "Magazine Cover Look",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Vira's artistry is truly unmatched. My wedding look was ethereal \u2014 every guest commented how radiant I looked. She's a true gem of Vidarbha's beauty industry.",
    name: "Preeti Sharma",
    event: "Bollywood Celebrity Wedding",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&q=80",
  },
  {
    quote:
      "As a TV actress, I need makeup that looks flawless under harsh studio lights. Vira consistently delivers perfection \u2014 detail-oriented and incredibly professional.",
    name: "Kavya Malhotra",
    event: "Television Serial Shoot",
    image:
      "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=200&q=80",
  },
  {
    quote:
      "Vira did my makeup for three award functions in a row. Each look was completely unique and stunning. I wouldn't trust anyone else for important events.",
    name: "Anjali Rao",
    event: "Regional Awards Ceremony",
    image:
      "https://images.unsplash.com/photo-1595515106972-13b60ced68dc?w=200&q=80",
  },
];

const MILESTONES = [
  {
    year: "2016",
    text: "Established Vira Makeup Artistry in Akola, Maharashtra",
  },
  {
    year: "2018",
    text: "First celebrity bridal commission \u2014 regional TV personality",
  },
  {
    year: "2019",
    text: "Featured in Lokmat Times for outstanding bridal artistry",
  },
  { year: "2021", text: "Expanded to editorial and fashion magazine shoots" },
  {
    year: "2023",
    text: "Recognized as Vidarbha's Premier Luxury Makeup Artist",
  },
  { year: "2024", text: "50+ celebrity clients milestone achieved" },
];

/* ──────────────────────────────────────────────
   Floating Particles
────────────────────────────────────────────── */
function FloatingParticles() {
  const items = [
    { id: "p0", sz: 3, l: 7, delay: 0, dur: 6 },
    { id: "p1", sz: 5, l: 24, delay: 0.7, dur: 7.5 },
    { id: "p2", sz: 3, l: 41, delay: 1.4, dur: 6 },
    { id: "p3", sz: 5, l: 58, delay: 2.1, dur: 9 },
    { id: "p4", sz: 7, l: 75, delay: 2.8, dur: 7.5 },
    { id: "p5", sz: 3, l: 92, delay: 3.5, dur: 6 },
    { id: "p6", sz: 5, l: 14, delay: 4.2, dur: 8 },
    { id: "p7", sz: 3, l: 31, delay: 4.9, dur: 6 },
    { id: "p8", sz: 7, l: 48, delay: 5.6, dur: 9 },
    { id: "p9", sz: 3, l: 65, delay: 6.3, dur: 7.5 },
    { id: "p10", sz: 5, l: 82, delay: 7.0, dur: 6 },
    { id: "p11", sz: 3, l: 3, delay: 7.7, dur: 8 },
    { id: "p12", sz: 7, l: 20, delay: 8.4, dur: 6 },
    { id: "p13", sz: 3, l: 37, delay: 0.3, dur: 9 },
    { id: "p14", sz: 5, l: 54, delay: 1.0, dur: 7.5 },
    { id: "p15", sz: 3, l: 71, delay: 1.7, dur: 6 },
    { id: "p16", sz: 5, l: 88, delay: 2.4, dur: 8 },
    { id: "p17", sz: 7, l: 10, delay: 3.1, dur: 9 },
  ];
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {items.map((item, pos) => (
        <div
          key={item.id}
          className="absolute rounded-full"
          style={{
            width: `${item.sz}px`,
            height: `${item.sz}px`,
            background: `oklch(0.97 0.01 96 / ${0.25 + (pos % 4) * 0.1})`,
            left: `${item.l}%`,
            bottom: "-8%",
            animation: `particleRise ${item.dur}s ease-in infinite`,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Background Polygons
────────────────────────────────────────────── */
function BgPolygons() {
  const polygons: Array<{
    id: string;
    size: number;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    delay: string;
    duration: string;
  }> = [
    {
      id: "bg-poly-a",
      size: 340,
      top: "-80px",
      right: "-60px",
      delay: "0s",
      duration: "22s",
    },
    {
      id: "bg-poly-b",
      size: 220,
      bottom: "10%",
      left: "-50px",
      delay: "4s",
      duration: "28s",
    },
    {
      id: "bg-poly-c",
      size: 260,
      top: "40%",
      right: "-30px",
      delay: "8s",
      duration: "20s",
    },
    {
      id: "bg-poly-d",
      size: 180,
      bottom: "-40px",
      right: "20%",
      delay: "2s",
      duration: "25s",
    },
  ];
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {polygons.map((p, pos) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            top: p.top,
            bottom: p.bottom,
            left: p.left,
            right: p.right,
            opacity: 0.08,
            background: "oklch(0.48 0.07 48)",
            clipPath:
              pos % 2 === 0
                ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
                : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            animation: `rotatePoly ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main Page
────────────────────────────────────────────── */
export default function CelebrityPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main
      className="min-h-screen relative"
      style={{ background: "var(--color-cream)", paddingTop: "80px" }}
      data-ocid="celebrity.page"
    >
      {/* Global CSS for custom keyframes */}
      <style>{`
        @keyframes particleRise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 0.7; }
          100% { transform: translateY(-110vh) translateX(20px); opacity: 0; }
        }
        @keyframes rotatePoly {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px oklch(0.70 0.05 62 / 0.2); }
          50% { box-shadow: 0 0 40px oklch(0.70 0.05 62 / 0.4), 0 0 80px oklch(0.92 0.02 81 / 0.15); }
        }
        .work-img-scale:hover img { transform: scale(1.08); }
      `}</style>

      <BgPolygons />

      {/* 1. HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ height: "500px" }}
        data-ocid="celebrity.hero"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1400&q=80"
            alt="Celebrity makeup artistry"
            className="w-full h-full object-cover"
            style={{ minHeight: "130%" }}
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{ background: "rgba(74,46,18,0.62)" }}
        />
        <FloatingParticles />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block border px-5 py-1.5 text-xs tracking-[0.35em] uppercase font-semibold rounded-full mb-5"
            style={{
              borderColor: "oklch(0.92 0.02 81 / 0.6)",
              color: "oklch(0.92 0.02 81)",
            }}
          >
            Celebrity Artist
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-white text-5xl md:text-7xl font-bold leading-none mb-4 text-glow"
          >
            Beyond Beauty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl font-body"
            style={{ color: "oklch(0.92 0.02 81 / 0.9)" }}
          >
            Trusted by India&apos;s brightest stars
          </motion.p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section
        className="relative z-10 py-10 px-4"
        style={{ background: "var(--color-brown-dark)" }}
        data-ocid="celebrity.stats"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p
                className="font-display text-4xl md:text-5xl font-bold mb-1"
                style={{ color: "var(--color-beige)" }}
              >
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </p>
              <p
                className="text-sm tracking-wide uppercase"
                style={{ color: "oklch(0.92 0.02 81 / 0.65)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED WORK */}
      <section
        className="relative z-10 py-20 px-4"
        style={{ background: "var(--color-cream)" }}
        data-ocid="celebrity.works"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase font-semibold block mb-3"
              style={{ color: "var(--color-brown-light)" }}
            >
              Portfolio
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-brown-dark)" }}
            >
              Work That Speaks
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKS.map((w, i) => (
              <motion.div
                key={w.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <TiltCard className="rounded-2xl overflow-hidden relative group cursor-pointer work-img-scale">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "4/5" }}
                  >
                    <img
                      src={w.src}
                      alt={w.label}
                      className="w-full h-full object-cover transition-transform duration-700"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(74,46,18,0.75) 0%, rgba(74,46,18,0.2) 50%, transparent 100%)",
                      }}
                    >
                      <div>
                        <p
                          className="text-xs tracking-[0.25em] uppercase font-semibold mb-1"
                          style={{ color: "oklch(0.92 0.02 81 / 0.7)" }}
                        >
                          Category
                        </p>
                        <p className="font-display text-xl font-bold text-white">
                          {w.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section
        className="relative z-10 py-20 px-4"
        style={{ background: "var(--color-beige-light)" }}
        data-ocid="celebrity.testimonials"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase font-semibold block mb-3"
              style={{ color: "var(--color-brown-light)" }}
            >
              Distinguished Voices
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-brown-dark)" }}
            >
              Kind Words from Distinguished Clients
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                data-ocid={`celebrity.testimonial.${i + 1}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card rounded-2xl p-7 flex flex-col gap-5"
                style={{
                  border: "1px solid oklch(0.48 0.07 48 / 0.15)",
                  animation: "glowPulse 4s ease-in-out infinite",
                  animationDelay: `${i * 1.3}s`,
                }}
              >
                <div
                  className="text-3xl leading-none"
                  style={{ color: "var(--color-brown-light)" }}
                >
                  &#8220;
                </div>
                <p
                  className="font-body text-sm leading-relaxed flex-1 italic"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {t.quote}
                </p>
                <div
                  className="flex items-center gap-3 pt-3"
                  style={{ borderTop: "1px solid oklch(0.48 0.07 48 / 0.12)" }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    style={{ border: "2px solid oklch(0.70 0.05 62 / 0.4)" }}
                    loading="lazy"
                  />
                  <div>
                    <p
                      className="font-display font-bold text-sm"
                      style={{ color: "var(--color-brown-dark)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-brown-light)" }}
                    >
                      {t.event}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MILESTONES TIMELINE */}
      <section
        className="relative z-10 py-20 px-4"
        style={{ background: "var(--color-cream)" }}
        data-ocid="celebrity.milestones"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase font-semibold block mb-3"
              style={{ color: "var(--color-brown-light)" }}
            >
              Our Journey
            </span>
            <h2
              className="font-display text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-brown-dark)" }}
            >
              Milestones of Excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical spine */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
              style={{
                background: "oklch(0.70 0.05 62 / 0.25)",
                transform: "translateX(-50%)",
              }}
            />

            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                data-ocid={`celebrity.milestone.${i + 1}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className={`relative flex items-start gap-6 mb-10 pl-14 md:pl-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-1/2 top-5 w-5 h-5 rounded-full border-2 flex-shrink-0"
                  style={{
                    background: "var(--color-beige)",
                    borderColor: "var(--color-brown)",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 0 4px oklch(0.70 0.05 62 / 0.12)",
                  }}
                />
                {/* Milestone card */}
                <div
                  className={`glass-card rounded-2xl p-6 ${
                    i % 2 === 0
                      ? "md:w-[45%] md:mr-auto"
                      : "md:w-[45%] md:ml-auto"
                  }`}
                  style={{ border: "1px solid oklch(0.48 0.07 48 / 0.12)" }}
                >
                  <span
                    className="font-display text-2xl font-bold block mb-1"
                    style={{ color: "var(--color-brown)" }}
                  >
                    {m.year}
                  </span>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {m.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section
        className="relative z-10 py-24 px-4 text-center overflow-hidden"
        style={{ background: "var(--color-brown-dark)" }}
        data-ocid="celebrity.cta"
      >
        {/* Glow orbs */}
        <div
          className="absolute left-1/4 top-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "oklch(0.70 0.05 62 / 0.12)",
            filter: "blur(60px)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute right-1/4 top-1/2 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background: "oklch(0.92 0.02 81 / 0.08)",
            filter: "blur(50px)",
            transform: "translate(50%, -50%)",
          }}
        />
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ color: "oklch(0.92 0.02 81 / 0.6)" }}
          >
            Exclusive Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Be Part of Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-10"
            style={{ color: "oklch(0.92 0.02 81 / 0.75)" }}
          >
            Book your celebrity-grade experience today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/book"
              data-ocid="celebrity.book_cta"
              className="inline-block px-12 py-4 rounded-full font-semibold text-base transition-smooth hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-beige) 0%, oklch(0.95 0.015 88) 100%)",
                color: "var(--color-brown-dark)",
                boxShadow: "0 4px 24px oklch(0.92 0.02 81 / 0.25)",
              }}
            >
              Book Your Celebrity Experience
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
