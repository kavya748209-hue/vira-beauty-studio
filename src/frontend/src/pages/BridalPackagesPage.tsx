import { motion, useMotionValue, useTransform } from "motion/react";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    id: "silver",
    tier: "Silver Bridal",
    price: "₹15,000",
    tagline: "Elegant & Timeless",
    popular: false,
    inclusions: [
      "Bridal makeup with HD products",
      "Bridal hairstyle (traditional or modern)",
      "Pre-bridal consultation (1 session)",
      "False lashes application",
      "Touch-up kit provided",
      "On-site setup at venue",
    ],
  },
  {
    id: "gold",
    tier: "Gold Bridal",
    price: "₹25,000",
    tagline: "Most Popular Choice",
    popular: true,
    inclusions: [
      "Everything in Silver Bridal",
      "Engagement makeup look",
      "Bridal trial session (full makeup)",
      "Mehendi coordination & guidance",
      "Airbrush finish upgrade",
      "Saree / lehenga draping assistance",
      "Bridal portrait photography prep",
      "Priority booking & WhatsApp support",
    ],
  },
  {
    id: "platinum",
    tier: "Platinum Bridal",
    price: "₹45,000",
    tagline: "The Ultimate Luxury Experience",
    popular: false,
    inclusions: [
      "Everything in Gold Bridal",
      "3 pre-bridal skin treatments",
      "Destination wedding travel (within Maharashtra)",
      "Post-wedding day touch-up session",
      "Personal bridal assistant on wedding day",
      "Bridesmaid makeup (up to 2 persons)",
      "Custom bridal look design consultation",
      "Nail art — bridal theme",
      "Luxury product usage — international brands",
      "Exclusive VIP after-wedding care package",
    ],
  },
];

const addOns = [
  { name: "HD Airbrush Finish", price: "₹1,500" },
  { name: "Party Makeup (standalone)", price: "₹2,500" },
  { name: "Eye Makeup (standalone)", price: "₹800" },
  { name: "Saree Draping", price: "₹500" },
  { name: "Fake Lashes", price: "₹300" },
  { name: "Nail Art (Bridal)", price: "₹800" },
];

function TiltCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const floatingShapes = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  size: 24 + (i % 5) * 18,
  left: `${(i * 17 + 5) % 95}%`,
  top: `${(i * 13 + 8) % 90}%`,
  delay: `${(i * 0.7) % 4}s`,
  duration: `${6 + (i % 4) * 2}s`,
  shape: i % 3 === 0 ? "circle" : i % 3 === 1 ? "diamond" : "square",
}));

export default function BridalPackagesPage() {
  const navigate = useNavigate();

  return (
    <div
      data-ocid="bridal.page"
      className="min-h-screen relative overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      {/* Animated background shapes */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {floatingShapes.map((s) => (
          <div
            key={s.id}
            className="absolute opacity-10"
            style={{
              width: s.size,
              height: s.size,
              left: s.left,
              top: s.top,
              background:
                s.shape === "circle"
                  ? "radial-gradient(circle, #6B4423 0%, #c4956a 100%)"
                  : "linear-gradient(135deg, #E8D5C4 0%, #6B4423 100%)",
              borderRadius:
                s.shape === "circle"
                  ? "50%"
                  : s.shape === "diamond"
                    ? "4px"
                    : "8px",
              transform: s.shape === "diamond" ? "rotate(45deg)" : "none",
              animation: `floatParticle ${s.duration} ease-in-out ${s.delay} infinite alternate`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-28 pb-24 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm uppercase tracking-[0.3em] mb-3 font-body font-medium"
            style={{ color: "var(--color-brown-light)" }}
          >
            Vira Makeup Artistry
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 gold-gradient-text">
            Bridal Packages
          </h1>
          <p
            className="text-lg md:text-xl max-w-xl mx-auto font-body"
            style={{ color: "#3D1F0D" }}
          >
            Crafted for the most important day of your life
          </p>
          <div
            className="mt-6 mx-auto h-px w-32"
            style={{
              background:
                "linear-gradient(90deg, transparent, #c4956a, #6B4423, #c4956a, transparent)",
            }}
          />
        </motion.div>

        {/* Package Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <TiltCard
                className={`relative h-full rounded-2xl p-8 flex flex-col cursor-default ${
                  pkg.popular
                    ? "ring-2 shadow-[0_0_40px_rgba(107,68,35,0.18)]"
                    : "border"
                }`}
                style={{
                  background: pkg.popular
                    ? "linear-gradient(145deg, #FAF7F2 0%, #F2E8DF 60%, #EDD9C8 100%)"
                    : "#FAF7F2",
                  borderColor: pkg.popular ? "#6B4423" : "#E8D5C4",
                  outline: pkg.popular ? "2px solid #6B4423" : "none",
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                    style={{ background: "#6B4423", color: "#FAF7F2" }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className="text-xs uppercase tracking-[0.25em] mb-2 font-body font-medium"
                    style={{ color: "var(--color-brown-light)" }}
                  >
                    {pkg.tagline}
                  </p>
                  <h2
                    className="font-display text-2xl font-bold mb-1"
                    style={{ color: "#3D1F0D" }}
                  >
                    {pkg.tier}
                  </h2>
                  <p
                    className="font-display text-4xl font-bold"
                    style={{ color: "#6B4423" }}
                  >
                    {pkg.price}
                  </p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {pkg.inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-body"
                      style={{ color: "#3D1F0D" }}
                    >
                      <span
                        className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                        style={{ background: "#6B4423", color: "#FAF7F2" }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  data-ocid={`bridal.${pkg.id}_book_button`}
                  type="button"
                  onClick={() => navigate("/book")}
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-smooth hover:opacity-90"
                  style={{
                    background: pkg.popular
                      ? "linear-gradient(135deg, #6B4423 0%, #c4956a 100%)"
                      : "transparent",
                    color: pkg.popular ? "#FAF7F2" : "#6B4423",
                    border: pkg.popular ? "none" : "2px solid #6B4423",
                  }}
                >
                  Book This Package
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Custom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm font-body mb-12"
          style={{ color: "#3D1F0D" }}
        >
          Customized packages available.{" "}
          <a
            href="tel:+917721848035"
            className="font-semibold underline underline-offset-2"
            style={{ color: "#6B4423" }}
          >
            Call +91 77218 48035
          </a>{" "}
          for consultation.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-20"
        >
          <button
            data-ocid="bridal.consultation_cta"
            type="button"
            onClick={() => navigate("/book")}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-semibold transition-smooth hover:opacity-90 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #6B4423 0%, #c4956a 100%)",
              color: "#FAF7F2",
            }}
          >
            <span>✦</span> Book Your Consultation <span>✦</span>
          </button>
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="rounded-2xl p-8 border"
            style={{ background: "#FAF7F2", borderColor: "#E8D5C4" }}
          >
            <h3 className="font-display text-2xl font-bold mb-2 text-center gold-gradient-text">
              Add-On Services
            </h3>
            <p
              className="text-center text-sm mb-8 font-body"
              style={{ color: "#3D1F0D" }}
            >
              Enhance any package with these premium additions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {addOns.map((addon, i) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between px-5 py-4 rounded-xl border"
                  style={{ background: "#F5EDE6", borderColor: "#E8D5C4" }}
                >
                  <span
                    className="text-sm font-body font-medium"
                    style={{ color: "#3D1F0D" }}
                  >
                    {addon.name}
                  </span>
                  <span
                    className="text-sm font-display font-bold ml-3"
                    style={{ color: "#6B4423" }}
                  >
                    {addon.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
