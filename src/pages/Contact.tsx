import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import auroraBg from "@/assets/aurora-hero-bg.jpg";

const Contact = () => {
  const teamContacts = [
    {
      name: "Tredir Sewpaul",
      role: "Team Lead & Full-Stack Developer",
      email: "5100592@mypillar7uwc.ac.za",
      phone: "067 408 2819",
      discord: "tredirs",
      github: "DrVanHelsing",
      primaryContact: true
    },
    {
      name: "Mzameli Mashiyi",
      role: "Full-Stack Developer & Co-Lead",
      email: "5100933@mypillar7uwc.ac.za",
      phone: "079 825 0366",
      discord: "mayarha_27989",
      primaryContact: false
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
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-stroke">
              <span className="bg-gradient-to-r from-aurora via-primary to-secondary bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Ready to transform your customer service with AI? Let's discuss how Neurovia can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="glass border-aurora/20">
              <CardHeader>
                <CardTitle className="text-2xl text-aurora">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" className="border-aurora/30 focus:border-aurora" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground/80 mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="border-aurora/30 focus:border-aurora" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" className="border-aurora/30 focus:border-aurora" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Company (Optional)
                  </label>
                  <Input placeholder="Your Company Name" className="border-aurora/30 focus:border-aurora" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Subject
                  </label>
                  <Input placeholder="AI Call Centre Demo Request" className="border-aurora/30 focus:border-aurora" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your customer service needs and how we can help..."
                    className="border-aurora/30 focus:border-aurora min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-aurora hover:bg-aurora/80 text-black font-semibold">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card className="glass border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Quick Response
                  </CardTitle>
                  <CardDescription>
                    Need immediate assistance? Contact our team directly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-foreground/80">
                    <Mail className="w-5 h-5 mr-3 text-aurora" />
                    <div>
                      <p className="font-medium">General Inquiries</p>
                      <p className="text-sm">info@neurovia.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center text-foreground/80">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">Sales & Demos</p>
                      <p className="text-sm">+27 67 408 2819</p>
                    </div>
                  </div>
                  <div className="flex items-center text-foreground/80">
                    <MapPin className="w-5 h-5 mr-3 text-accent" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm">Cape Town, South Africa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Contacts */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Development Team</h3>
                {teamContacts.map((contact, index) => (
                  <Card key={index} className={`glass ${contact.primaryContact ? 'border-aurora/30 bg-aurora/5' : 'border-muted/30'}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{contact.name}</h4>
                          <p className="text-sm text-foreground/70">{contact.role}</p>
                          {contact.primaryContact && (
                            <Badge variant="outline" className="mt-1 text-xs border-aurora/40 text-aurora">
                              Primary Contact
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center text-foreground/80">
                          <Mail className="w-3 h-3 mr-2 text-aurora" />
                          <span className="truncate">{contact.email}</span>
                        </div>
                        <div className="flex items-center text-foreground/80">
                          <Phone className="w-3 h-3 mr-2 text-primary" />
                          <span>{contact.phone}</span>
                        </div>
                        <div className="flex items-center text-foreground/80">
                          <MessageCircle className="w-3 h-3 mr-2 text-accent" />
                          <span>{contact.discord}</span>
                        </div>
                        {contact.github && (
                          <div className="flex items-center text-foreground/80">
                            <Github className="w-3 h-3 mr-2 text-accent" />
                            <span>@{contact.github}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="glass border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl text-accent flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/80">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM SAST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/80">Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM SAST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/80">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                    <p className="text-xs text-foreground/70">
                      <strong>Emergency Support:</strong> For critical issues, contact us via Discord for fastest response.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-muted/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Schedule a free consultation to see how our AI Call Centre can transform your customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="micro-interaction bg-aurora hover:bg-aurora/80 text-black font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="micro-interaction border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;