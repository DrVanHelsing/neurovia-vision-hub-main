import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BusinessPlan from "@/components/BusinessPlan";
import ProjectsShowcase from "@/components/ProjectsShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <BusinessPlan />
      <ProjectsShowcase />
    </div>
  );
};

export default Index;
