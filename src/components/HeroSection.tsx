import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Download, Shield, Code2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary" className="cyber-border">
                  <Shield className="w-3 h-3 mr-1" />
                  Cybersecurity Professional
                </Badge>
                <Badge variant="outline" className="cyber-border">
                  <Code2 className="w-3 h-3 mr-1" />
                  MERN Developer
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-mono font-bold leading-tight">
                <span className="text-cyber-gradient">Syed Haider</span>
                <br />
                <span className="text-foreground">Abbas Zaidi</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Cybersecurity enthusiast and MERN stack developer passionate about 
                digital security, web development, and innovative problem-solving.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-cyber-green">2027</div>
                <div className="text-sm text-muted-foreground">Graduate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="cyber-gradient hover:opacity-90 transition-opacity"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="cyber-border hover-cyber"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
<div className="flex items-center space-x-4">
  <a
    href="https://github.com/haider14-9abbaas"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="sm" className="hover-cyber">
      <Github className="w-5 h-5" />
    </Button>
  </a>

  <a
    href="https://www.linkedin.com/in/syed-haider-abbas-zaidi-132525215/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="sm" className="hover-cyber">
      <Linkedin className="w-5 h-5" />
    </Button>
  </a>

  <a href="mailto:haiderzaidi290@gmail.com">
    <Button variant="ghost" size="sm" className="hover-cyber">
      <Mail className="w-5 h-5" />
    </Button>
  </a>
</div>

          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 cyber-gradient rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden cyber-border bg-card">
                <img
                  src="/lovable-uploads/fa12c3c9-eda6-42fd-b8eb-0357fe57be59.png"
                  alt="Syed Haider Abbas Zaidi"
                  className="w-full h-full object-cover animate-float"
                />
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 cyber-gradient rounded-full flex items-center justify-center animate-float">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Code2 className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;