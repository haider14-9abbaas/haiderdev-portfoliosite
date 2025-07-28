import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Users, Code, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Ambassador",
      company: "ACM SIGSAC",
      period: "Mar 2025 – Present",
      duration: "5+ months",
      location: "Dawood University Of Engineering & Technology, Karachi, Sindh, Pakistan",
      type: "On-site",
      description: "Representing the Cybersecurity Department and conducting events to promote cybersecurity awareness and education.",
      responsibilities: [
        "Engaging in cybersecurity awareness events and technical training sessions",
        "Coordinating volunteer activities and community engagement initiatives", 
        "Representing the department in academic and professional gatherings",
        "Facilitating workshops on cybersecurity best practices and emerging threats"
      ],
      skills: ["Soft Skills", "Oral Communication", "Community Engagement", "Event Management"],
      color: "primary"
    },
    {
      title: "Frontend Development Intern",
      company: "indoLike",
      period: "Feb 2025 – Mar 2025",
      duration: "1 Month",
      location: "Remote",
      type: "Virtual Internship",
      description: "Completed a comprehensive virtual internship focused on modern frontend development practices and responsive web design.",
      responsibilities: [
        "Built responsive user interfaces using Bootstrap, HTML5, CSS3, and JavaScript",
        "Developed React.js components following modern best practices",
        "Collaborated with team using Git and GitHub for version control",
        "Implemented responsive design principles for cross-device compatibility"
      ],
      skills: ["UI/UX", "Responsive Design", "HTML","GitHub", "Web Components","JavaScript","CSS", "React.js", "Bootstrap"],
      color: "accent"
    }
  ];

  const volunteering = [
    {
      title: "Event Steward & Volunteer",
      event: "Psyber Arena 2025 – ACM SIGSAC DUET",
      period: "May 26–29, 2025",
      location: "Karachi, in collaboration with IEEE Education Society",
      description: "Assisted in organizing and managing cybersecurity activities and contributed to event success through coordination and engagement.",
      activities: [
        "Event management and coordination",
        "Cybersecurity awareness activities",
        "Participant assistance and guidance",
        "Technical workshop support"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            Professional <span className="text-cyber-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building practical experience through internships, leadership roles, and community engagement 
            in cybersecurity and web development.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-mono font-bold text-foreground flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-primary" />
            Work Experience
          </h3>
          
          {experiences.map((exp, index) => (
            <Card key={index} className="cyber-border hover-cyber">
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Timeline & Duration */}
                  <div className="lg:col-span-1">
                    <div className="text-center lg:text-left">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                        exp.color === 'primary' ? 'cyber-gradient' : 'bg-accent'
                      }`}>
                        <Briefcase className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="mb-2">
                          {exp.duration}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3">
                    <div className="space-y-4">
                      {/* Header */}
                      <div>
                        <h4 className="text-xl font-mono font-bold text-foreground mb-1">
                          {exp.title}
                        </h4>
                        <div className="flex items-center text-primary font-semibold mb-2">
                          <Award className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h5>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Skills Developed:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIdx) => (
                            <Badge 
                              key={skillIdx} 
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

        {/* Volunteering Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-mono font-bold text-foreground flex items-center">
            <Users className="w-6 h-6 mr-3 text-cyber-green" />
            Volunteering Experience
          </h3>
          
          {volunteering.map((vol, index) => (
            <Card key={index} className="cyber-border hover-cyber">
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Timeline */}
                  <div className="lg:col-span-1">
                    <div className="text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyber-green mb-4">
                        <Users className="w-6 h-6 text-background" />
                      </div>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="mb-2">
                          Volunteer
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {vol.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          Karachi
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-mono font-bold text-foreground mb-1">
                          {vol.title}
                        </h4>
                        <div className="flex items-center text-cyber-green font-semibold mb-2">
                          <Award className="w-4 h-4 mr-2" />
                          {vol.event}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {vol.description}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Activities:</h5>
                        <ul className="space-y-2">
                          {vol.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-cyber-green rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <Card className="cyber-border hover-cyber mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-mono font-bold mb-4">Experience Highlights</h3>
            <p className="text-muted-foreground mb-6">
              Combining hands-on technical experience with leadership and community engagement
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Positions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-accent">6+</div>
                <div className="text-sm text-muted-foreground">Months Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-cyber-green">1</div>
                <div className="text-sm text-muted-foreground">Major Event</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-cyber-purple">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;