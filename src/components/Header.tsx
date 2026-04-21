import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/90 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-black/10"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/lunai-logo.svg"
              alt="LunAI Logo"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_15px_hsl(39_100%_58%/0.5)]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(39_100%_58%/0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${isMobileMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-primary/10 shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 text-base font-semibold text-center text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200"
            >
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
