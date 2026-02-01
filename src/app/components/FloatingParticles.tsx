import { motion } from "motion/react";
import { useEffect, useState, useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface FloatingParticlesProps {
  count?: number;
  colors?: string[];
}

export function FloatingParticles({
  count = 20,
  colors = ["#ffd9e8", "#e0c3fc", "#a7c7e7", "#ffd89b", "#c4b5fd"]
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Memoize colors array to prevent infinite loops
  const memoizedColors = useMemo(() => colors, [colors.join(',')]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: memoizedColors[Math.floor(Math.random() * memoizedColors.length)],
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 3,
    }));
    setParticles(generatedParticles);
  }, [count, memoizedColors]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${particle.color}, transparent)`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}