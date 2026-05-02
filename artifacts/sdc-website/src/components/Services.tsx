import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Sparkles, 
  ActivitySquare, 
  ShieldCheck, 
  Smile, 
  Axe 
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: "General Checkup",
    description: "Comprehensive oral examinations, digital x-rays, and preventive care for lasting dental health.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Teeth Whitening",
    description: "Professional laser whitening treatments to brighten your smile safely and effectively.",
  },
  {
    icon: <Smile className="w-8 h-8 text-primary" />,
    title: "Orthodontics",
    description: "Clear aligners and modern braces to straighten teeth and correct bite issues.",
  },
  {
    icon: <ActivitySquare className="w-8 h-8 text-primary" />,
    title: "Root Canal",
    description: "Pain-free endodontic therapy to save infected teeth and relieve discomfort instantly.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth using premium materials.",
  },
  {
    icon: <Axe className="w-8 h-8 text-primary" />,
    title: "Oral Surgery",
    description: "Gentle wisdom teeth removal and other surgical procedures performed with utmost care.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Comprehensive Dental Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From routine cleanings to complex restorative procedures, our expert team provides all the care you need under one roof.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
