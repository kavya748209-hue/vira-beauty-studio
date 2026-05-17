import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const hours = [
  { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
  { day: "Sunday", time: "10:00 AM – 6:00 PM" },
  { day: "Appointments", time: "Recommended" },
];

export function MapSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FAF7F2 0%, #E8D5C4 60%, oklch(0.91 0.04 72) 100%)",
      }}
    >
      {/* Decorative blurry orbs */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #E8D5C4 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateY(-30%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #c4956a 0%, transparent 70%)",
          filter: "blur(50px)",
          transform: "translateY(20%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#6B4423" }}
          >
            Visit Us
          </span>
          <h2 className="font-display text-5xl md:text-6xl mb-4 gold-gradient-text">
            Find Our Studio
          </h2>
          <div
            className="w-24 h-0.5 mx-auto mb-5 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #6B4423, transparent)",
            }}
          />
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#3D1F0D" }}>
            Serving brides across Akola, Nagpur, Amravati, and all of Vidarbha
            region.
          </p>
        </motion.div>

        {/* Three-column layout: contact info (1 col) + map (2 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* LEFT — Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              background: "#FAF7F2",
              border: "1.5px solid #E8D5C4",
              boxShadow:
                "0 8px 32px rgba(61,31,13,0.08), 0 2px 8px rgba(107,68,35,0.06)",
            }}
          >
            <h3 className="font-display text-xl font-bold leading-snug gold-gradient-text">
              Vira Makeup Artistry &amp; Beauty Studio
            </h3>

            {/* Address */}
            <div className="flex gap-3 items-start">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(196,149,106,0.15)" }}
              >
                <MapPin className="w-5 h-5" style={{ color: "#6B4423" }} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-wide uppercase mb-1"
                  style={{ color: "#6B4423" }}
                >
                  Address
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#3D1F0D" }}
                >
                  M2FG+XXW, Keshav Nagar,
                  <br />
                  Akola, Maharashtra 444004
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-start">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(196,149,106,0.15)" }}
              >
                <Phone className="w-5 h-5" style={{ color: "#6B4423" }} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-wide uppercase mb-1"
                  style={{ color: "#6B4423" }}
                >
                  Phone
                </p>
                <a
                  href="tel:+917721848035"
                  className="text-sm font-medium transition-smooth hover:opacity-70"
                  style={{ color: "#3D1F0D" }}
                >
                  +91 77218 48035
                </a>
              </div>
            </div>

            {/* Hours */}
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(232,213,196,0.45)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4" style={{ color: "#6B4423" }} />
                <span
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: "#6B4423" }}
                >
                  Studio Hours
                </span>
              </div>
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between text-sm mb-1.5 last:mb-0"
                >
                  <span style={{ color: "#5C2E0E" }}>{h.day}</span>
                  <span className="font-semibold" style={{ color: "#3D1F0D" }}>
                    {h.time}
                  </span>
                </div>
              ))}
              <p className="text-xs mt-2 italic" style={{ color: "#6B4423" }}>
                By appointment preferred
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 mt-auto">
              <a
                href="https://maps.google.com/?q=Keshav+Nagar+Akola+Maharashtra+444004"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="map.directions_button"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm tracking-wide transition-smooth hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #6B4423 0%, #c4956a 50%, #6B4423 100%)",
                  color: "#FAF7F2",
                  boxShadow: "0 4px 20px rgba(107,68,35,0.35)",
                }}
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href="tel:+917721848035"
                data-ocid="map.call_button"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm tracking-wide transition-smooth hover:scale-105"
                style={{
                  background: "transparent",
                  border: "2px solid #6B4423",
                  color: "#6B4423",
                }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Google Maps embed (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-2 rounded-2xl overflow-hidden"
            style={{
              border: "1.5px solid #E8D5C4",
              boxShadow:
                "0 8px 40px rgba(61,31,13,0.10), 0 2px 12px rgba(107,68,35,0.07)",
            }}
          >
            <iframe
              title="Vira Makeup Studio Location"
              src="https://maps.google.com/maps?q=Keshav+Nagar,+Akola,+Maharashtra+444004&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, display: "block", borderRadius: "16px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        {/* Below map footnote */}
        <motion.p
          className="text-center text-sm mt-8 font-medium"
          style={{ color: "#6B4423" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          ✦ Serving brides across Akola, Nagpur, Amravati, and all of Vidarbha
          region
        </motion.p>
      </div>
    </section>
  );
}
