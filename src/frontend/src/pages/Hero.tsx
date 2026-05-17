import { Float, Sphere, Stars, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "motion/react";
import { Suspense, useEffect, useRef, useState } from "react";
import type * as THREE from "three";

/* ─── 3D Scene Components ─────────────────────────────────────────── */

function FloatingTorus({
  position,
  color,
  speed = 1,
}: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3 * speed;
      meshRef.current.rotation.y += delta * 0.5 * speed;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <Torus ref={meshRef} args={[1, 0.35, 16, 40]} position={position}>
        <meshPhysicalMaterial
          color={color}
          metalness={0.85}
          roughness={0.1}
          reflectivity={1}
          clearcoat={0.8}
        />
      </Torus>
    </Float>
  );
}

function FloatingSphere({
  position,
  color,
  scale = 1,
}: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
      meshRef.current.rotation.y += 0.005;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[scale, 32, 32]} position={position}>
        <meshPhysicalMaterial
          color={color}
          metalness={0.7}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </Sphere>
    </Float>
  );
}

function Icosahedron({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.z += delta * 0.3;
    }
  });
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.9}
          roughness={0.05}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function SceneGroup() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
    }
  });
  return (
    <group ref={groupRef}>
      <FloatingTorus position={[-4, 1.5, -3]} color="#8B5E3C" speed={0.8} />
      <FloatingTorus position={[5, -2, -5]} color="#6B4423" speed={0.6} />
      <FloatingSphere position={[3.5, 2, -4]} color="#6B4423" scale={0.7} />
      <FloatingSphere position={[-5, -1, -6]} color="#C4956A" scale={0.5} />
      <Icosahedron position={[0, -3, -5]} color="#C4956A" />
      <FloatingSphere position={[6, 0, -8]} color="#A87D5A" scale={0.35} />
      <FloatingSphere position={[-3, 3, -7]} color="#8B5E3C" scale={0.45} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} color="#F5EDE4" />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#E8D5C4" />
      <pointLight position={[-5, 3, 2]} intensity={0.8} color="#C4956A" />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0.1}
        fade
        speed={1}
      />
      <SceneGroup />
    </>
  );
}

/* ─── Counter animation hook ─────────────────────────────────────── */
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── Stats component ───────────────────────────────────────────── */
function StatItem({
  value,
  suffix,
  label,
  animate,
}: { value: number; suffix: string; label: string; animate: boolean }) {
  const count = useCountUp(value, 1800, animate);
  return (
    <div className="text-center">
      <div className="font-display text-3xl font-bold gold-gradient-text">
        {count}
        {suffix}
      </div>
      <div
        className="font-body text-xs mt-0.5"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {label}
      </div>
    </div>
  );
}

/* ─── Hero Section ───────────────────────────────────────────────── */
export function Hero() {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-cream) 0%, var(--color-beige) 40%, oklch(0.92 0.02 55) 100%)",
      }}
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Canvas
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 10], fov: 60 }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(ellipse at 30% 50%, oklch(0.97 0.02 85 / 0.82) 0%, oklch(0.93 0.03 75 / 0.65) 50%, transparent 100%)",
        }}
      />

      {/* Content overlay */}
      <div
        className="relative flex items-center min-h-screen px-6 md:px-12 lg:px-20"
        style={{ zIndex: 10 }}
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-24">
          {/* LEFT: Text Content */}
          <div className="flex-1 flex flex-col gap-6 text-left">
            {/* Celebrity badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 60%, var(--color-gold) 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 3s linear infinite",
                  color: "var(--color-brown-dark)",
                  border: "1px solid oklch(0.55 0.09 50 / 0.4)",
                }}
                data-ocid="hero.celebrity_badge"
              >
                <span>✦</span>
                <span>Trusted by Celebrities</span>
                <span>✦</span>
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight"
              style={{ color: "var(--color-brown-dark)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              data-ocid="hero.headline"
            >
              Vira Makeup
              <br />
              <span className="gold-gradient-text text-glow">Artistry</span>
              <br />
              <span className="text-4xl md:text-5xl">&amp; Beauty Studio</span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <p
                className="font-display text-xl md:text-2xl italic"
                style={{ color: "var(--color-brown)" }}
              >
                Where Luxury Meets Artistry
              </p>
              <p
                className="font-body text-sm mt-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Celebrity Makeup Artist — Trusted by brides &amp; stars —
                Serving Akola, Maharashtra
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            >
              <a
                href="https://wa.me/917721848035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-smooth glow-gold hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #6B4423, #C4956A)",
                  color: "var(--color-brown-dark)",
                  border: "none",
                  boxShadow: "0 4px 20px oklch(0.55 0.09 50 / 0.5)",
                }}
                data-ocid="hero.book_button"
              >
                ✦ Book Your Appointment
              </a>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-smooth hover:scale-105 active:scale-95"
                style={{
                  background: "oklch(0.97 0.02 85 / 0.5)",
                  color: "var(--color-brown-dark)",
                  border: "2px solid var(--color-gold)",
                  backdropFilter: "blur(8px)",
                }}
                data-ocid="hero.explore_button"
              >
                Explore Our Work
              </button>
            </motion.div>

            {/* Stats Row */}
            <AnimatePresence>
              <motion.div
                className="flex flex-wrap gap-6 mt-4 p-5 rounded-2xl"
                style={{
                  background: "oklch(0.97 0.02 85 / 0.65)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid oklch(0.55 0.09 50 / 0.25)",
                  boxShadow: "0 4px 24px oklch(0.35 0.07 50 / 0.08)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              >
                <StatItem
                  value={300}
                  suffix="+"
                  label="Happy Clients"
                  animate={animateStats}
                />
                <div
                  className="w-px"
                  style={{ background: "var(--color-gold)", opacity: 0.3 }}
                />
                <StatItem
                  value={8}
                  suffix="+"
                  label="Years Experience"
                  animate={animateStats}
                />
                <div
                  className="w-px"
                  style={{ background: "var(--color-gold)", opacity: 0.3 }}
                />
                <StatItem
                  value={50}
                  suffix="+"
                  label="Celebrity Events"
                  animate={animateStats}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Hero Image Card */}
          <motion.div
            className="hidden lg:flex flex-col items-center relative flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                transform: "rotate(-3deg) scale(1.04)",
                background: "transparent",
                border: "2px solid oklch(0.55 0.09 50 / 0.6)",
                borderRadius: "1.5rem",
                boxShadow:
                  "0 0 40px oklch(0.78 0.14 85 / 0.35), 0 0 80px oklch(0.88 0.10 90 / 0.15)",
                pointerEvents: "none",
              }}
            />

            {/* Image frame */}
            <div
              className="relative overflow-hidden"
              style={{
                width: 300,
                height: 400,
                borderRadius: "1.5rem",
                transform: "rotate(3deg)",
                border: "3px solid oklch(0.55 0.09 50 / 0.7)",
                boxShadow:
                  "0 20px 60px oklch(0.35 0.07 50 / 0.3), 0 0 40px oklch(0.78 0.14 85 / 0.25)",
              }}
              data-ocid="hero.image_card"
            >
              <img
                src="/assets/user-photos/bride-kundan-jewelry.png"
                alt="Vira Makeup Artistry — Indian Bridal Makeup"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(1.02) contrast(1.05)" }}
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src =
                    "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&q=80";
                  t.onerror = null;
                }}
              />
              {/* Gold shimmer overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.75 0.06 55 / 0.08) 0%, transparent 50%, oklch(0.55 0.09 50 / 0.06) 100%)",
                }}
              />
            </div>

            {/* Floating badge on image */}
            <motion.div
              className="absolute -top-3 -right-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, #6B4423, #C4956A)",
                color: "var(--color-brown-dark)",
                boxShadow: "0 4px 16px oklch(0.55 0.09 50 / 0.5)",
                zIndex: 20,
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              data-ocid="hero.floating_badge"
            >
              ★ Celebrity Artist
            </motion.div>

            {/* Location badge */}
            <motion.div
              className="absolute -bottom-3 -left-4 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "oklch(0.97 0.02 85 / 0.9)",
                backdropFilter: "blur(8px)",
                color: "var(--color-brown-dark)",
                border: "1px solid oklch(0.55 0.09 50 / 0.3)",
                boxShadow: "0 4px 16px oklch(0.35 0.07 50 / 0.15)",
                zIndex: 20,
              }}
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              📍 Akola, Maharashtra
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        style={{ zIndex: 20, background: "none", border: "none", padding: 0 }}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        aria-label="Scroll to services"
        data-ocid="hero.scroll_indicator"
      >
        <span
          className="text-xs tracking-widest uppercase font-body"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Scroll
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          style={{ color: "var(--color-gold)" }}
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </section>
  );
}
