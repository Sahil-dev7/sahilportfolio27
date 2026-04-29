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
    coverLines: {
      leftTop: {
        kicker: "EXCLUSIVE",
        headline: "Six Years, Zero Shortcuts.",
        sub: "Inside the mind of an Android engineer who codes like he means it.",
      },
      leftMid: {
        kicker: "ON CRAFT",
        headline: "Kotlin, clean architecture & quiet obsession.",
      },
      rightTop: {
        kicker: "COVER STAR",
        headline: "The Builder.",
        sub: "Apps shipped, side projects scaled, deadlines respected.",
      },
      rightBottom: {
        kicker: "INSIDE",
        headline: "From Compose to Composer — the dev's playlist.",
      },
    },
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
    coverLines: {
      leftTop: {
        kicker: "OFF SCREEN",
        headline: "The Stories Between the Code.",
        sub: "Films, frames and the playlists on infinite loop.",
      },
      leftMid: {
        kicker: "AESTHETIC",
        headline: "A camera roll, a curator's eye.",
      },
      rightTop: {
        kicker: "COVER STAR",
        headline: "The Friend.",
        sub: "Soft-spoken on stage, loud in the group chat.",
      },
      rightBottom: {
        kicker: "INSIDE",
        headline: "Five favourites, one honest list.",
      },
    },
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
    coverLines: {
      leftTop: {
        kicker: "GAME ON",
        headline: "Where Reflex Meets Romance.",
        sub: "2,500 hours, one obsession — playing like it's the final round.",
      },
      leftMid: {
        kicker: "RANK",
        headline: "Conqueror tier. Quiet hands. Loud headshots.",
      },
      rightTop: {
        kicker: "COVER STAR",
        headline: "The Player.",
        sub: "From open worlds to ranked lobbies — built different.",
      },
      rightBottom: {
        kicker: "INSIDE",
        headline: "The library: every title, rated honestly.",
      },
    },
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
