import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Nota: Para activar música de fondo, necesitarás agregar un archivo de audio
    // y descomentar el código siguiente:
    
    // if (audioRef.current) {
    //   audioRef.current.volume = 0.3; // Volumen al 30%
    // }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setIsMuted(true);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
      }
    }
  };

  return (
    <>
      {/* Audio element - Actualmente deshabilitado */}
      {/* Descomenta y agrega la URL de tu música favorita: */}
      {/* <audio ref={audioRef} loop>
        <source src="/path/to/your/music.mp3" type="audio/mpeg" />
      </audio> */}

      {/* Botón de control de música */}
      <motion.button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 p-4 bg-black/40 backdrop-blur-md border border-purple-300/30 rounded-full text-purple-200 hover:bg-black/60 hover:border-purple-300/60 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        title={isMuted ? "Activar música" : "Silenciar música"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Volume2 className="w-6 h-6" />
          </motion.div>
        )}
      </motion.button>
    </>
  );
}
