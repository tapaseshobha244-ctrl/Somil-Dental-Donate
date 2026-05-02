import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      rating: 5,
      text: "I've always had dental anxiety, but the team at SDC completely changed my perspective. The clinic is incredibly calming, and the doctors explain everything so patiently. Truly a premium experience."
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Outstanding service from start to finish. I went in for a complex implant procedure and was amazed by their professionalism and the pain-free approach. Highly recommended."
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The attention to detail here is unmatched. From the front desk to the dental chair, you feel cared for. My teeth whitening results are fantastic, and I felt completely at ease."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Patients Say
          </motion.h2>
          <motion.p 
            className="text-lg text-primary-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Trust is earned. Read stories from patients who have experienced the SDC difference.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed italic text-muted-foreground">
                "{testimonial.text}"
              </p>
              <div className="font-bold text-foreground">
                {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
