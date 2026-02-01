import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router";
import { planetsData } from "@/app/data/planets";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { StarField } from "@/app/components/StarField";
import { useState } from "react";

export function PlanetDetail() {
  const { planetId } = useParams();
  const navigate = useNavigate();
  const planet = planetsData.find((p) => p.id === planetId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!planet) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a1a] to-[#1a0a2e] text-purple-200">
        Planeta no encontrado
      </div>
    );
  }

  const hasImages = planet.images && planet.images.length > 0;

  return (
    <motion.div
      className="relative w-full min-h-screen overflow-auto bg-gradient-to-b from-[#0a0a1a] via-[#16082b] to-[#0f0520]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Estrellas de fondo */}
      <StarField count={80} />

      {/* Botón de regreso */}
      <motion.button
        onClick={() => navigate("/universe")}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-5 py-3 bg-black/40 backdrop-blur-md border border-purple-300/30 rounded-full text-purple-200 hover:bg-black/60 hover:border-purple-300/60 transition-all"
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span style={{ fontFamily: "'Playfair Display', serif" }}>Volver al universo</span>
      </motion.button>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Animación de zoom del planeta */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="rounded-full relative"
              style={{
                width: "180px",
                height: "180px",
                backgroundColor: planet.color,
                boxShadow: `0 0 60px ${planet.glowColor}90, 0 0 120px ${planet.glowColor}50`,
              }}
              animate={{
                boxShadow: [
                  `0 0 60px ${planet.glowColor}90, 0 0 120px ${planet.glowColor}50`,
                  `0 0 80px ${planet.glowColor}95, 0 0 160px ${planet.glowColor}60`,
                  `0 0 60px ${planet.glowColor}90, 0 0 120px ${planet.glowColor}50`,
                ],
                rotate: [0, 360],
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: planet.rotationSpeed,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <div
                className="absolute inset-0 rounded-full opacity-50"
                style={{
                  background: `radial-gradient(circle at 35% 35%, white, transparent 65%)`,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Nombre del planeta */}
          <motion.h1
            className="text-5xl md:text-6xl text-center mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {planet.name}
          </motion.h1>

          {/* Fecha */}
          <motion.p
            className="text-center text-purple-200/80 text-xl mb-3 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {planet.date}
          </motion.p>

          {/* Descripción */}
          <motion.p
            className="text-center text-purple-100/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {planet.description}
          </motion.p>

          {/* Galería de imágenes */}
          {hasImages && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-purple-300/20 shadow-2xl">
                <ImageWithFallback
                  src={planet.images[currentImageIndex]}
                  alt={`Recuerdo ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Overlay con degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Navegación de galería */}
                {planet.images.length > 1 && (
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    {planet.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                            ? "bg-purple-300 w-8"
                            : "bg-white/40 hover:bg-white/60"
                          }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Recuerdos/Memories */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {planet.memories.map((memory, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-300/20 rounded-2xl p-6 md:p-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 30px ${planet.glowColor}30`,
                }}
              >
                <p
                  className="text-purple-100 text-lg md:text-xl italic text-center"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "{memory}"
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Decoración de estrellas alrededor */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`star-deco-${i}`}
                className="absolute text-2xl"
                style={{
                  left: `${10 + (i % 4) * 25}%`,
                  top: `${20 + Math.floor(i / 4) * 30}%`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}