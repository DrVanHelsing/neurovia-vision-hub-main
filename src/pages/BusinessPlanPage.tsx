import Navigation from "@/components/Navigation";
import SideNavigation from "@/components/SideNavigation";
import BusinessPlan from "@/components/BusinessPlan";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Target, DollarSign, TrendingUp, Users, Rocket, BarChart } from "lucide-react";
import auroraBg from "@/assets/aurora-hero-bg.jpg";

const BusinessPlanPage = () => {
  const navigationSections = [
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

  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in-page">
      <Navigation />
      
      {/* Page Header / Hero */}
      <header id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${auroraBg})`,
          }}
        />
        <div className="absolute inset-0 bg-background/50" />
        
        {/* Animated Aurora Gradient Overlay */}
        <div className="absolute inset-0 animate-aurora opacity-30" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-aurora/40 text-aurora bg-aurora/10 px-4 py-2">
              Business Plan
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-stroke">
              <span className="bg-gradient-to-r from-aurora via-primary to-secondary bg-clip-text text-transparent">
                Neurovia AI Call Centre
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              A concise, visual plan for launching a multilingual, AI-powered customer service platform in South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="micro-interaction bg-aurora text-black hover:bg-aurora/80 group">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
              <Button 
                size="lg" 
                className="micro-interaction bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 group"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Plan (PDF)
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Business plan sections */}
      <BusinessPlan />
    </div>
  );
};

export default BusinessPlanPage;
