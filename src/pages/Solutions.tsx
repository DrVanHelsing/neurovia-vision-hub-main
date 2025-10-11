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
  Monitor,
  Eye
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

      {/* Demo Video Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-aurora/40 text-aurora bg-aurora/10">
              Live Demo
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-aurora via-primary to-accent bg-clip-text text-transparent">
              See It In Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our comprehensive demo showcasing the complete AI Call Centre solution in action
            </p>
          </div>

          <Card className="glass border-aurora/30 overflow-hidden group hover:shadow-2xl hover:shadow-aurora/30 transition-all duration-500">
            <CardContent className="p-0">
              <div className="relative aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ywyslOxT714"
                  title="AI Call Centre Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-aurora" />
                Full System Demonstration
              </CardTitle>
              <CardDescription>
                Complete walkthrough of customer interactions, supervisor monitoring, analytics, and real-time features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Mobile App Experience</h4>
                    <p className="text-xs text-muted-foreground">Chat, voice, and product browsing</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Supervisor Dashboard</h4>
                    <p className="text-xs text-muted-foreground">Real-time monitoring and analytics</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">AI Integration</h4>
                    <p className="text-xs text-muted-foreground">Azure OpenAI and multilingual support</p>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-muted-foreground italic">
                <strong className="text-foreground">Note:</strong> For a complete view of the CSAT feedback collection and session management workflow, please refer to the{" "}
                <a href="#csat-feedback" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                  CSAT Feedback screenshot
                </a>
                {" "}in the User Journey section below.
              </p>
            </CardContent>
          </Card>

          {/* Video Highlights */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <Card className="glass border-aurora/20 micro-interaction">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-aurora/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-aurora" />
                </div>
                <CardTitle className="text-lg">Customer Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  See how customers interact with AI agents via chat and voice
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20 micro-interaction">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Live Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Real-time session tracking and supervisor intervention
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-accent/20 micro-interaction">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Comprehensive metrics and performance insights
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-green-500/20 micro-interaction">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-lg">Multilingual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Support for all 11 South African official languages
                </p>
              </CardContent>
            </Card>
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

      {/* User Journey & Screenshots */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-aurora/40 text-aurora bg-aurora/10">
              User Experience
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-aurora via-primary to-secondary bg-clip-text text-transparent">
              Complete User Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From customer inquiry to supervisor insights - experience the seamless flow of our AI-powered call centre solution
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-aurora via-primary to-accent hidden lg:block"></div>
              
              {/* Journey Steps */}
              <div className="space-y-16">
                
                {/* Step 1: Customer Initiates Contact */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right space-y-4">
                    <div className="inline-block lg:float-right">
                      <Badge className="bg-aurora/20 text-aurora border-aurora/40 mb-2">Step 1</Badge>
                    </div>
                    <div className="clear-both">
                      <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 lg:justify-end">
                        <Users className="w-6 h-6 text-aurora" />
                        Customer Initiates Contact
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Customer opens the AI Support App and is greeted with an intuitive chat interface. The AI agent is ready to assist with multilingual support across all 11 South African languages.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Clean, modern chat interface</span>
                        </li>
                        <li className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Instant AI response (no wait time)</span>
                        </li>
                        <li className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Context-aware conversation history</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Card className="glass border-aurora/30 overflow-hidden group hover:shadow-2xl hover:shadow-aurora/20 transition-all duration-500 max-w-md mx-auto">
                    <img 
                      src="/screenshots/AI Support App Screenshots/1- Home - ChatPage.jpg" 
                      alt="AI Support Chat Interface"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105 object-contain"
                    />
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-aurora">Mobile Interface:</strong> Customer chat view with AI-powered responses
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Step 2: Voice Interaction */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <Card className="glass border-primary/30 overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 lg:order-1 max-w-md mx-auto">
                    <img 
                      src="/screenshots/AI Support App Screenshots/2-Voice Chat Overlay.jpg" 
                      alt="Voice Chat Feature"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105 object-contain"
                    />
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-primary">Voice Integration:</strong> Speech-to-text and text-to-speech capabilities
                      </p>
                    </CardContent>
                  </Card>
                  <div className="space-y-4 lg:order-2">
                    <Badge className="bg-primary/20 text-primary border-primary/40 mb-2">Step 2</Badge>
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                      <Headphones className="w-6 h-6 text-primary" />
                      Seamless Voice Communication
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Customer can switch to voice mode for hands-free interaction. Azure Speech Services provide real-time transcription and natural voice responses in the customer's preferred language.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>Real-time speech-to-text transcription</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>Natural text-to-speech responses</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>Multi-language voice support</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 3: Session History & Tracking */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right space-y-4">
                    <div className="inline-block lg:float-right">
                      <Badge className="bg-accent/20 text-accent border-accent/40 mb-2">Step 3</Badge>
                    </div>
                    <div className="clear-both">
                      <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 lg:justify-end">
                        <Clock className="w-6 h-6 text-accent" />
                        Conversation History
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        All interactions are automatically saved and organized. Customers can review past conversations, and AI maintains context across sessions for personalized support.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Chronological session timeline</span>
                        </li>
                        <li className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Search and filter conversations</span>
                        </li>
                        <li className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Cross-session context retention</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Card className="glass border-accent/30 overflow-hidden group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 max-w-md mx-auto">
                    <img 
                      src="/screenshots/AI Support App Screenshots/3-Session Histories.jpg" 
                      alt="Session History View"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105 object-contain"
                    />
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-accent">History Tracking:</strong> Complete conversation timeline with search
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Step 4: Product Catalog */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <Card className="glass border-green-500/30 overflow-hidden group hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 lg:order-1 max-w-md mx-auto">
                    <img 
                      src="/screenshots/AI Support App Screenshots/4-Products.jpg" 
                      alt="Product Catalog"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105 object-contain"
                    />
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-green-400">Product Discovery:</strong> Integrated catalog for easy browsing
                      </p>
                    </CardContent>
                  </Card>
                  <div className="space-y-4 lg:order-2">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/40 mb-2">Step 4</Badge>
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                      <BarChart3 className="w-6 h-6 text-green-400" />
                      Integrated Product Catalog
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Customers can browse products directly within the app. AI agent provides intelligent product recommendations based on conversation context and customer preferences.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>Visual product browsing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>AI-powered recommendations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>In-chat product queries</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 5: Feedback Collection */}
                <div id="csat-feedback" className="grid lg:grid-cols-2 gap-8 items-center scroll-mt-20">
                  <div className="lg:text-right space-y-4">
                    <div className="inline-block lg:float-right">
                      <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/40 mb-2">Step 5</Badge>
                    </div>
                    <div className="clear-both">
                      <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 lg:justify-end">
                        <MessageSquare className="w-6 h-6 text-violet-400" />
                        CSAT Feedback Collection
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        After each interaction, customers provide satisfaction ratings and feedback. This data feeds into analytics for continuous AI improvement and quality monitoring.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>1-5 star satisfaction rating</span>
                        </li>
                        <li className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Optional detailed feedback</span>
                        </li>
                        <li className="flex items-center gap-2 lg:justify-end">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>Real-time analytics integration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Card className="glass border-violet-500/30 overflow-hidden group hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 max-w-md mx-auto">
                    <img 
                      src="/screenshots/AI Support App Screenshots/6-CSAT Feedback.jpg" 
                      alt="CSAT Feedback Form"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105 object-contain"
                    />
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-violet-400">Quality Assurance:</strong> Customer satisfaction tracking
                      </p>
                    </CardContent>
                  </Card>
                </div>

              </div>
            </div>
          </div>

          {/* Supervisor Dashboard Journey */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/10">
                Supervisor Experience
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Real-Time Supervision & Analytics</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                While customers interact with AI agents, supervisors monitor quality, track performance, and gain actionable insights through a comprehensive dashboard
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Dashboard Overview */}
              <Card className="glass border-aurora/30 overflow-hidden group hover:shadow-2xl hover:shadow-aurora/20 transition-all duration-500">
                <div className="max-w-2xl mx-auto">
                  <img 
                    src="/screenshots/Supervisor Dashboard Screen Shots/1-Dashboard.png" 
                    alt="Supervisor Dashboard"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105 object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-aurora" />
                    Real-Time Dashboard
                  </CardTitle>
                  <CardDescription>
                    Comprehensive overview of all active sessions, performance metrics, and system health
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-aurora flex-shrink-0" />
                      <span>Live session count and agent status</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-aurora flex-shrink-0" />
                      <span>Real-time performance KPIs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-aurora flex-shrink-0" />
                      <span>System health monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Live Sessions */}
              <Card className="glass border-primary/30 overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                <div className="max-w-2xl mx-auto">
                  <img 
                    src="/screenshots/Supervisor Dashboard Screen Shots/2- Live Sessions.png" 
                    alt="Live Sessions Monitor"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105 object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Live Session Monitoring
                  </CardTitle>
                  <CardDescription>
                    Track all active customer-AI interactions in real-time with intervention capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Active session list with timestamps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Message count and sentiment analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Escalation alerts and human takeover</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Session History */}
              <Card className="glass border-accent/30 overflow-hidden group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                <div className="max-w-2xl mx-auto">
                  <img 
                    src="/screenshots/Supervisor Dashboard Screen Shots/3-User Session History.png" 
                    alt="User Session History"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105 object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-accent" />
                    Historical Analytics
                  </CardTitle>
                  <CardDescription>
                    Comprehensive session history with detailed metrics and customer journey tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Complete conversation archives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Session duration and resolution metrics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Customer interaction patterns</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Full Session Details */}
              <Card className="glass border-green-500/30 overflow-hidden group hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
                <div className="max-w-2xl mx-auto">
                  <img 
                    src="/screenshots/Supervisor Dashboard Screen Shots/4-User Full Session .png" 
                    alt="Detailed Session View"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105 object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-green-400" />
                    Detailed Session View
                  </CardTitle>
                  <CardDescription>
                    Deep dive into individual conversations with full message history and AI decision insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Complete message transcript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>AI decision reasoning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>Customer satisfaction score</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Analytics Dashboard */}
            <Card className="glass border-violet-500/30 overflow-hidden group hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500">
              <div className="max-w-3xl mx-auto">
                <img 
                  src="/screenshots/Supervisor Dashboard Screen Shots/6-Analytics Page.png" 
                  alt="Analytics Dashboard"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105 object-contain"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BarChart3 className="w-6 h-6 text-violet-400" />
                  Advanced Analytics & Insights
                </CardTitle>
                <CardDescription className="text-base">
                  Data-driven insights for continuous improvement and strategic decision-making
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-violet-400" />
                      Performance Metrics
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Average response time</li>
                      <li>• Resolution rate</li>
                      <li>• Customer satisfaction (CSAT)</li>
                      <li>• AI accuracy scores</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-violet-400" />
                      Usage Analytics
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Peak usage hours</li>
                      <li>• Session volume trends</li>
                      <li>• Language distribution</li>
                      <li>• Channel preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-violet-400" />
                      Quality Insights
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Escalation patterns</li>
                      <li>• Common issues identified</li>
                      <li>• AI training opportunities</li>
                      <li>• Customer feedback themes</li>
                    </ul>
                  </div>
                </div>
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

      {/* User Testing & Feedback Section */}
      <section id="user-testing" className="py-20 px-6 bg-gradient-to-b from-background via-muted/20 to-background scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-aurora/40 text-aurora bg-aurora/10">
              User Research
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-aurora via-primary to-accent bg-clip-text text-transparent">
              User Testing & Feedback
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Comprehensive evaluation conducted with 48 participants from the Samsung Future Innovation Lab at the University of the Western Cape
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-aurora" />
                <span className="text-muted-foreground">48 Participants</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-muted-foreground">6 Testing Criteria</span>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Real-World Scenarios</span>
              </div>
            </div>
          </div>

          {/* Testing Methodology */}
          <Card className="glass border-aurora/30 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-aurora" />
                Testing Methodology
              </CardTitle>
              <CardDescription>
                Structured evaluation framework designed to assess system performance across critical dimensions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-aurora" />
                    Participant Profile
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Students and researchers from Samsung Future Innovation Lab</li>
                    <li>• Diverse technical backgrounds (CS, Engineering, Business)</li>
                    <li>• Mix of multilingual speakers (11 SA languages represented)</li>
                    <li>• Age range: 19-35 years</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Testing Protocol
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 15-20 minute individual testing sessions</li>
                    <li>• Task-based scenario completion</li>
                    <li>• Post-test questionnaire (6 criteria, 5-point scale)</li>
                    <li>• Optional qualitative feedback collection</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Executive Summary - Quick Presentation Card */}
          <Card className="glass border-aurora/40 mb-12 bg-gradient-to-br from-aurora/5 via-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="w-6 h-6 text-aurora" />
                Executive Summary
              </CardTitle>
              <CardDescription>
                Key findings and performance highlights from comprehensive user testing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left: Overall Metrics */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="text-center p-6 bg-background/50 rounded-lg border border-aurora/20">
                    <div className="text-5xl font-bold bg-gradient-to-r from-aurora via-primary to-accent bg-clip-text text-transparent mb-2">
                      4.4/5
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">Overall Score</div>
                    <div className="text-xs text-muted-foreground">Average across all criteria</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="text-2xl font-bold text-green-400">92%</div>
                      <div className="text-xs text-muted-foreground">Satisfied</div>
                    </div>
                    <div className="text-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-2xl font-bold text-primary">96%</div>
                      <div className="text-xs text-muted-foreground">Completed</div>
                    </div>
                  </div>
                </div>

                {/* Middle: Top Strengths */}
                <div className="lg:col-span-1 space-y-3">
                  <h4 className="font-semibold flex items-center gap-2 text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    Top Strengths
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-background/50 rounded border border-green-500/10">
                      <Badge variant="outline" className="border-green-500/40 text-green-400 shrink-0">1</Badge>
                      <div className="text-sm">
                        <div className="font-semibold">Ease of Use (4.6/5)</div>
                        <div className="text-xs text-muted-foreground">Intuitive interface</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-background/50 rounded border border-green-500/10">
                      <Badge variant="outline" className="border-green-500/40 text-green-400 shrink-0">2</Badge>
                      <div className="text-sm">
                        <div className="font-semibold">Satisfaction (4.6/5)</div>
                        <div className="text-xs text-muted-foreground">High recommendation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-background/50 rounded border border-green-500/10">
                      <Badge variant="outline" className="border-green-500/40 text-green-400 shrink-0">3</Badge>
                      <div className="text-sm">
                        <div className="font-semibold">Multilingual (4.5/5)</div>
                        <div className="text-xs text-muted-foreground">Seamless switching</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Key Insights */}
                <div className="lg:col-span-1 space-y-3">
                  <h4 className="font-semibold flex items-center gap-2 text-primary">
                    <Brain className="w-5 h-5" />
                    Key Insights
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-background/50 rounded border border-aurora/10">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-aurora mt-0.5 shrink-0" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Fast response times</strong> exceeded user expectations
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-background/50 rounded border border-aurora/10">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Voice quality</strong> highly rated across all languages
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-background/50 rounded border border-aurora/10">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">Response time</strong> identified as focus area
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom: Quick Stats */}
              <Separator className="my-6" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-aurora">48</div>
                  <div className="text-xs text-muted-foreground">Participants</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-xs text-muted-foreground">Criteria</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">11</div>
                  <div className="text-xs text-muted-foreground">Languages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">89%</div>
                  <div className="text-xs text-muted-foreground">Would Recommend</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Evaluation Criteria & Results */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Evaluation Results</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Criteria 1: Ease of Use */}
              <Card className="glass border-aurora/20 micro-interaction">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">Ease of Use</CardTitle>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/40">4.6/5</Badge>
                  </div>
                  <CardDescription>How intuitive is the interface?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Excellent (5)</span>
                        <span className="font-medium">62%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-aurora to-primary rounded-full" style={{width: '62%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Good (4)</span>
                        <span className="font-medium">29%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{width: '29%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Average (3)</span>
                        <span className="font-medium">8%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{width: '8%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Below Average (2-1)</span>
                        <span className="font-medium">1%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-muted-foreground/50 rounded-full" style={{width: '1%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Criteria 2: Response Accuracy */}
              <Card className="glass border-primary/20 micro-interaction">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">Response Accuracy</CardTitle>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/40">4.4/5</Badge>
                  </div>
                  <CardDescription>AI responses relevance & correctness</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Excellent (5)</span>
                        <span className="font-medium">54%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-aurora to-primary rounded-full" style={{width: '54%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Good (4)</span>
                        <span className="font-medium">35%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{width: '35%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Average (3)</span>
                        <span className="font-medium">10%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{width: '10%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Below Average (2-1)</span>
                        <span className="font-medium">1%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-muted-foreground/50 rounded-full" style={{width: '1%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Criteria 3: Voice Quality */}
              <Card className="glass border-accent/20 micro-interaction">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">Voice Quality</CardTitle>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/40">4.3/5</Badge>
                  </div>
                  <CardDescription>Speech recognition & synthesis clarity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Excellent (5)</span>
                        <span className="font-medium">48%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-aurora to-primary rounded-full" style={{width: '48%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Good (4)</span>
                        <span className="font-medium">38%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{width: '38%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Average (3)</span>
                        <span className="font-medium">12%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{width: '12%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Below Average (2-1)</span>
                        <span className="font-medium">2%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-muted-foreground/50 rounded-full" style={{width: '2%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Criteria 4: Response Time */}
              <Card className="glass border-green-500/20 micro-interaction">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">Response Time</CardTitle>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/40">4.0/5</Badge>
                  </div>
                  <CardDescription>Speed of AI responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Excellent (5)</span>
                        <span className="font-medium">35%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-aurora to-primary rounded-full" style={{width: '35%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Good (4)</span>
                        <span className="font-medium">48%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{width: '48%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Average (3)</span>
                        <span className="font-medium">15%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{width: '15%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Below Average (2-1)</span>
                        <span className="font-medium">2%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-muted-foreground/50 rounded-full" style={{width: '2%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Criteria 5: Multilingual Support */}
              <Card className="glass border-violet-500/20 micro-interaction">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">Multilingual Support</CardTitle>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/40">4.5/5</Badge>
                  </div>
                  <CardDescription>Language accuracy & switching</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Excellent (5)</span>
                        <span className="font-medium">58%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-aurora to-primary rounded-full" style={{width: '58%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Good (4)</span>
                        <span className="font-medium">31%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{width: '31%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Average (3)</span>
                        <span className="font-medium">10%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{width: '10%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Below Average (2-1)</span>
                        <span className="font-medium">1%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-muted-foreground/50 rounded-full" style={{width: '1%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Criteria 6: Overall Satisfaction */}
              <Card className="glass border-teal-500/20 micro-interaction">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">Overall Satisfaction</CardTitle>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/40">4.6/5</Badge>
                  </div>
                  <CardDescription>Would recommend to others</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Excellent (5)</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-aurora to-primary rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Good (4)</span>
                        <span className="font-medium">27%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{width: '27%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Average (3)</span>
                        <span className="font-medium">7%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full" style={{width: '7%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Below Average (2-1)</span>
                        <span className="font-medium">1%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-muted-foreground/50 rounded-full" style={{width: '1%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Visual Summary - Quick Overview */}
          <Card className="glass border-aurora/30 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BarChart3 className="w-6 h-6 text-aurora" />
                Testing Results Overview
              </CardTitle>
              <CardDescription>
                At-a-glance summary of user testing performance across all evaluation criteria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Overall Score Visualization */}
                <div className="text-center p-6 bg-gradient-to-br from-aurora/10 via-primary/10 to-accent/10 rounded-lg border border-aurora/20">
                  <div className="text-6xl font-bold bg-gradient-to-r from-aurora via-primary to-accent bg-clip-text text-transparent mb-2">
                    4.4/5
                  </div>
                  <div className="text-lg font-semibold mb-1">Overall Average Score</div>
                  <p className="text-sm text-muted-foreground">Based on 48 participants across 6 evaluation criteria</p>
                </div>

                {/* Comparative Bar Chart */}
                <div>
                  <h4 className="font-semibold mb-4 text-center">Performance by Criteria</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Ease of Use</span>
                        <span className="font-semibold text-aurora">4.6/5</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-aurora to-primary rounded-full transition-all duration-1000" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Overall Satisfaction</span>
                        <span className="font-semibold text-primary">4.6/5</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Multilingual Support</span>
                        <span className="font-semibold text-accent">4.5/5</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-green-500 rounded-full transition-all duration-1000" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Response Accuracy</span>
                        <span className="font-semibold text-green-400">4.4/5</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-violet-500 rounded-full transition-all duration-1000" style={{width: '88%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Voice Quality</span>
                        <span className="font-semibold text-violet-400">4.3/5</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-500 to-teal-500 rounded-full transition-all duration-1000" style={{width: '86%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Response Time</span>
                        <span className="font-semibold text-yellow-400">4.0/5</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-1000" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="text-3xl font-bold text-green-400 mb-1">Top Score</div>
                    <div className="text-sm font-semibold">Ease of Use</div>
                    <div className="text-xs text-muted-foreground">4.6/5 rating</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">Focus Area</div>
                    <div className="text-sm font-semibold">Response Time</div>
                    <div className="text-xs text-muted-foreground">4.0/5 rating</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-aurora/10 border border-aurora/20">
                    <div className="text-3xl font-bold text-aurora mb-1">92%</div>
                    <div className="text-sm font-semibold">Satisfaction</div>
                    <div className="text-xs text-muted-foreground">Would rate 4-5 stars</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="glass border-aurora/30 text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-aurora">4.4</CardTitle>
                <CardDescription>Average Rating</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Across all criteria</p>
              </CardContent>
            </Card>
            <Card className="glass border-green-500/30 text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-green-400">92%</CardTitle>
                <CardDescription>Satisfaction Rate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Rated 4-5 stars overall</p>
              </CardContent>
            </Card>
            <Card className="glass border-primary/30 text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">96%</CardTitle>
                <CardDescription>Task Completion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Successfully completed scenarios</p>
              </CardContent>
            </Card>
            <Card className="glass border-accent/30 text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-accent">89%</CardTitle>
                <CardDescription>Would Recommend</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Likelihood to recommend</p>
              </CardContent>
            </Card>
          </div>

          {/* Qualitative Feedback */}
          <Card className="glass border-primary/30 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Key Insights from Qualitative Feedback
              </CardTitle>
              <CardDescription>
                Common themes and suggestions from participant feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2 text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    Strengths Highlighted
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-green-500/40 text-green-400 shrink-0">1</Badge>
                      <p className="text-sm text-muted-foreground">
                        "The multilingual support is impressive - switching between languages felt natural and seamless"
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-green-500/40 text-green-400 shrink-0">2</Badge>
                      <p className="text-sm text-muted-foreground">
                        "Response times were incredibly fast, much better than traditional call centers"
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-green-500/40 text-green-400 shrink-0">3</Badge>
                      <p className="text-sm text-muted-foreground">
                        "The interface is clean and intuitive - I didn't need any instructions to navigate"
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-green-500/40 text-green-400 shrink-0">4</Badge>
                      <p className="text-sm text-muted-foreground">
                        "Voice chat feature works remarkably well, especially for hands-free scenarios"
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-green-500/40 text-green-400 shrink-0">5</Badge>
                      <p className="text-sm text-muted-foreground">
                        "The supervisor dashboard provides excellent insights - perfect for quality monitoring"
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2 text-yellow-400">
                    <AlertTriangle className="w-5 h-5" />
                    Suggestions for Improvement
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-yellow-500/40 text-yellow-400 shrink-0">1</Badge>
                      <p className="text-sm text-muted-foreground">
                        "Would be helpful to have more context-aware follow-up suggestions"
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-yellow-500/40 text-yellow-400 shrink-0">2</Badge>
                      <p className="text-sm text-muted-foreground">
                        "Voice recognition could be improved for accented speech in some languages"
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-yellow-500/40 text-yellow-400 shrink-0">3</Badge>
                      <p className="text-sm text-muted-foreground">
                        "Add ability to switch to human agent directly from chat interface"
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-yellow-500/40 text-yellow-400 shrink-0">4</Badge>
                      <p className="text-sm text-muted-foreground">
                        "Session history search could benefit from more advanced filtering options"
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-yellow-500/40 text-yellow-400 shrink-0">5</Badge>
                      <p className="text-sm text-muted-foreground">
                        "Integration with more product catalogs would enhance the shopping experience"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testing Scenarios */}
          <Card className="glass border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                Testing Scenarios
              </CardTitle>
              <CardDescription>
                Real-world use cases evaluated during testing sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-aurora/20 text-aurora border-aurora/40">Scenario 1</Badge>
                  </div>
                  <h4 className="font-semibold text-sm">Product Inquiry</h4>
                  <p className="text-xs text-muted-foreground">
                    User asks about product features, pricing, and availability in their native language
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/40">Scenario 2</Badge>
                  </div>
                  <h4 className="font-semibold text-sm">Technical Support</h4>
                  <p className="text-xs text-muted-foreground">
                    Troubleshooting common issues using both text and voice interactions
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-accent/20 text-accent border-accent/40">Scenario 3</Badge>
                  </div>
                  <h4 className="font-semibold text-sm">Order Status</h4>
                  <p className="text-xs text-muted-foreground">
                    Checking order history and delivery status with follow-up questions
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/40">Scenario 4</Badge>
                  </div>
                  <h4 className="font-semibold text-sm">Language Switching</h4>
                  <p className="text-xs text-muted-foreground">
                    Mid-conversation language change to test multilingual capabilities
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/40">Scenario 5</Badge>
                  </div>
                  <h4 className="font-semibold text-sm">Feedback Submission</h4>
                  <p className="text-xs text-muted-foreground">
                    Complete interaction and provide CSAT rating with optional comments
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/40">Scenario 6</Badge>
                  </div>
                  <h4 className="font-semibold text-sm">Supervisor Monitoring</h4>
                  <p className="text-xs text-muted-foreground">
                    Real-time session monitoring and analytics review from dashboard
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default Solutions;