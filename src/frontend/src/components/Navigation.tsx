import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Bridal Packages", href: "/bridal-packages" },
  { label: "Celebrity", href: "/celebrity" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        data-ocid="nav.panel"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2 glass-card border-b border-border/50 shadow-glow-sm"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              data-ocid="nav.logo_link"
              onClick={() => navigate("/")}
              className="flex flex-col items-start group"
              type="button"
            >
              <span
                className="font-display text-2xl font-bold leading-none beige-gradient-text group-hover:text-glow transition-smooth"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Vira
              </span>
              <span
                className="text-xs tracking-[0.25em] uppercase"
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "'GeneralSans', sans-serif",
                }}
              >
                Makeup Artistry
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-smooth relative ${
                      isActive ? "font-semibold" : "hover:text-foreground"
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive
                      ? "var(--color-brown-dark)"
                      : "var(--color-text-secondary)",
                    fontFamily: "'GeneralSans', sans-serif",
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                          style={{ background: "var(--color-brown-light)" }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              <NavLink
                to="/book"
                data-ocid="nav.book_now_cta"
                className="ml-3 px-5 py-2.5 rounded-full text-sm font-semibold transition-smooth glow-subtle hover:glow-accent"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-brown-dark) 0%, var(--color-brown) 100%)",
                  color: "var(--color-cream)",
                  fontFamily: "'GeneralSans', sans-serif",
                }}
              >
                Book Now
              </NavLink>
            </div>

            {/* Mobile hamburger */}
            <button
              data-ocid="nav.hamburger_toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg transition-smooth"
              style={{ color: "var(--color-brown-dark)" }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          data-ocid="nav.mobile_menu"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center glass-card"
          style={{ background: "oklch(0.97 0.01 96 / 0.97)" }}
        >
          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                data-ocid={`nav.mobile_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                className="w-full text-center py-3 text-xl font-display font-semibold transition-smooth"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--color-brown-dark)"
                    : "var(--color-brown)",
                  fontFamily: "'Fraunces', Georgia, serif",
                  animationDelay: `${i * 0.05}s`,
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/book"
              data-ocid="nav.mobile_book_button"
              className="mt-4 w-full py-3 rounded-full text-lg font-semibold transition-smooth text-center glow-subtle"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-brown-dark) 0%, var(--color-brown) 100%)",
                color: "var(--color-cream)",
              }}
            >
              Book Appointment
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
