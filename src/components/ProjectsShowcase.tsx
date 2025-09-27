import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsShowcase = () => {
  const project = {
    title: "AI Call Centre",
    description: "Multilingual AI-powered customer support system with real-time translation and OpenAI integration.",
    icon: Bot,
    status: "Live Demo",
    tech: ["OpenAI", "Speech Recognition", "React", "Node.js"],
    category: "Flagship Product"
  };

  return (
    <section id="ai-showcase" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-aurora">Our Flagship Project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our revolutionary AI-powered solution designed to transform customer service operations.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="glass p-8 hover:aurora-glow transition-all duration-300 group max-w-md">
            <div className="flex items-center mb-6">
              <project.icon className="h-12 w-12 text-aurora-blue mr-4" />
              <div>
                <span className="text-sm font-medium text-aurora-violet bg-aurora-violet/10 px-3 py-1 rounded">
                  {project.category}
                </span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-sm bg-secondary/50 text-secondary-foreground px-3 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-green-400">
                {project.status}
              </span>
            </div>

            <Link to="/solutions">
              <Button className="w-full bg-aurora hover:bg-aurora/80 text-black font-semibold">
                <ExternalLink className="mr-2 h-5 w-5" />
                Explore Solution
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;