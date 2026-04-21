import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ShoppingCart, Bot, ArrowRight, Sparkles, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const projects = [
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

const AllProjects = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="relative py-24 md:py-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-background" />
                <div className="bg-noise" />

                {/* Gradient orbs */}
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />

                <div className="container relative z-10 mx-auto px-6">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">All Projects</span>
                        </div>

                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
                            All{" "}
                            <span className="text-gradient">Case Studies</span>
                        </h1>

                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up animation-delay-200">
                            Explore all my automation projects and their real-world impact
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <article
                                key={project.id}
                                className={`group relative bg-card rounded-2xl border border-border/50 overflow-hidden
                  transform transition-all duration-300 ease-out
                  hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10
                  hover:border-primary/30 animate-fade-up`}
                                style={{ animationDelay: `${(index + 3) * 100}ms` }}
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                                </div>

                                <div className="relative p-6 md:p-8">
                                    {/* Icon & Title */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                            <project.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Metric Highlight */}
                                    <div className="relative mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20 overflow-hidden">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                                        <div className="relative">
                                            <span className="block font-display text-4xl md:text-5xl font-bold text-primary mb-1">
                                                {project.metric}
                                            </span>
                                            <span className="text-sm text-foreground/80 font-medium">
                                                {project.metricLabel}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Challenge */}
                                    <div className="mb-6">
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                            The Challenge
                                        </h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {project.challenge}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-6">
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-foreground/70 border border-border/50"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 group/btn"
                                        asChild
                                    >
                                        <Link to={project.link}>
                                            <span>View Full Case Study</span>
                                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllProjects;
