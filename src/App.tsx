import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load page components
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const SupplementScience = lazy(() => import("./pages/SupplementScience"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const JoinUs = lazy(() => import("./pages/JoinUs"));
const SayHello = lazy(() => import("./pages/SayHello"));
const News = lazy(() => import("./pages/News"));
const Blog = lazy(() => import("./pages/Blog"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const SupplementDetail = lazy(() => import("./pages/SupplementDetail"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Admin = lazy(() => import("./pages/Admin"));

// Create a new query client with improved error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      meta: {
        onError: (error: Error) => {
          console.error("Query error:", error);
        }
      }
    },
    mutations: {
      meta: {
        onError: (error: Error) => {
          console.error("Mutation error:", error);
        }
      }
    }
  }
});

const App = () => {
  console.log("App component rendering");
  
  return (
    <div className="font-body">
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Router>
              <Suspense fallback={<LoadingSpinner />}>
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
                  <Route path="/supplements/:supplementId" element={<SupplementDetail />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Router>
          </TooltipProvider>
        </UserProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
