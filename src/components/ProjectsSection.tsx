import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ShoppingCart, Bot, Mic, FileText, ArrowRight, Sparkles } from "lucide-react";

const projects = [
  {
    id: 4,
    title: "The Speaking Portfolio",
    icon: Mic,
    metric: "24/7",
    metricLabel: "Digital Expert Availability",
    challenge: "Static portfolio sites don't build trust or demonstrate expertise instantly. Potential clients leave when they can't find specific answers quickly.",
    techStack: ["n8n", "Voice AI", "RAG", "Cloud"],
    link: "/case-study-4",
  },
  {
    id: 5,
    title: "AI Invoice Automation",
    icon: FileText,
    metric: "0",
    metricLabel: "Manual Data Entry After Setup",
    challenge: "Small businesses spend 5-10 hours monthly manually entering invoice data — wrong amounts, wrong accounts, no audit trail.",
    techStack: ["n8n", "OpenAI", "Bkper", "Gmail", "Apps Script"],
    link: "/case-study-5",
  },
  {
    id: 1,
    title: "Voice Appointment Agent",
    icon: Calendar,
    metric: "40%",
    metricLabel: "Reduction in Missed Appointments",
    challenge: "Healthcare clinics were losing bookings due to missed calls and manual queue management. Patients often forgot appointments or couldn't reach staff during peak hours.",
    techStack: ["n8n", "Voice AI", "RAG", "Calendar API"],
    link: "/case-study-1",
  },
  {
    id: 2,
    title: "E-commerce Order Sync",
    icon: ShoppingCart,
    metric: "3x",
    metricLabel: "Faster Order Processing",
    challenge: "A growing online retailer struggled with inventory discrepancies across Shopify, WooCommerce, and their warehouse system, leading to overselling and customer complaints.",
    techStack: ["n8n", "Shopify API", "WooCommerce", "Airtable"],
    link: "/case-study-2",
  },
  {
    id: 3,
    title: "AI Lead Qualification Bot",
    icon: Bot,
    metric: "85%",
    metricLabel: "Qualified Lead Accuracy",
    challenge: "Sales teams wasted hours on unqualified leads from web forms. Manual follow-up was slow, and hot leads went cold before first contact.",
    techStack: ["n8n", "OpenAI", "Apify", "CRM", "Webhooks"],
    link: "/case-study-3",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Hero-style background */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/12 rounded-full blur-[130px]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Real Results</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
            Featured Automation{" "}
            <span className="text-gradient">Case Studies</span>
            {" "}& Results
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Discover how businesses transformed their operations with custom automation solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className={`group relative bg-card/50 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden block text-left h-full
                transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)
                hover:scale-[1.03] hover:-translate-y-2 
                hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_rgba(245,166,35,0.3)]
                animate-fade-up`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Dynamic Gradient Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shimmer Effect */}
              <div className="absolute -inset-[100%] top-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shimmer" />

              <div className="relative p-6 md:p-8 flex flex-col h-full z-10">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-black group-hover:scale-110 group-hover:rotate-3 shadow-[0_0_15px_rgba(245,166,35,0)] group-hover:shadow-[0_0_20px_rgba(245,166,35,0.5)]">
                    <project.icon className="w-6 h-6 transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-2">
                    {project.title}
                  </h3>
                </div>

                {/* Metric Highlight */}
                <div className="relative mb-6 p-4 rounded-xl bg-neutral-900/50 border border-white/5 overflow-hidden transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <span className="block font-display text-4xl md:text-5xl font-bold text-primary mb-1 transition-all duration-300 group-hover:scale-105 origin-left shadow-primary drop-shadow-[0_0_10px_rgba(245,166,35,0.3)]">
                      {project.metric}
                    </span>
                    <span className="text-sm text-foreground/80 font-medium group-hover:text-foreground transition-colors">
                      {project.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 group-hover:text-primary/80 transition-colors">
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground/90">
                    {project.challenge}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 group-hover:text-primary/80 transition-colors">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-foreground/70 border border-border/50 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="w-full flex justify-between items-center text-primary font-medium mt-auto group/btn border-t border-white/5 pt-4 group-hover:border-primary/20 transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">View Full Case Study</span>
                    <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-white">Read Success Story</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-black group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
          <Button variant="hero" size="xl" asChild>
            <a href="/all-projects">
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>


        </div>
      </div>
    </section >
  );
};

export default ProjectsSection;
