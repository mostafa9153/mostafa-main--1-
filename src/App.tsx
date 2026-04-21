import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VoiceAppointmentCaseStudy from "./pages/VoiceAppointmentCaseStudy";
import EcommerceOrderSyncCaseStudy from "./pages/EcommerceOrderSyncCaseStudy";
import AILeadQualificationCaseStudy from "./pages/AILeadQualificationCaseStudy";
import SpeakingPortfolioCaseStudy from "./pages/SpeakingPortfolioCaseStudy";
import InvoiceAutomationCaseStudy from "./pages/InvoiceAutomationCaseStudy";
import AllProjects from "./pages/AllProjects";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {/* Unified background - matching hero section exactly */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Noise texture - same as hero */}
          <div className="absolute inset-0 bg-noise" />

          {/* TOP SPOTLIGHT - like hero's profile glow */}
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/30 rounded-full blur-[120px]" />

          {/* Edge orbs - same as hero */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50" />

          {/* Center floating glow */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />

          {/* Mid-page spotlight */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/25 rounded-full blur-[130px]" />

          {/* Bottom spotlight */}
          <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" />

          {/* Bottom edge orbs */}
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-40" />
        </div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-study-1" element={<VoiceAppointmentCaseStudy />} />
            <Route path="/case-study-2" element={<EcommerceOrderSyncCaseStudy />} />
            <Route path="/case-study-3" element={<AILeadQualificationCaseStudy />} />
            <Route path="/case-study-4" element={<SpeakingPortfolioCaseStudy />} />
            <Route path="/case-study-5" element={<InvoiceAutomationCaseStudy />} />
            <Route path="/all-projects" element={<AllProjects />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
