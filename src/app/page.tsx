import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ExperienceSection from '@/components/sections/experience';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import EducationSection from '@/components/sections/education';
import ContactSection from '@/components/sections/contact';
import AchievementsSection from '@/components/sections/archivments';
import VolunteerSection from '@/components/sections/volunteer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <VolunteerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
