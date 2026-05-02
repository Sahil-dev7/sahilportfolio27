import Navbar from "@/components/Navbar";
import PersonaSwitcher, { Persona } from "@/components/PersonaSwitcher";

const personas: Persona[] = [
  {
    id: "developer",
    label: "DEVELOPER",
    title: "Sahil Wadhwani",
    subtitle: "Android Engineer · Kotlin Craftsman",
    description:
      "I build calm, fast Android apps with Kotlin and Jetpack Compose — clean architecture, zero friction, ship-ready code.",
    bg: "https://i.postimg.cc/VLh5HfWP/Dev-bg.webp",
    png: "https://i.postimg.cc/wTr3bqQ6/Dev.webp",
    accent: "hsl(0, 85%, 58%)",
    accentSoft: "hsl(0, 85%, 58%, 0.22)",
    ctaLabel: "Enter Dev Mode",
    ctaTo: "/developer",
    stats: [
      { value: "6+", label: "Years Coding" },
      { value: "15+", label: "Apps Shipped" },
      { value: "Kotlin", label: "Daily Driver" },
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
    subtitle: "Storyteller · Filmmaker · Quiet Human",
    description:
      "Away from code — songs on loop, films on repeat, frames I chase, and the small everyday things worth saving.",
    bg: "https://i.postimg.cc/gk7rBzHF/Friend-Bg.webp",
    png: "https://i.postimg.cc/ncWMwFGJ/Friend.webp",
    accent: "hsl(28, 95%, 58%)",
    accentSoft: "hsl(28, 95%, 58%, 0.22)",
    ctaLabel: "Meet The Friend",
    ctaTo: "/friend",
    stats: [
      { value: "120+", label: "Reels & Films" },
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
    subtitle: "BGMI Conqueror · Squad IGL",
    description:
      "Reflex over recoil. 2500+ hours of battle royale grind, conqueror lobbies, and squads that actually clutch.",
    bg: "https://i.postimg.cc/7YRbQHnw/gamer-bg.webp",
    png: "https://i.postimg.cc/TYshHdqH/Gamer.webp",
    accent: "hsl(190, 95%, 55%)",
    accentSoft: "hsl(190, 95%, 55%, 0.22)",
    ctaLabel: "Open Player Card",
    ctaTo: "/gamer",
    stats: [
      { value: "Conqueror", label: "BGMI Tier" },
      { value: "4.5", label: "Avg K/D" },
      { value: "2500h", label: "Battle Time" },
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
