# 🌌 Guía de Personalización - Entrar a mi Universo

## 📝 Cómo Personalizar tu Experiencia

### 1. Editar los Planetas y Recuerdos

Abre el archivo `/src/app/data/planets.ts` para personalizar cada planeta:

```typescript
{
  id: "nombre-unico",              // ID único del planeta
  name: "Nombre del Planeta",      // Título que aparecerá
  color: "#ffd9e8",                // Color del planeta (hex)
  glowColor: "#ff69b4",            // Color del brillo (hex)
  size: 40,                        // Tamaño del planeta (px)
  orbitRadius: 150,                // Distancia del sol (px)
  orbitSpeed: 20,                  // Velocidad de órbita (segundos)
  description: "Descripción...",   // Descripción del recuerdo
  date: "Fecha especial",          // Fecha o mensaje
  memories: [                      // Array de frases románticas
    "Primera frase del recuerdo",
    "Segunda frase del recuerdo",
    "Tercera frase del recuerdo"
  ],
  images: [                        // Array de URLs de imágenes
    "url-imagen-1.jpg",
    "url-imagen-2.jpg"
  ]
}
```

### 2. Agregar tus Propias Imágenes

Para agregar imágenes a la galería de cada planeta:

1. **Opción 1: Usar URLs de imágenes** (recomendado)
   - Sube tus fotos a un servicio como Imgur, Google Photos (enlace público), o Dropbox
   - Copia la URL directa de la imagen
   - Pégala en el array `images` del planeta correspondiente

2. **Opción 2: Usar imágenes de Unsplash**
   - Las imágenes de ejemplo ya están usando Unsplash
   - Puedes buscar más imágenes en [unsplash.com](https://unsplash.com)

### 3. Cambiar Colores del Sistema

Los colores principales están definidos en los archivos de cada componente. Aquí están los colores más importantes:

**Fondo espacial:**
- `/src/app/components/Welcome.tsx`: `from-[#0a0a1a] via-[#1a0a2e] to-[#0f0520]`
- `/src/app/components/SolarSystem.tsx`: `from-[#0a0a1a] via-[#16082b] to-[#0f0520]`

**Paleta de colores románticos:**
- Rosa: `#ffd9e8`, `#ffc4d6`
- Púrpura: `#e0c3fc`, `#c4b5fd`
- Azul: `#a7c7e7`
- Dorado: `#ffd89b`

### 4. Modificar Textos

**Pantalla de Bienvenida** (`/src/app/components/Welcome.tsx`):
- Título: Línea 35 - `"Nuestro Universo"`
- Subtítulo: Línea 57 - `"Donde cada estrella cuenta nuestra historia"`
- Botón: Línea 79 - `"Entrar a mi universo"`

**Sistema Solar** (`/src/app/components/SolarSystem.tsx`):
- Título: Línea 26 - `"Nuestro Sistema Solar"`
- Instrucciones: Línea 32 - `"Haz clic en cada planeta..."`

### 5. Agregar o Quitar Planetas

En `/src/app/data/planets.ts`, simplemente:
- **Agregar:** Copia un objeto de planeta existente y modifica sus valores
- **Quitar:** Elimina el objeto completo del array

**Recomendación:** Mantén entre 5-8 planetas para una experiencia óptima visual.

### 6. Cambiar la Fuente Tipográfica

La fuente actual es "Playfair Display" (romántica y elegante). Para cambiarla:

1. Abre `/src/styles/fonts.css`
2. Cambia la URL de Google Fonts por otra fuente
3. Actualiza `fontFamily: "'Playfair Display', serif"` en todos los componentes

**Sugerencias de fuentes románticas:**
- Cormorant Garamond
- Cinzel
- Great Vibes (más decorativa)
- Libre Baskerville

### 7. Ajustar Velocidades de Animación

**Órbitas de planetas:**
- Edita el campo `orbitSpeed` en cada planeta (valores más bajos = más rápido)

**Estrellas parpadeantes:**
- `/src/app/components/StarField.tsx`, línea 35: duración del parpadeo

**Partículas flotantes:**
- `/src/app/components/FloatingParticles.tsx`, línea 48: duración del movimiento

### 8. Personalizar el Sol

En `/src/app/components/SolarSystem.tsx`, líneas 44-66:
- Tamaño: `w-28 h-28 md:w-36 md:h-36` (Tailwind classes)
- Colores: `from-yellow-300 via-orange-400 to-pink-500`
- Velocidad de pulso: línea 60, `duration: 3`

## 🎨 Consejos de Diseño

1. **Mantén la coherencia:** Usa colores de la misma paleta
2. **Balance visual:** No hagas todos los planetas del mismo tamaño
3. **Velocidades variadas:** Diferentes velocidades de órbita se ven más dinámicas
4. **Menos es más:** No sobrecargues con demasiados recuerdos por planeta

## 🚀 Para Compartir tu Universo

Esta aplicación está lista para ser desplegada en:
- Vercel
- Netlify
- GitHub Pages
- Cualquier servicio de hosting estático

¡Disfruta creando tu universo romántico personalizado! ✨💕
