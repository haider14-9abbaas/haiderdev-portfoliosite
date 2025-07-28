import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "Dawood University of Engineering and Technology",
      degree: "Bachelor of Engineering - Cybersecurity",
      period: "Oct 2023 – Jun 2027",
      location: "Karachi, Pakistan",
      status: "Expected 2027",
      description: "Comprehensive program covering network security, cryptography, ethical hacking, digital forensics, and secure software development.",
      skills: ["Creative Problem Solving", "Digital Innovation", "Cybersecurity", "Programming", "Communication", "Kali Linux"],
      color: "primary"
    },
    {
      institution: "Saylani Mass IT Training Program",
      degree: "MERN Stack Development",
      period: "January 2024 - August 2025",
      location: "Onsite",
      status: "Completed 2025",
      description: "Intensive training in modern web development using MongoDB, Express.js, React.js, and Node.js with industry best practices.",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB", "Git & GitHub","Firebase","Cloudinary","Vercel","Railway","Amazon Cloud Services","Netlify"],
      color: "accent"
    },
    {
      institution: "S.M. Govt. Science College",
      degree: "Intermediate in Science",
      period: "2021 – 2023",
      location: "Karachi, Pakistan",
      status: "Completed",
      description: "Pre-engineering studies with focus on Mathematics, Physics, and Chemistry, building analytical foundation.",
      skills: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking"],
      color: "secondary"
    },
    {
      institution: "Habib Public School",
      degree: "Matriculation",
      period: "2011 – 2021",
      location: "Karachi, Pakistan",
      status: "Completed",
      description: "Foundation education with strong emphasis on science subjects and academic excellence.",
      skills: ["Science", "Mathematics", "Academic Excellence","Computer Science" ,"History" ,"Geography"],
      color: "muted"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 border-primary/30 text-primary';
      case 'accent':
        return 'bg-accent/10 border-accent/30 text-accent';
      case 'secondary':
        return 'bg-secondary/10 border-secondary/30 text-secondary-foreground';
      default:
        return 'bg-muted/10 border-muted/30 text-muted-foreground';
    }
  };

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <GraduationCap className="inline-block w-10 h-10 mr-3 text-primary" />
            Education <span className="text-cyber-gradient">&</span> Training
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey in cybersecurity and web development, building a strong 
            foundation for innovative digital solutions.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="cyber-border hover-cyber overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-4 gap-0">
                  {/* Timeline indicator */}
                  <div className={`p-6 ${getColorClasses(edu.color)} border-r border-border/50`}>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-current/20 flex items-center justify-center mb-3">
                        <BookOpen className="w-6 h-6 text-current" />
                      </div>
                      <Badge variant="secondary" className="mb-2">
                        {edu.status}
                      </Badge>
                      <div className="text-sm font-mono">{edu.period}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-6">
                    <div className="flex flex-col space-y-4">
                      {/* Header */}
                      <div>
                        <h3 className="text-xl font-mono font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="flex items-center text-primary font-semibold">
                            <Award className="w-4 h-4 mr-2" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Skills & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="outline" 
                              className="cyber-border hover-cyber cursor-pointer"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Training Info */}
        <Card className="cyber-border hover-cyber mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-mono font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground mb-4">
              Committed to staying current with evolving cybersecurity threats and modern web development practices 
              through ongoing education and hands-on experience.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Study</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-accent">2</div>
                <div className="text-sm text-muted-foreground">Active Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-cyber-green">15+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-cyber-purple">100%</div>
                <div className="text-sm text-muted-foreground">Commitment</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;