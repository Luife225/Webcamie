import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface ShootingStarData {
  id: number;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
}

export function ShootingStar() {
  const [shootingStars, setShootingStars] = useState<ShootingStarData[]>([]);

  useEffect(() => {
    // Generar estrellas fugaces periódicamente
    const interval = setInterval(() => {
      const newStar: ShootingStarData = {
        id: Date.now(),
        startX: Math.random() * 50 + 25, // Entre 25% y 75%
        startY: Math.random() * 30, // Parte superior
        duration: 1 + Math.random() * 0.5,
        delay: 0,
      };

      setShootingStars((prev) => [...prev, newStar]);

      // Eliminar la estrella después de que termine su animación
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, (newStar.duration + newStar.delay) * 1000);
    }, 8000); // Cada 8 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [0, 200],
            y: [0, 200],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeOut",
          }}
        >
          <div className="relative">
            {/* La estrella */}
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            {/* La cola */}
            <div
              className="absolute top-0 right-0 h-0.5 bg-gradient-to-r from-white to-transparent"
              style={{
                width: "40px",
                transform: "rotate(-45deg) translateX(50%)",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
