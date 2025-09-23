import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Users, DollarSign, Zap, Globe2 } from "lucide-react";

const BusinessPlan = () => {
  return (
    <section id="business-plan" className="py-20 bg-gradient-aurora-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-aurora">Business Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive roadmap to revolutionize AI-powered business solutions for small enterprises globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Problem Statement */}
          <Card className="glass p-8 hover:aurora-glow transition-all duration-300">
            <Target className="h-10 w-10 text-aurora-violet mb-4" />
            <h3 className="text-2xl font-bold mb-4">Problem Statement</h3>
            <p className="text-muted-foreground leading-relaxed">
              Small businesses struggle with limited budgets for advanced call centers, yet desperately need 
              multilingual, scalable, AI-driven customer support to compete in today's global marketplace.
            </p>
          </Card>

          {/* Our Solution */}
          <Card className="glass p-8 hover:aurora-glow transition-all duration-300">
            <Zap className="h-10 w-10 text-aurora-blue mb-4" />
            <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI Call Centre powered by advanced speech recognition, real-time translation, and OpenAI-driven 
              responses, making enterprise-level support accessible to every business.
            </p>
          </Card>
        </div>

        {/* Market & Business Model */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="glass p-6 text-center hover:aurora-glow transition-all duration-300">
            <Globe2 className="h-8 w-8 text-aurora-teal mb-4 mx-auto" />
            <h4 className="text-lg font-semibold mb-2">Market Opportunity</h4>
            <p className="text-sm text-muted-foreground">
              Growing global demand for cost-effective AI customer support solutions
            </p>
          </Card>

          <Card className="glass p-6 text-center hover:aurora-glow transition-all duration-300">
            <DollarSign className="h-8 w-8 text-aurora-blue mb-4 mx-auto" />
            <h4 className="text-lg font-semibold mb-2">Business Model</h4>
            <p className="text-sm text-muted-foreground">
              SaaS subscription tiers with integration add-ons for CRM and eCommerce
            </p>
          </Card>

          <Card className="glass p-6 text-center hover:aurora-glow transition-all duration-300">
            <Users className="h-8 w-8 text-aurora-violet mb-4 mx-auto" />
            <h4 className="text-lg font-semibold mb-2">Competitive Edge</h4>
            <p className="text-sm text-muted-foreground">
              Multi-language support including South African languages
            </p>
          </Card>
        </div>

        {/* Go-to-Market Strategy */}
        <Card className="glass p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <TrendingUp className="inline h-6 w-6 mr-2 text-aurora-teal" />
            Go-To-Market Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-aurora-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-aurora-blue font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Hackathon Demo</h4>
              <p className="text-sm text-muted-foreground">Showcase live capability</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-aurora-violet/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-aurora-violet font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Local SMB Pilots</h4>
              <p className="text-sm text-muted-foreground">Test with small businesses</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-aurora-teal/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-aurora-teal font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Partnership Scale</h4>
              <p className="text-sm text-muted-foreground">Strategic alliances</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-aurora-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-aurora-blue font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Global Expansion</h4>
              <p className="text-sm text-muted-foreground">International markets</p>
            </div>
          </div>
        </Card>

        {/* Investment CTA */}
        <div className="text-center">
          <Button variant="aurora" size="lg" className="text-lg px-12 py-6">
            Request Investment Deck
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlan;