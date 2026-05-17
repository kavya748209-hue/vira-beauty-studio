import { Clock, MapPin, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Celebrity Work", href: "#celebrity" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "vira-makeup",
  );

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.18 0.05 50) 0%, oklch(0.11 0.03 45) 100%)",
      }}
    >
      {/* Decorative floating gold orbs */}
      <div
        className="pointer-events-none absolute top-16 right-16 w-64 h-64 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          filter: "blur(48px)",
          animation: "floatParticle 6s 0.5s ease-in-out infinite alternate",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-8"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold-light) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "floatParticle 8s 1.5s ease-in-out infinite alternate",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4">
              <p
                className="font-display text-5xl font-bold leading-none mb-1"
                style={{ color: "oklch(0.97 0.02 85)" }}
              >
                Vira
              </p>
              <p
                className="text-sm font-medium tracking-widest uppercase"
                style={{ color: "var(--color-gold-light)" }}
              >
                Makeup Artistry &amp; Beauty Studio
              </p>
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-shimmer">
              Where Luxury Meets Artistry
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.70 0.04 70)" }}
            >
              Akola's premier celebrity makeup studio serving Maharashtra since
              2016. Trusted by brides, celebrities, and professionals across
              India.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/917721848035"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp_link"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                style={{
                  background: "oklch(0.97 0.02 85 / 0.08)",
                  border: "1px solid oklch(0.55 0.09 50 / 0.3)",
                }}
              >
                <span className="sr-only">WhatsApp</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  style={{ fill: "var(--color-gold-light)" }}
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.528 5.845L.057 23.8a.5.5 0 0 0 .614.612l5.974-1.467A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.868 9.868 0 0 1-5.034-1.376l-.36-.213-3.737.917.938-3.626-.236-.374A9.838 9.838 0 0 1 2.1 12C2.1 6.534 6.534 2.1 12 2.1c5.466 0 9.9 4.434 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vira_makeup_artistry/"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram_link"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                style={{
                  background: "oklch(0.97 0.02 85 / 0.08)",
                  border: "1px solid oklch(0.55 0.09 50 / 0.3)",
                }}
              >
                <span className="sr-only">Instagram</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  style={{ fill: "var(--color-gold-light)" }}
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3
              className="font-display text-lg font-semibold mb-5"
              style={{ color: "var(--color-gold)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid={`footer.nav.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                    className="text-sm transition-smooth hover:translate-x-1 inline-flex items-center gap-1.5 group"
                    style={{ color: "oklch(0.70 0.04 70)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-smooth group-hover:scale-150"
                      style={{ background: "var(--color-gold)" }}
                    />
                    <span className="group-hover:text-[var(--color-gold-light)] transition-smooth">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3
              className="font-display text-lg font-semibold mb-5"
              style={{ color: "var(--color-gold)" }}
            >
              Visit Us
            </h3>

            <div className="space-y-4 mb-6">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "var(--color-gold)" }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.70 0.04 70)" }}
                >
                  M2FG+XXW, Keshav Nagar,
                  <br />
                  Akola, Maharashtra 444004
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "var(--color-gold)" }}
                />
                <a
                  href="tel:07721848035"
                  className="text-sm transition-smooth hover:opacity-70"
                  style={{ color: "oklch(0.70 0.04 70)" }}
                >
                  07721848035
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "var(--color-gold)" }}
                />
                <div
                  className="text-sm"
                  style={{ color: "oklch(0.70 0.04 70)" }}
                >
                  <p>Mon–Sat: 9 AM – 8 PM</p>
                  <p>Sun: 10 AM – 6 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917721848035"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.book_button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-smooth hover:scale-105 hover:glow-gold"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)",
                color: "var(--color-brown-dark)",
                boxShadow: "0 4px 16px oklch(0.55 0.09 50 / 0.3)",
              }}
            >
              ✦ Book Appointment
            </a>
          </motion.div>
        </div>

        {/* Gold divider */}
        <div
          className="mb-6"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, oklch(0.55 0.09 50 / 0.4), oklch(0.75 0.06 55 / 0.6), oklch(0.55 0.09 50 / 0.4), transparent)",
          }}
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "oklch(0.60 0.03 65)" }}
        >
          <p>
            © {year} Vira Makeup Artistry &amp; Beauty Studio. All rights
            reserved.
          </p>
          <p>
            Crafted with ♥ in Akola, Maharashtra · 
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-smooth"
              style={{ color: "var(--color-gold-light)" }}
            >
              
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
