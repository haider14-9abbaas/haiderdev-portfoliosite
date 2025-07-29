import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink, Shield, Brain, Globe, BookOpen, Trophy } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "IBM Cybersecurity Analyst",
      issuer: "IBM",
      date: "June 2025",
      grade: "100%",
      credentialId: "TQ9GCXTW2S1T",
      verificationLink: "https://www.coursera.org/account/accomplishments/professional-cert/TQ9GCXTW2S1T",
      category: "Cybersecurity",
      skills: ["Malware Protection","Threat Management","Personal Identifiable Information", "Encryption","Cyber Attacks","Information Systems Security ","Multi Factor Authentication","Technical Support & Services","Network Security","Cyber Security Policies","Data Security", "Cyber Security Strategy","Information Technology","Portfolio Management","Compensation Strategy","Market Research","Applicant Tracking Systems","Interviewing Skills","Recruitment","Database Architecture and Administration","Role-Based Access Control (RBAC)","NoSQL","SQL","Secure Coding","Vulnerability Scanning","Mac OS", "Command-Line Interface", "Docker (Software)","Containerization","Linux"],
      color: "primary"
    },
    {
      title: "Introduction to Cybersecurity Careers",
      issuer: "IBM",
      date: "May 2025",
      grade: "81%",
      credentialId: "04DRFVP91PM9",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/04DRFVP91PM9",
      category: "Cybersecurity",
      skills: ["Technical Support & Services","Network Security","Cyber Security Policies","Data Security", "Cyber Security Strategy","Information Technology"],
      color: "primary"
    },
    {
      title: "Introduction to Cybersecurity Essentials", 
      issuer: "IBM",
      date: "May 2025",
      grade: "100%",
      credentialId: "X3KC1H64AR3Y",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/X3KC1H64AR3Y",
      category: "Cybersecurity",
      skills: ["Malware Protection","Threat Management","Personal Identifiable Information", "Encryption","Cyber Attacks","Information Systems Security ","Multi Factor Authentication"],
      color: "primary"
    },
    {
      title: "Cybersecurity Training Workshop",
      issuer: "Ignite (National Technology Fund)",
      date: "Sep 2024",
      verificationLink: "https://drive.google.com/file/d/1U29K6zFnOfv3H1lwzXxvw82PwP1Fq3Wd/view?usp=drive_link",
      category: "Cybersecurity",
      skills: ["CTF", "DoS/DDoS", "Web Security", "SQLi", "Kali Linux", "Wireshark"],
      color: "accent"
    },
    {
      title: "CTF Participation Certificate",
      issuer: "CyberSents",
      date: "Apr 2025",
      credentialId: "9ba4ede7-b039-4f1c-87d7-7d0754e2f19d",
      verificationLink: "https://credsverse.com/credentials/9ba4ede7-b039-4f1c-87d7-7d0754e2f19d",
      category: "Cybersecurity",
      skills: ["CTF", "Digital Innovation", "Problem Solving","BurpSuite","Cryptography"],
      color: "cyber-green"
    },
    {
      title: "3-Day Mastering CTF with picoCTF Bootcamp",
      issuer: "Tech Hierarchy",
      date: "2024",
      category: "Cybersecurity",
      skills: ["CTF", "Cybersecurity", "Creative Thinking","WireShark","BurpSuite"],
      color: "cyber-purple"
    },
    {
      title: "Cybersecurity Assessment: CompTIA Security+ & CYSA+",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "97%",
      credentialId: "KA8NKOXKYFZR",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/KA8NKOXKYFZR",
      category: "Cybersecurity",
      skills: ["Cyber Security Assessment", "Vulnerabilty Management", "Secure Testing"],
      color: "primary"
    },
    {
      title: "Introduction to Cybersecurity Tools & Cyberattacks",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "93%",
      credentialId: "KUXO8P1TAXTS",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/KUXO8P1TAXTS",
      category: "Cybersecurity",
      skills: ["Endpoint Security","Intrusion Detection and Prevention","Computer Security Incident Management","Networking Hardware"],
      color: "primary"
    },
    {
      title: "Operating Systems: Overview, Administration, and Security",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "93%",
      credentialId: "VFRZVJWDC5DL",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/VFRZVJWDC5DL",
      category: "Cybersecurity",
      skills: ["Mac OS", "Command-Line Interface", "Docker (Software)","Containerization","Linux"],
      color: "primary"
    },
    {
      title: "Computer Networks and Network Security",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "93%",
      credentialId: "K7U70VBG90PI",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/K7U70VBG90PI",
      category: "Cybersecurity",
      skills: ["Firewall", "Local Area Networks", "Network Protocols","Dynamic Host Configuration Protocol (DHCP)","Security Information and Event Management (SIEM)","TCP/IP","Networking Hardware"],
      color: "primary"
    },
    {
      title: "Database Essentials and Vulnerabilities",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "96%",
      credentialId: "HJE1OQRA29YC",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/HJE1OQRA29YC",
      category: "Cybersecurity",
      skills: ["Database Architecture and Administration","Role-Based Access Control (RBAC)","NoSQL","SQL","Secure Coding","Vulnerability Scanning"],
      color: "primary"
    },
    {
      title: "Cybersecurity Architecture",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "96%",
      credentialId: "CINPAZBYH9E0",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/CINPAZBYH9E0",
      category: "Cybersecurity",
      skills: ["Cyber Security Strategy","Data Governance","Identity and Access Management","Application Security"],
      color: "primary"
    },
    {
      title: "Cybersecurity Compliance Framework, Standards & Regulations",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "93%",
      credentialId: "8H8HRN8IKLY5",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/8H8HRN8IKLY5",
      category: "Cybersecurity",
      skills: ["ISO/IEC 27001","Information Technology Infrastructure Library","General Data Protection Regulation (GDPR)","Open Web Application Security Project (OWASP)","NIST 800-53","Control Objectives for Information and Related Technology (COBIT)","Risk Management Framework"],
      color: "primary"
    },
    {
      title: "Penetration Testing, Threat Hunting, and Cryptography",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "95%",
      credentialId: "0FZQNVCL9LSM",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/0FZQNVCL9LSM",
      category: "Cybersecurity",
      skills: ["Test Planning","Penetration Testing","Cyber Threat Hunting","MITRE ATT&CK Framework","Cyber Operations"],
      color: "primary"
    },
    {
      title: "Incident Response and Digital Forensics",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "100%",
      credentialId: "9CGWAFL9B25T",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/9CGWAFL9B25T",
      category: "Cybersecurity",
      skills: ["Intrusion Detection and Prevention","Data Integrity","Computer Security Incident Management","Document Management","Technical Communication"],
      color: "primary"
    },
    {
      title: "Cybersecurity Case Studies and Capstone Project",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "91%",
      credentialId: "Q1EITVAZJ5OP",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/Q1EITVAZJ5OP",
      category: "Cybersecurity",
      skills: ["Cyber Security Incident Management", "Vulnerabilty Management", "Secure Awareness","Computer Security Incident Management"],
      color: "primary"
    },
    {
      title: "Generative AI: Boost Your Cybersecurity Career",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "97%",
      credentialId: "1GFLB08NWPRW",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/1GFLB08NWPRW",
      category: "Cybersecurity",
      skills: ["Natural Language Processing","Prompt Engineering","Generative AI","Threat Modeling","Cyber Threat Intelligence","Anomaly Detection"],
      color: "primary"
    },
    {
      title: "Cybersecurity Job Search, Resume, and Interview Prep",
      issuer: "IBM",
      date: "Jun 2025",
      grade: "90%",
      credentialId: "GU3TFGNX5YO9",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/GU3TFGNX5YO9",
      category: "Cybersecurity",
      skills: ["Portfolio Management","Compensation Strategy","Market Research","Applicant Tracking Systems","Interviewing Skills","Recruitment"],
      color: "primary"
    },
    {
      title: "IoT for Everyone",
      issuer: "Higher Education Commission, Pakistan",
      date: "Jul 2025",
      grade: "100%",
      credentialId: "D050P15PI6TI",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/D050P15PI6TI",
      category: "Technology",
      skills: ["IoT", "IP Protocols", "Human Computer Interaction","Peripheral Devices","Wireless Networks"],
      color: "accent"
    },
    {
      title: "AI For Everyone",
      issuer: "DeepLearning.AI via Coursera",
      date: "Jan 2025",
      grade: "87%",
      credentialId: "AUW6F0F8137Y",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/AUW6F0F8137Y",
      category: "AI/Technology",
      skills: ["Artificial Intelligence", "Data Ethics", "Deep Learning", "Machine Learning" ,"Artificial Neural Networks"],
      color: "cyber-orange"
    },
    {
      title: "Understanding Basic SQL Syntax",
      issuer: "Coursera Project Network",
      date: "Jan 2025",
      grade: "100%",
      credentialId: "4P5NMU5LM5SZ",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/4P5NMU5LM5SZ",
      category: "Database",
      skills: ["SQL" ,"Relational Databases", "Query Languages", "Data Manipulation"],
      color: "cyber-green"
    },
    {
      title: "Digital Skills: For Work and Life",
      issuer: "Accenture via FutureLearn",
      date: "Dec 2020",
      credentialId: "75ghpq8",
      verificationLink: "https://www.futurelearn.com/certificates/75ghpq8",
      category: "Professional Skills",
      skills: ["Microsoft Excel", "Office Tools", "Professional Skills"],
      color: "secondary"
    }
  ];

  const ongoingCertification = {
    title: "IBM Cybersecurity Analyst Professional Certificate",
    issuer: "IBM",
    status: "Recently Completed",
    totalModules: 14,
    modules: [
      "Cybersecurity Careers", "Cybersecurity Essentials", "Tools & Cyberattacks",
      "Operating Systems Security", "Network Security", "Database Vulnerabilities",
      "Architecture", "Compliance & Standards", "Pen Testing & Cryptography",
      "Incident Response", "Case Studies & Capstone", "CompTIA Security+ & CYSA+",
      "Generative AI in Cybersecurity", "Resume & Interview Prep"
    ]
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return Shield;
      case 'AI/Technology':
      case 'Technology':
        return Brain;
      case 'Database':
        return Globe;
      case 'Professional Skills':
        return BookOpen;
      default:
        return Award;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 border-primary/30 text-primary';
      case 'accent':
        return 'bg-accent/10 border-accent/30 text-accent';
      case 'cyber-green':
        return 'bg-cyber-green/10 border-cyber-green/30 text-cyber-green';
      case 'cyber-purple':
        return 'bg-cyber-purple/10 border-cyber-purple/30 text-cyber-purple';
      case 'cyber-orange':
        return 'bg-cyber-orange/10 border-cyber-orange/30 text-cyber-orange';
      default:
        return 'bg-secondary/10 border-secondary/30 text-secondary-foreground';
    }
  };

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <Award className="inline-block w-10 h-10 mr-3 text-primary" />
            Certifications <span className="text-cyber-gradient">&</span> Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cybersecurity, AI, and modern technologies 
            through industry-recognized certifications and training programs.
          </p>
        </div>

        {/* Ongoing Certification Highlight */}
        <Card className="cyber-border hover-cyber mb-12 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-mono font-bold text-foreground mb-2">
                    🎓 Recently Completed
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mb-1">
                    {ongoingCertification.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {ongoingCertification.issuer} • {ongoingCertification.totalModules} modules
                  </p>
                </div>
                <Badge variant="secondary" className="cyber-border">
                  {ongoingCertification.status}
                </Badge>
              </div>
            </div>
            <div className="p-6">
              <h5 className="font-semibold mb-4 text-foreground">Course Modules:</h5>
              <div className="grid md:grid-cols-2 gap-2">
                {ongoingCertification.modules.map((module, index) => (
                  <div key={index} className="flex items-center p-2 rounded bg-muted/30">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const Icon = getCategoryIcon(cert.category);
            return (
              <Card key={index} className="cyber-border hover-cyber">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getColorClasses(cert.color)}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <Badge variant="outline" className="cyber-border mb-2">
                          {cert.category}
                        </Badge>
                      </div>
                    </div>
                    {cert.credentialId && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer" />
                    )}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-mono font-bold text-foreground leading-tight">
                      {cert.title}
                    </h4>
                    
                    <div className="flex items-center text-primary font-semibold">
                      <Award className="w-4 h-4 mr-2" />
                      {cert.issuer}
                    </div>

                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {cert.date}
                      {cert.grade && (
                        <Badge variant="secondary" className="ml-2">
                          Grade: {cert.grade}
                        </Badge>
                      )}
                    </div>

                    {cert.credentialId && (
                      <div className="text-sm text-muted-foreground">
                        <strong>Credential ID:</strong> {cert.credentialId}
                      </div>
                    )}

                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className="cyber-border hover-cyber cursor-pointer text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certification Stats */}
        <Card className="cyber-border hover-cyber">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-mono font-bold mb-2">Certification Overview</h3>
              <p className="text-muted-foreground">
                Professional development across multiple technology domains
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-16 h-16 cyber-gradient rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-mono font-semibold">10+</h4>
                <p className="text-sm text-muted-foreground">Completed Certifications</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="font-mono font-semibold">7</h4>
                <p className="text-sm text-muted-foreground">Cybersecurity Focus</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-16 h-16 bg-cyber-green rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-background" />
                </div>
                <h4 className="font-mono font-semibold">3</h4>
                <p className="text-sm text-muted-foreground">Tech & AI</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-16 h-16 bg-cyber-purple rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-background" />
                </div>
                <h4 className="font-mono font-semibold">1</h4>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CertificationsSection;
