import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
  {/* Business plan moved to its own page */}
      <ProjectsShowcase />
    </div>
  );
};

export default Index;
