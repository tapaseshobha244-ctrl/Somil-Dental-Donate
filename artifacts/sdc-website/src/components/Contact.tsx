import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-card rounded-3xl overflow-hidden shadow-xl border border-border flex flex-col md:flex-row">
          
          <div className="w-full md:w-1/2 p-10 md:p-14">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              We're here to help you achieve your best smile. Reach out to schedule an appointment.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Location</h4>
                  <p className="text-muted-foreground mt-1">123 Health Avenue, Medical District<br/>Cityville, State 10020</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Phone</h4>
                  <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground mt-1">hello@somildental.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Hours</h4>
                  <p className="text-muted-foreground mt-1">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-muted p-10 md:p-14 flex items-center justify-center">
            <div className="w-full max-w-sm space-y-4">
              <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-6">Ready for a visit?</h3>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                <p className="text-center text-muted-foreground mb-6">
                  Call us directly to find a time that works best for your schedule.
                </p>
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center justify-center w-full bg-primary text-primary-foreground h-12 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
