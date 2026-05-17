import type { FAQItem } from "@/types";
import * as Accordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "How far in advance should I book for bridal makeup?",
    answer:
      "We recommend booking 3-6 months in advance for weddings, especially during peak season (October-February). Popular dates fill quickly, so early booking ensures you get your preferred date and time.",
    category: "Booking",
  },
  {
    id: "2",
    question: "Do you offer makeup trials before the wedding day?",
    answer:
      "Absolutely! We strongly recommend a bridal trial session 2-4 weeks before the wedding. This allows us to perfect your look, test products on your skin, and ensure everything is flawless on your big day.",
    category: "Services",
  },
  {
    id: "3",
    question: "What makeup brands do you use?",
    answer:
      "We exclusively use premium international and professional brands including MAC, NARS, Charlotte Tilbury, Kryolan, Bobbi Brown, and Armani Beauty. All products are carefully selected for longevity, skin safety, and camera-readiness.",
    category: "Products",
  },
  {
    id: "4",
    question: "Do you provide on-location makeup services?",
    answer:
      "Yes! We offer full on-location services for weddings, events, and shoots across Akola and surrounding regions of Maharashtra. Travel charges may apply for locations beyond 25km from our studio.",
    category: "Services",
  },
  {
    id: "5",
    question: "How long does bridal makeup take?",
    answer:
      "A full bridal look typically takes 2.5 to 3.5 hours. We recommend starting early to allow time for any final adjustments. For bridal parties, we suggest scheduling multiple artists.",
    category: "Services",
  },
  {
    id: "6",
    question: "What should I do to prepare my skin before my appointment?",
    answer:
      "Stay hydrated, avoid sun exposure 48 hours before, avoid trying new skincare products, arrive with clean moisturized skin, and avoid heavy workouts the morning of your appointment.",
    category: "Studio Visit",
  },
  {
    id: "7",
    question: "Can you do makeup for my entire bridal party?",
    answer:
      "Yes! We can accommodate full bridal parties including mother of the bride, bridesmaids, and family. We also work with a network of trusted makeup artists for large events.",
    category: "Services",
  },
  {
    id: "8",
    question: "Do you offer airbrush makeup?",
    answer:
      "Yes, we offer professional airbrush makeup as an upgrade option. Airbrush provides an ultra-smooth, flawless finish that is particularly excellent for photography and long events.",
    category: "Services",
  },
  {
    id: "9",
    question: "What is your cancellation policy?",
    answer:
      "We require a 50% deposit to confirm your booking, which is non-refundable with less than 7 days notice. Rescheduling is possible with 14 days notice at no extra charge.",
    category: "Booking",
  },
  {
    id: "10",
    question: "Do you work for film and TV productions?",
    answer:
      "Absolutely! We have extensive experience with film shoots, TV productions, advertising campaigns, and fashion editorials. Please contact us for production rates and packages.",
    category: "Services",
  },
  {
    id: "11",
    question: "What areas do you serve?",
    answer:
      "Our studio is located in Keshav Nagar, Akola, Maharashtra. We serve clients across Akola, Amravati, Washim, Yavatmal, Buldhana, Nagpur, and beyond for special events.",
    category: "Studio Visit",
  },
  {
    id: "12",
    question: "How do I book an appointment?",
    answer:
      "You can book by calling or WhatsApp messaging us at 07721848035, or by visiting our studio at M2FG+XXW, Keshav Nagar, Akola. We will confirm your appointment and send all details.",
    category: "Booking",
  },
];

const categories = [
  "All",
  "Booking",
  "Services",
  "Pricing",
  "Studio Visit",
  "Products",
] as const;
type Category = (typeof categories)[number];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ color: "var(--color-gold)", flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </motion.svg>
  );
}

interface FAQItemProps {
  faq: FAQItem;
  index: number;
  openItem: string;
}

function FAQAccordionItem({ faq, index, openItem }: FAQItemProps) {
  const isOpen = openItem === faq.id;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Accordion.Item
        value={faq.id}
        data-ocid={`faq.item.${index + 1}`}
        className="rounded-xl overflow-hidden transition-smooth"
        style={{
          background:
            index % 2 === 0
              ? "oklch(0.97 0.02 85 / 0.8)"
              : "oklch(0.99 0.01 85 / 0.9)",
          border: isOpen
            ? "1px solid oklch(0.55 0.09 50 / 0.5)"
            : "1px solid oklch(0.85 0.04 70 / 0.4)",
          boxShadow: isOpen
            ? "0 4px 20px oklch(0.55 0.09 50 / 0.18)"
            : "0 2px 8px oklch(0.35 0.07 50 / 0.06)",
          borderLeft: isOpen
            ? "3px solid var(--color-gold)"
            : "3px solid transparent",
        }}
      >
        <Accordion.Header>
          <Accordion.Trigger
            data-ocid={`faq.trigger.${index + 1}`}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  background: isOpen
                    ? "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))"
                    : "oklch(0.75 0.06 55 / 0.25)",
                  color: isOpen
                    ? "var(--color-brown-dark)"
                    : "var(--color-brown)",
                }}
              >
                {index + 1}
              </span>
              <span
                className="font-display font-semibold text-sm md:text-base leading-snug"
                style={{
                  color: isOpen
                    ? "var(--color-brown-dark)"
                    : "var(--color-brown)",
                }}
              >
                {faq.question}
              </span>
            </div>
            <ChevronIcon open={isOpen} />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="overflow-hidden">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="px-5 pb-5"
              >
                <div className="pl-10">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {faq.answer}
                  </p>
                  <span
                    className="inline-block mt-3 text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "oklch(0.75 0.06 55 / 0.2)",
                      border: "1px solid oklch(0.55 0.09 50 / 0.3)",
                      color: "var(--color-brown)",
                    }}
                  >
                    {faq.category}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Accordion.Content>
      </Accordion.Item>
    </motion.div>
  );
}

export function FAQ() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [openItem, setOpenItem] = useState<string>("");
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const filtered = faqs.filter((f) => {
    const matchesSearch =
      search.length === 0 ||
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || f.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="faq"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.99 0.01 85) 0%, var(--color-cream) 50%, oklch(0.96 0.025 80) 100%)",
      }}
    >
      {/* Diagonal stripe overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, oklch(0.75 0.06 55 / 0.08) 0px, oklch(0.75 0.06 55 / 0.08) 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-32 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.06 55 / 0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute bottom-32 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.14 85 / 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-sm font-medium uppercase tracking-widest mb-3 gold-gradient-text"
            initial={{ opacity: 0, letterSpacing: "0.15em" }}
            animate={
              headerInView ? { opacity: 1, letterSpacing: "0.25em" } : {}
            }
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            FAQs
          </motion.p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-3"
            style={{ color: "var(--color-brown-dark)" }}
          >
            Everything You Need <span className="text-shimmer">to Know</span>
          </h2>
          <p
            className="text-base"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Have questions? We have answers.
          </p>
        </motion.div>

        {/* Search input */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
              style={{ color: "var(--color-gold)" }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
          <input
            type="text"
            data-ocid="faq.search_input"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-5 py-3.5 rounded-xl text-sm outline-none transition-smooth"
            style={{
              background: "oklch(0.97 0.02 85 / 0.85)",
              border: "1.5px solid oklch(0.55 0.09 50 / 0.35)",
              color: "var(--color-text-primary)",
              backdropFilter: "blur(8px)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold)";
              e.currentTarget.style.boxShadow =
                "0 0 0 3px oklch(0.55 0.09 50 / 0.15)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.55 0.09 50 / 0.35)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              type="button"
              data-ocid={`faq.filter.${cat.toLowerCase().replace(/ /g, "_")}`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-smooth"
              style={{
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))"
                    : "oklch(0.93 0.03 75 / 0.6)",
                border:
                  activeCategory === cat
                    ? "1px solid transparent"
                    : "1px solid oklch(0.55 0.09 50 / 0.25)",
                color:
                  activeCategory === cat
                    ? "var(--color-brown-dark)"
                    : "var(--color-brown)",
                boxShadow:
                  activeCategory === cat
                    ? "0 2px 12px oklch(0.55 0.09 50 / 0.3)"
                    : "none",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Accordion */}
        {filtered.length > 0 ? (
          <Accordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="flex flex-col gap-3"
          >
            {filtered.map((faq, index) => (
              <FAQAccordionItem
                key={faq.id}
                faq={faq}
                index={index}
                openItem={openItem}
              />
            ))}
          </Accordion.Root>
        ) : (
          <motion.div
            className="text-center py-14"
            data-ocid="faq.empty_state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-4xl mb-3">&#128269;</p>
            <p
              className="font-display text-lg"
              style={{ color: "var(--color-brown)" }}
            >
              No questions found for &ldquo;{search}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-4 text-sm underline transition-smooth"
              style={{ color: "var(--color-gold)" }}
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.97 0.02 85 / 0.9), oklch(0.93 0.03 75 / 0.85))",
              border: "1px solid oklch(0.55 0.09 50 / 0.3)",
              boxShadow:
                "0 8px 32px oklch(0.55 0.09 50 / 0.15), inset 0 1px 0 oklch(0.75 0.06 55 / 0.4)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-center sm:text-left">
              <p
                className="font-display font-semibold"
                style={{ color: "var(--color-brown-dark)" }}
              >
                Still have questions?
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Our team responds within minutes on WhatsApp.
              </p>
            </div>
            <motion.a
              href="https://wa.me/917721848035"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="faq.whatsapp_button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm whitespace-nowrap transition-smooth"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "#ffffff",
                boxShadow: "0 4px 16px rgba(37, 211, 102, 0.4)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(37, 211, 102, 0.55)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact via WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
