import type { GalleryImage } from "@/types/index";
import { ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type FilterCategory = "All" | "Bridal" | "Party" | "Celebrity" | "Editorial";

const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: "g1",
    src: "/assets/user-photos/studio-exterior.png",
    alt: "Vira Makeup Studio - Our Beautiful Studio",
    category: "Celebrity",
    aspect: "portrait",
  },
  {
    id: "g2",
    src: "/assets/user-photos/celebrity-award.png",
    alt: "Celebrity Award Recognition",
    category: "Celebrity",
    aspect: "portrait",
  },
  {
    id: "g3",
    src: "/assets/user-photos/bride-red-saree-garden.png",
    alt: "Bridal Elegance - Red Saree",
    category: "Bridal",
    aspect: "portrait",
  },
  {
    id: "g4",
    src: "/assets/user-photos/bride-kundan-jewelry.png",
    alt: "Stunning Kundan Bridal Look",
    category: "Bridal",
    aspect: "portrait",
  },
  {
    id: "g5",
    src: "/assets/user-photos/bride-green-silk-saree.png",
    alt: "Green Silk Saree Bridal Look",
    category: "Bridal",
    aspect: "portrait",
  },
  {
    id: "g6",
    src: "/assets/user-photos/bride-pink-saree-steps.png",
    alt: "Pink Bridal Look - Timeless Elegance",
    category: "Bridal",
    aspect: "portrait",
  },
  {
    id: "g7",
    src: "/assets/user-photos/bride-red-lehenga-kaleere.png",
    alt: "Bridal Kaleere - Red Lehenga",
    category: "Bridal",
    aspect: "portrait",
  },
  {
    id: "g8",
    src: "/assets/user-photos/bride-golden-lehenga-varmala.png",
    alt: "Golden Lehenga Varmala Moment",
    category: "Bridal",
    aspect: "portrait",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    alt: "High-Fashion Editorial",
    category: "Editorial",
    aspect: "landscape",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&q=80",
    alt: "Mehandi Ceremony Glow",
    category: "Bridal",
    aspect: "portrait",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "Sangeet Night Glam",
    category: "Party",
    aspect: "square",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    alt: "Bollywood Style Shoot",
    category: "Celebrity",
    aspect: "portrait",
  },
];

const GRADIENT_MAP: Record<string, string> = {
  g1: "linear-gradient(135deg, oklch(0.75 0.06 60) 0%, oklch(0.55 0.08 55) 40%, oklch(0.78 0.14 85) 100%)",
  g2: "linear-gradient(160deg, oklch(0.88 0.10 90) 0%, oklch(0.78 0.14 85) 50%, oklch(0.85 0.04 70) 100%)",
  g3: "linear-gradient(135deg, oklch(0.93 0.03 75) 0%, oklch(0.75 0.06 60) 60%, oklch(0.55 0.08 55) 100%)",
  g4: "linear-gradient(150deg, oklch(0.35 0.07 50) 0%, oklch(0.55 0.08 55) 50%, oklch(0.78 0.14 85) 100%)",
  g5: "linear-gradient(120deg, oklch(0.85 0.04 70) 0%, oklch(0.78 0.14 85) 40%, oklch(0.88 0.10 90) 100%)",
  g6: "linear-gradient(145deg, oklch(0.65 0.07 55) 0%, oklch(0.78 0.14 85) 55%, oklch(0.93 0.03 75) 100%)",
  g7: "linear-gradient(130deg, oklch(0.88 0.10 90) 0%, oklch(0.65 0.07 55) 50%, oklch(0.35 0.07 50) 100%)",
  g8: "linear-gradient(155deg, oklch(0.45 0.07 52) 0%, oklch(0.78 0.14 85) 60%, oklch(0.97 0.02 85) 100%)",
  g9: "linear-gradient(125deg, oklch(0.93 0.03 75) 0%, oklch(0.85 0.04 70) 40%, oklch(0.55 0.08 55) 100%)",
  g10: "linear-gradient(140deg, oklch(0.78 0.14 85) 0%, oklch(0.55 0.08 55) 45%, oklch(0.35 0.07 50) 100%)",
  g11: "linear-gradient(150deg, oklch(0.97 0.02 85) 0%, oklch(0.88 0.10 90) 50%, oklch(0.75 0.06 60) 100%)",
  g12: "linear-gradient(135deg, oklch(0.55 0.08 55) 0%, oklch(0.78 0.14 85) 50%, oklch(0.88 0.10 90) 100%)",
};

const CATEGORY_ICON: Record<string, string> = {
  Bridal: "💍",
  Party: "✨",
  Celebrity: "⭐",
  Editorial: "🎨",
};

const FILTERS: FilterCategory[] = [
  "All",
  "Bridal",
  "Party",
  "Celebrity",
  "Editorial",
];

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: GalleryImage;
  index: number;
  onClick: (item: GalleryImage, index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const paddingBottom =
    item.aspect === "portrait"
      ? "133%"
      : item.aspect === "landscape"
        ? "62%"
        : "100%";

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer overflow-hidden rounded-2xl"
      data-ocid={`gallery.item.${index + 1}`}
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: (index % 6) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.04,
        rotateX: 4,
        rotateY: -3,
        z: 30,
        transition: { duration: 0.28, ease: "easeOut" },
      }}
      style={{ transformStyle: "preserve-3d", perspective: "800px" }}
      onClick={() => onClick(item, index)}
    >
      <div style={{ paddingBottom, position: "relative" }}>
        <div
          className="absolute inset-0"
          style={{ background: GRADIENT_MAP[item.id] }}
        />
        {item.src && (
          <img
            src={item.src}
            alt={item.alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, oklch(0.97 0.02 85 / 0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, oklch(0.78 0.14 85 / 0.06) 0%, transparent 50%)",
          }}
        />
        <div className="absolute top-3 left-3 z-10">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: "oklch(0.97 0.02 85 / 0.85)",
              color: "var(--color-brown-dark)",
              backdropFilter: "blur(8px)",
              border: "1px solid #C4956A66",
            }}
          >
            {CATEGORY_ICON[item.category]} {item.category}
          </span>
        </div>
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.22 }}
          style={{
            background:
              "linear-gradient(to top, oklch(0.25 0.05 55 / 0.85) 0%, oklch(0.35 0.07 50 / 0.4) 60%, transparent 100%)",
          }}
        >
          <p
            className="font-display text-base leading-tight"
            style={{ color: "oklch(0.97 0.02 85)" }}
          >
            {item.alt}
          </p>
          <p
            className="text-xs tracking-widest mt-1"
            style={{ color: "var(--color-gold-light)" }}
          >
            {item.category.toUpperCase()}
          </p>
        </motion.div>
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            boxShadow:
              "0 0 0 2px oklch(0.78 0.14 85 / 0.7), 0 0 24px oklch(0.78 0.14 85 / 0.35), 0 0 50px oklch(0.88 0.10 90 / 0.2)",
          }}
        />
      </div>
    </motion.div>
  );
}

function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[currentIndex];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        background: "oklch(0.15 0.04 50 / 0.92)",
        backdropFilter: "blur(18px)",
      }}
      onClick={onClose}
      data-ocid="gallery.dialog"
    >
      <button
        type="button"
        className="absolute top-5 right-5 z-10 flex items-center justify-center w-11 h-11 rounded-full transition-smooth"
        style={{
          background: "oklch(0.97 0.02 85 / 0.15)",
          border: "1px solid #C4956A66",
          color: "oklch(0.97 0.02 85)",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close lightbox"
        data-ocid="gallery.close_button"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        className="absolute left-4 md:left-8 z-10 flex items-center justify-center w-12 h-12 rounded-full transition-smooth"
        style={{
          background: "oklch(0.97 0.02 85 / 0.15)",
          border: "1px solid #C4956A66",
          color: "oklch(0.97 0.02 85)",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        data-ocid="gallery.lightbox_prev"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        className="absolute right-4 md:right-8 z-10 flex items-center justify-center w-12 h-12 rounded-full transition-smooth"
        style={{
          background: "oklch(0.97 0.02 85 / 0.15)",
          border: "1px solid #C4956A66",
          color: "oklch(0.97 0.02 85)",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        data-ocid="gallery.lightbox_next"
      >
        <ChevronRight size={22} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          className="relative mx-16 md:mx-24 max-w-2xl w-full"
          initial={{ scale: 0.88, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 1px oklch(0.78 0.14 85 / 0.4), 0 32px 64px oklch(0.15 0.04 50 / 0.6), 0 0 60px oklch(0.78 0.14 85 / 0.2)",
            }}
          >
            <div
              style={{
                paddingBottom:
                  item.aspect === "portrait"
                    ? "125%"
                    : item.aspect === "landscape"
                      ? "60%"
                      : "100%",
                background: GRADIENT_MAP[item.id],
                position: "relative",
              }}
            >
              {item.src && (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 25% 25%, oklch(0.97 0.02 85 / 0.1) 0%, transparent 55%), radial-gradient(ellipse at 75% 75%, oklch(0.78 0.14 85 / 0.08) 0%, transparent 50%)",
                }}
              />
              <div
                className="absolute inset-x-0 bottom-0 p-6"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.15 0.04 50 / 0.75) 0%, transparent 100%)",
                }}
              >
                <p
                  className="font-display text-2xl"
                  style={{ color: "oklch(0.97 0.02 85)" }}
                >
                  {item.alt}
                </p>
                <p
                  className="text-sm tracking-widest mt-1"
                  style={{ color: "var(--color-gold-light)" }}
                >
                  {CATEGORY_ICON[item.category]} {item.category.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span
              className="text-sm tracking-widest"
              style={{ color: "oklch(0.88 0.10 90 / 0.7)" }}
            >
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback((item: GalleryImage, _index: number) => {
    const globalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    setLightboxIndex(globalIndex);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_ITEMS.length,
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length,
    );
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="py-24 relative overflow-hidden"
        style={{
          background: "oklch(0.97 0.02 85)",
          borderTop: "1px solid oklch(0.85 0.04 70 / 0.5)",
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.78 0.14 85 / 0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[350px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, oklch(0.88 0.10 90 / 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            ref={headerRef}
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles size={14} style={{ color: "var(--color-gold)" }} />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                Our Portfolio
              </span>
              <Sparkles size={14} style={{ color: "var(--color-gold)" }} />
            </div>
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-4"
              style={{ color: "var(--color-brown-dark)" }}
            >
              A Canvas of Transformations
            </h2>
            <hr className="section-divider max-w-xs mx-auto mb-4" />
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Every look tells a story of artistry and elegance
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            data-ocid="gallery.filter.tab"
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className="relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-widest uppercase transition-smooth overflow-hidden"
                style={{
                  background:
                    activeFilter === filter
                      ? "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)"
                      : "oklch(0.93 0.03 75 / 0.6)",
                  color:
                    activeFilter === filter
                      ? "var(--color-brown-dark)"
                      : "var(--color-text-secondary)",
                  border:
                    activeFilter === filter
                      ? "1.5px solid oklch(0.78 0.14 85 / 0.7)"
                      : "1.5px solid oklch(0.85 0.04 70 / 0.8)",
                  boxShadow:
                    activeFilter === filter
                      ? "0 0 18px oklch(0.78 0.14 85 / 0.3), 0 4px 16px oklch(0.55 0.08 55 / 0.15)"
                      : "none",
                }}
                onClick={() => setActiveFilter(filter)}
                data-ocid={`gallery.filter_${filter.toLowerCase()}`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Gallery masonry grid */}
          <div
            style={{
              columns: "var(--gallery-cols, 2)",
              columnGap: "1rem",
            }}
            className="gallery-masonry"
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                style={{ breakInside: "avoid", marginBottom: "1rem" }}
              >
                <GalleryCard item={item} index={index} onClick={openLightbox} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.45 }}
          >
            <button
              type="button"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-base tracking-widest uppercase transition-smooth"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)",
                color: "var(--color-brown-dark)",
                border: "1.5px solid oklch(0.78 0.14 85 / 0.5)",
                boxShadow:
                  "0 0 28px oklch(0.78 0.14 85 / 0.3), 0 8px 32px oklch(0.55 0.08 55 / 0.2)",
              }}
              onClick={() => setActiveFilter("All")}
              data-ocid="gallery.view_all_button"
            >
              <Sparkles size={16} />
              View All Transformations
              <Sparkles size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={GALLERY_ITEMS}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
