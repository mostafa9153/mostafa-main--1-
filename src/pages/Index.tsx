import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <ChatBot />
    </main>
  );
};

export default Index;
