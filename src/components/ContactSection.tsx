import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Linkedin, MapPin, Phone, Send, Download, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "haiderzaidi290@gmail.com",
      href: "mailto:haiderzaidi290@gmail.com",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Syed Haider Abbas Zaidi",
      href: "https://www.linkedin.com/in/syed-haider-abbas-zaidi-132525215/",
      color: "accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "haider14-9abbaas",
      href: "https://github.com/haider14-9abbaas",
      color: "cyber-green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      href: null,
      color: "cyber-purple"
    }
  ];

  const quickLinks = [
    { label: "Resume", icon: Download, action: "download" },
    { label: "View LinkedIn", icon: Linkedin, action: "linkedin" },
    { label: "View GitHub", icon: Github, action: "github" },
    { label: "Send Email", icon: Mail, action: "email" }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            Get In <span className="text-cyber-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on cybersecurity projects, web development, or discuss opportunities? 
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-mono font-bold text-foreground mb-6">Contact Information</h3>
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card key={index} className="cyber-border hover-cyber">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          contact.color === 'primary' ? 'cyber-gradient' :
                          contact.color === 'accent' ? 'bg-accent' :
                          contact.color === 'cyber-green' ? 'bg-cyber-green' :
                          'bg-cyber-purple'
                        }`}>
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{contact.label}</h4>
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <span className="text-muted-foreground">{contact.value}</span>
                          )}
                        </div>
                        {contact.href && (
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

   {/* Quick Actions */}
<Card className="cyber-border hover-cyber">
  <CardContent className="p-6">
    <h3 className="text-xl font-mono font-bold text-foreground mb-6">Quick Actions</h3>
    <div className="grid grid-cols-2 gap-3">
      {quickLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <Button
            key={index}
            variant="outline"
            className="cyber-border hover-cyber flex items-center justify-center space-x-2 h-12"
            onClick={() => {
              if (link.action === 'email') {
                window.open('mailto:haiderzaidi290@gmail.com');
              } else if (link.action === 'linkedin') {
                window.open('https://www.linkedin.com/in/syed-haider-abbas-zaidi-132525215/', '_blank');
              } else if (link.action === 'github') {
                window.open('https://github.com/haider14-9abbaas', '_blank');
              } else if (link.action === 'download') {
                window.open('https://docs.google.com/document/d/1rOe8YpGe6_Xko8bQPwEJjVUIbrJUJryF/edit?usp=sharing&ouid=117431377946953981873&rtpof=true&sd=true', '_blank');
              }
            }}
          >
            {Icon && <Icon className="w-5 h-5" />}
            <span>{link.label}</span>
          </Button>
        );
      })}
    </div>
  </CardContent>
</Card>


            {/* Availability */}
            <Card className="cyber-border hover-cyber">
              <CardContent className="p-6">
                <h3 className="text-xl font-mono font-bold text-foreground mb-4">Current Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyber-green rounded-full mr-3 animate-pulse"></div>
                    <span className="text-foreground">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
                    <span className="text-foreground">Open to collaboration opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse"></div>
                    <span className="text-foreground">Seeking cybersecurity internships</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="cyber-border hover-cyber">
            <CardContent className="p-6">
              <h3 className="text-xl font-mono font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="cyber-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="cyber-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    required
                    rows={6}
                    className="cyber-border resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full cyber-gradient hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="cyber-border">Cybersecurity</Badge>
                  <Badge variant="secondary" className="cyber-border">Web Development</Badge>
                  <Badge variant="secondary" className="cyber-border">MERN Stack</Badge>
                  <Badge variant="secondary" className="cyber-border">Consultation</Badge>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  Interested in discussing projects related to these areas? Let's talk!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer CTA */}
        <Card className="cyber-border hover-cyber mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-mono font-bold text-foreground mb-4">
              Ready to Build Something <span className="text-cyber-gradient">Secure</span>?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a secure web application, cybersecurity consultation, or want to 
              collaborate on innovative projects, I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="cyber-gradient hover:opacity-90 transition-opacity"
                onClick={() => window.open('mailto:haiderzaidi290@gmail.com')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Start a Conversation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="cyber-border hover-cyber"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;