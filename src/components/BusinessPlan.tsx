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
      <div className="absolute inset-0 bg-background/50" />
      
      {/* Animated Aurora Gradient Overlay */}
      <div className="absolute inset-0 animate-aurora opacity-30" />

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
            <Button size="lg" className="bg-aurora text-black hover:bg-aurora/80 group micro-interaction">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group micro-interaction"
              onClick={() => window.location.href = '/solutions#user-testing'}
            >
              <Users className="mr-2 h-5 w-5" />
              View User Testing Results
            </Button>
            <Button variant="outline" size="lg" className="border-aurora text-aurora hover:bg-aurora/10 group micro-interaction">
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
      {/* Lean Business Canvas Overview */}
      <div className="py-16 px-6 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-aurora/40 text-aurora bg-aurora/10">Lean Business Canvas</Badge>
            <h2 className="text-4xl font-bold mb-4">Strategic Business Model</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive framework outlining our path to revolutionize customer service in South Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Problem */}
            <Card className="glass border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-400 transition-all duration-300 group-hover:text-red-300">
                  <XCircle className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                  Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Long customer wait times (avg 8-12 min)</li>
                  <li>• High operational costs (R25-35/call)</li>
                  <li>• Limited multilingual support</li>
                  <li>• Inconsistent service quality</li>
                  <li>• 24/7 coverage challenges</li>
                </ul>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="glass border-aurora/30 hover:border-aurora/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-aurora/20 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-aurora transition-all duration-300 group-hover:brightness-125">
                  <CheckCircle2 className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                  Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• AI-powered instant responses</li>
                  <li>• 11 SA languages supported</li>
                  <li>• 24/7 automated availability</li>
                  <li>• 70% cost reduction</li>
                  <li>• Scalable Azure infrastructure</li>
                </ul>
              </CardContent>
            </Card>

            {/* Unique Value Proposition */}
            <Card className="glass border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary transition-all duration-300 group-hover:brightness-125">
                  <Zap className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  Unique Value Proposition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold mb-2">
                  "First AI call centre built for South Africa's linguistic diversity"
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• POPIA-compliant local hosting</li>
                  <li>• Cultural context awareness</li>
                  <li>• Instant multilingual support</li>
                </ul>
              </CardContent>
            </Card>

            {/* Customer Segments */}
            <Card className="glass border-accent/30 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent transition-all duration-300 group-hover:brightness-125">
                  <Users className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                  Customer Segments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="font-semibold">Early Adopters:</li>
                  <li>• E-commerce SMBs (5-50 agents)</li>
                  <li>• Fintech startups</li>
                  <li>• Telecoms & utilities</li>
                  <li className="font-semibold mt-3">Growth Market:</li>
                  <li>• Enterprise (50+ agents)</li>
                  <li>• BPO providers</li>
                </ul>
              </CardContent>
            </Card>

            {/* Channels */}
            <Card className="glass border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400 transition-all duration-300 group-hover:text-green-300">
                  <Globe className="w-5 h-5 transition-all duration-300 group-hover:rotate-180" />
                  Channels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Direct B2B sales team</li>
                  <li>• Partner network (Azure, BPOs)</li>
                  <li>• Digital marketing (LinkedIn, Google)</li>
                  <li>• Industry events & webinars</li>
                  <li>• Referral program</li>
                </ul>
              </CardContent>
            </Card>

            {/* Revenue Streams */}
            <Card className="glass border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300">
                  <DollarSign className="w-5 h-5 transition-all duration-300 group-hover:scale-125" />
                  Revenue Streams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Monthly SaaS subscriptions (80%)</li>
                  <li>• Setup & integration fees (10%)</li>
                  <li>• Premium support packages (5%)</li>
                  <li>• Custom development (5%)</li>
                  <li className="font-semibold mt-2">ARR Target: R12M by Y2</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cost Structure */}
            <Card className="glass border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-400 transition-all duration-300 group-hover:text-orange-300">
                  <PieChart className="w-5 h-5 transition-all duration-300 group-hover:rotate-90" />
                  Cost Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Azure infrastructure (35%)</li>
                  <li>• AI/ML API costs (25%)</li>
                  <li>• Sales & marketing (20%)</li>
                  <li>• Development team (15%)</li>
                  <li>• Operations & support (5%)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="glass border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400 transition-all duration-300 group-hover:text-blue-300">
                  <BarChart3 className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                  Key Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Monthly Recurring Revenue (MRR)</li>
                  <li>• Customer Acquisition Cost (CAC)</li>
                  <li>• Lifetime Value (LTV)</li>
                  <li>• Churn Rate (Target: &lt;5%)</li>
                  <li>• Net Promoter Score (NPS)</li>
                  <li>• Sessions processed/month</li>
                </ul>
              </CardContent>
            </Card>

            {/* Unfair Advantage */}
            <Card className="glass border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400 transition-all duration-300 group-hover:text-purple-300">
                  <Shield className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                  Unfair Advantage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• First-mover in SA multilingual AI</li>
                  <li>• Deep Azure partnership</li>
                  <li>• POPIA compliance expertise</li>
                  <li>• Proprietary language models</li>
                  <li>• Local data residency</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

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

                <Card className="glass micro-interaction border-green-500/30 bg-green-500/5">
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
                <h3 className="text-lg font-semibold text-center mb-4 text-accent">Backend Services</h3>
                
                <Card className="glass border-accent/30 mb-4">
                  <CardContent className="text-center p-6">
                    <Server className="w-12 h-12 text-accent mx-auto mb-3" />
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
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <PieChart className="w-8 h-8 text-accent" />
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

            <Card className="glass border-accent/30 bg-accent/5 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-accent">AI Adoption</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-accent">77%</p>
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
                      <Smartphone className="w-5 h-5 text-aurora" />
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
            <Card className="glass border-aurora/30 relative flex flex-col">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-aurora rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-aurora">Starter</CardTitle>
                <CardDescription className="text-foreground">Perfect for SMBs</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-aurora">R449</span>
                  <span className="text-foreground/80">/agent/month</span>
                </div>
                <div className="mt-2 p-2 bg-aurora rounded-lg">
                  <p className="text-sm font-semibold text-white">~500 sessions/month</p>
                  <p className="text-xs text-white/80">10 min avg per session</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
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
                <ul className="space-y-3 mb-6">
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
                <Button className="w-full mt-auto bg-aurora text-white hover:bg-aurora/80 font-semibold">
                  Choose Starter
                </Button>
              </CardContent>
            </Card>

            {/* Growth Tier */}
            <Card className="glass border-primary/30 relative transform scale-105 flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-3 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-primary">Growth</CardTitle>
                <CardDescription className="text-foreground">Growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">R899</span>
                  <span className="text-foreground/80">/agent/month</span>
                </div>
                <div className="mt-2 p-2 bg-primary rounded-lg">
                  <p className="text-sm font-semibold text-white">~1,200 sessions/month</p>
                  <p className="text-xs text-white/80">12 min avg per session</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
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
                <ul className="space-y-3 mb-6">
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
                <Button className="w-full mt-auto bg-primary text-white hover:bg-primary/80 font-semibold">
                  Choose Growth
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Tier */}
            <Card className="glass border-accent/40 relative flex flex-col">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-accent">Enterprise</CardTitle>
                <CardDescription className="text-foreground">Large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-accent">R1,799</span>
                  <span className="text-foreground ml-1">/agent/month</span>
                </div>
                <div className="mt-2 p-2 bg-accent rounded-lg border border-accent/40">
                  <p className="text-sm font-semibold text-white">~3,000 sessions/month</p>
                  <p className="text-xs text-white/80">15 min avg per session</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
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
                <ul className="space-y-3 mb-6">
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
                <Button className="w-full mt-auto bg-accent text-white hover:bg-accent/80 font-semibold">
                  Choose Enterprise
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

      {/* Go-to-Market Strategy */}
      <div className="py-16 px-6 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Go-to-Market Strategy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A phased approach to capture market share and establish dominance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Phase 1 */}
            <Card className="glass border-aurora/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-aurora/20 hover:border-aurora/50 group cursor-pointer">
              <CardHeader>
                <Badge className="w-fit bg-aurora/20 text-aurora border-aurora/40 transition-all duration-300 group-hover:bg-aurora/30">Phase 1: Q1-Q2 2025</Badge>
                <CardTitle className="text-xl mt-4 transition-all duration-300 group-hover:text-aurora">Market Entry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-aurora" />
                    Target: 10-15 Customers
                  </h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Focus on SMB e-commerce</li>
                    <li>• Pilot programs with 3-5 agents</li>
                    <li>• Gather case studies & testimonials</li>
                    <li>• Refine product-market fit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Revenue Target:</h4>
                  <p className="text-2xl font-bold text-aurora">R500K MRR</p>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="glass border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 group cursor-pointer">
              <CardHeader>
                <Badge className="w-fit bg-primary/20 text-primary border-primary/40 transition-all duration-300 group-hover:bg-primary/30">Phase 2: Q3-Q4 2025</Badge>
                <CardTitle className="text-xl mt-4 transition-all duration-300 group-hover:text-primary">Scale & Expand</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Target: 40-50 Customers
                  </h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Enterprise sales expansion</li>
                    <li>• Partner channel activation</li>
                    <li>• Industry vertical focus (fintech, telecom)</li>
                    <li>• Team expansion (10-15 people)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Revenue Target:</h4>
                  <p className="text-2xl font-bold text-primary">R2M MRR</p>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="glass border-accent/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 hover:border-accent/50 group cursor-pointer">
              <CardHeader>
                <Badge className="w-fit bg-accent/20 text-accent border-accent/40 transition-all duration-300 group-hover:bg-accent/30">Phase 3: 2026</Badge>
                <CardTitle className="text-xl mt-4 transition-all duration-300 group-hover:text-accent">Market Leadership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    Target: 100+ Customers
                  </h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Regional expansion (SADC)</li>
                    <li>• Enterprise dominance</li>
                    <li>• Platform ecosystem development</li>
                    <li>• Strategic partnerships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Revenue Target:</h4>
                  <p className="text-2xl font-bold text-accent">R5M+ MRR</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Marketing Channels */}
          <Card className="glass transition-all duration-300 hover:shadow-lg hover:shadow-aurora/10">
            <CardHeader>
              <CardTitle className="text-2xl">Marketing Channel Mix</CardTitle>
              <CardDescription>Budget allocation and expected ROI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:scale-105 cursor-pointer group">
                    <span className="font-medium group-hover:text-aurora transition-colors">Content Marketing & SEO</span>
                    <Badge variant="outline" className="group-hover:border-aurora group-hover:text-aurora transition-colors">30%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:scale-105 cursor-pointer group">
                    <span className="font-medium group-hover:text-primary transition-colors">LinkedIn & Social Ads</span>
                    <Badge variant="outline" className="group-hover:border-primary group-hover:text-primary transition-colors">25%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:scale-105 cursor-pointer group">
                    <span className="font-medium group-hover:text-accent transition-colors">Partner Co-Marketing</span>
                    <Badge variant="outline" className="group-hover:border-accent group-hover:text-accent transition-colors">20%</Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:scale-105 cursor-pointer group">
                    <span className="font-medium group-hover:text-aurora transition-colors">Events & Conferences</span>
                    <Badge variant="outline" className="group-hover:border-aurora group-hover:text-aurora transition-colors">15%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:scale-105 cursor-pointer group">
                    <span className="font-medium group-hover:text-primary transition-colors">Direct Outbound Sales</span>
                    <Badge variant="outline" className="group-hover:border-primary group-hover:text-primary transition-colors">10%</Badge>
                  </div>
                  <div className="p-3 bg-aurora/10 border border-aurora/30 rounded-lg">
                    <p className="text-sm font-semibold text-aurora">Target CAC: R12,000</p>
                    <p className="text-xs text-muted-foreground mt-1">LTV:CAC Ratio: 3:1</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Competitive Analysis */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Competitive Landscape</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              How we differentiate in the South African market
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/30">
                  <th className="p-4 text-left border border-muted">Feature</th>
                  <th className="p-4 text-center border border-muted bg-aurora/10">
                    <div className="font-bold text-aurora">Neurovia AI</div>
                    <div className="text-xs text-muted-foreground">(Us)</div>
                  </th>
                  <th className="p-4 text-center border border-muted">Traditional BPO</th>
                  <th className="p-4 text-center border border-muted">International CCaaS</th>
                  <th className="p-4 text-center border border-muted">Local Competitors</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/10 transition-all duration-200 cursor-pointer hover:scale-[1.01]">
                  <td className="p-4 border border-muted font-medium">SA Language Support</td>
                  <td className="p-4 border border-muted text-center bg-green-500/10">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="text-xs block mt-1">All 11 languages</span>
                  </td>
                  <td className="p-4 border border-muted text-center">Limited (2-3)</td>
                  <td className="p-4 border border-muted text-center">None</td>
                  <td className="p-4 border border-muted text-center">Partial (3-5)</td>
                </tr>
                <tr className="hover:bg-muted/10 transition-all duration-200 cursor-pointer hover:scale-[1.01]">
                  <td className="p-4 border border-muted font-medium">Cost per Session</td>
                  <td className="p-4 border border-muted text-center bg-green-500/10">
                    <span className="font-bold text-green-500">R3-7</span>
                  </td>
                  <td className="p-4 border border-muted text-center text-muted-foreground">R25-35</td>
                  <td className="p-4 border border-muted text-center text-muted-foreground">R15-25</td>
                  <td className="p-4 border border-muted text-center text-muted-foreground">R20-30</td>
                </tr>
                <tr className="hover:bg-muted/10 transition-all duration-200 cursor-pointer hover:scale-[1.01]">
                  <td className="p-4 border border-muted font-medium">POPIA Compliance</td>
                  <td className="p-4 border border-muted text-center bg-green-500/10">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="text-xs block mt-1">Local hosting</span>
                  </td>
                  <td className="p-4 border border-muted text-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 border border-muted text-center text-muted-foreground">
                    <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="p-4 border border-muted text-center">Partial</td>
                </tr>
                <tr className="hover:bg-muted/10 transition-all duration-200 cursor-pointer hover:scale-[1.01]">
                  <td className="p-4 border border-muted font-medium">24/7 Availability</td>
                  <td className="p-4 border border-muted text-center bg-green-500/10">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                    <span className="text-xs block mt-1">Automated</span>
                  </td>
                  <td className="p-4 border border-muted text-center">
                    <span className="text-xs">High cost</span>
                  </td>
                  <td className="p-4 border border-muted text-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 border border-muted text-center">Limited</td>
                </tr>
                <tr className="hover:bg-muted/10 transition-all duration-200 cursor-pointer hover:scale-[1.01]">
                  <td className="p-4 border border-muted font-medium">Setup Time</td>
                  <td className="p-4 border border-muted text-center bg-green-500/10">
                    <span className="font-bold text-green-500">2-4 weeks</span>
                  </td>
                  <td className="p-4 border border-muted text-center text-muted-foreground">8-12 weeks</td>
                  <td className="p-4 border border-muted text-center text-muted-foreground">4-8 weeks</td>
                  <td className="p-4 border border-muted text-center text-muted-foreground">6-10 weeks</td>
                </tr>
                <tr className="hover:bg-muted/10 transition-all duration-200 cursor-pointer hover:scale-[1.01]">
                  <td className="p-4 border border-muted font-medium">Scalability</td>
                  <td className="p-4 border border-muted text-center bg-green-500/10">
                    <span className="font-bold text-green-500">Instant</span>
                  </td>
                  <td className="p-4 border border-muted text-center text-muted-foreground">Slow (hiring)</td>
                  <td className="p-4 border border-muted text-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="p-4 border border-muted text-center text-muted-foreground">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="glass border-aurora/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-aurora/20 hover:border-aurora/50 group">
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-aurora transition-colors">Our Competitive Moat</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-aurora mt-0.5 flex-shrink-0" />
                    <span>First-mover advantage in SA multilingual AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-aurora mt-0.5 flex-shrink-0" />
                    <span>Deep Azure & Microsoft partnership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-aurora mt-0.5 flex-shrink-0" />
                    <span>Proprietary language models for SA context</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 group">
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">Barriers to Entry</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complex multilingual AI training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>POPIA compliance infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Customer trust & proven case studies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 hover:border-accent/50 group">
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-accent transition-colors">Market Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Target Market Share (3 years)</p>
                    <p className="text-2xl font-bold text-accent">15-20%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Addressable Market</p>
                    <p className="text-lg font-semibold">R2.4B (SA CCaaS)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Financial Projections */}
      <div className="py-16 px-6 bg-gradient-to-b from-muted/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Financial Projections</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conservative estimates based on market analysis and pilot results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="glass border-aurora/30 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-aurora/30 hover:border-aurora/60 group cursor-pointer">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-aurora transition-all duration-300 group-hover:scale-110">Year 1 (2025)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold text-aurora">R6M</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Customers</p>
                  <p className="text-xl font-semibold">50</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Gross Margin</p>
                  <p className="text-lg font-semibold">60%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/60 group cursor-pointer">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-primary transition-all duration-300 group-hover:scale-110">Year 2 (2026)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold text-primary">R18M</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Customers</p>
                  <p className="text-xl font-semibold">120</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Gross Margin</p>
                  <p className="text-lg font-semibold">65%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-accent/30 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-accent/30 hover:border-accent/60 group cursor-pointer">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-accent transition-all duration-300 group-hover:scale-110">Year 3 (2027)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold text-accent">R42M</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Customers</p>
                  <p className="text-xl font-semibold">250</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Gross Margin</p>
                  <p className="text-lg font-semibold">70%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-green-500/30 bg-green-500/5 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 hover:border-green-500/60 group cursor-pointer">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-green-400 transition-all duration-300 group-hover:scale-110">Profitability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Break-even</p>
                  <p className="text-2xl font-bold text-green-400">Q4 2025</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">EBITDA (Y3)</p>
                  <p className="text-xl font-semibold text-green-400">35%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Burn Rate</p>
                  <p className="text-lg font-semibold">R350K/mo</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass transition-all duration-300 hover:shadow-lg hover:shadow-aurora/10">
            <CardHeader>
              <CardTitle className="text-2xl">Funding & Use of Funds</CardTitle>
              <CardDescription>Seed round: R4.5M to achieve profitability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Capital Requirements</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-aurora/10 hover:border-aurora/30 hover:scale-105 cursor-pointer border border-transparent group">
                      <span className="group-hover:text-aurora transition-colors">Product Development</span>
                      <span className="font-bold group-hover:text-aurora transition-colors">R1.8M (40%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:scale-105 cursor-pointer border border-transparent group">
                      <span className="group-hover:text-primary transition-colors">Sales & Marketing</span>
                      <span className="font-bold group-hover:text-primary transition-colors">R1.35M (30%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-accent/10 hover:border-accent/30 hover:scale-105 cursor-pointer border border-transparent group">
                      <span className="group-hover:text-accent transition-colors">Operations & Infrastructure</span>
                      <span className="font-bold group-hover:text-accent transition-colors">R900K (20%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/30 hover:scale-105 cursor-pointer border border-transparent group">
                      <span className="group-hover:text-green-400 transition-colors">Working Capital</span>
                      <span className="font-bold group-hover:text-green-400 transition-colors">R450K (10%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Key Milestones</h4>
                  <div className="relative space-y-4">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-aurora via-primary to-accent"></div>
                    
                    <div className="flex items-start gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                      <div className="w-8 h-8 rounded-full bg-aurora/20 flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-300 group-hover:bg-aurora/40 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-aurora/50">
                        <CheckCircle2 className="w-4 h-4 text-aurora transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <div className="transition-all duration-300 group-hover:text-aurora">
                        <p className="font-semibold transition-all duration-300 group-hover:scale-105 inline-block">Q2 2025: Beta Launch</p>
                        <p className="text-sm text-muted-foreground">10 pilot customers onboarded</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-300 group-hover:bg-primary/40 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/50">
                        <CheckCircle2 className="w-4 h-4 text-primary transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <div className="transition-all duration-300 group-hover:text-primary">
                        <p className="font-semibold transition-all duration-300 group-hover:scale-105 inline-block">Q4 2025: Break-even</p>
                        <p className="text-sm text-muted-foreground">R500K MRR achieved</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-300 group-hover:bg-accent/40 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-accent/50">
                        <CheckCircle2 className="w-4 h-4 text-accent transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <div className="transition-all duration-300 group-hover:text-accent">
                        <p className="font-semibold transition-all duration-300 group-hover:scale-105 inline-block">Q4 2026: Series A Ready</p>
                        <p className="text-sm text-muted-foreground">R1.5M MRR, 100+ customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
              <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-accent" />
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