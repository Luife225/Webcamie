import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { StarField } from "@/app/components/StarField";
import { FloatingParticles } from "@/app/components/FloatingParticles";
import { ShootingStar } from "@/app/components/ShootingStar";

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0f0520]">
      {/* Fondo nebulosa sutil */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMGRhcmslMjBwdXJwbGV8ZW58MXx8fHwxNzY5OTczOTU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nebulosa espacial"
          className="w-full h-full object-cover blur-sm"
        />
      </div>

      {/* Estrellas animadas */}
      <StarField count={100} />

      {/* Estrellas fugaces */}
      <ShootingStar />

      {/* Contenido central */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center"
        >
          {/* Título romántico */}
          <motion.h1
            className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Nuestro Universo
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-purple-200/80 mb-16 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
          >
            Donde cada estrella cuenta nuestra historia
          </motion.p>

          {/* Botón con glow */}
          <motion.button
            onClick={() => navigate("/universe")}
            className="relative group px-12 py-5 text-lg md:text-xl rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-300/50 text-purple-100 backdrop-blur-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            {/* Contenido del botón */}
            <span className="relative z-10 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Entrar a mi universo
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ✨
              </motion.span>
            </span>

            {/* Borde brillante animado */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-300/0"
              animate={{
                borderColor: ["rgba(216, 180, 254, 0)", "rgba(216, 180, 254, 0.5)", "rgba(216, 180, 254, 0)"],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </motion.div>

        {/* Partículas flotantes sutiles */}
        <FloatingParticles count={8} />
      </div>
    </div>
  );
}