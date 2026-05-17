import {
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Star,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FLOATING_CIRCLES = [
  { id: "c1", size: 120, x: "5%", y: "10%", dur: 7, delay: 0 },
  { id: "c2", size: 80, x: "88%", y: "8%", dur: 6, delay: 1.2 },
  { id: "c3", size: 200, x: "75%", y: "55%", dur: 8, delay: 0.5 },
  { id: "c4", size: 60, x: "15%", y: "70%", dur: 5, delay: 2 },
  { id: "c5", size: 140, x: "50%", y: "85%", dur: 7.5, delay: 1 },
  { id: "c6", size: 90, x: "92%", y: "35%", dur: 6.5, delay: 1.8 },
  { id: "c7", size: 160, x: "2%", y: "40%", dur: 9, delay: 0.3 },
  { id: "c8", size: 50, x: "60%", y: "20%", dur: 5.5, delay: 2.5 },
];

const SERVICES = [
  "Bridal Makeup",
  "Party Makeup",
  "Editorial / Photoshoot",
  "Pre-Wedding Makeup",
  "Celebrity / Event Makeup",
  "Engagement Ceremony",
];

const FEATURES = [
  { icon: "⚡", title: "Quick Response", desc: "We respond within 2 hours" },
  {
    icon: "💎",
    title: "Premium Products",
    desc: "MAC, Charlotte Tilbury & more",
  },
  { icon: "✨", title: "100% Satisfaction", desc: "Look you love, guaranteed" },
];

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const errs: Partial<typeof form> = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.service) errs.service = "Please select a service";
    if (!form.date) errs.date = "Event date is required";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  return (
    <main
      data-ocid="book.page"
      className="min-h-screen pt-20 relative overflow-x-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      {/* ── Animated background circles ── */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {FLOATING_CIRCLES.map((c) => (
          <motion.div
            key={c.id}
            className="absolute rounded-full"
            style={{
              width: c.size,
              height: c.size,
              left: c.x,
              top: c.y,
              background:
                "radial-gradient(circle, oklch(0.48 0.07 48 / 0.12), oklch(0.70 0.05 62 / 0.04))",
              filter: "blur(2px)",
            }}
            animate={{
              y: ["-12px", "12px", "-8px"],
              x: ["-6px", "8px", "-4px"],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: c.dur,
              delay: c.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Page Hero ── */}
      <section
        data-ocid="book.hero_section"
        className="relative py-16 px-4 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.92 0.02 81 / 0.5) 0%, transparent 100%)",
        }}
      >
        {/* sparkle decorations */}
        <motion.div
          className="absolute top-8 left-[12%] opacity-40"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={28} style={{ color: "var(--color-brown-light)" }} />
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-[10%] opacity-30"
          animate={{ rotate: [360, 180, 0], scale: [1, 1.3, 1] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={20} style={{ color: "var(--color-brown)" }} />
        </motion.div>
        <motion.div
          className="absolute top-12 right-[20%] opacity-25"
          animate={{ y: [-4, 4, -4] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Star
            size={16}
            style={{
              color: "var(--color-brown-light)",
              fill: "var(--color-brown-light)",
            }}
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs tracking-[0.35em] uppercase font-medium mb-4"
          style={{ color: "var(--color-brown-light)" }}
        >
          Reserve Your Date
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl font-display font-bold mb-4 gold-gradient-text"
        >
          Book Your Session
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg max-w-xl mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Let's create your perfect look together — every appointment is a
          luxury experience crafted just for you.
        </motion.p>
      </section>

      {/* ── Two-column layout ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="glass-card rounded-2xl p-8 glow-premium"
              style={{ background: "oklch(0.97 0.01 96 / 0.85)" }}
            >
              <h2
                className="text-2xl font-display font-bold mb-1"
                style={{ color: "var(--color-brown-dark)" }}
              >
                Send Us a Message
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Fill in the details below and we'll get back to you within 24
                hours.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    data-ocid="book.success_state"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        delay: 0.2,
                      }}
                      className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-brown-dark), var(--color-brown))",
                      }}
                    >
                      <CheckCircle
                        size={36}
                        style={{ color: "var(--color-cream)" }}
                      />
                    </motion.div>
                    <h3
                      className="text-2xl font-display font-bold mb-3"
                      style={{ color: "var(--color-brown-dark)" }}
                    >
                      Thank You, {form.name}!
                    </h3>
                    <p
                      className="mb-6"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      We'll contact you within 24 hours to confirm your
                      appointment.
                    </p>
                    <a
                      href="https://wa.me/917721848035"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="book.whatsapp_quick_link"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-smooth hover:scale-105"
                      style={{ background: "#25D366", color: "#fff" }}
                    >
                      Or chat with us directly on WhatsApp →
                    </a>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    data-ocid="book.form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {/* Row 1: Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="book-name"
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: "var(--color-brown-dark)" }}
                        >
                          Full Name <span style={{ color: "#b45309" }}>*</span>
                        </label>
                        <input
                          id="book-name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          data-ocid="book.name_input"
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border text-sm transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-0"
                          style={{
                            background: "var(--color-cream)",
                            borderColor: errors.name
                              ? "#b45309"
                              : "var(--color-beige-dark)",
                            color: "var(--color-brown-dark)",
                            outlineColor: "var(--color-brown-light)",
                          }}
                        />
                        {errors.name && (
                          <p
                            className="text-xs mt-1"
                            data-ocid="book.name_field_error"
                            style={{ color: "#b45309" }}
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="book-phone"
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: "var(--color-brown-dark)" }}
                        >
                          Phone Number{" "}
                          <span style={{ color: "#b45309" }}>*</span>
                        </label>
                        <input
                          id="book-phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          data-ocid="book.phone_input"
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border text-sm transition-smooth focus:outline-none focus:ring-2"
                          style={{
                            background: "var(--color-cream)",
                            borderColor: errors.phone
                              ? "#b45309"
                              : "var(--color-beige-dark)",
                            color: "var(--color-brown-dark)",
                          }}
                        />
                        {errors.phone && (
                          <p
                            className="text-xs mt-1"
                            data-ocid="book.phone_field_error"
                            style={{ color: "#b45309" }}
                          >
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email + Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="book-email"
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: "var(--color-brown-dark)" }}
                        >
                          Email Address
                        </label>
                        <input
                          id="book-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          data-ocid="book.email_input"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border text-sm transition-smooth focus:outline-none focus:ring-2"
                          style={{
                            background: "var(--color-cream)",
                            borderColor: "var(--color-beige-dark)",
                            color: "var(--color-brown-dark)",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="book-service"
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: "var(--color-brown-dark)" }}
                        >
                          Service Type{" "}
                          <span style={{ color: "#b45309" }}>*</span>
                        </label>
                        <select
                          id="book-service"
                          name="service"
                          required
                          value={form.service}
                          onChange={handleChange}
                          data-ocid="book.service_select"
                          className="w-full px-4 py-3 rounded-xl border text-sm transition-smooth focus:outline-none focus:ring-2 appearance-none"
                          style={{
                            background: "var(--color-cream)",
                            borderColor: errors.service
                              ? "#b45309"
                              : "var(--color-beige-dark)",
                            color: form.service
                              ? "var(--color-brown-dark)"
                              : "var(--color-text-secondary)",
                          }}
                        >
                          <option value="">Select a service</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p
                            className="text-xs mt-1"
                            data-ocid="book.service_field_error"
                            style={{ color: "#b45309" }}
                          >
                            {errors.service}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Date */}
                    <div>
                      <label
                        htmlFor="book-date"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "var(--color-brown-dark)" }}
                      >
                        Event Date <span style={{ color: "#b45309" }}>*</span>
                      </label>
                      <input
                        id="book-date"
                        name="date"
                        type="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        data-ocid="book.date_input"
                        className="w-full px-4 py-3 rounded-xl border text-sm transition-smooth focus:outline-none focus:ring-2"
                        style={{
                          background: "var(--color-cream)",
                          borderColor: errors.date
                            ? "#b45309"
                            : "var(--color-beige-dark)",
                          color: "var(--color-brown-dark)",
                        }}
                      />
                      {errors.date && (
                        <p
                          className="text-xs mt-1"
                          data-ocid="book.date_field_error"
                          style={{ color: "#b45309" }}
                        >
                          {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Row 4: Notes */}
                    <div>
                      <label
                        htmlFor="book-notes"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "var(--color-brown-dark)" }}
                      >
                        Special Notes
                      </label>
                      <textarea
                        id="book-notes"
                        name="notes"
                        rows={3}
                        value={form.notes}
                        onChange={handleChange}
                        data-ocid="book.notes_textarea"
                        placeholder="Tell us about your event, look preferences, or any special requests…"
                        className="w-full px-4 py-3 rounded-xl border text-sm transition-smooth focus:outline-none focus:ring-2 resize-none"
                        style={{
                          background: "var(--color-cream)",
                          borderColor: "var(--color-beige-dark)",
                          color: "var(--color-brown-dark)",
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      data-ocid="book.submit_button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 transition-smooth glow-subtle hover:glow-premium"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-brown-dark) 0%, var(--color-brown) 100%)",
                        color: "var(--color-cream)",
                      }}
                    >
                      <Send size={18} />
                      Send Enquiry
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT — Studio Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <h2
              className="text-2xl font-display font-bold"
              style={{ color: "var(--color-brown-dark)" }}
            >
              Visit Our Studio
            </h2>

            {/* Info card */}
            <div
              className="glass-card rounded-2xl p-6 space-y-4 glow-subtle"
              style={{ background: "oklch(0.92 0.02 81 / 0.5)" }}
            >
              <a
                href="https://maps.google.com/?q=M2FG%2BXXW+Keshav+Nagar+Akola+Maharashtra+444004"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="book.address_link"
                className="flex items-start gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: "var(--color-beige-dark)" }}
                >
                  <MapPin
                    size={16}
                    style={{ color: "var(--color-brown-dark)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-wide mb-0.5"
                    style={{ color: "var(--color-brown-light)" }}
                  >
                    Address
                  </p>
                  <p
                    className="text-sm font-medium group-hover:underline"
                    style={{ color: "var(--color-brown-dark)" }}
                  >
                    M2FG+XXW, Keshav Nagar,
                    <br />
                    Akola, Maharashtra 444004
                  </p>
                </div>
              </a>

              <div
                className="h-px"
                style={{ background: "oklch(0.86 0.03 72 / 0.4)" }}
              />

              <a
                href="tel:+917721848035"
                data-ocid="book.phone_link"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: "var(--color-beige-dark)" }}
                >
                  <Phone
                    size={16}
                    style={{ color: "var(--color-brown-dark)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-wide mb-0.5"
                    style={{ color: "var(--color-brown-light)" }}
                  >
                    Phone
                  </p>
                  <p
                    className="text-sm font-semibold group-hover:underline"
                    style={{ color: "var(--color-brown-dark)" }}
                  >
                    07721 848035
                  </p>
                </div>
              </a>

              <div
                className="h-px"
                style={{ background: "oklch(0.86 0.03 72 / 0.4)" }}
              />

              <a
                href="https://wa.me/917721848035"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="book.whatsapp_info_link"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle size={16} style={{ color: "#fff" }} />
                </div>
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-wide mb-0.5"
                    style={{ color: "var(--color-brown-light)" }}
                  >
                    WhatsApp
                  </p>
                  <p
                    className="text-sm font-semibold group-hover:underline"
                    style={{ color: "var(--color-brown-dark)" }}
                  >
                    Chat with us directly
                  </p>
                </div>
              </a>

              <div
                className="h-px"
                style={{ background: "oklch(0.86 0.03 72 / 0.4)" }}
              />

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: "var(--color-beige-dark)" }}
                >
                  <Clock
                    size={16}
                    style={{ color: "var(--color-brown-dark)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-wide mb-0.5"
                    style={{ color: "var(--color-brown-light)" }}
                  >
                    Hours
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-brown-dark)" }}
                  >
                    Mon – Sat &nbsp;·&nbsp; 9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div
              className="rounded-2xl overflow-hidden glow-subtle"
              style={{ border: "1px solid oklch(0.86 0.03 72 / 0.3)" }}
            >
              <iframe
                data-ocid="book.map_embed"
                title="Vira Makeup Artistry & Beauty Studio location"
                src="https://maps.google.com/maps?q=M2FG%2BXXW+Keshav+Nagar+Akola+Maharashtra+444004&output=embed"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-3">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="glass-card rounded-xl p-3 text-center"
                  style={{ background: "oklch(0.97 0.01 96 / 0.7)" }}
                >
                  <div className="text-2xl mb-1">{f.icon}</div>
                  <p
                    className="text-xs font-semibold mb-0.5 leading-tight"
                    style={{ color: "var(--color-brown-dark)" }}
                  >
                    {f.title}
                  </p>
                  <p
                    className="text-[10px] leading-tight"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Bottom Quick Contact Bar ── */}
      <section
        data-ocid="book.quick_contact_section"
        className="relative z-10 py-8 px-4"
        style={{
          background: "oklch(0.92 0.02 81 / 0.5)",
          borderTop: "1px solid oklch(0.86 0.03 72 / 0.3)",
        }}
      >
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.a
            href="tel:+917721848035"
            data-ocid="book.call_now_button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-sm transition-smooth glow-subtle"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brown-dark), var(--color-brown))",
              color: "var(--color-cream)",
            }}
          >
            <Phone size={18} />
            Call Now: 07721848035
          </motion.a>

          <motion.a
            href="https://wa.me/917721848035"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="book.whatsapp_bar_button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-sm transition-smooth"
            style={{
              background: "var(--color-beige)",
              color: "var(--color-brown-dark)",
              border: "1px solid var(--color-beige-dark)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="18"
              height="18"
              aria-hidden="true"
              style={{ color: "#25D366" }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </motion.a>
        </div>
      </section>
    </main>
  );
}
