
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import SupplementScience from "./pages/SupplementScience";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import JoinUs from "./pages/JoinUs";
import SayHello from "./pages/SayHello";
import News from "./pages/News";
import Blog from "./pages/Blog";
import CategoryPage from "./pages/CategoryPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

const queryClient = new QueryClient();

const App = () => (
  <div className="font-body">
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/supplement-science" element={<SupplementScience />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/contact" element={<SayHello />} />
              <Route path="/news" element={<News />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </UserProvider>
    </QueryClientProvider>
  </div>
);

export default App;
