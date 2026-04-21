import { Calendar, ShoppingCart, Pill, Camera, Share2, Database } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "booking",
    icon: Calendar,
    title: "Appointment Booking with Payment Gateway",
    description: "Fully automated 24/7 booking, calendar sync, and secure payment processing. Essential for clinics/coaches.",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Order Automation",
    description: "Real-time synchronization of orders, inventory, and customer data across multiple platforms (Shopify, WooCommerce, CRM).",
  },
  {
    id: "prescription",
    icon: Pill,
    title: "AI Prescription Analyzer",
    description: "Uses AI/OCR to instantly read, digitize, and file handwritten or scanned prescriptions with 99% accuracy.",
  },
  {
    id: "photography",
    icon: Camera,
    title: "Professional Restaurant Photography",
    description: "High-quality visual content management integrated into marketing and booking systems. A unique creative service.",
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Automation",
    description: "Scheduled posting, content curation, and automated response handling across all major social channels.",
  },
  {
    id: "leads",
    icon: Database,
    title: "Lead Generation & Data Scraping",
    description: "Ethical data collection, cleaning, and direct injection of high-quality leads into your CRM/Sales pipeline.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative min-h-screen py-24 overflow-hidden">
      {/* Hero-style background */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/12 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50" />

      <div className="container relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            ⚡ What I Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Core <span className="text-gradient">Automation</span> Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Streamline your business with powerful, tailored automation workflows
          </p>
        </div>

        {/* Services Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {services.map((service, index) => (
            <AccordionItem
              key={service.id}
              value={service.id}
              className="animate-fade-up bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-xl px-6 overflow-hidden transition-all duration-500 ease-out hover:border-primary/50 hover:shadow-[0_10px_40px_hsl(39_100%_58%/0.15)] hover:scale-[1.02] hover:-translate-y-1 hover:bg-gradient-to-br hover:from-card/80 hover:to-primary/5 data-[state=open]:border-primary/60 data-[state=open]:shadow-[0_15px_50px_hsl(39_100%_58%/0.2)] data-[state=open]:scale-[1.01] cursor-pointer"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <AccordionTrigger className="py-5 hover:no-underline group">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/25 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(39_100%_58%/0.3)]">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span className="font-display text-lg font-semibold text-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                    {service.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <p className="text-muted-foreground pl-16 leading-relaxed">
                  {service.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServicesSection;
