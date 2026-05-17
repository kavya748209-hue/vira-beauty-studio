import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  "All",
  "Bridal",
  "Party",
  "Celebrity",
  "Editorial",
  "Pre-Wedding",
] as const;
type Category = (typeof CATEGORIES)[number];

interface PortfolioItem {
  url: string;
  alt: string;
  category: Exclude<Category, "All">;
  tall?: boolean;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    url: "/assets/user-photos/studio-exterior.png",
    alt: "Our Studio",
    category: "Celebrity",
    tall: true,
  },
  {
    url: "/assets/user-photos/celebrity-award.png",
    alt: "Celebrity Recognition",
    category: "Celebrity",
  },
  {
    url: "/assets/user-photos/bride-red-saree-garden.png",
    alt: "Red Saree Elegance",
    category: "Bridal",
    tall: true,
  },
  {
    url: "/assets/user-photos/bride-kundan-jewelry.png",
    alt: "Kundan Bridal",
    category: "Bridal",
  },
  {
    url: "/assets/user-photos/bride-green-silk-saree.png",
    alt: "Green Silk Saree",
    category: "Bridal",
    tall: true,
  },
  {
    url: "/assets/user-photos/bride-pink-saree-steps.png",
    alt: "Pink Bridal Look",
    category: "Bridal",
  },
  {
    url: "/assets/user-photos/bride-red-lehenga-kaleere.png",
    alt: "Kaleere Moments",
    category: "Bridal",
    tall: true,
  },
  {
    url: "/assets/user-photos/bride-golden-lehenga-varmala.png",
    alt: "Varmala Ceremony",
    category: "Bridal",
  },
  {
    url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    alt: "Festive Party Glam",
    category: "Party",
    tall: true,
  },
  {
    url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
    alt: "Glam Eye Drama",
    category: "Party",
  },
  {
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    alt: "Bollywood Party Look",
    category: "Party",
  },
  {
    url: "https://images.unsplash.com/photo-1512257595225-0f2fd30b1ec7?w=800&q=80",
    alt: "Celebrity Red Carpet",
    category: "Celebrity",
    tall: true,
  },
  {
    url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    alt: "Avant-Garde Editorial",
    category: "Editorial",
    tall: true,
  },
  {
    url: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=800&q=80",
    alt: "High-Fashion Editorial",
    category: "Editorial",
  },
  {
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    alt: "Pre-Wedding Romance",
    category: "Pre-Wedding",
    tall: true,
  },
  {
    url: "https://images.unsplash.com/photo-1620065571946-4b62ffbb025d?w=800&q=80",
    alt: "Engagement Shoot",
    category: "Pre-Wedding",
  },
  {
    url: "https://images.unsplash.com/photo-1645377989011-be4a5e63f02c?w=800&q=80",
    alt: "Studio Artistry",
    category: "Bridal",
  },
  {
    url: "https://images.unsplash.com/photo-1522337660329-852d1e3c596d?w=800&q=80",
    alt: "Luxury Makeup Detail",
    category: "Editorial",
  },
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Sangeet Night Glam",
    category: "Party",
  },
];

const FLOATING_CIRCLES = [
  { id: "c1", size: 300, x: "5%", y: "8%", duration: 12, delay: 0 },
  { id: "c2", size: 200, x: "80%", y: "15%", duration: 16, delay: 2 },
  { id: "c3", size: 250, x: "60%", y: "60%", duration: 14, delay: 4 },
  { id: "c4", size: 180, x: "20%", y: "75%", duration: 18, delay: 1 },
  { id: "c5", size: 220, x: "90%", y: "80%", duration: 11, delay: 3 },
  { id: "c6", size: 160, x: "45%", y: "30%", duration: 15, delay: 5 },
];

function Card3D({ item, index }: { item: PortfolioItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      data-ocid={`portfolio.item.${index + 1}`}
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{
        aspectRatio: item.tall ? "3/5" : "3/4",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.08, ease: "easeOut" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={item.url}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Shimmer border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.92 0.02 81 / 0.15) 0%, transparent 50%, oklch(0.70 0.05 62 / 0.1) 100%)",
          boxShadow:
            "inset 0 0 0 1px oklch(0.92 0.02 81 / 0.4), 0 20px 60px oklch(0.32 0.06 45 / 0.25)",
        }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-4"
        style={{
          background:
            "linear-gradient(to top, oklch(0.22 0.04 45 / 0.88) 0%, oklch(0.22 0.04 45 / 0.3) 50%, transparent 100%)",
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span
          className="text-sm font-semibold tracking-wide"
          style={{ color: "var(--color-beige-light)" }}
        >
          {item.alt}
        </span>
        <span
          className="text-xs mt-1 font-medium"
          style={{ color: "var(--color-beige-dark)" }}
        >
          {item.category}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((i) => i.category === active);

  return (
    <main
      className="min-h-screen pt-20 relative overflow-hidden"
      style={{ background: "var(--color-cream)" }}
      data-ocid="portfolio.page"
    >
      {/* ── Animated background ─────────────────────────────── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0, opacity: 0.15 }}
        aria-hidden="true"
      >
        {FLOATING_CIRCLES.map((c, i) => (
          <motion.div
            key={c.id}
            className="absolute rounded-full"
            style={{
              width: c.size,
              height: c.size,
              left: c.x,
              top: c.y,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, #E8D5C4 0%, #C4956A 60%, transparent 100%)"
                  : i % 3 === 1
                    ? "radial-gradient(circle, #FAF7F2 0%, #E8D5C4 70%, transparent 100%)"
                    : "radial-gradient(circle, #C4956A 0%, #6B4423 60%, transparent 100%)",
              filter: "blur(40px)",
            }}
            animate={{
              y: ["-10px", "20px", "-10px"],
              x: ["-8px", "12px", "-8px"],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: c.duration,
              delay: c.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated gradient mesh overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 0deg at 30% 50%, #FAF7F2 0deg, #E8D5C4 90deg, #C4956A 180deg, #E8D5C4 270deg, #FAF7F2 360deg)",
            opacity: 0.5,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 80,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* ── Page Hero ───────────────────────────────────────── */}
      <section
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden"
        style={{ minHeight: 400 }}
      >
        {/* Hero background wave */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, var(--color-cream) 0%, var(--color-beige) 40%, var(--color-beige-dark) 70%, var(--color-beige) 100%)",
            zIndex: -1,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, oklch(0.86 0.03 72 / 0.4) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Decorative brush SVG */}
        <motion.svg
          className="mb-6"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <path
            d="M10 36 C14 28, 20 20, 32 8"
            stroke="var(--color-brown)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M32 8 L38 6 L36 12 Z" fill="var(--color-brown)" />
          <circle
            cx="10"
            cy="37"
            r="5"
            fill="var(--color-brown-light)"
            opacity="0.7"
          />
          <circle
            cx="12"
            cy="39"
            r="3.5"
            fill="var(--color-brown)"
            opacity="0.9"
          />
        </motion.svg>

        <motion.h1
          className="text-5xl md:text-7xl font-display font-bold mb-4 text-shimmer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Portfolio
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-xl font-body"
          style={{ color: "var(--color-text-secondary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Transformations that tell stories of beauty and elegance
        </motion.p>

        <motion.div
          className="mt-6 w-24 h-1 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-brown-light), var(--color-brown))",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </section>

      {/* ── Filter Tabs ─────────────────────────────────────── */}
      <section className="relative z-10 px-4 py-8">
        <div
          className="max-w-4xl mx-auto overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-3 min-w-max mx-auto justify-center">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                type="button"
                data-ocid={`portfolio.filter.${cat.toLowerCase().replace(/\s+/g, "_")}`}
                onClick={() => setActive(cat)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-smooth relative overflow-hidden"
                style={{
                  background:
                    active === cat
                      ? "linear-gradient(135deg, var(--color-brown-dark), var(--color-brown))"
                      : "var(--color-beige)",
                  color:
                    active === cat
                      ? "var(--color-cream)"
                      : "var(--color-brown-dark)",
                  border:
                    active === cat
                      ? "1px solid var(--color-brown)"
                      : "1px solid var(--color-beige-dark)",
                  boxShadow:
                    active === cat
                      ? "0 6px 20px oklch(0.32 0.06 45 / 0.3), inset 0 1px 0 oklch(0.97 0.01 96 / 0.15)"
                      : "0 2px 8px oklch(0.48 0.07 48 / 0.08)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {active === cat && (
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{ background: "oklch(0.97 0.01 96 / 0.1)" }}
                    layoutId="activeTabBg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ─────────────────────────────────────── */}
      <section className="relative z-10 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {filtered.map((item, i) => (
                <div key={item.alt} className="break-inside-avoid mb-4">
                  <Card3D item={item} index={i} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div
              className="text-center py-24"
              data-ocid="portfolio.empty_state"
            >
              <p style={{ color: "var(--color-text-secondary)" }}>
                No items in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────── */}
      <section
        className="relative z-10 py-24 px-4 text-center overflow-hidden"
        style={{ background: "var(--color-beige)" }}
        data-ocid="portfolio.cta.section"
      >
        {/* Decorative glow orb */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.70 0.05 62 / 0.15) 0%, transparent 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <h2
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            style={{ color: "var(--color-brown-dark)" }}
          >
            Ready for Your Transformation?
          </h2>
          <p
            className="text-lg mb-8 max-w-md mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Book your session with Vira today and become our next masterpiece.
          </p>
          <Link to="/book">
            <motion.button
              type="button"
              data-ocid="portfolio.cta.primary_button"
              className="px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-smooth"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brown-dark), var(--color-brown))",
                color: "var(--color-cream)",
                boxShadow:
                  "0 12px 40px oklch(0.32 0.06 45 / 0.35), inset 0 1px 0 oklch(0.97 0.01 96 / 0.15)",
              }}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Now
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Footer credit */}
      <footer
        className="relative z-10 py-6 text-center text-xs"
        style={{
          background: "var(--color-beige-dark)",
          color: "var(--color-text-secondary)",
        }}
      >
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--color-brown)" }}
        >
          caffeine.ai
        </a>
      </footer>
    </main>
  );
}
