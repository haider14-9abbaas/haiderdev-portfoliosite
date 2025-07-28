import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 cyber-gradient rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyber-purple rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default Index;
