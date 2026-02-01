import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface ShootingStarData {
  id: number;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
}

export function ShootingStar() {
  const [shootingStars, setShootingStars] = useState<ShootingStarData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Generar estrellas fugaces periódicamente
    const interval = setInterval(() => {
      const newStar: ShootingStarData = {
        id: Date.now(),
        startX: Math.random() * 50 + 25, // Entre 25% y 75%
        startY: Math.random() * 30, // Parte superior
        duration: 6 + Math.random() * 0.5, // Duración aumentada: 2.5-3 segundos
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

  const handleStarClick = () => {
    navigate("/planet/estrella-especial");
  };

  return (
    <div className="absolute inset-0 overflow-hidden z-50" style={{ pointerEvents: 'none' }}>
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute cursor-pointer"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            pointerEvents: 'auto', // Habilitar clicks solo en la estrella
            padding: '20px', // Área clickeable más grande
            zIndex: 100, // Asegurar que esté por encima
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
          onClick={handleStarClick}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}
        >
          <div className="relative">
            {/* La estrella - más grande */}
            <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1),0_0_40px_rgba(255,215,0,0.8)]" />
            {/* La cola - más visible */}
            <div
              className="absolute top-1/2 right-1/2 h-1 bg-gradient-to-r from-white via-yellow-200 to-transparent"
              style={{
                width: "80px",
                transform: "rotate(-45deg) translate(50%, -50%)",
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
