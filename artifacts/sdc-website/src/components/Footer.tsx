import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-serif font-bold text-white mb-4">
              SDC <span className="font-sans font-medium text-lg ml-2 border-l border-white/20 pl-2">Somil Dental Clinic</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Providing premium, compassionate dental care with clinical precision. Your smile is our signature.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollTo("services")} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => scrollTo("why-us")} className="hover:text-white transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => scrollTo("testimonials")} className="hover:text-white transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollTo("donate")} className="hover:text-white transition-colors">Donate</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Somil Dental Clinic. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
