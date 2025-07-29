import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FolderOpen,
  ExternalLink,
  Github,
  Monitor,
  Brain,
  Shield,
  Server,
  Code,
  Gamepad,
} from 'lucide-react';
  const ProjectsSection = () => {
  const projectCategories = [
    {
      id: "ui-clones",
      title: "UI/UX & Landing Pages",
      icon: Monitor,
      color: "primary",
      projects: [
        {
          title: "MyBindle Landing Page",
          description: "Pixel-perfect mobile-first landing page based on Figma UI design. Includes header, features, testimonials, install steps, and footer.",
          tech: ["React", "Tailwind", "Vite"],
          highlight: "Pixel-perfect mobile-first design",
          github: "https://github.com/haider14-9abbaas/mybindlelandingpage",
          live: "https://mybindlelandingpage.netlify.app/"
        },
        {
          title: "OLX UI Clone",
          description: "A replica of the OLX homepage with cards, layout grid, and category icons.",
          tech: ["HTML", "CSS"],
          highlight: "Responsive grid layout",
          github: "https://github.com/haider14-9abbaas/OLX-UI-Clone",
          live: "https://haider14-9abbaas.github.io/OLX-UI-Clone"
        },
        {
          title: "GitHub Homepage Clone",
          description: "UI replication of GitHub's homepage including header, features, call to action.",
          tech: ["HTML", "CSS"],
          highlight: "Professional layout design",
          github: "https://github.com/haider14-9abbaas/Github-Homepage-Clone",
          live: "https://haider14-9abbaas.github.io/Github-Homepage-Clone/"
        },
        {
          title: "YouTube Homepage Clone",
          description: "Clone of YouTube homepage with layout grid, thumbnails, sidebar, and navbar.",
          tech: ["HTML", "CSS"],
          highlight: "Complex grid system",
          github: "https://github.com/haider14-9abbaas/Youtube-Hompage-Clone",
          live: "https://haider14-9abbaas.github.io/Youtube-Hompage-Clone/"
        },
        {
          title: "Coca-Cola Website Clone",
          description: "Visual homepage replica with Coca-Cola branding, hero section, and calls to action.",
          tech: ["HTML", "CSS"],
          highlight: "Brand-focused design",
          github: "https://github.com/haider14-9abbaas/Coca-Cola-Website-Clone",
          live: "https://haider14-9abbaas.github.io/Coca-Cola-Website-Clone/"
        }
      ]
    },
    {
      id: "ai-projects",
      title: "AI Projects",
      icon: Brain,
      color: "cyber-orange",
      projects: [
        {
          title: "Streamlit Gemini Chat",
          description: "A ChatGPT-like chatbot using Gemini's large language model via Streamlit UI. Sends prompts and displays AI responses.",
          tech: ["Python", "Streamlit", "Google Gemini Pro API"],
          highlight: "AI-powered conversational interface",
          github: "https://github.com/haider14-9abbaas/streamlit-gemini-chat",
          live: "https://www.linkedin.com/posts/syed-haider-abbas-zaidi-132525215_ai-chatbot-geminipro-activity-7329982717012426754-6l1X?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZcUHYBrRPqXq1WltD-BGVfJP52bqnpvKQ"
        },
        {
          title: "Content Authenticity System",
          description: "Verifies if a blog/article is AI-generated using Gemini API. Stores flagged content and results in MongoDB. Great for AI + Cybersecurity crossover.",
          tech: ["Python", "Flask", "OpenCV","Scikit-learn","Kaggle Subsets"],
          highlight: "AI detection with security focus",
          github: "https://github.com/haider14-9abbaas/Content-Authencity-System",
          live: "#"
        }
      ]
    },
    {
      id: "security-iot",
      title: "Security & IoT",
      icon: Shield,
      color: "accent",
      projects: [
        {
          title: "IoT Security System",
          description: "Door intrusion detection system using Arduino + Python, integrating serial monitoring and GSM-based alert system.",
          tech: ["AES encryption", "Python", "Cryptography","Hashing"],
          highlight: "Hardware-software integration",
          github: "https://github.com/haider14-9abbaas/IoT-Security-System",
          live: "#"
        },
        {
          title: "Secure Bank System",
          description: "A Python simulation of a secure banking system with login, transaction history, and data protection logic.",
          tech: ["Python"],
          highlight: "Security-focused architecture",
          github: "https://github.com/haider14-9abbaas/Secure-Bank-System",
          live: "#"
        }
      ]
    },
    {
      id: "fullstack",
      title: "Full Stack (MERN)",
      icon: Server,
      color: "cyber-green",
      projects: [
        {
          title: "Booking Application",
          description: "Online booking system with authentication, MongoDB-based CRUD, and UI for appointments or event booking.",
          tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
          highlight: "Complete CRUD functionality",
          github: "https://github.com/haider14-9abbaas/BOOKING-APPLICATION",
          live: "https://www.linkedin.com/posts/syed-haider-abbas-zaidi-132525215_webdevelopment-fullstack-react-activity-7347731783938899968-8cU1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZcUHYBrRPqXq1WltD-BGVfJP52bqnpvKQ"
        },
        {
          title: "Fiverr Freelance Platform Clone",
          description: "Clone of Fiverr featuring user registration, gig creation, orders, and seller/buyer interaction.",
          tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
          highlight: "Complex user interaction system",
          github: "https://github.com/haider14-9abbaas/fiver",
          live: "https://www.linkedin.com/posts/syed-haider-abbas-zaidi-132525215_react-nodejs-mongodb-activity-7348864327694614528-5Jmk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZcUHYBrRPqXq1WltD-BGVfJP52bqnpvKQ"
        }
      ]
    },
    {
      id: "functional",
      title: "Functional & API-Based",
      icon: Code,
      color: "cyber-purple",
      projects: [
        {
          title: "E-Commerce Website",
          description: "Product cards, add-to-cart logic, and responsive grid layout for e-commerce simulation.",
          tech: ["HTML", "CSS", "JavaScript"],
          highlight: "Shopping cart functionality",
          github: "https://github.com/haider14-9abbaas/E-Commerce-Product-App-Using-API",
          live: "https://haider14-9abbaas.github.io/E-Commerce-Product-App-Using-API/"
        },
        {
          title: "Forkify - Search Recipes",
          description: "Recipe search app using async fetch, loading spinner, and dynamic DOM updates.",
          tech: ["JavaScript", "Forkify API"],
          highlight: "API integration with async operations",
          github: "https://github.com/haider14-9abbaas/Forkify--Search-Recipes",
          live: "https://haider14-9abbaas.github.io/Forkify--Search-Recipes/"
        },
        {
          title: "iPhone-Style Weather App",
          description: "Real-time weather fetching with iOS-styled layout and dynamic icons.",
          tech: ["JavaScript", "OpenWeatherMap API"],
          highlight: "Real-time data with elegant design",
          github: "https://github.com/haider14-9abbaas/Iphone-Style-Weather-App",
          live: "https://haider14-9abbaas.github.io/Iphone-Style-Weather-App/"
        }
      ]
    },
    {
      id: "games",
      title: "Interactive Games",
      icon: Gamepad,
      color: "secondary",
      projects: [
        {
          title: "Roll Dice Game",
          description: "A 2-player dice rolling game with score tracking, winning condition, and UI animations.",
          tech: ["HTML", "CSS", "JavaScript"],
          highlight: "Interactive game logic with animations",
          github: "https://github.com/haider14-9abbaas/roll-dice-game",
          live: "https://haider14-9abbaas.github.io/roll-dice-game/"
        }
      ]
    }
  ];
  
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'accent': return 'text-accent';
      case 'cyber-green': return 'text-cyber-green';
      case 'cyber-purple': return 'text-cyber-purple';
      case 'cyber-orange': return 'text-cyber-orange';
      default: return 'text-secondary-foreground';
    }
  };

  const getTechBadgeColor = (tech: string) => {
    const colors: Record<string, string> = {
      'React': 'bg-blue-500/10 text-blue-400 border-blue-400/30',
      'JavaScript': 'bg-yellow-500/10 text-yellow-400 border-yellow-400/30',
      'Python': 'bg-green-500/10 text-green-400 border-green-400/30',
      'HTML': 'bg-orange-500/10 text-orange-400 border-orange-400/30',
      'CSS': 'bg-blue-600/10 text-blue-300 border-blue-300/30',
      'MongoDB': 'bg-green-600/10 text-green-400 border-green-400/30',
      'Node.js': 'bg-green-700/10 text-green-500 border-green-500/30',
    };
    return colors[tech] || 'bg-muted/50 text-muted-foreground border-muted/50';
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <FolderOpen className="inline-block w-10 h-10 mr-3 text-primary" />
            Projects <span className="text-cyber-gradient">&</span> Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive collection of 15+ projects spanning cybersecurity, web development, 
            AI integration, and innovative digital solutions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-accent">6</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-cyber-green">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-cyber-purple">2</div>
              <div className="text-sm text-muted-foreground">Full-Stack Apps</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="ui-clones" className="w-full">
          <TabsList className="flex flex-wrap sm:flex-nowrap justify-start gap-2 sm:gap-4 overflow-x-auto cyber-border">
            {projectCategories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center space-x-2 whitespace-nowrap data-[state=active]:bg-primary/20"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {projectCategories.map((category) => {
            const Icon = category.icon;
            return (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 cyber-gradient rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-mono font-bold ${getColorClasses(category.color)}`}>
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.projects.length} project{category.projects.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {category.projects.map((project, index) => (
                    <Card key={index} className="cyber-border hover-cyber group">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <h4 className="text-lg font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                          <div className="flex space-x-2">
                            {project.github && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="sm" className="hover-cyber">
                                  <Github className="w-4 h-4" />
                                </Button>
                              </a>
                            )}
                            {project.live && (
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="sm" className="hover-cyber">
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>

                        <Badge variant="secondary" className="cyber-border">
                          {project.highlight}
                        </Badge>

                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        <div>
                          <h5 className="font-semibold mb-3 text-foreground">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className={`${getTechBadgeColor(tech)} hover-cyber cursor-pointer`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;