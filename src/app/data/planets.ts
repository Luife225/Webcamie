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
    name: "Primera ves que queria decir que me gustabas",
    color: "#ffd9e8",
    glowColor: "#ff69b4",
    size: 40,
    orbitRadius: 120, // Reducido para móviles
    orbitSpeed: 20,
    rotationSpeed: 8, // Rotación rápida
    description: "El día en que sude frio",
    date: "(me daba miedo)",
    memories: [
      "te hubiera dicho que si ese dia si no fuera porq andaba decaido",
      "aun recuerdo los camiPoints",
      "en ese entonces tenias 50 y algo creo"
    ],
    images: [
      "/gustas.png"
    ]
  },
  {
    id: "primera-cita",
    name: "Primera vez",
    color: "#e0c3fc",
    glowColor: "#a855f7",
    size: 35,
    orbitRadius: 170, // Reducido para móviles
    orbitSpeed: 30,
    rotationSpeed: 12, // Rotación moderada
    description: "La noche mágica donde conoci a mi mayor enemigo",
    date: "Linda noche",
    memories: [
      "muchos furros y poca ropa",
      "aun hablabamos por idv q recuerde",
      "para colmo no me acuerdo si de vdd fue esta la foto o no XD"
    ],
    images: ["/priemra.png"]
  },
  {
    id: "primer-beso",
    name: "Primer match",
    color: "#ffc4d6",
    glowColor: "#ec4899",
    size: 45,
    orbitRadius: 220, // Reducido para móviles
    orbitSpeed: 25,
    rotationSpeed: 10, // Rotación moderada-rápida
    description: "El momento que donde me ligue de por vida contigo",
    date: "Obligado a hacer match de furros",
    memories: [
      "De los mejores experiencias de match que tuve",
      "me dio ternura como lo pediste",
      "si te decia que no seguro y llorabas"
    ],
    images: ["/match.png"]
  },
  {
    id: "aventuras",
    name: "Nuestros momentos juntos",
    color: "#a7c7e7",
    glowColor: "#3b82f6",
    size: 38,
    orbitRadius: 270, // Reducido para móviles
    orbitSpeed: 35,
    rotationSpeed: 15, // Rotación lenta
    description: "Cada momento junto que nos forma mas y mas como pareja",
    date: "Cada día juntos",
    memories: [
      "Teniendote cada dia presente",
      "Despidiendote antes de dormir",
      "y que la primera persona en escribir sea a ti"
    ],
    images: []
  },
  {
    id: "momentos-especiales",
    name: "Momento especial",
    color: "#ffd89b",
    glowColor: "#f59e0b",
    size: 42,
    orbitRadius: 320, // Reducido para móviles
    orbitSpeed: 28,
    rotationSpeed: 18, // Rotación muy lenta
    description: "donde formamos la relacion",
    date: "donde mi vida cambio por completo",
    memories: [
      "Estaba nervioso de cagar la relacion a la semana",
      "pero me acostumbre a estar siempre contigo",
      "y pesar que en esa epoca estas de fan de aimp3"
    ],
    images: ["/comienzo.png"]
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
    description: "Me senti muy comodo y con confianza cuando me escribiste eso",
    date: "El inicio de algo especial",
    memories: [
      "si estaba malito ese dia si no mal recuerdo",
      "me dio una buena vista tuya",
      "me dejaste una buena impresion mi amor"
    ],
    images: ["/image.png"]
  }
];