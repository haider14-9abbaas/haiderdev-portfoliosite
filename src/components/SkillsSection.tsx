import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Shield, 
  Globe, 
  Terminal, 
  Users, 
  Brain,
  Wrench,
  Server,
  Lock
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Code,
      color: "primary",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "accent",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Express.js", level: 70 },
        { name: "API Development", level: 75 }
      ]
    },
    {
      title: "Programming",
      icon: Terminal,
      color: "cyber-green",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 80 },
        { name: "Data Structures", level: 70 },
        { name: "Algorithms", level: 70 }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "cyber-purple",
      skills: [
        { name: "SQL Injection Prevention", level: 80 },
        { name: "PKI & Cryptography", level: 75 },
        { name: "Kali Linux", level: 70 },
        { name: "Penetration Testing", level: 65 },
        { name: "Network Security", level: 70 }
      ]
    }
  ];

  const tools = [
    { name: "Git & GitHub", icon: "🔧" },
    { name: "VS Code", icon: "💻" },
    { name: "Kali Linux", icon: "🐧" },
    { name: "Wireshark", icon: "🔍" },
    { name: "MS Excel", icon: "📊" },
    { name: "MS PowerPoint", icon: "📋" },
    { name: "Postman", icon: "📡" },
    { name: "MongoDB Compass", icon: "🗄️" }
  ];

  const softSkills = [
    "Communication",
    "Teamwork", 
    "Presentation",
    "Troubleshooting",
    "Problem Solving",
    "Critical Thinking",
    "Leadership",
    "Time Management"
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'accent':
        return 'text-accent';
      case 'cyber-green':
        return 'text-cyber-green';
      case 'cyber-purple':
        return 'text-cyber-purple';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            Skills <span className="text-cyber-gradient">&</span> Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning cybersecurity, web development, and modern technologies 
            to build secure and innovative digital solutions.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="cyber-border hover-cyber">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 cyber-gradient rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className={`text-xl font-mono font-bold ${getColorClasses(category.color)}`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="cyber-border hover-cyber">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <Wrench className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-accent">
                  Tools & Software
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-muted/50 hover-cyber">
                    <span className="text-lg mr-3">{tool.icon}</span>
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-border hover-cyber">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyber-green/20 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-cyber-green" />
                </div>
                <h3 className="text-xl font-mono font-bold text-cyber-green">
                  Soft Skills
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="cyber-border hover-cyber cursor-pointer py-2 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-card/50 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strong interpersonal skills developed through academic projects, internships, 
                  and volunteer work in cybersecurity communities and professional development programs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <Card className="cyber-border hover-cyber mt-8">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-mono font-bold mb-2">Technical Proficiency Overview</h3>
              <p className="text-muted-foreground">
                Balanced expertise across cybersecurity, web development, and emerging technologies
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-16 h-16 cyber-gradient rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-mono font-semibold">Security</h4>
                <p className="text-sm text-muted-foreground">Threat Analysis & Prevention</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Code className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="font-mono font-semibold">Development</h4>
                <p className="text-sm text-muted-foreground">Full-Stack Web Applications</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-16 h-16 bg-cyber-green rounded-full flex items-center justify-center mx-auto">
                  <Database className="w-8 h-8 text-background" />
                </div>
                <h4 className="font-mono font-semibold">Database</h4>
                <p className="text-sm text-muted-foreground">Design & Security</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-16 h-16 bg-cyber-purple rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-background" />
                </div>
                <h4 className="font-mono font-semibold">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">Analytical & Creative Thinking</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;