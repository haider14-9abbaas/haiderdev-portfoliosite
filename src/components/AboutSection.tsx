import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Code, Database, Lock, Globe, Cpu } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Specialized in network security, penetration testing, and threat analysis"
    },
    {
      icon: Code,
      title: "MERN Stack",
      description: "Full-stack web development using MongoDB, Express, React, and Node.js"
    },
    {
      icon: Database,
      title: "Data Security",
      description: "Database vulnerabilities, SQL injection prevention, and secure architecture"
    },
    {
      icon: Lock,
      title: "Cryptography",
      description: "PKI, encryption methods, and secure communication protocols"
    }
  ];

  const technologies = [
    "JavaScript", "Python", "React.js", "Node.js", "MongoDB", "MySQL",
    "Kali Linux", "Wireshark", "SQL", "Git & GitHub", "HTML5", "CSS3",
    "Bootstrap", "Tailwind CSS", "Express.js", "CTF", "Penetration Testing"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            About <span className="text-cyber-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate cybersecurity professional and web developer dedicated to creating 
            secure digital solutions and innovative web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Content */}
          <div className="space-y-6">
            <Card className="cyber-border hover-cyber">
              <CardContent className="p-6">
                <h3 className="text-xl font-mono font-semibold mb-4 flex items-center">
                  <Cpu className="w-5 h-5 mr-2 text-primary" />
                  Professional Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am currently pursuing a Bachelor's degree in <strong>Cybersecurity</strong> at 
                  Dawood University of Engineering & Technology (Expected: 2027) while simultaneously 
                  advancing my skills in <strong>MERN Stack Development</strong> through the Saylani 
                  Mass IT Program (Expected: 2026).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My passion lies at the intersection of cybersecurity and web development, where I 
                  combine secure coding practices with modern web technologies to build robust, 
                  scalable applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With hands-on experience in penetration testing, CTF competitions, and full-stack 
                  development, I bring a unique perspective to creating secure digital solutions.
                </p>
              </CardContent>
            </Card>

            {/* Core Competencies */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="cyber-border hover-cyber">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 cyber-gradient rounded-lg flex items-center justify-center mr-3">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h4 className="font-mono font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="space-y-6">
            <Card className="cyber-border hover-cyber">
              <CardContent className="p-6">
                <h3 className="text-xl font-mono font-semibold mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-accent" />
                  Technology Stack
                </h3>
                <p className="text-muted-foreground mb-6">
                  Technologies and tools I work with to create secure and innovative solutions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="cyber-border hover-cyber cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Focus */}
            <Card className="cyber-border hover-cyber">
              <CardContent className="p-6">
                <h3 className="text-xl font-mono font-semibold mb-4">Current Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">IBM Cybersecurity Analyst Professional Certificate (14 modules)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Advanced MERN Stack Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-purple rounded-full mr-3"></div>
                    <span className="text-muted-foreground">CTF Competitions & Penetration Testing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-orange rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Full-Stack Security Implementation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;