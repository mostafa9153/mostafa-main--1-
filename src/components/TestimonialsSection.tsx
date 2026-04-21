import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Clinic Owner",
    quote: "LunAI transformed our booking system. We went from missed appointments to a fully automated 24/7 scheduling with payment integration. Game changer!",
    rating: 5,
    project: "Voice Appointment System",
  },
  {
    name: "Rahul Sharma",
    role: "E-commerce Founder",
    quote: "The order sync automation saved us 20+ hours weekly. Real-time inventory across Shopify and our CRM - flawless execution by Mostafa.",
    rating: 5,
    project: "E-commerce Automation",
  },
  {
    name: "Emily Chen",
    role: "Marketing Director",
    quote: "Our lead generation improved by 300% after implementing the AI qualification bot. The ROI was visible within the first month.",
    rating: 5,
    project: "AI Lead Qualification",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Hero-style background */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/12 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Client Love
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from businesses that transformed their operations with AI automation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 left-6 text-6xl text-primary/20 font-serif">
                "
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Project tag */}
              <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                {testimonial.project}
              </span>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="text-primary font-semibold">50+</span> successful automations delivered with{" "}
            <span className="text-primary font-semibold">98%</span> client satisfaction
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
