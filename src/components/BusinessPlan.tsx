import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  MessageSquare, 
  Shield, 
  Smartphone, 
  Server, 
  Database,
  TrendingUp,
  Users,
  Headphones,
  Globe,
  BarChart3,
  Zap,
  Clock,
  CheckCircle2,
  XCircle,
  DollarSign,
  Target,
  ArrowRight,
  Download,
  Calendar,
  Phone,
  Languages,
  Eye,
  Wifi,
  Cloud,
  PieChart
} from "lucide-react";
import auroraHeroBg from "@/assets/aurora-hero-bg.jpg";

const BusinessPlanHeader = () => {
  return (
    <section id="business-plan" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${auroraHeroBg})`,
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Animated Aurora Gradient Overlay */}
      <div className="absolute inset-0 animate-aurora opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-block bg-aurora-blue/10 text-aurora-blue text-sm font-semibold px-4 py-1 rounded-full mb-6">
            Business Plan
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-tight text-foreground">
            A concise, visual plan for launching a multilingual, AI-powered customer service platform in South Africa.
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-aurora text-black hover:bg-aurora/80 group">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
              <Download className="mr-2 h-5 w-5" />
              Download Plan (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const BusinessPlan = () => {
  return (
    <section id="business-plan" className="space-y-24">
      {/* Page-level hero moved to BusinessPlanPage header */}

      {/* Problem & Opportunity */}
  <div className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">The Challenge & Opportunity</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem Side */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <XCircle className="w-8 h-8" />
                Current Pain Points
              </h3>
              
              <div className="space-y-6">
                <Card className="glass border-red-500/20">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Long Wait Times</h4>
                      <p className="text-foreground/80">Customers waiting hours for basic support</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-red-500/20">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">High Operational Costs</h4>
                      <p className="text-foreground/80">Expensive human-only call centers</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-red-500/20">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Languages className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Language Barriers</h4>
                      <p className="text-foreground/80">11 official languages, limited coverage</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Opportunity Side */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8" />
                Market Opportunity
              </h3>
              
              <div className="space-y-6">
                <Card className="glass border-green-500/20">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">R160bn Industry</h4>
                      <p className="text-foreground/80">Massive South African market size</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-green-500/30 bg-green-500/5">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">77% AI Adoption Ready</h4>
                      <p className="text-foreground/80">Businesses ready to embrace AI now</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-green-500/20">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Multilingual Advantage</h4>
                      <p className="text-foreground/80">First-mover in local language AI</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Solution - Architecture Diagram */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">Our AI-Powered Solution</h2>
          
          {/* Architecture Diagram */}
          <div className="relative bg-gradient-to-br from-muted/30 to-background border border-muted rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              {/* Clients Column */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-center mb-4 text-aurora">Client Applications</h3>
                
                <Card className="glass border-aurora/30">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Smartphone className="w-8 h-8 text-aurora" />
                    <div>
                      <h4 className="font-semibold">MAUI Mobile App</h4>
                      <p className="text-sm text-foreground/80">Agent Interface</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-primary/30">
                  <CardContent className="flex items-center gap-3 p-4">
                    <BarChart3 className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Supervisor Dashboard</h4>
                      <p className="text-sm text-foreground/80">Real-time Monitoring</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-aurora hidden lg:block animate-pulse" />
                  <div className="lg:hidden w-full h-px bg-aurora/50"></div>
                </div>
              </div>

              {/* Backend Column */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-center mb-4 text-secondary">Backend Services</h3>
                
                <Card className="glass border-secondary/30 mb-4">
                  <CardContent className="text-center p-6">
                    <Server className="w-12 h-12 text-secondary mx-auto mb-3" />
                    <h4 className="font-semibold text-lg">ASP.NET Core API</h4>
                    <p className="text-sm text-foreground/80">Orchestration Engine</p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-3">
                  <Card className="glass border-muted/30">
                    <CardContent className="text-center p-3">
                      <Database className="w-6 h-6 text-accent mx-auto mb-2" />
                      <p className="text-xs font-medium">SQL Database</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass border-muted/30">
                    <CardContent className="text-center p-3">
                      <Wifi className="w-6 h-6 text-accent mx-auto mb-2" />
                      <p className="text-xs font-medium">SignalR Hubs</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-aurora hidden lg:block animate-pulse" />
                  <div className="lg:hidden w-full h-px bg-aurora/50"></div>
                </div>
              </div>

              {/* Azure Services Column */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-center mb-4 text-accent">Azure Cognitive Services</h3>
                
                <div className="space-y-3">
                  <Card className="glass border-blue-500/30">
                    <CardContent className="flex items-center gap-3 p-3">
                      <Brain className="w-6 h-6 text-blue-400" />
                      <div>
                        <h5 className="font-medium text-sm">OpenAI GPT-4</h5>
                        <p className="text-xs text-foreground/80">AI Responses</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass border-green-500/30">
                    <CardContent className="flex items-center gap-3 p-3">
                      <Languages className="w-6 h-6 text-green-400" />
                      <div>
                        <h5 className="font-medium text-sm">Translator</h5>
                        <p className="text-xs text-foreground/80">11 Languages</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass border-purple-500/30">
                    <CardContent className="flex items-center gap-3 p-3">
                      <Headphones className="w-6 h-6 text-purple-400" />
                      <div>
                        <h5 className="font-medium text-sm">Speech Services</h5>
                        <p className="text-xs text-foreground/80">Voice Processing</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Solution Features Overlay */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-aurora/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-8 h-8 text-aurora" />
                </div>
                <h4 className="font-semibold mb-2">Multilingual AI Voice & Chat</h4>
                <p className="text-sm text-foreground/80">11 South African languages supported</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Real-time Supervisor Dashboard</h4>
                <p className="text-sm text-foreground/80">Live monitoring and takeover</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <PieChart className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Analytics & SLA Monitoring</h4>
                <p className="text-sm text-foreground/80">Performance insights and reporting</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Validation Stats */}
      <div className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">Market Validation</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass border-aurora/30 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-aurora/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-aurora" />
                </div>
                <CardTitle className="text-2xl">CCaaS Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-aurora">$82M → $226M</p>
                  <p className="text-foreground/80">USD Market Growth</p>
                  <p className="text-sm text-foreground/70">(2024 → 2030)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Outsourcing Boom</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">$1.27B → $2.31B</p>
                  <p className="text-foreground/80">USD by 2030</p>
                  <p className="text-sm text-foreground/70">Outsourcing Market</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-secondary/30 bg-secondary/5 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-secondary">AI Adoption</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-secondary">77%</p>
                  <p className="text-foreground">SA Businesses</p>
                  <p className="text-sm text-foreground/80">Ready to adopt AI now</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Competitive Edge */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">Our Competitive Edge</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-muted">
                  <th className="text-left py-4 px-6 font-semibold text-lg">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-lg text-foreground/80">Competitors</th>
                  <th className="text-center py-4 px-6 font-semibold text-lg text-aurora">Neurovia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted/30">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Languages className="w-5 h-5 text-aurora" />
                      <span className="font-medium">Multilingual Support (11 languages)</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30">
                      Limited
                    </Badge>
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-primary" />
                      <span className="font-medium">Real-time Supervision</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30">
                      Limited
                    </Badge>
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-secondary" />
                      <span className="font-medium">Mobile Agent App</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30">
                      None
                    </Badge>
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                </tr>
                
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-accent" />
                      <span className="font-medium">Affordable Modular Pricing</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30">
                      Expensive
                    </Badge>
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Azure Cost Breakdown */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Azure Service Cost Breakdown</h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Our pricing is based on actual Azure service costs, ensuring transparency and value
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="glass border-blue-500/30">
              <CardHeader className="text-center pb-3">
                <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-lg">Azure OpenAI</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-blue-400">$0.03</p>
                <p className="text-xs text-foreground/70">per 1K tokens</p>
                <p className="text-xs text-foreground/70 mt-1">GPT-4o model</p>
              </CardContent>
            </Card>

            <Card className="glass border-green-500/30">
              <CardHeader className="text-center pb-3">
                <Languages className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <CardTitle className="text-lg">Translator</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-green-400">$10</p>
                <p className="text-xs text-foreground/70">per 1M characters</p>
                <p className="text-xs text-foreground/70 mt-1">Standard tier</p>
              </CardContent>
            </Card>

            <Card className="glass border-purple-500/30">
              <CardHeader className="text-center pb-3">
                <Headphones className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <CardTitle className="text-lg">Speech Services</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-purple-400">$1</p>
                <p className="text-xs text-foreground/70">per 1K transactions</p>
                <p className="text-xs text-foreground/70 mt-1">Neural TTS</p>
              </CardContent>
            </Card>

            <Card className="glass border-orange-500/30">
              <CardHeader className="text-center pb-3">
                <Cloud className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <CardTitle className="text-lg">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-orange-400">$120</p>
                <p className="text-xs text-foreground/70">per month base</p>
                <p className="text-xs text-foreground/70 mt-1">App Service + SQL</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Snapshot */}
      <div className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Transparent Azure-Based Pricing</h2>
          <p className="text-center text-foreground/80 mb-16 max-w-3xl mx-auto">
            Built on Azure's pay-as-you-use model with predictable monthly limits and session capacity
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <Card className="glass border-aurora/30 relative">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-aurora/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-aurora" />
                </div>
                <CardTitle className="text-2xl text-aurora">Starter</CardTitle>
                <CardDescription className="text-foreground">Perfect for SMBs</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-aurora">R449</span>
                  <span className="text-foreground/80">/agent/month</span>
                </div>
                <div className="mt-2 p-2 bg-aurora/10 rounded-lg">
                  <p className="text-sm font-semibold text-aurora">~500 sessions/month</p>
                  <p className="text-xs text-foreground/70">10 min avg per session</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">Azure Usage Included:</h5>
                  <ul className="text-xs space-y-1 text-foreground/80">
                    <li>• 50K OpenAI tokens (~R22)</li>
                    <li>• 500K translation chars (~R7)</li>
                    <li>• 5K speech transactions (~R7)</li>
                    <li>• Basic infrastructure (~R180)</li>
                    <li>• Support & margin (~R233)</li>
                  </ul>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic AI Chat Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">3 Language Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Email Support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6 border-aurora text-aurora hover:bg-aurora hover:text-black">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Growth Tier */}
            <Card className="glass border-primary/30 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-3 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Growth</CardTitle>
                <CardDescription className="text-foreground">Growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">R899</span>
                  <span className="text-foreground/80">/agent/month</span>
                </div>
                <div className="mt-2 p-2 bg-primary/10 rounded-lg">
                  <p className="text-sm font-semibold text-primary">~1,200 sessions/month</p>
                  <p className="text-xs text-foreground/70">12 min avg per session</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">Azure Usage Included:</h5>
                  <ul className="text-xs space-y-1 text-foreground/80">
                    <li>• 150K OpenAI tokens (~R67)</li>
                    <li>• 1.5M translation chars (~R22)</li>
                    <li>• 15K speech transactions (~R22)</li>
                    <li>• Enhanced infrastructure (~R300)</li>
                    <li>• Support & margin (~R488)</li>
                  </ul>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced AI + Voice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">7 Language Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Real-time Supervision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Priority Support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/80">
                  Choose Growth
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Tier */}
            <Card className="glass border-secondary/40 bg-secondary/10 relative">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-secondary">Enterprise</CardTitle>
                <CardDescription className="text-foreground">Large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-secondary">R1,799</span>
                  <span className="text-foreground ml-1">/agent/month</span>
                </div>
                <div className="mt-2 p-2 bg-secondary/25 rounded-lg border border-secondary/40">
                  <p className="text-sm font-semibold text-foreground">~3,000 sessions/month</p>
                  <p className="text-xs text-foreground/80">15 min avg per session</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-3 bg-muted/20 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2 text-foreground">Azure Usage Included:</h5>
                  <ul className="text-xs space-y-1 text-foreground/80">
                    <li>• 400K OpenAI tokens (~R179)</li>
                    <li>• 4M translation chars (~R60)</li>
                    <li>• 40K speech transactions (~R60)</li>
                    <li>• Premium infrastructure (~R600)</li>
                    <li>• Support & margin (~R900)</li>
                  </ul>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-foreground">Full AI Suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-foreground">All 11 Languages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-foreground">Custom Integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-foreground">Enterprise Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-foreground">24/7 Dedicated Support</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-secondary/50 text-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-semibold"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Transparency Note */}
            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-blue-400">
              <Shield className="w-5 h-5" />
              Transparent Pricing Model
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-foreground/80">
              <div>
                <h4 className="font-medium mb-2">What's Included:</h4>
                <ul className="space-y-1">
                  <li>• Azure service costs (transparent breakdown)</li>
                  <li>• Infrastructure hosting & scaling</li>
                  <li>• 24/7 monitoring & maintenance</li>
                  <li>• Regular updates & security patches</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">No Hidden Costs:</h4>
                <ul className="space-y-1">
                  <li>• Setup fees: R0</li>
                  <li>• Integration support: Included</li>
                  <li>• Overage charges: Pay-as-you-go Azure rates</li>
                  <li>• Contract terms: Monthly, no lock-in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Customer Service.
            <br />
            <span className="text-aurora">Reduce Costs.</span>
            <br />
            <span className="text-primary">Delight Customers.</span>
          </h2>
          
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Join the AI revolution in customer service. Start delivering exceptional multilingual support today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-aurora hover:bg-aurora/80 text-black font-semibold px-8 py-4 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Full Plan
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="w-12 h-12 bg-aurora/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-aurora" />
              </div>
              <h4 className="font-semibold mb-2">Free Consultation</h4>
              <p className="text-sm text-foreground/80">30-minute strategy session</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Quick Implementation</h4>
              <p className="text-sm text-foreground/80">Go live in 2-4 weeks</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">ROI Guarantee</h4>
              <p className="text-sm text-foreground/80">30% cost reduction or money back</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlan;