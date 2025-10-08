import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  AlertTriangle,
  ExternalLink,
  Code,
  Layers,
  Monitor
} from "lucide-react";
import auroraHeroBg from "@/assets/aurora-hero-bg.jpg";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-stroke">
              <span className="bg-gradient-to-r from-aurora via-primary to-secondary bg-clip-text text-transparent">
                AI Call Centre Management Solution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              A modern, multi-project solution for AI-assisted customer engagement with real-time supervision
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2 micro-interaction">
                <Code className="w-4 h-4 mr-1" />
                ASP.NET Core (.NET 8)
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 micro-interaction">
                <Monitor className="w-4 h-4 mr-1" />
                Blazor Server (.NET 9)
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 micro-interaction">
                <Smartphone className="w-4 h-4 mr-1" />
                .NET MAUI (.NET 9)
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 micro-interaction">
                <Layers className="w-4 h-4 mr-1" />
                Shared Library
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">System Architecture</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="glass border-aurora/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-aurora/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-aurora" />
                </div>
                <CardTitle className="text-lg">Shared Library</CardTitle>
                <CardDescription>Multi-targeted (.NET 8/9)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Shared DTOs and models across all applications for consistent data handling
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">API Orchestrator</CardTitle>
                <CardDescription>ASP.NET Core + SignalR</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chat orchestration, sessions, analytics, health monitoring, and real-time hubs
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-accent/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Supervisor Dashboard</CardTitle>
                <CardDescription>Blazor Server (.NET 9)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Real-time supervision dashboard with SignalR integration and REST APIs
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-accent/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Mobile App</CardTitle>
                <CardDescription>.NET MAUI Cross-platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Agent mobile client for chat, voice interactions, and product catalog
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features & Capabilities</h2>
          
          <Tabs defaultValue="ai-features" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="ai-features" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                AI Features
              </TabsTrigger>
              <TabsTrigger value="real-time" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Real-time
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="integrations" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Integrations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai-features" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-aurora" />
                      Chat Orchestration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Azure OpenAI GPT-4 integration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Intelligent response generation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Automatic escalation handling
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      Multi-language Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Azure Translator integration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Support for en-ZA, af-ZA, zu-ZA, xh-ZA
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Real-time translation services
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Headphones className="w-5 h-5 text-aurora" />
                      Voice Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Azure Speech Services
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Text-to-Speech capabilities
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Voice message processing
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      Smart Search
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Intelligent search service
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Product catalog integration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Context-aware recommendations
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="real-time" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-aurora" />
                      Live Session Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Real-time session tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Supervisor takeover capability
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Live broadcast updates
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      SignalR Hubs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Chat Hub (/chathub)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Supervisor Hub (/supervisorhub)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Product Catalog Hub (/productcataloghub)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-aurora" />
                      Performance Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Session trend analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        SLA performance tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Containment rate metrics
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      CSAT & Feedback
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Customer satisfaction trends
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Feedback aggregation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Time-bucketed analytics
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="glass">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 text-blue-500" />
                    </div>
                    <CardTitle className="text-lg">Azure OpenAI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      GPT-4 powered intelligent responses and conversation handling
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-green-500" />
                    </div>
                    <CardTitle className="text-lg">Azure Translator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Multi-language support for South African languages
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Headphones className="w-6 h-6 text-purple-500" />
                    </div>
                    <CardTitle className="text-lg">Azure Speech</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      Text-to-Speech and voice processing capabilities
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Updates & Enhancements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass border-green-500/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <CardTitle className="text-lg text-green-600">Analytics Enhancement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Background aggregation service with hosted worker
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Time-bucketed analytics models
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Hardened endpoints with UTC date handling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-blue-500/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <CardTitle className="text-lg text-blue-600">Profile Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    Startup seeding with demo user profile
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    Default isiZulu language support
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    MockProfileService for development
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass micro-interaction border-purple-500/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <CardTitle className="text-lg text-purple-600">Reliability Improvements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    RFC3339/ISO 8601 UTC timestamps
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    Enhanced error handling
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    Improved dashboard UX
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-aurora" />
                  Runtime & Compatibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">API Orchestrator</h4>
                  <Badge variant="outline">.NET 8</Badge>
                  <p className="text-sm text-muted-foreground mt-1">
                    Requires App Service stack = .NET 8 for deployment
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Supervisor Dashboard</h4>
                  <Badge variant="outline">.NET 9</Badge>
                  <p className="text-sm text-muted-foreground mt-1">
                    Requires App Service stack = .NET 9 for deployment
                  </p>
                </div>
                <Separator />
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Deployment Note</p>
                      <p className="text-xs text-muted-foreground">
                        Different runtimes can be deployed to separate App Services with matching stacks
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Key Endpoints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <Badge variant="secondary" className="text-xs">GET</Badge>
                    <code className="text-xs">/health</code>
                    <span className="text-xs text-muted-foreground">System health</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <Badge variant="secondary" className="text-xs">POST</Badge>
                    <code className="text-xs">/api/chat/message</code>
                    <span className="text-xs text-muted-foreground">Send message</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <Badge variant="secondary" className="text-xs">GET</Badge>
                    <code className="text-xs">/api/sessions/active</code>
                    <span className="text-xs text-muted-foreground">Active sessions</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <Badge variant="secondary" className="text-xs">GET</Badge>
                    <code className="text-xs">/api/analytics/metrics</code>
                    <span className="text-xs text-muted-foreground">Analytics data</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <Badge variant="secondary" className="text-xs">GET</Badge>
                    <code className="text-xs">/api/feedback/csat-trend</code>
                    <span className="text-xs text-muted-foreground">CSAT trends</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
          
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-aurora" />
                Local Development Setup
              </CardTitle>
              <CardDescription>
                Follow these steps to get the solution running locally
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="bg-aurora text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  Restore and Build
                </h4>
                <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400"># Restore dependencies</div>
                  <div className="text-white">dotnet restore</div>
                  <div className="text-gray-400 mt-2"># Build solution</div>
                  <div className="text-white">dotnet build</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="bg-primary text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  Run API Orchestrator
                </h4>
                <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
                  <div className="text-white">dotnet run --project AICallCentre.ApiOrchestrator</div>
                  <div className="text-gray-400 mt-2"># Available at:</div>
                  <div className="text-green-400">• Health: https://localhost:7001/health</div>
                  <div className="text-green-400">• Swagger: https://localhost:7001/swagger</div>
                  <div className="text-green-400">• Hubs: /chathub, /supervisorhub, /productcataloghub</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  Run Supervisor Dashboard
                </h4>
                <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
                  <div className="text-white">dotnet run --project AICallCentre.SupervisorDashboard</div>
                  <div className="text-gray-400 mt-2"># Opens Blazor dashboard with SignalR connection</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="bg-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  Run Mobile App
                </h4>
                <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400"># Configure API base URL in appsettings</div>
                  <div className="text-gray-400"># For Android devices, use DeviceApiBaseUrl with LAN IP</div>
                  <div className="text-white">dotnet build -t:Run -f net9.0-android</div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-blue-500" />
                  Configuration Requirements
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• SQL connection string (ConnectionStrings:DefaultConnection)</li>
                  <li>• Azure OpenAI endpoint and API key</li>
                  <li>• Azure Speech Services credentials</li>
                  <li>• Azure Translator API key</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Call Centre?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven customer engagement with real-time supervision and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-aurora hover:bg-aurora/80">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
            <Button size="lg" variant="outline">
              <Code className="w-4 h-4 mr-2" />
              Access Repository
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;