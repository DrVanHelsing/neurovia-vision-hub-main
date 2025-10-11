import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye, 
  FileSearch,
  Code,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Bug,
  Users,
  Key,
  Database,
  FileText,
  Zap,
  TrendingUp
} from "lucide-react";
import auroraHeroBg from "@/assets/aurora-hero-bg.jpg";

const Security = () => {
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
          <Badge className="mb-6 animate-fade-in" variant="outline">
            <Shield className="w-4 h-4 mr-2" />
            Secure Software Development Lifecycle
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-aurora">
            Security First Approach
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground animate-fade-in-up animation-delay-200">
            Comprehensive security practices integrated throughout our development lifecycle to protect your data and ensure compliance.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Card className="glass border-white/10 text-left max-w-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-aurora" />
                  <CardTitle className="text-lg">POPIA Compliant</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full compliance with South African data protection regulations
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-white/10 text-left max-w-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-aurora" />
                  <CardTitle className="text-lg">GDPR Ready</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Prepared for EU customer data protection requirements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* SSDLC Phases */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Shield className="w-4 h-4 mr-2" />
              5-Phase Security Framework
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-aurora">
              Security Development Lifecycle
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach to building secure, compliant software
            </p>
          </div>

          <Tabs defaultValue="requirements" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="requirements">1. Requirements</TabsTrigger>
              <TabsTrigger value="design">2. Design</TabsTrigger>
              <TabsTrigger value="development">3. Development</TabsTrigger>
              <TabsTrigger value="testing">4. Testing</TabsTrigger>
              <TabsTrigger value="deployment">5. Deployment</TabsTrigger>
            </TabsList>

            {/* Phase 1: Security Requirements */}
            <TabsContent value="requirements" className="space-y-6">
              <Card className="glass border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileSearch className="w-8 h-8 text-aurora" />
                    <div>
                      <CardTitle className="text-2xl">Security Requirements & Risk Assessment</CardTitle>
                      <CardDescription>Identifying and prioritizing security risks</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Assets */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5 text-aurora" />
                      Key Assets to Protect
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-white/5 bg-white/5">
                        <CardContent className="pt-6">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-aurora mt-1 flex-shrink-0" />
                              <span>Customer conversation data and voice recordings</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-aurora mt-1 flex-shrink-0" />
                              <span>Real-time communication channels (SignalR hubs)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-aurora mt-1 flex-shrink-0" />
                              <span>Session data and user identifiers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-aurora mt-1 flex-shrink-0" />
                              <span>Supervisor oversight and escalation workflows</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-white/5 bg-white/5">
                        <CardHeader>
                          <CardTitle className="text-base">Regulatory Compliance</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <ShieldCheck className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span>POPIA (South Africa) data protection requirements</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ShieldCheck className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span>GDPR compliance for EU customers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ShieldCheck className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span>Industry standards for chat/voice systems</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Separator />

                  {/* Priority Security Risks */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      Priority Security Risks
                    </h3>
                    <div className="space-y-4">
                      <Alert className="border-red-500/50 bg-red-500/10">
                        <AlertCircle className="h-4 w-4 text-red-500" />
                        <AlertTitle className="text-red-500">1. Authentication Vulnerabilities</AlertTitle>
                        <AlertDescription className="text-sm mt-2">
                          <ul className="space-y-1 ml-4 list-disc">
                            <li>[AllowAnonymous] attribute enables unauthorized hub access</li>
                            <li>Demo user context fallback enables identity spoofing</li>
                            <li>No authorization for conversation membership</li>
                          </ul>
                        </AlertDescription>
                      </Alert>

                      <Alert className="border-orange-500/50 bg-orange-500/10">
                        <AlertCircle className="h-4 w-4 text-orange-500" />
                        <AlertTitle className="text-orange-500">2. Data Protection Concerns</AlertTitle>
                        <AlertDescription className="text-sm mt-2">
                          <ul className="space-y-1 ml-4 list-disc">
                            <li>Sensitive conversation data transmitted without encryption verification</li>
                            <li>PII (Personally Identifiable Information) in logs and error messages</li>
                            <li>Voice data without validation or size limits</li>
                          </ul>
                        </AlertDescription>
                      </Alert>

                      <Alert className="border-yellow-500/50 bg-yellow-500/10">
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                        <AlertTitle className="text-yellow-500">3. Authorization Issues</AlertTitle>
                        <AlertDescription className="text-sm mt-2">
                          <ul className="space-y-1 ml-4 list-disc">
                            <li>Cross-hub messaging without role validation</li>
                            <li>No ownership verification for conversation access</li>
                            <li>Supervisor group membership without proper authorization</li>
                          </ul>
                        </AlertDescription>
                      </Alert>

                      <Alert className="border-blue-500/50 bg-blue-500/10">
                        <AlertCircle className="h-4 w-4 text-blue-500" />
                        <AlertTitle className="text-blue-500">4. System Integrity</AlertTitle>
                        <AlertDescription className="text-sm mt-2">
                          <ul className="space-y-1 ml-4 list-disc">
                            <li>No input sanitization for message content</li>
                            <li>No rate limiting for message sending or escalations</li>
                            <li>No session validation or timeout mechanisms</li>
                          </ul>
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Phase 2: Threat Modeling & Design */}
            <TabsContent value="design" className="space-y-6">
              <Card className="glass border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="w-8 h-8 text-aurora" />
                    <div>
                      <CardTitle className="text-2xl">Threat Modeling & Design Review</CardTitle>
                      <CardDescription>Identifying and mitigating potential security threats</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Authentication Threats */}
                    <Card className="border-red-500/20 bg-red-500/5">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Key className="w-5 h-5 text-red-500" />
                          Authentication Threats
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                            <span>Anyone can connect to ChatHub without credentials</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                            <span>User impersonation through demo user context</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                            <span>Session takeover through connection ID manipulation</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Data Tampering */}
                    <Card className="border-orange-500/20 bg-orange-500/5">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Bug className="w-5 h-5 text-orange-500" />
                          Data Tampering Risks
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span>Message content injection (SQL, XSS via unsanitized input)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span>Voice data manipulation (malformed audio files)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span>Conversation access through group ID manipulation</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Information Disclosure */}
                    <Card className="border-yellow-500/20 bg-yellow-500/5">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Eye className="w-5 h-5 text-yellow-500" />
                          Information Disclosure
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                            <span>Error handling exposes system details</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                            <span>Logging user messages creates privacy risks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                            <span>Cross-hub communication leaks sensitive data</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Privilege Escalation */}
                    <Card className="border-purple-500/20 bg-purple-500/5">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Users className="w-5 h-5 text-purple-500" />
                          Privilege Escalation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                            <span>Regular users can potentially access supervisor functions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                            <span>No validation before joining conversation groups</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                            <span>Cross-group messaging without proper authorization</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Separator />

                  {/* Design Recommendations */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-aurora" />
                      Design Recommendations
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Implement proper authentication for all SignalR hubs",
                        "Add role-based authorization for supervisor functions",
                        "Validate user ownership before conversation access",
                        "Sanitize all user inputs before processing",
                        "Implement secure cross-hub communication patterns"
                      ].map((rec, idx) => (
                        <Card key={idx} className="border-aurora/20 bg-aurora/5">
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-aurora mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{rec}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Phase 3: Development */}
            <TabsContent value="development" className="space-y-6">
              <Card className="glass border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Code className="w-8 h-8 text-aurora" />
                    <div>
                      <CardTitle className="text-2xl">Secure Development Practices</CardTitle>
                      <CardDescription>Implementing security controls during development</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Authentication Implementation */}
                  <Card className="border-blue-500/20 bg-blue-500/5">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Key className="w-5 h-5 text-blue-500" />
                        Authentication Implementation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Remove [AllowAnonymous] and implement JWT authentication</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Replace demo context with proper user claims validation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>Add conversation ownership validation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Input Validation */}
                  <Card className="border-green-500/20 bg-green-500/5">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-green-500" />
                        Input Validation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Sanitize all user-provided content (messages, conversation IDs)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Validate audio file size and format</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span>Implement rate limiting for message sending</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Secure Data Handling */}
                  <Card className="border-purple-500/20 bg-purple-500/5">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Lock className="w-5 h-5 text-purple-500" />
                        Secure Data Handling
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Encrypt all sensitive data in transit and at rest</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Implement proper exception handling without leaking details</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span>Remove PII from logging statements</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Separator />

                  {/* Recommended Code Changes */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-aurora" />
                      Recommended Code Changes
                    </h3>
                    <div className="space-y-3">
                      {[
                        { num: 1, text: "Add proper authorization attributes to hub classes" },
                        { num: 2, text: "Implement input validation and sanitization methods" },
                        { num: 3, text: "Add secure session management with timeouts" },
                        { num: 4, text: "Implement audit logging for security events" },
                        { num: 5, text: "Add cross-hub security validation" }
                      ].map((item) => (
                        <div key={item.num} className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
                          <Badge variant="outline" className="flex-shrink-0">{item.num}</Badge>
                          <span className="text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Phase 4: Security Testing */}
            <TabsContent value="testing" className="space-y-6">
              <Card className="glass border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Bug className="w-8 h-8 text-aurora" />
                    <div>
                      <CardTitle className="text-2xl">Security Testing</CardTitle>
                      <CardDescription>Comprehensive security validation and penetration testing</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Required Security Tests */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FileSearch className="w-5 h-5 text-aurora" />
                      Required Security Tests
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Authentication bypass testing",
                        "Authorization boundary testing",
                        "Input validation and sanitization testing",
                        "Rate limiting and DoS protection testing"
                      ].map((test, idx) => (
                        <Card key={idx} className="border-white/5 bg-white/5">
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-aurora mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{test}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Testing Methodologies */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-aurora" />
                      Testing Methodologies
                    </h3>
                    <div className="space-y-4">
                      {/* SAST */}
                      <Card className="border-blue-500/20 bg-blue-500/5">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Code className="w-5 h-5 text-blue-500" />
                            1. Static Application Security Testing (SAST)
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                              <span>Scan code for security vulnerabilities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                              <span>Identify insecure coding patterns</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* DAST */}
                      <Card className="border-green-500/20 bg-green-500/5">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Zap className="w-5 h-5 text-green-500" />
                            2. Dynamic Application Security Testing (DAST)
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span>Test running application for exploitable vulnerabilities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span>Focus on authentication bypass and injection</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Penetration Testing */}
                      <Card className="border-red-500/20 bg-red-500/5">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Shield className="w-5 h-5 text-red-500" />
                            3. Penetration Testing
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                              <span>Attempt to access unauthorized conversations</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                              <span>Test supervisor function access control</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                              <span>Try to manipulate message content and audio data</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Security Regression Testing */}
                      <Card className="border-purple-500/20 bg-purple-500/5">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-purple-500" />
                            4. Security Regression Testing
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                              <span>Ensure security fixes don't introduce new vulnerabilities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                              <span>Verify authentication and authorization consistently applied</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Phase 5: Deployment & Monitoring */}
            <TabsContent value="deployment" className="space-y-6">
              <Card className="glass border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-aurora" />
                    <div>
                      <CardTitle className="text-2xl">Secure Deployment & Operations</CardTitle>
                      <CardDescription>Security assessment and ongoing monitoring</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Security Assessment */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FileSearch className="w-5 h-5 text-aurora" />
                      Security Assessment
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Conduct formal security review before production deployment",
                        "Verify compliance with POPIA, GDPR where applicable",
                        "Document security controls and mitigations"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
                          <CheckCircle2 className="w-5 h-5 text-aurora mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Secure Integration Practices */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-aurora" />
                      Secure Integration Practices
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* API Security */}
                      <Card className="border-blue-500/20 bg-blue-500/5">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Lock className="w-4 h-4 text-blue-500" />
                            API Security
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                              <span>Implement proper authentication between services</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                              <span>Validate all cross-service communication</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                              <span>Monitor API usage for anomalies</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Deployment Security */}
                      <Card className="border-green-500/20 bg-green-500/5">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-green-500" />
                            Deployment Security
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span>Use secure deployment pipelines with credential protection</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span>Implement infrastructure security controls</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                              <span>Follow least privilege principle for service accounts</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Ongoing Security */}
                      <Card className="border-purple-500/20 bg-purple-500/5">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Eye className="w-4 h-4 text-purple-500" />
                            Ongoing Security
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                              <span>Implement security monitoring and logging</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                              <span>Create incident response procedures</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                              <span>Conduct regular security assessments</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Third-Party Dependencies */}
                      <Card className="border-orange-500/20 bg-orange-500/5">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <Database className="w-4 h-4 text-orange-500" />
                            Third-Party Dependencies
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                              <span>Verify security of AI/translation services</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                              <span>Assess security of SignalR and Blazor components</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                              <span>Monitor for vulnerabilities in dependencies</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Implementation Priorities */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Zap className="w-4 h-4 mr-2" />
              Action Items
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-aurora">
              Key Implementation Priorities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Critical security improvements to implement immediately
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                priority: "1",
                title: "Replace [AllowAnonymous] with proper authentication",
                color: "red"
              },
              {
                priority: "2",
                title: "Add input sanitization for all user-provided content",
                color: "orange"
              },
              {
                priority: "3",
                title: "Implement proper authorization checks for conversation access",
                color: "yellow"
              },
              {
                priority: "4",
                title: "Secure cross-hub communication with proper validation",
                color: "blue"
              },
              {
                priority: "5",
                title: "Add comprehensive security logging and monitoring",
                color: "purple"
              }
            ].map((item) => (
              <Card key={item.priority} className={`glass border-${item.color}-500/20 hover:border-${item.color}-500/40 transition-all`}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className={`text-${item.color}-500 border-${item.color}-500/50 flex-shrink-0`}>
                      Priority {item.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Future Enhancements
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-aurora">
              Planned Security Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Additional security capabilities in development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass border-aurora/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-aurora" />
                  <CardTitle className="text-xl">Security Report Generation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Comprehensive security reporting capabilities for consultants and administrators, providing detailed insights into security posture and compliance status.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-aurora" />
                      Report Types
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                      <li>• Security audit logs</li>
                      <li>• Compliance status reports</li>
                      <li>• Vulnerability assessments</li>
                      <li>• Access control reviews</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-aurora" />
                      Consultant Benefits
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                      <li>• Individual security metrics</li>
                      <li>• Incident response tracking</li>
                      <li>• Security training completion</li>
                      <li>• Best practice adherence</li>
                    </ul>
                  </div>
                </div>

                <Alert className="border-aurora/20 bg-aurora/5 mt-6">
                  <AlertCircle className="h-4 w-4 text-aurora" />
                  <AlertTitle className="text-aurora">Coming Soon</AlertTitle>
                  <AlertDescription className="text-sm">
                    This feature is currently in development and will be released in a future update. 
                    Stay tuned for automated security report generation with customizable templates and scheduling.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-gradient-to-t from-aurora/10 to-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Security is Our Priority
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our comprehensive SSDLC approach ensures your data is protected at every stage of development and deployment.
          </p>
          <div className="flex gap-4 justify-center">
            <Badge variant="outline" className="text-base px-4 py-2">
              <ShieldCheck className="w-4 h-4 mr-2" />
              POPIA Compliant
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              <Lock className="w-4 h-4 mr-2" />
              GDPR Ready
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              <Eye className="w-4 h-4 mr-2" />
              Continuously Monitored
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
