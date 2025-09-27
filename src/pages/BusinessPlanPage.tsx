import Navigation from "@/components/Navigation";
import BusinessPlan from "@/components/BusinessPlan";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download } from "lucide-react";
import auroraBg from "@/assets/aurora-hero-bg.jpg";

const BusinessPlanPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20 md:pt-24">
      <Navigation />
      {/* Page Header / Hero */}
      <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-aurora/40 text-aurora bg-aurora/10">Business Plan</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-aurora via-primary to-secondary bg-clip-text text-transparent">
              Neurovia AI Call Centre — Business Plan
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              A concise, visual plan for launching a multilingual, AI-powered customer service platform in South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-aurora text-black hover:bg-aurora/80">
                <Calendar className="w-5 h-5 mr-2" /> Book a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="w-5 h-5 mr-2" /> Download Plan (PDF)
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
