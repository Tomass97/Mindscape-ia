import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Características",
    url: "#features",
  },
  {
    id: "1",
    title: "Precios",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Cómo usarlo",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Regístrate",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Iniciar sesión",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const MindscapeIAServices = [
  "Reconociemiento de voz",
  "Recomendaciones personalizadas",
  "Integración perfecta",
];

export const MindscapeIAServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Reconocimiento de voz",
    text: "Permite que el chatbot comprenda y responda a comandos de voz, facilitando que los usuarios interactúen con la aplicación sin usar las manos.",
    date: "Mayo 2023",
    status: "completado",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamificación",
    text: "Agrega elementos similares a los juegos, como insignias o tablas de clasificación, para incentivar a los usuarios a interactuar más frecuentemente con el chatbot.",
    date: "Mayo 2023",
    status: "en progreso",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Personalización del chatbot",
    text: "Permite que los usuarios personalicen la apariencia y el comportamiento del chatbot, haciéndolo más atractivo y divertido de interactuar.",
    date: "Mayo 2023",
    status: "completado",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integración con APIs",
    text: "Permite que el chatbot acceda a fuentes de datos externas, como APIs de clima o noticias, para proporcionar recomendaciones más relevantes.",
    date: "Mayo 2023",
    status: "en progreso",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Con automatización inteligente y seguridad de primer nivel, es la solución perfecta para equipos que buscan trabajar de manera más inteligente.";

  export const collabContent = [
    {
      id: "0",
      title: "Integración perfecta",
    },
    {
      id: "1",
      title: "Automatización inteligente",
    },
    {
      id: "2",
      title: "Seguridad de primer nivel",
    },
  ];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basico",
    description: "Chatbot de inteligencia artificial, recomendaciones personalizadas",
    price: "0€",
    features: [
      "Un chatbot de inteligencia artificial que puede entender tus consultas",
      "Recomendaciones personalizadas basadas en tus preferencias",
      "Capacidad para explorar la aplicación y sus características sin costo alguno"
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Chatbot de inteligencia artificial avanzado, soporte prioritario, panel de análisis",
    price: "9.99€",
    features: [
      "Un chatbot de inteligencia artificial que puede entender tus consultas",
      "Recomendaciones personalizadas basadas en tus preferencias",
      "Capacidad para explorar la aplicación y sus características sin costo alguno",
    ],
  },
  {
    id: "2",
    title: "Profesional",
    description: "Chatbot de inteligencia artificial personalizado, análisis avanzado, cuenta dedicada",
    price: null,
    features: [
      "Un chatbot de inteligencia artificial que puede entender tus consultas",
      "Recomendaciones personalizadas basadas en tus preferencias",
      "Capacidad para explorar la aplicación y sus características sin costo alguno",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Pregunta cualquier cosa",
    text: "Permite a los usuarios encontrar rápidamente respuestas a sus preguntas sin tener que buscar en múltiples fuentes.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Mejora todos los días",
    text: "La aplicación utiliza procesamiento de lenguaje natural para entender las consultas de los usuarios y proporcionar respuestas precisas y relevantes.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Conéctate en cualquier lugar",
    text: "Conéctate con el chatbot de IA desde cualquier lugar y en cualquier dispositivo, lo que lo hace más accesible y conveniente.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Respuesta rápida",
    text: "Permite a los usuarios encontrar rápidamente respuestas a sus preguntas sin tener que buscar en múltiples fuentes.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Pregunta cualquier cosa",
    text: "Permite a los usuarios encontrar rápidamente respuestas a sus preguntas sin tener que buscar en múltiples fuentes.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Mejora todos los días",
    text: "La aplicación utiliza procesamiento de lenguaje natural para entender las consultas de los usuarios y proporcionar respuestas precisas y relevantes.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
