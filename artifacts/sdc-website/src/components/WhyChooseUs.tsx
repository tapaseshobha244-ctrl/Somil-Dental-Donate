import { motion } from "framer-motion";
import { Award, HeartHandshake, Settings, Wallet } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Experienced Specialists",
      description: "Our team brings decades of clinical expertise, ensuring you receive the highest standard of care."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Modern Technology",
      description: "We invest in the latest dental equipment for precise diagnostics and pain-free treatments."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Gentle Approach",
      description: "Anxiety-free dentistry is our priority. We take the time to ensure you are comfortable at every step."
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Transparent Pricing",
      description: "No hidden costs. We provide clear treatment plans and affordable options for every patient."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="/images/why-us.png" 
                alt="Professional dentist in clinic" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We believe a visit to the dentist shouldn't be stressful. We've redesigned the patient experience to be reassuring, clear, and focused entirely on your well-being.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
