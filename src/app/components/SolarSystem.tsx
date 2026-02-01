import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { planetsData } from "@/app/data/planets";
import { StarField } from "@/app/components/StarField";
import { FloatingParticles } from "@/app/components/FloatingParticles";
import { ShootingStar } from "@/app/components/ShootingStar";

export function SolarSystem() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#16082b] to-[#0f0520]">
      {/* Estrellas de fondo */}
      <StarField count={120} />

      {/* Estrellas fugaces */}
      <ShootingStar />

      {/* Título superior */}
      <motion.div
        className="absolute top-8 left-0 right-0 z-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="text-4xl md:text-5xl bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Nuestro Sistema Solar
        </h1>
        <p
          className="text-purple-200/70 mt-2 italic text-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Haz clic en cada planeta para revivir nuestros recuerdos
        </p>
      </motion.div>

      {/* Sistema Solar */}
      <div className="relative flex items-center justify-center h-full">
        {/* El Sol (centro) */}
        <motion.div
          className="absolute z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 40px rgba(251, 191, 36, 0.6), 0 0 80px rgba(251, 191, 36, 0.3)",
                "0 0 60px rgba(251, 191, 36, 0.8), 0 0 120px rgba(251, 191, 36, 0.5)",
                "0 0 40px rgba(251, 191, 36, 0.6), 0 0 80px rgba(251, 191, 36, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Brillo interno */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-100 to-transparent opacity-70" />
          </motion.div>
        </motion.div>

        {/* Planetas en órbita */}
        {planetsData.map((planet, index) => (
          <motion.div
            key={planet.id}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
          >
            {/* Órbita (círculo guía sutil) */}
            <motion.div
              className="absolute border border-purple-400/20 rounded-full"
              style={{
                width: `${planet.orbitRadius * 2}px`,
                height: `${planet.orbitRadius * 2}px`,
                left: `calc(50% - ${planet.orbitRadius}px)`,
                top: `calc(50% - ${planet.orbitRadius}px)`,
              }}
              animate={{
                borderColor: ["rgba(196, 164, 253, 0.1)", "rgba(196, 164, 253, 0.25)", "rgba(196, 164, 253, 0.1)"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            />

            {/* Planeta en movimiento orbital */}
            <motion.div
              className="absolute cursor-pointer"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: planet.orbitSpeed,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                style={{
                  x: planet.orbitRadius,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(`/planet/${planet.id}`)}
              >
                {/* El planeta */}
                <motion.div
                  className="rounded-full relative"
                  style={{
                    width: `${planet.size}px`,
                    height: `${planet.size}px`,
                    backgroundColor: planet.color,
                    boxShadow: `0 0 20px ${planet.glowColor}80, 0 0 40px ${planet.glowColor}40`,
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${planet.glowColor}80, 0 0 40px ${planet.glowColor}40`,
                      `0 0 30px ${planet.glowColor}90, 0 0 60px ${planet.glowColor}50`,
                      `0 0 20px ${planet.glowColor}80, 0 0 40px ${planet.glowColor}40`,
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Brillo del planeta */}
                  <div
                    className="absolute inset-0 rounded-full opacity-40"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, white, transparent 60%)`,
                    }}
                  />

                  {/* Etiqueta del planeta */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                    style={{
                      top: `${planet.size + 12}px`,
                      fontFamily: "'Playfair Display', serif",
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-300/30">
                      <span className="text-purple-100 text-sm">{planet.name}</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Partículas flotantes decorativas */}
      <FloatingParticles count={10} colors={["#ffd9e8", "#e0c3fc", "#a7c7e7", "#ffd89b"]} />
    </div>
  );
}