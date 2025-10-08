import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bot, CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsShowcase = () => {
  const project = {
    title: "AI Call Centre",
    description: "Multilingual AI-powered customer support system with real-time translation, speech recognition, and Azure OpenAI integration for intelligent customer service.",
    icon: Bot,
    status: "Production Ready",
    tech: ["Azure OpenAI", "Azure Translator", "Speech Services", ".NET MAUI", "ASP.NET Core"],
    category: "Flagship Product",
    features: [
      { icon: <Bot className="h-5 w-5 text-green-400 mr-2" />, text: "Multilingual AI Chat & Voice Support" },
      { icon: <ExternalLink className="h-5 w-5 text-green-400 mr-2" />, text: "Real-time Translation & Speech Recognition" },
      { icon: <span className="mr-2">🌐</span>, text: "Azure OpenAI Integration" },
      { icon: <span className="mr-2">📊</span>, text: "Advanced Analytics Dashboard" },
      { icon: <span className="mr-2">🔒</span>, text: "Enterprise-grade Security" }
    ],
    useCases: [
      "Retail: Automated support for order tracking and returns.",
      "Banking: Multilingual account queries and fraud alerts.",
      "Telecom: Real-time troubleshooting and plan upgrades.",
      "Healthcare: Appointment scheduling and patient triage."
    ],
    stats: [
      { label: "Customer Satisfaction", value: "95%" },
      { label: "Faster Resolution", value: "50%" },
      { label: "Languages Supported", value: "11" }
    ],
    comparison: [
      { feature: "Languages Supported", ai: "11", traditional: "2-3" },
      { feature: "24/7 Availability", ai: "Yes", traditional: "Limited" },
      { feature: "Cost per Session", ai: "Low", traditional: "High" },
      { feature: "AI Analytics", ai: "Advanced", traditional: "Basic" }
    ],
    faqs: [
      { q: "How do I integrate with my CRM?", a: "We provide REST APIs and custom connectors for all major CRMs." },
      { q: "Is my data secure?", a: "Yes, all data is encrypted and processed in compliance with POPIA and GDPR." },
      { q: "Which languages are supported?", a: "All 11 official South African languages plus English." },
      { q: "Can I customize the AI responses?", a: "Absolutely! You can tailor responses and workflows to your business needs." }
    ]
  };

  return (
    <section id="ai-showcase" className="py-20 w-full bg-gradient-to-b from-background via-muted/5 to-background overflow-hidden animate-fade-in-page">
      <div className="space-y-32 w-full">
        {/* Header Section */}
        <div className="text-center mb-8 w-full px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-aurora-blue via-aurora to-aurora-violet bg-clip-text text-transparent">
            Our Flagship Project
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our revolutionary AI-powered solution designed to transform customer service operations.
          </p>
        </div>

        {/* Main Card Section - Hero Product */}
        <div className="w-full px-6 lg:px-12">
          <Card className="glass micro-interaction p-8 md:p-12 lg:p-16 hover:aurora-glow transition-all duration-500 group w-full border-2 border-aurora/20 hover:border-aurora/40 hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:shadow-aurora/30">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-aurora/10 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="h-12 w-12 text-aurora-blue" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-aurora-violet bg-aurora-violet/10 px-4 py-2 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-aurora to-aurora-violet bg-clip-text text-transparent">
                  {project.title}
                </h3>
                
                {/* Animated Status Badge */}
                <div className="mb-6 flex items-center">
                  <span className="text-sm font-semibold px-5 py-2 rounded-full bg-green-500/10 text-green-400 animate-pulse shadow-md border border-green-400/20 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                {/* Feature List with Icons */}
                <ul className="mb-8 space-y-4">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-center text-base group/item hover:translate-x-2 transition-transform duration-200">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 mr-3 group-hover/item:bg-green-500/20">
                        {f.icon}
                      </div>
                      <span className="text-foreground">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Tech Stack with Tooltip */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-aurora" />
                    <span className="text-aurora">Technology Stack</span>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="relative group/tech text-sm bg-accent/20 text-accent px-4 py-2 rounded-lg border border-accent/30 cursor-pointer hover:bg-accent/30 hover:scale-105 transition-all duration-200"
                      >
                        {tech}
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-max px-4 py-2 rounded-lg bg-background text-foreground text-xs shadow-2xl opacity-0 group-hover/tech:opacity-100 transition-opacity pointer-events-none z-10 border border-accent/20">
                          {tech} is a core part of our solution
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <Link to="/solutions" className="w-full">
                    <Button className="micro-interaction w-full bg-gradient-to-r from-aurora to-aurora-violet hover:from-aurora/90 hover:to-aurora-violet/90 text-black font-semibold py-6 text-lg shadow-lg hover:shadow-aurora/50 transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Explore Solution
                    </Button>
                  </Link>
                  <Button className="micro-interaction w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]">
                    <Shield className="mr-2 h-5 w-5" />
                    Request Demo
                  </Button>
                  <Button variant="outline" className="micro-interaction w-full border-2 border-accent/50 hover:bg-accent/10 text-accent font-semibold py-6 text-lg transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Use Cases Section */}
        <div className="bg-gradient-to-r from-muted/5 via-muted/10 to-muted/5 rounded-3xl p-8 md:p-12 lg:p-16 w-full mx-auto animate-in slide-in-from-left duration-700">
          <div className="max-w-6xl mx-auto">
            <h4 className="font-bold text-3xl md:text-4xl mb-8 text-center bg-gradient-to-r from-aurora to-aurora-violet bg-clip-text text-transparent">
              Real-World Use Cases
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              {project.useCases.map((uc, i) => (
                <div 
                  key={i} 
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-aurora/10 hover:border-aurora/30 transition-all duration-300 hover:shadow-lg hover:shadow-aurora/10 group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-aurora flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-foreground/90 text-base leading-relaxed">{uc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results/Stats Section */}
        <div className="w-full px-6 lg:px-12 animate-in slide-in-from-right duration-700">
          <div className="max-w-6xl mx-auto">
            <h4 className="font-bold text-3xl md:text-4xl mb-8 text-center bg-gradient-to-r from-aurora-blue to-aurora bg-clip-text text-transparent">
              Proven Results
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {project.stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 text-center border border-aurora/20 hover:border-aurora/40 transition-all duration-300 hover:shadow-xl hover:shadow-aurora/10 group hover:scale-105"
                >
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-aurora to-aurora-violet bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-base md:text-lg text-foreground/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table Section */}
        <div className="w-full px-6 lg:px-12 animate-in slide-in-from-bottom duration-700">
          <div className="max-w-5xl mx-auto">
            <h4 className="font-bold text-3xl md:text-4xl mb-8 text-center bg-gradient-to-r from-aurora-violet to-aurora-blue bg-clip-text text-transparent">
              AI vs Traditional Call Centre
            </h4>
            <div className="overflow-x-auto rounded-2xl border-2 border-aurora/20 shadow-2xl">
              <table className="w-full text-base">
                <thead>
                  <tr className="bg-gradient-to-r from-aurora/10 to-aurora-violet/10">
                    <th className="py-5 px-6 text-left font-bold text-lg">Feature</th>
                    <th className="py-5 px-6 text-center font-bold text-lg text-aurora">AI Call Centre</th>
                    <th className="py-5 px-6 text-center font-bold text-lg text-muted-foreground">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  {project.comparison.map((row, i) => (
                    <tr 
                      key={i} 
                      className="border-t border-muted/20 hover:bg-muted/5 transition-colors duration-200"
                    >
                      <td className="py-5 px-6 font-medium">{row.feature}</td>
                      <td className="py-5 px-6 text-center">
                        <span className="inline-flex items-center gap-2 text-green-400 font-bold bg-green-400/10 px-4 py-2 rounded-lg">
                          <CheckCircle2 className="h-4 w-4" />
                          {row.ai}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-center text-muted-foreground">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-muted/5 via-muted/10 to-muted/5 rounded-3xl p-8 md:p-12 lg:p-16 w-full animate-in slide-in-from-left duration-700">
          <div className="max-w-4xl mx-auto">
            <h4 className="font-bold text-3xl md:text-4xl mb-10 text-center bg-gradient-to-r from-aurora to-aurora-blue bg-clip-text text-transparent">
              Frequently Asked Questions
            </h4>
            <div className="space-y-6">
              {project.faqs.map((faq, i) => (
                <div 
                  key={i}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-aurora/10 hover:border-aurora/30 transition-all duration-300 hover:shadow-lg hover:shadow-aurora/10"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-aurora font-bold text-lg flex-shrink-0">Q:</span>
                    <span className="font-semibold text-foreground text-lg">{faq.q}</span>
                  </div>
                  <div className="flex items-start gap-3 ml-8">
                    <span className="text-aurora-violet font-bold text-lg flex-shrink-0">A:</span>
                    <span className="text-foreground/80 text-base leading-relaxed">{faq.a}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Teaser Section */}
        <div className="mb-8 text-center px-6 animate-in fade-in duration-700">
          <div className="bg-gradient-to-r from-aurora/10 via-aurora-violet/10 to-aurora-blue/10 rounded-2xl p-12 max-w-3xl mx-auto border-2 border-aurora/20">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-aurora to-aurora-violet bg-clip-text text-transparent">
              Ready to Transform Your Customer Service?
            </h4>
            <p className="text-muted-foreground mb-8 text-lg">
              Explore our flexible pricing plans designed for businesses of all sizes.
            </p>
            <Link to="/business-plan">
              <Button 
                variant="outline" 
                className="border-2 border-aurora text-aurora hover:bg-aurora hover:text-black font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-aurora/30 hover:scale-105"
              >
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;