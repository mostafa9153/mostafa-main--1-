import { useEffect } from "react";
import { Mail, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";
import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/918768694831", label: "WhatsApp" },
    { icon: Facebook, href: "https://www.facebook.com/share/1BRuXpqGfd/", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@AIAgent-t6z", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/md-mostafa9001", label: "LinkedIn" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Hero-style background */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/12 rounded-full blur-[130px]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            Let's Connect
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Contact & <span className="text-gradient">Booking Hub</span>
          </h2>
        </div>

        {/* Main Container - Glassmorphism Card */}
        <div className="rounded-3xl bg-neutral-900/50 backdrop-blur-sm border border-white/10 p-6 md:p-10 lg:p-12 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_60px_rgba(255,169,40,0.1)]">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left Column - Hook & Direct Contact */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Headline */}
              <div>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                  Ready to Automate Your{" "}
                  <span className="text-accent">Success</span>?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Skip the manual emails. Book a free 15-min strategy call directly via the integrated scheduler.
                </p>
              </div>

              {/* Email with Glow Effect */}
              <div className="group">
                <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email me directly
                </p>
                <a
                  href="mailto:hello@lunai.co.in"
                  className="inline-block text-2xl md:text-3xl font-bold text-foreground transition-all duration-300 hover:text-accent hover:shadow-[0_0_30px_rgba(255,169,40,0.5)] hover:drop-shadow-[0_0_15px_rgba(255,169,40,0.8)]"
                >
                  hello@lunai.co.in
                </a>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Connect on social</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <button
                      key={social.label}
                      onClick={() => window.open(social.href, '_blank', 'noopener,noreferrer')}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-neutral-800/50 border border-white/10 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_20px_rgba(255,169,40,0.3)] hover:scale-110 hover:-translate-y-1 cursor-pointer"
                    >
                      <social.icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">Kolkata, India (Available Globally)</span>
              </div>

              {/* Decorative element */}
              <div className="hidden lg:block pt-6">
                <div className="w-full h-px bg-gradient-to-r from-accent/50 via-accent/20 to-transparent" />
              </div>
            </div>

            {/* Right Column - Calendly Widget */}
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(255,169,40,0.4)]">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/aiagent9001/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "700px", filter: "invert(1)" }}
                />
              </div>

              {/* Glow effect behind widget */}
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl -z-10 transition-all duration-300 group-hover:bg-accent/15" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/5">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} <span className="text-accent font-semibold">LunAI</span>.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
