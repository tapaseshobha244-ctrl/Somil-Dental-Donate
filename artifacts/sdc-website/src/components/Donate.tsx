import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Lock, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function Donate() {
  const { toast } = useToast();
  const [amount, setAmount] = useState<string>("100");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [donated, setDonated] = useState(false);

  const amounts = ["50", "100", "200", "500"];
  const upiId = "somildental@upi";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=${upiId}&pn=SomilDentalClinic${amount !== "custom" ? `&am=${amount}` : customAmount ? `&am=${customAmount}` : ""}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    toast({
      title: "UPI ID Copied",
      description: "You can now paste it in your UPI app.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border shadow-2xl rounded-3xl p-8 md:p-16"
          >
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Support Free Dental Checkups for Patients in Need
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Good dental health is a right, not a privilege. Your generous donations directly fund free checkups and essential treatments for underserved individuals in our community.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="rounded-full px-10 h-14 text-lg bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/20"
                  data-testid="button-donate-trigger"
                >
                  Donate Now
                  <Heart className="ml-2 w-5 h-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                {!donated ? (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif text-center">Make a Difference Today</DialogTitle>
                      <DialogDescription className="text-center text-base">
                        Select an amount to donate securely via UPI.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="py-4 space-y-6">
                      <div className="space-y-3">
                        <Label>Select Amount (₹)</Label>
                        <div className="flex flex-wrap gap-2">
                          {amounts.map((a) => (
                            <button
                              key={a}
                              type="button"
                              onClick={() => { setAmount(a); setCustomAmount(""); }}
                              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                                amount === a 
                                  ? "bg-primary text-primary-foreground border-primary" 
                                  : "bg-background text-foreground border-border hover:border-primary/50"
                              }`}
                            >
                              ₹{a}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => setAmount("custom")}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                              amount === "custom" 
                                ? "bg-primary text-primary-foreground border-primary" 
                                : "bg-background text-foreground border-border hover:border-primary/50"
                            }`}
                          >
                            Custom
                          </button>
                        </div>
                        {amount === "custom" && (
                          <div className="mt-3">
                            <Input
                              type="number"
                              placeholder="Enter amount in ₹"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              className="w-full"
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-xl border border-border">
                        <img 
                          src={qrUrl} 
                          alt="Donation QR Code" 
                          className="w-44 h-44 rounded-lg shadow-sm bg-white p-2 mb-4"
                        />
                        <p className="text-sm font-medium text-foreground mb-2">Scan QR or use UPI ID to donate</p>
                        
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-border w-full max-w-xs">
                          <span className="flex-1 font-mono text-sm truncate">{upiId}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            onClick={handleCopy}
                            title="Copy UPI ID"
                          >
                            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg">
                        <Lock className="w-4 h-4 text-primary" />
                        <span>Secure & Transparent Donation</span>
                      </div>
                      
                      <Button 
                        className="w-full h-12 text-base rounded-xl"
                        onClick={() => setDonated(true)}
                      >
                        I've Donated
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <Heart className="w-10 h-10 fill-current animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">Thank you for your generosity! ❤️</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Your support brings smiles to those in need. 100% of your funds will go directly towards free treatments.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-6 rounded-full"
                      onClick={() => setDonated(false)}
                    >
                      Make another donation
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Secure Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>100% goes to patients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
