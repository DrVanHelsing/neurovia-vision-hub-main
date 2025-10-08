import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, MessageCircle, GraduationCap } from "lucide-react";
import auroraBg from "@/assets/aurora-hero-bg.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Tredir Sewpaul",
      role: "Team Lead & Full-Stack Developer",
      university: "University of the Western Cape",
      github: "DrVanHelsing",
      email: "5100592@mypillar7uwc.ac.za",
      phone: "067 408 2819",
      discord: "tredirs",
      responsibilities: [
        "Overall project architecture and planning",
        "Frontend development with .NET MAUI and React",
        "Backend API development with ASP.NET Core",
        "Azure OpenAI integration and AI features",
        "Database design and Entity Framework implementation",
        "Code review and quality assurance",
        "Project coordination and documentation"
      ],
      expertise: [
        ".NET MAUI cross-platform development",
        "ASP.NET Core Web API development",
        "React and modern web frameworks",
        "Entity Framework Core and database design",
        "Azure OpenAI and AI service integration",
        "XAML and C# UI development",
        "Cross-platform mobile development (iOS, Android, Windows)",
        "RESTful API design and implementation"
      ],
      contributions: [
        "Complete AI Call Centre application architecture",
        "MAUI mobile agent interface development",
        "Comprehensive AI integration implementation",
        "Real-time translation and speech services",
        "Supervisor dashboard and analytics",
        "Cross-platform deployment and testing"
      ]
    },
    {
      name: "Mzameli Mashiyi",
      role: "Full-Stack Developer & Co-Lead",
      university: "University of the Western Cape",
      email: "5100933@mypillar7uwc.ac.za",
      phone: "079 825 0366",
      discord: "mayarha_27989",
      responsibilities: [
        "Backend API development and optimization",
        "Database schema design and implementation",
        "Frontend UI/UX development and testing",
        "Azure services integration",
        "API testing and validation",
        "Documentation and user guide creation",
        "Quality assurance and bug testing"
      ],
      expertise: [
        "ASP.NET Core Web API development",
        "Entity Framework Core and SQL Server",
        ".NET MAUI frontend development",
        "React and web development",
        "Azure cloud services integration",
        "RESTful API design principles",
        "Database optimization and performance",
        "Cross-platform testing and debugging"
      ],
      contributions: [
        "AI Call Centre API orchestrator backend development",
        "Database migrations and data models",
        "API endpoint implementation and testing",
        "User interface testing and validation",
        "Azure Translator and Speech integration",
        "Performance optimization and debugging"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              About Neurovia
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-stroke">
              <span className="bg-gradient-to-r from-aurora via-primary to-secondary bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              The innovative minds behind Neurovia's AI-powered solutions, dedicated to transforming customer service through cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass border-aurora/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-aurora/10 to-primary/10 pb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground mb-2">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-lg text-aurora font-medium">
                        {member.role}
                      </CardDescription>
                      <div className="flex items-center mt-2 text-foreground/80">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        <span className="text-sm">{member.university}</span>
                      </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="micro-interaction border-aurora/40 text-aurora hover:bg-aurora/10">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                      <Button variant="outline" size="sm" className="micro-interaction border-primary/40 text-primary hover:bg-primary/10">
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                      {member.github && (
                        <Button variant="outline" size="sm" className="border-accent/40 text-accent hover:bg-accent/10">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="border-accent/40 text-accent hover:bg-accent/10">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Discord
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-aurora">Responsibilities</h4>
                      <ul className="space-y-2">
                        {member.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex items-start">
                            <span className="w-1.5 h-1.5 bg-aurora rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technical Expertise */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-primary">Technical Expertise</h4>
                      <ul className="space-y-2">
                        {member.expertise.map((skill, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Key Contributions */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-accent">Key Contributions</h4>
                      <ul className="space-y-2">
                        {member.contributions.map((contribution, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {contribution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                    <h5 className="font-semibold mb-3 text-foreground">Contact Information</h5>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div className="flex items-center text-foreground/80">
                        <Mail className="w-4 h-4 mr-2 text-aurora" />
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center text-foreground/80">
                        <Phone className="w-4 h-4 mr-2 text-primary" />
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center text-foreground/80">
                        <MessageCircle className="w-4 h-4 mr-2 text-accent" />
                        <span>{member.discord}</span>
                      </div>
                      {member.github && (
                        <div className="flex items-center text-foreground/80">
                          <Github className="w-4 h-4 mr-2 text-accent" />
                          <span>@{member.github}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-muted/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-aurora">Our Mission</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            At Neurovia, we're passionate about leveraging artificial intelligence to solve real-world problems. 
            Our team combines deep technical expertise with innovative thinking to create solutions that empower 
            businesses and individuals to achieve more through intelligent automation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-aurora/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-aurora">AI</span>
              </div>
              <h3 className="font-semibold mb-2">AI Innovation</h3>
              <p className="text-sm text-foreground/70">
                Cutting-edge artificial intelligence solutions that transform business operations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">UX</span>
              </div>
              <h3 className="font-semibold mb-2">User Experience</h3>
              <p className="text-sm text-foreground/70">
                Intuitive interfaces that make complex technology accessible to everyone
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">∞</span>
              </div>
              <h3 className="font-semibold mb-2">Scalability</h3>
              <p className="text-sm text-foreground/70">
                Solutions designed to grow with your business needs and evolving requirements
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;