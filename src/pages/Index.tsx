import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PersonaHero, { Persona } from "@/components/PersonaHero";

const personas: Persona[] = [
  {
    id: "developer",
    label: "DEVELOPER",
    title: "SAHIL DEV",
    subtitle: "Android Developer & Software Engineer",
    description:
      "Crafting clean, scalable mobile apps with Kotlin & Jetpack Compose. Six years of building products that ship.",
    bg: "https://i.postimg.cc/VLh5HfWP/Dev-bg.webp",
    png: "https://i.postimg.cc/wTr3bqQ6/Dev.webp",
    accent: "hsl(0 85% 55%)",
    ctaLabel: "Enter Dev Mode",
    ctaTo: "/developer",
    index: 0,
    total: 3,
  },
  {
    id: "friend",
    label: "CREATOR",
    title: "THE FRIEND",
    subtitle: "Content Creator & Storyteller",
    description:
      "Off the keyboard — music, films, photography and the small things. The human side of the dev.",
    bg: "https://i.postimg.cc/gk7rBzHF/Friend-Bg.webp",
    png: "https://i.postimg.cc/ncWMwFGJ/Friend.webp",
    accent: "hsl(28 90% 55%)",
    ctaLabel: "Meet The Friend",
    ctaTo: "/friend",
    index: 1,
    total: 3,
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
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background grain overflow-x-hidden">
      <Navbar />
      {personas.map((p) => (
        <PersonaHero key={p.id} persona={p} />
      ))}
      <Footer />
    </div>
  );
};

export default Index;
