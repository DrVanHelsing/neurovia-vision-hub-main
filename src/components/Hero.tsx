import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Globe, TrendingUp } from "lucide-react";
import auroraHeroBg from "@/assets/aurora-hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
            <span className="text-aurora block">Neurovia</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-2xl md:text-4xl font-medium mb-8 text-muted-foreground">
            Smarter. Faster. <span className="text-aurora font-semibold">Neurovia.</span>
          </p>

          {/* Vision Statement */}
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We empower small businesses and individuals with AI solutions that simplify operations and accelerate growth through intelligent automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="aurora" size="lg" className="group">
              Discover Our Vision
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" size="lg" className="text-foreground hover:text-aurora-blue">
              View Projects
            </Button>
          </div>

          {/* Quick Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 hover:aurora-glow transition-all duration-300">
              <Zap className="h-8 w-8 text-aurora-blue mb-4 mx-auto" />
              <h3 className="font-semibold mb-2 text-lg">AI Call Centre</h3>
              <p className="text-sm text-muted-foreground">
                Multilingual, scalable AI-powered customer support solutions
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 hover:aurora-glow transition-all duration-300">
              <Globe className="h-8 w-8 text-aurora-violet mb-4 mx-auto" />
              <h3 className="font-semibold mb-2 text-lg">Global Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Cloud automation tools designed for international scalability
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 hover:aurora-glow transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-aurora-teal mb-4 mx-auto" />
              <h3 className="font-semibold mb-2 text-lg">Growth Acceleration</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered productivity tools that drive business success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;