import { motion } from "framer-motion";
import { CalendarCheck, MessageSquare, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <CalendarCheck className="w-10 h-10" />,
      title: "Book",
      description: "Schedule your visit online or call us. We offer flexible hours to fit your busy life."
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Consult",
      description: "Meet with our specialists for a thorough examination and a clear, personalized treatment plan."
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Smile",
      description: "Receive world-class care in a relaxing environment and leave with a confident, healthy smile."
    }
  ];

  return (
    <section className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your Journey to a Better Smile
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We've streamlined our process to ensure your experience is as smooth and stress-free as possible.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-border/60 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center bg-background px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-xl shadow-primary/20 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-primary font-bold flex items-center justify-center text-sm shadow-sm border border-border">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
