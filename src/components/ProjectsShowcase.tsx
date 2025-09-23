import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Bot, Briefcase } from "lucide-react";

const ProjectsShowcase = () => {
  const projects = [
    {
      title: "AI Call Centre",
      description: "Multilingual AI-powered customer support system with real-time translation and OpenAI integration.",
      icon: Bot,
      status: "Live Demo",
      tech: ["OpenAI", "Speech Recognition", "React", "Node.js"],
      category: "Flagship Product"
    },
    {
      title: "Business Automation Suite",
      description: "Comprehensive tools for small business process automation and workflow optimization.",
      icon: Briefcase,
      status: "In Development",
      tech: ["Python", "FastAPI", "PostgreSQL", "React"],
      category: "Enterprise Tools"
    },
    {
      title: "AI Productivity Assistant",
      description: "Personal AI assistant for task management, scheduling, and productivity enhancement.",
      icon: Code,
      status: "Planning",
      tech: ["AI/ML", "NLP", "Cloud APIs"],
      category: "Future Solutions"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-aurora">Our Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of AI-powered solutions designed to transform how businesses operate and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass p-6 hover:aurora-glow transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <project.icon className="h-8 w-8 text-aurora-blue mr-3" />
                <div>
                  <span className="text-xs font-medium text-aurora-violet bg-aurora-violet/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${
                  project.status === 'Live Demo' ? 'text-green-400' :
                  project.status === 'In Development' ? 'text-aurora-violet' :
                  'text-muted-foreground'
                }`}>
                  {project.status}
                </span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Github className="h-4 w-4" />
                  </Button>
                  {project.status === 'Live Demo' && (
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;