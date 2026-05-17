import { motion, useMotionValue, useTransform } from "motion/react";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "500+", label: "Happy Brides" },
  { value: "8+", label: "Years Experience" },
  { value: "4.9★", label: "Average Rating" },
  { value: "50+", label: "Celebrity Looks" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    service: "Bridal Makeup",
    location: "Akola, Maharashtra",
    date: "February 2025",
    review:
      "Vira Ji transformed me into the most beautiful version of myself. My skin glowed under all the lights and my makeup stayed flawless through 12 hours of festivities. She understood every detail of my traditional look and delivered beyond what I imagined. My entire family kept saying I was the most stunning bride they had ever seen.",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    service: "Engagement Makeup",
    location: "Nagpur, Maharashtra",
    date: "March 2025",
    review:
      "I had seen Vira's celebrity work on Instagram and was nervous she'd be out of my budget — but she was incredibly warm and professional. The engagement look she created was absolutely magazine-worthy. My fiancé was speechless when he saw me. I'll never go to anyone else for my wedding.",
    rating: 5,
  },
  {
    name: "Kavya Reddy",
    service: "Bridal Makeup",
    location: "Amravati, Maharashtra",
    date: "January 2025",
    review:
      "The Platinum Bridal package was worth every single rupee. Vira's attention to detail is unmatched — she even coordinated with my photographer to ensure the lighting suited my look. Her pre-bridal skin treatments left my skin so luminous that I barely needed a filter in my photos.",
    rating: 5,
  },
  {
    name: "Sunita Patil",
    service: "Party Makeup",
    location: "Pune, Maharashtra",
    date: "December 2024",
    review:
      "Booked Vira for my sangeet function and it was the best decision. She created a bold, glamorous look that suited the theme perfectly. I received so many compliments throughout the night. Professional, punctual, and extremely talented — highly recommend to everyone!",
    rating: 5,
  },
  {
    name: "Deepa Nair",
    service: "Bridal Makeup",
    location: "Mumbai, Maharashtra",
    date: "November 2024",
    review:
      "I traveled all the way from Mumbai specifically for Vira's expertise. She has worked with celebrities and it shows — the technique, the precision, the artistry is at a completely different level. My wedding photos are absolutely breathtaking. Worth every penny and every kilometer of travel.",
    rating: 5,
  },
  {
    name: "Ritu Agarwal",
    service: "Bridal Makeup",
    location: "Nashik, Maharashtra",
    date: "October 2024",
    review:
      "Vira's studio is luxurious and welcoming. She took time to understand my preferences, my outfit colors, and my wedding theme before designing a look that was uniquely me. The airbrush finish she used made my complexion look like porcelain. My husband still talks about how beautiful I looked.",
    rating: 5,
  },
  {
    name: "Pooja Deshmukh",
    service: "Engagement Makeup",
    location: "Akola, Maharashtra",
    date: "September 2024",
    review:
      "Absolutely in love with how my engagement makeup turned out! Vira listened to every concern I had and made sure I felt comfortable and confident. She even did a trial run which made the actual day so stress-free. Her skill with eyes is just extraordinary — I looked like a different person in the best way.",
    rating: 5,
  },
  {
    name: "Meena Joshi",
    service: "Bridal Makeup",
    location: "Nagpur, Maharashtra",
    date: "August 2024",
    review:
      "I've attended many weddings and seen many brides, but after my experience with Vira I can say she is truly a cut above the rest. She treated me like a celebrity, pampered me completely, and my look lasted from the morning ceremony right through to the late-night reception. Simply extraordinary.",
    rating: 5,
  },
  {
    name: "Sakshi Tiwari",
    service: "Party Makeup",
    location: "Amravati, Maharashtra",
    date: "July 2024",
    review:
      "Got party makeup done for my sister's wedding reception and I was glowing more than the bride! Vira understood the brief perfectly — smoky, glamorous, and long-lasting. Several guests asked me who did my makeup and I happily gave Vira's number to everyone. Brilliant artist!",
    rating: 5,
  },
  {
    name: "Neha Kulkarni",
    service: "Bridal Makeup",
    location: "Pune, Maharashtra",
    date: "June 2024",
    review:
      "The Gold Bridal package was perfect for my wedding. I especially appreciated the bridal trial — I could relax completely on my wedding morning knowing exactly what the result would look like. Vira is gentle, calm, and an absolute perfectionist. My photos are straight out of a bridal magazine.",
    rating: 5,
  },
  {
    name: "Divya Iyer",
    service: "Bridal Makeup",
    location: "Mumbai, Maharashtra",
    date: "April 2024",
    review:
      "I found Vira through a celebrity feature and reached out hoping she'd take my booking — she did and I'm so grateful. From the consultation to the final look, everything was flawless. She even helped me choose my bridal jewelry in a way that complemented the makeup look. A true artist and visionary.",
    rating: 5,
  },
  {
    name: "Ananya Singh",
    service: "Bridal Makeup",
    location: "Nashik, Maharashtra",
    date: "March 2024",
    review:
      "Vira's studio experience is a treat in itself — the ambiance, the hospitality, the premium products she uses. My bridal makeup was described by guests as 'otherworldly'. She combines traditional Indian bridal aesthetics with modern techniques in a way I've never seen before. I cannot recommend her highly enough.",
    rating: 5,
  },
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
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

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

const floatingOrbs = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  size: 30 + (i % 4) * 20,
  left: `${(i * 21 + 3) % 93}%`,
  top: `${(i * 17 + 5) % 88}%`,
  delay: `${(i * 0.6) % 3.5}s`,
  duration: `${7 + (i % 3) * 2.5}s`,
}));

export default function TestimonialsPage() {
  const navigate = useNavigate();

  return (
    <div
      data-ocid="testimonials.page"
      className="min-h-screen relative overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      {/* Floating background orbs */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {floatingOrbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.left,
              top: orb.top,
              background:
                "radial-gradient(circle, #E8D5C4 0%, #c4956a 60%, transparent 100%)",
              opacity: 0.08,
              animation: `floatParticle ${orb.duration} ease-in-out ${orb.delay} infinite alternate`,
              filter: "blur(8px)",
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
          className="text-center mb-12"
        >
          <p
            className="text-sm uppercase tracking-[0.3em] mb-3 font-body font-medium"
            style={{ color: "var(--color-brown-light)" }}
          >
            What Our Brides Say
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 gold-gradient-text">
            Client Stories
          </h1>
          <p
            className="text-lg md:text-xl max-w-xl mx-auto font-body"
            style={{ color: "#3D1F0D" }}
          >
            Real brides, real transformations, real love
          </p>
          <div
            className="mt-6 mx-auto h-px w-32"
            style={{
              background:
                "linear-gradient(90deg, transparent, #c4956a, #6B4423, #c4956a, transparent)",
            }}
          />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border"
            style={{ borderColor: "#E8D5C4" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-6 px-4"
                style={{
                  background:
                    i % 2 === 0
                      ? "#FAF7F2"
                      : "linear-gradient(135deg, #F5EDE6 0%, #EDD9C8 100%)",
                }}
              >
                <span
                  className="font-display text-3xl font-bold mb-1"
                  style={{ color: "#6B4423" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs uppercase tracking-widest font-body"
                  style={{ color: "#3D1F0D" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div
          data-ocid="testimonials.list"
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.12, duration: 0.6 }}
            >
              <TiltCard
                className="h-full rounded-2xl p-6 border flex flex-col cursor-default"
                style={{
                  background: "#FAF7F2",
                  borderColor: "#E8D5C4",
                  boxShadow: "0 4px 24px rgba(107,68,35,0.07)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <span
                      key={`star-${t.name}-${si}`}
                      className="text-lg"
                      style={{ color: "#6B4423" }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review text */}
                <p
                  className="text-sm font-body leading-relaxed flex-1 mb-4 italic"
                  style={{ color: "#3D1F0D" }}
                >
                  "{t.review}"
                </p>

                {/* Divider */}
                <div
                  className="h-px mb-4"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #E8D5C4, transparent)",
                  }}
                />

                {/* Author */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p
                      className="font-display font-bold text-sm"
                      style={{ color: "#3D1F0D" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs font-body mt-0.5"
                      style={{ color: "#6B4423" }}
                    >
                      {t.service}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p
                      className="text-xs font-body"
                      style={{ color: "#3D1F0D" }}
                    >
                      {t.location}
                    </p>
                    <p
                      className="text-xs font-body mt-0.5"
                      style={{ color: "var(--color-brown-light)" }}
                    >
                      {t.date}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Video testimonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <div
            className="rounded-2xl p-10 border"
            style={{ background: "#FAF7F2", borderColor: "#E8D5C4" }}
          >
            <div className="text-4xl mb-3">🎥</div>
            <h3
              className="font-display text-xl font-bold mb-2"
              style={{ color: "#3D1F0D" }}
            >
              Video Testimonials Coming Soon
            </h3>
            <p className="text-sm font-body mb-4" style={{ color: "#3D1F0D" }}>
              Follow{" "}
              <a
                href="https://instagram.com/vira_makeupartist"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: "#6B4423" }}
              >
                @vira_makeupartist
              </a>{" "}
              on Instagram for real bride transformation videos
            </p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 gold-gradient-text">
            Ready to be our next happy bride?
          </h2>
          <p
            className="text-base font-body mb-8 max-w-md mx-auto"
            style={{ color: "#3D1F0D" }}
          >
            Join 500+ brides who trusted Vira Makeup Artistry for their most
            beautiful day.
          </p>
          <button
            data-ocid="testimonials.book_now_cta"
            type="button"
            onClick={() => navigate("/book")}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-semibold transition-smooth hover:opacity-90 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #6B4423 0%, #c4956a 100%)",
              color: "#FAF7F2",
            }}
          >
            <span>✦</span> Book Now <span>✦</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
