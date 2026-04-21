import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Briefcase } from "lucide-react";
import profileImage from "@/assets/mostafa-profile.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background noise texture */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Parallax gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-30 transition-transform duration-100"
        style={{ transform: `translate(-50%, ${scrollY * 0.15}px)` }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="animate-fade-up mb-8">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-110 animate-pulse-glow" />

              {/* Profile image container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary glow-border animate-float">
                <img
                  src={profileImage}
                  alt="Mostafa - AI Automation Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Greeting & Headline */}
          <div className="animate-fade-up-delay-1">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              ✨ AI Automation Expert
            </span>
          </div>

          <h1 className="animate-fade-up-delay-2 font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Mostafa!</span>
            <br />
            <span className="text-foreground">I Automate Business with AI.</span>
          </h1>

          {/* Sub-headline / Agency Tagline */}
          <p className="animate-fade-up-delay-3 text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            <span className="text-primary font-semibold">LunAI:</span> n8n Specialist creating
            <span className="text-foreground"> Doctor Booking</span>,
            <span className="text-foreground"> Voice AI</span> &
            <span className="text-foreground"> E-commerce</span> workflows.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-4 flex flex-col gap-3 w-full px-4 sm:flex-row sm:gap-5 sm:w-auto sm:px-0">
            {/* Primary CTA with pulsing ring */}
            <div className="relative w-full sm:w-auto">
              {/* Pulsing ring effect */}
              <span className="absolute inset-0 rounded-2xl bg-primary/40 animate-ping-slow" />
              <span className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping-slower" />
              <Button
                variant="hero"
                size="xl"
                className="relative w-full sm:w-auto z-10"
                asChild
              >
                <a href="#contact">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                  Book Now
                </a>
              </Button>
            </div>

            <Button
              variant="heroOutline"
              size="xl"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="#projects">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                My Work
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up-delay-4 mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Available for projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">50+</span>
              <span>Automations built</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">98%</span>
              <span>Client satisfaction</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
