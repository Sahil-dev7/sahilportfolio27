import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YouTubePage from "./pages/YouTube";
import GamingPage from "./pages/Gaming";
import SkillsPage from "./pages/Skills";
import Developer from "./pages/Developer";
import Friend from "./pages/Friend";
import Gamer from "./pages/Gamer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/gamer" element={<Gamer />} />
          <Route path="/youtube" element={<YouTubePage />} />
          <Route path="/gaming" element={<GamingPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
