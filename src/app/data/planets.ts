export interface Planet {
  id: string;
  name: string;
  color: string;
  glowColor: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
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
    description: "Los sueños que construimos juntos",
    date: "Para siempre",
    memories: [
      "Planes para el futuro",
      "Sueños compartidos",
      "Un amor infinito"
    ],
    images: []
  }
];