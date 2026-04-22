import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PersonaHero, { Persona } from "@/components/PersonaHero";
import HomeChrome from "@/components/HomeChrome";

const personas: Persona[] = [
  {
    id: "developer",
    label: "DEVELOPER",
    title: "SAHIL DEV",
    subtitle: "Android Developer & Software Engineer",
    description:
      "Crafting clean, scalable mobile apps with Kotlin & Jetpack Compose. Six years of shipping products that just work.",
    bg: "https://i.postimg.cc/VLh5HfWP/Dev-bg.webp",
    png: "https://i.postimg.cc/wTr3bqQ6/Dev.webp",
    accent: "hsl(0 85% 55%)",
    ctaLabel: "Enter Dev Mode",
    ctaTo: "/developer",
    index: 0,
    total: 3,
    stats: [
      { value: "6+", label: "Years Coding" },
      { value: "15+", label: "Projects Shipped" },
      { value: "10K+", label: "Lines of Kotlin" },
    ],
    marquee: [
      "KOTLIN", "JETPACK COMPOSE", "FIREBASE", "MVVM",
      "ANDROID SDK", "DART", "REST APIs", "CLEAN ARCHITECTURE",
    ],
  },
  {
    id: "friend",
    label: "CREATOR",
    title: "THE FRIEND",
    subtitle: "Content Creator · Storyteller · Human",
    description:
      "Off the keyboard — music I loop, films I rewatch, photographs I take, and the corners of the internet I call home.",
    bg: "https://i.postimg.cc/gk7rBzHF/Friend-Bg.webp",
    png: "https://i.postimg.cc/ncWMwFGJ/Friend.webp",
    accent: "hsl(28 90% 55%)",
    ctaLabel: "Meet The Friend",
    ctaTo: "/friend",
    index: 1,
    total: 3,
    stats: [
      { value: "100+", label: "Videos Made" },
      { value: "5K+", label: "Followers" },
      { value: "∞", label: "Stories Told" },
    ],
    marquee: [
      "YOUTUBE", "INSTAGRAM", "SPOTIFY", "MUSIC",
      "PHOTOGRAPHY", "FILMS", "CULTURE", "STORYTELLING",
    ],
  },
  {
    id: "gamer",
    label: "GAMER",
    title: "S A A H O",
    subtitle: "Competitive Gamer · BGMI Conqueror",
    description:
      "Where reflexes meet strategy. 2500+ hours across battle royales, RPGs and the unforgiving classics.",
    bg: "https://i.postimg.cc/7YRbQHnw/gamer-bg.webp",
    png: "https://i.postimg.cc/TYshHdqH/Gamer.webp",
    accent: "hsl(190 90% 55%)",
    ctaLabel: "Open Player Card",
    ctaTo: "/gamer",
    index: 2,
    total: 3,
    stats: [
      { value: "2500+", label: "Hours Played" },
      { value: "50+", label: "Titles Cleared" },
      { value: "9/10", label: "Avg Rating" },
    ],
    marquee: [
      "BGMI", "GTA V", "RDR 2", "NFS",
      "EFOOTBALL", "CONQUEROR", "K/D 4.5", "SQUAD UP",
    ],
  },
];

const railItems = personas.map((p) => ({
  id: p.id,
  label: p.label,
  accent: p.accent,
}));

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain overflow-x-hidden">
      <Navbar />
      <HomeChrome items={railItems} />
      {personas.map((p) => (
        <PersonaHero key={p.id} persona={p} />
      ))}
      <Footer />
    </div>
  );
};

export default Index;
