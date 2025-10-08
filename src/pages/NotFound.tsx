import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import auroraHeroBg from "@/assets/aurora-hero-bg.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${auroraHeroBg})`,
        }}
      />
      <div className="absolute inset-0 bg-background/50" />
      
      {/* Animated Aurora Gradient Overlay */}
      <div className="absolute inset-0 animate-aurora opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <h1 className="text-9xl md:text-[12rem] font-bold mb-6 text-stroke">
            <span className="bg-gradient-to-r from-aurora via-primary to-secondary bg-clip-text text-transparent">
              404
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground text-stroke">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button variant="aurora" size="lg" className="micro-interaction group">
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Button>
            </Link>
            <Button 
              size="lg" 
              onClick={() => window.history.back()}
              className="micro-interaction bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
