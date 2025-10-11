import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import BusinessPlanPage from "./pages/BusinessPlanPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import NotFound from "./pages/NotFound";
import SideNavigation from "@/components/SideNavigation";
import { 
  Target, BarChart, TrendingUp, Rocket, Users, DollarSign, 
  Monitor, Eye, Server, Zap, Code, CheckCircle2, Shield
} from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();

  const getSectionsForPath = (path: string) => {
    if (path === "/business-plan") {
      return [
        { id: "overview", label: "Overview", icon: <Target className="w-4 h-4" /> },
        { id: "canvas", label: "Business Canvas", icon: <BarChart className="w-4 h-4" /> },
        { id: "problem", label: "Problem & Opportunity", icon: <TrendingUp className="w-4 h-4" /> },
        { id: "solution", label: "Our Solution", icon: <Rocket className="w-4 h-4" /> },
        { id: "market", label: "Market Validation", icon: <Users className="w-4 h-4" /> },
        { id: "pricing", label: "Pricing", icon: <DollarSign className="w-4 h-4" /> },
        { id: "go-to-market", label: "Go-to-Market", icon: <TrendingUp className="w-4 h-4" /> },
        { id: "competitive", label: "Competition", icon: <BarChart className="w-4 h-4" /> },
        { id: "financial", label: "Financials", icon: <DollarSign className="w-4 h-4" /> },
        { id: "investment", label: "Investment", icon: <Rocket className="w-4 h-4" /> },
      ];
    }
    if (path === "/solutions") {
      return [
        { id: "overview", label: "Overview", icon: <Monitor className="w-4 h-4" /> },
        { id: "demo", label: "Live Demo", icon: <Eye className="w-4 h-4" /> },
        { id: "user-journey", label: "User Journey", icon: <Users className="w-4 h-4" /> },
        { id: "architecture", label: "Architecture", icon: <Server className="w-4 h-4" /> },
        { id: "features", label: "Key Features", icon: <Zap className="w-4 h-4" /> },
        { id: "technology", label: "Technology Stack", icon: <Code className="w-4 h-4" /> },
        { id: "user-testing", label: "User Testing", icon: <CheckCircle2 className="w-4 h-4" /> },
        { id: "future", label: "Future Features", icon: <TrendingUp className="w-4 h-4" /> },
      ];
    }
    if (path === "/security") {
      return [
        { id: "ssdlc", label: "SSDLC Phases", icon: <Shield className="w-4 h-4" /> },
        { id: "priorities", label: "Implementation Priorities", icon: <Zap className="w-4 h-4" /> },
        { id: "future-security", label: "Future Features", icon: <TrendingUp className="w-4 h-4" /> },
      ];
    }
    // Add other paths and their sections here
    return [];
  };

  const sections = getSectionsForPath(location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {sections.length > 0 && <SideNavigation sections={sections} />}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business-plan" element={<BusinessPlanPage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
