import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-bg.png"
          alt="Modern dental clinic interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/70 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/80 sm:to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              Premium Dental Care
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Clinical Precision Meets Warm Human Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Experience modern dentistry in a calm, welcoming environment. We combine state-of-the-art technology with a gentle approach to give you the confident smile you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full text-base px-8 h-14"
                onClick={() => scrollTo("contact")}
                data-testid="button-book-hero"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8 h-14 bg-white/50 backdrop-blur-sm border-border hover:bg-white"
                onClick={() => scrollTo("services")}
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
