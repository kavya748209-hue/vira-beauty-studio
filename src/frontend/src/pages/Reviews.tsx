import { motion, useInView } from "motion/react";
import { useRef } from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    event: "Bridal",
    rating: 5,
    text: "Vira Ji transformed me into a dream bride. My kundan bridal look was absolutely perfect — every detail was immaculate. All my guests kept asking who did my makeup!",
    initials: "PS",
    location: "Akola, Maharashtra",
  },
  {
    id: 2,
    name: "Anjali Deshmukh",
    event: "Bridal",
    rating: 5,
    text: "I hired Vira for my daughter's wedding and she exceeded every expectation. The makeup stayed fresh for 14 hours through all the ceremonies. Truly a master artist.",
    initials: "AD",
    location: "Nagpur, Maharashtra",
  },
  {
    id: 3,
    name: "Sneha Kulkarni",
    event: "Party",
    rating: 5,
    text: "Got my festive party look done for Diwali — the eye makeup was stunning and so glamorous! Vira has an incredible eye for detail and color.",
    initials: "SK",
    location: "Amravati, Maharashtra",
  },
  {
    id: 4,
    name: "Kavya Joshi",
    event: "Pre-Wedding",
    rating: 5,
    text: "Vira did my pre-wedding shoot makeup and the photos came out absolutely gorgeous. The editorial look she created was like something out of a magazine!",
    initials: "KJ",
    location: "Pune, Maharashtra",
  },
  {
    id: 5,
    name: "Meera Patil",
    event: "Bridal",
    rating: 5,
    text: "As someone with a darker complexion, I was worried about finding the right shades. Vira worked magic — I felt like a celebrity on my wedding day!",
    initials: "MP",
    location: "Washim, Maharashtra",
  },
  {
    id: 6,
    name: "Ritu Agrawal",
    event: "Sangeet",
    rating: 5,
    text: "Hired Vira for my sister's sangeet and she created the most beautiful look. The glitter eye makeup was so professional and lasted the entire evening perfectly.",
    initials: "RA",
    location: "Akola, Maharashtra",
  },
];

const EVENT_COLORS: Record<string, string> = {
  Bridal: "oklch(0.48 0.07 48)",
  Party: "oklch(0.55 0.07 52)",
  "Pre-Wedding": "oklch(0.60 0.06 50)",
  Sangeet: "oklch(0.52 0.08 50)",
};

function FloatingParticle({ index }: { index: number }) {
  const size = 6 + (index % 5) * 4;
  const left = `${5 + ((index * 17) % 90)}%`;
  const top = `${10 + ((index * 23) % 80)}%`;
  const duration = 6 + (index % 4) * 2;
  const delay = index * 0.7;

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        top,
        background:
          index % 3 === 0
            ? "oklch(0.70 0.05 55 / 0.12)"
            : index % 3 === 1
              ? "oklch(0.48 0.07 48 / 0.10)"
              : "oklch(0.92 0.02 81 / 0.25)",
        border: "1px solid oklch(0.78 0.08 60 / 0.15)",
      }}
      animate={{
        y: [0, -28, 8, 0],
        x: [0, 10, -6, 0],
        opacity: [0.15, 0.4, 0.2, 0.15],
        scale: [1, 1.15, 0.95, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {(["s1", "s2", "s3", "s4", "s5"] as const).map((id, i) => (
        <svg
          key={id}
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          className="w-4 h-4"
          style={{ color: "var(--color-gold)" }}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof REVIEWS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      data-ocid={`reviews.item.${index + 1}`}
      initial={{ opacity: 0, y: 40, rotateX: 12 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow:
          "0 24px 48px oklch(0.48 0.07 48 / 0.16), 0 0 40px oklch(0.70 0.05 55 / 0.12)",
        transition: { duration: 0.28, ease: "easeOut" },
      }}
      style={{ transformStyle: "preserve-3d", perspective: "800px" }}
      className="relative flex flex-col rounded-3xl p-7 cursor-default"
      css-debug="review-card"
    >
      {/* Card glass background */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "oklch(0.98 0.008 92 / 0.80)",
          backdropFilter: "blur(16px) saturate(1.3)",
          WebkitBackdropFilter: "blur(16px) saturate(1.3)",
          border: "1px solid oklch(0.88 0.03 72 / 0.55)",
          boxShadow:
            "0 8px 32px oklch(0.48 0.07 48 / 0.08), inset 0 1px 0 oklch(0.98 0.01 95 / 0.7)",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-px rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.70 0.05 55 / 0.6), transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full gap-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brown) 0%, var(--color-brown-light) 100%)",
                color: "oklch(0.97 0.01 92)",
                boxShadow: "0 4px 12px oklch(0.48 0.07 48 / 0.25)",
              }}
            >
              {review.initials}
            </div>

            {/* Name + Location */}
            <div>
              <p
                className="font-display text-base font-semibold leading-tight"
                style={{ color: "var(--color-brown-dark)" }}
              >
                {review.name}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {review.location}
              </p>
            </div>
          </div>

          {/* Event badge */}
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full flex-shrink-0"
            style={{
              background: "oklch(0.94 0.02 78 / 0.9)",
              color: EVENT_COLORS[review.event] ?? "var(--color-brown)",
              border: "1px solid oklch(0.85 0.04 68 / 0.6)",
            }}
          >
            {review.event}
          </span>
        </div>

        {/* Stars */}
        <StarRating rating={review.rating} />

        {/* Review text */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--color-text-secondary)" }}
        >
          &ldquo;{review.text}&rdquo;
        </p>

        {/* Bottom row */}
        <div
          className="flex items-center gap-2 pt-3"
          style={{
            borderTop: "1px solid oklch(0.88 0.03 72 / 0.4)",
          }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "var(--color-gold)" }}
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span
            className="text-xs font-medium"
            style={{ color: "var(--color-brown)" }}
          >
            Verified Client
          </span>
          <span
            className="ml-auto text-xs"
            style={{ color: "oklch(0.75 0.04 68)" }}
          >
            Google Review
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Reviews() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="reviews"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--color-cream) 0%, oklch(0.93 0.025 80) 50%, var(--color-beige) 100%)",
      }}
      data-ocid="reviews.section"
    >
      {/* Floating background particles */}
      {[
        "fp0",
        "fp1",
        "fp2",
        "fp3",
        "fp4",
        "fp5",
        "fp6",
        "fp7",
        "fp8",
        "fp9",
        "fp10",
        "fp11",
        "fp12",
        "fp13",
        "fp14",
        "fp15",
        "fp16",
        "fp17",
      ].map((id, i) => (
        <FloatingParticle key={id} index={i} />
      ))}

      {/* Top decorative glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.70 0.05 55 / 0.10) 0%, transparent 70%)",
        }}
      />
      {/* Bottom glow */}
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, oklch(0.48 0.07 48 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3.5 h-3.5"
              style={{ color: "var(--color-gold)" }}
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: "var(--color-gold)" }}
            >
              Client Stories
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3.5 h-3.5"
              style={{ color: "var(--color-gold)" }}
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
            style={{ color: "var(--color-brown-dark)" }}
          >
            Loved by Every{" "}
            <span className="gold-gradient-text">Bride &amp; Client</span>
          </h2>

          <hr
            className="section-divider max-w-xs mx-auto mb-5"
            style={{ border: "none" }}
          />

          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Real stories from real clients — discover why Vira is Akola's most
            trusted beauty artist
          </p>

          {/* Rating summary */}
          <motion.div
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-2xl"
            style={{
              background: "oklch(0.98 0.008 92 / 0.8)",
              border: "1px solid oklch(0.88 0.03 72 / 0.5)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px oklch(0.48 0.07 48 / 0.08)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-0.5">
              {(["s1", "s2", "s3", "s4", "s5"] as const).map((id) => (
                <svg
                  key={id}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                  style={{ color: "var(--color-gold)" }}
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span
              className="font-display text-xl font-bold"
              style={{ color: "var(--color-brown-dark)" }}
            >
              5.0
            </span>
            <span
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              from 300+ happy clients
            </span>
          </motion.div>
        </motion.div>

        {/* Reviews grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="reviews.list"
        >
          {REVIEWS.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.6 }}
        >
          <p
            className="font-display text-xl italic mb-4"
            style={{ color: "var(--color-brown)" }}
          >
            &ldquo;Ready to create your own story of transformation?&rdquo;
          </p>
          <a
            href="https://wa.me/917721848035"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-semibold text-sm tracking-widest uppercase transition-smooth hover:scale-105 active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brown) 0%, var(--color-brown-light) 100%)",
              color: "oklch(0.97 0.01 92)",
              boxShadow: "0 8px 28px oklch(0.48 0.07 48 / 0.3)",
            }}
            data-ocid="reviews.book_button"
          >
            ✦ Book Your Transformation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
