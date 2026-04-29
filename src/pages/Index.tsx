import Navbar from "@/components/Navbar";
import PersonaSwitcher, { Persona } from "@/components/PersonaSwitcher";

const personas: Persona[] = [
  {
    id: "developer",
    label: "DEVELOPER",
    title: "Sahil Wadhwani",
    subtitle: "Android Developer & Software Engineer",
    description:
      "Crafting clean, scalable mobile apps with Kotlin & Jetpack Compose. Six years of shipping products that just work.",
    bg: "https://i.postimg.cc/VLh5HfWP/Dev-bg.webp",
    png: "https://i.postimg.cc/wTr3bqQ6/Dev.webp",
    accent: "hsl(0, 85%, 58%)",
    accentSoft: "hsl(0, 85%, 58%, 0.22)",
    ctaLabel: "Enter Dev Mode",
    ctaTo: "/developer",
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
    title: "Sahil Wadhwani",
    subtitle: "Content Creator · Storyteller · Human",
    description:
      "Off the keyboard — music I loop, films I rewatch, photographs I take, and the corners of the internet I call home.",
    bg: "https://i.postimg.cc/gk7rBzHF/Friend-Bg.webp",
    png: "https://i.postimg.cc/ncWMwFGJ/Friend.webp",
    accent: "hsl(28, 95%, 58%)",
    accentSoft: "hsl(28, 95%, 58%, 0.22)",
    ctaLabel: "Meet The Friend",
    ctaTo: "/friend",
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
    title: "Sahil Wadhwani",
    subtitle: "Competitive Gamer · BGMI Conqueror",
    description:
      "Where reflexes meet strategy. 2500+ hours across battle royales, RPGs and the unforgiving classics.",
    bg: "https://i.postimg.cc/7YRbQHnw/gamer-bg.webp",
    png: "https://i.postimg.cc/TYshHdqH/Gamer.webp",
    accent: "hsl(190, 95%, 55%)",
    accentSoft: "hsl(190, 95%, 55%, 0.22)",
    ctaLabel: "Open Player Card",
    ctaTo: "/gamer",
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

const Index = () => {
  return (
    <div className="h-screen w-screen bg-background grain overflow-hidden">
      <Navbar />
      <PersonaSwitcher personas={personas} />
    </div>
  );
};

export default Index;
