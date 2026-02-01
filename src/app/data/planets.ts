export interface Planet {
  id: string;
  name: string;
  color: string;
  glowColor: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed: number; // Velocidad de rotación sobre su propio eje (segundos)
  description: string;
  date: string;
  memories: string[];
  images: string[];
}

export const planetsData: Planet[] = [
  {
    id: "primer-encuentro",
    name: "Primer Encuentro",
    color: "#ffd9e8",
    glowColor: "#ff69b4",
    size: 40,
    orbitRadius: 120, // Reducido para móviles
    orbitSpeed: 20,
    rotationSpeed: 8, // Rotación rápida
    description: "El día en que nuestros caminos se cruzaron por primera vez",
    date: "El comienzo de todo",
    memories: [
      "Tus ojos brillaban como estrellas",
      "La primera sonrisa que me robó el aliento",
      "El momento en que supe que eras especial"
    ],
    images: [
      "https://images.unsplash.com/photo-1766041678565-a99558efbc3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMG1lbW9yeXxlbnwxfHx8fDE3Njk5NzM5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1769415244626-74e2245fd277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjByb21hbnRpYyUyMG1vbWVudHxlbnwxfHx8fDE3Njk5NzM5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: "primera-cita",
    name: "Primera Cita",
    color: "#e0c3fc",
    glowColor: "#a855f7",
    size: 35,
    orbitRadius: 170, // Reducido para móviles
    orbitSpeed: 30,
    rotationSpeed: 12, // Rotación moderada
    description: "La noche mágica donde todo comenzó a florecer",
    date: "Una noche inolvidable",
    memories: [
      "Risas que llenaron la noche",
      "Conversaciones hasta el amanecer",
      "El nerviosismo de tomarnos de la mano"
    ],
    images: []
  },
  {
    id: "primer-beso",
    name: "Primer Beso",
    color: "#ffc4d6",
    glowColor: "#ec4899",
    size: 45,
    orbitRadius: 220, // Reducido para móviles
    orbitSpeed: 25,
    rotationSpeed: 10, // Rotación moderada-rápida
    description: "El momento que selló nuestro destino",
    date: "Bajo las estrellas",
    memories: [
      "El tiempo se detuvo",
      "Tu perfume en el aire",
      "Mariposas en el estómago"
    ],
    images: []
  },
  {
    id: "aventuras",
    name: "Nuestras Aventuras",
    color: "#a7c7e7",
    glowColor: "#3b82f6",
    size: 38,
    orbitRadius: 270, // Reducido para móviles
    orbitSpeed: 35,
    rotationSpeed: 15, // Rotación lenta
    description: "Los viajes y momentos que compartimos",
    date: "Cada día juntos",
    memories: [
      "Descubriendo el mundo contigo",
      "Cada atardecer a tu lado",
      "Creando historias para contar"
    ],
    images: []
  },
  {
    id: "momentos-especiales",
    name: "Momentos Especiales",
    color: "#ffd89b",
    glowColor: "#f59e0b",
    size: 42,
    orbitRadius: 320, // Reducido para móviles
    orbitSpeed: 28,
    rotationSpeed: 18, // Rotación muy lenta
    description: "Celebraciones y recuerdos únicos",
    date: "Fechas grabadas en el corazón",
    memories: [
      "Cumpleaños sorpresa",
      "Aniversarios mágicos",
      "Pequeños detalles que lo significan todo"
    ],
    images: []
  },
  {
    id: "promesas",
    name: "Nuestras Promesas",
    color: "#c4b5fd",
    glowColor: "#8b5cf6",
    size: 36,
    orbitRadius: 370, // Reducido para móviles
    orbitSpeed: 32,
    rotationSpeed: 14, // Rotación moderada
    description: "Los sueños que construimos juntos",
    date: "Para siempre",
    memories: [
      "Vernos y estar juntos",
      "Desaparecer y mudarnos a una casa alejada",
      "Amarnos para siempre"
    ],
    images: ["/promesas.png"]
  },
  {
    id: "estrella-especial",
    name: "Primera Muestra de Afecto",
    color: "#fff9e6",
    glowColor: "#ffd700",
    size: 50,
    orbitRadius: 0, // No orbita, es especial
    orbitSpeed: 0,
    rotationSpeed: 8,
    description: "Un momento mágico que iluminó nuestro camino",
    date: "El inicio de algo especial",
    memories: [
      "La primera vez que sentí mariposas",
      "Un gesto que lo cambió todo",
      "El momento en que supe que eras diferente"
    ],
    images: ["/image.png"]
  }
];