import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Checkbox } from "@/components/ui/checkbox";

const OptInPage = () => {
  const [phone, setPhone] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!smsConsent) {
      toast.error("Please agree to receive SMS messages to opt in.");
      return;
    }
    toast.success("You've been opted in! We'll text you shortly.", {
      description: "Reply STOP to unsubscribe anytime.",
      duration: 5000,
    });
    setPhone("");
    setSmsConsent(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1 py-16 bg-background">
        <div className="container max-w-xl">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2 text-center">
            SMS Opt-In
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Opt in to receive text messages from Joe Homebuyer Utah Area about property information, appointments, and updates.
          </p>

          <div className="card-flat-3d rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1">
                  Mobile Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 555-5555"
                  className="input-flat w-full rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none"
                />
              </div>

              <div className="space-y-3 p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-foreground font-semibold">
                  By opting in, you consent to receive SMS messages from Joe Homebuyer Utah Area regarding:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Your inquiry and property information</li>
                  <li>Appointment scheduling and updates</li>
                  <li>Related real estate services</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Message frequency may vary depending on your interaction with us. Message and data rates may apply according to your mobile carrier.
                </p>
                <p className="text-sm text-muted-foreground">
                  You may opt out at any time by replying <strong>STOP</strong> to unsubscribe or <strong>HELP</strong> for assistance.
                </p>
                <p className="text-xs text-muted-foreground">
                  View our{" "}
                  <Link to="/privacy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </Link>{" "}
                  for full details on how we use and protect your information.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="sms-consent"
                  checked={smsConsent}
                  onCheckedChange={(checked) => setSmsConsent(checked === true)}
                  className="mt-0.5"
                />
                <label htmlFor="sms-consent" className="text-sm text-foreground cursor-pointer">
                  I agree to receive SMS text messages from Joe Homebuyer Utah Area. I understand that message and data rates may apply. I can reply STOP to opt out or HELP for assistance at any time.
                </label>
              </div>

              <button
                type="submit"
                disabled={!smsConsent}
                className="btn-flat-3d w-full bg-cta hover:bg-cta-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-cta-foreground font-heading font-bold text-lg py-3 rounded-xl"
              >
                Opt In to SMS Messages
              </button>
            </form>
          </div>

          <p className="text-center mt-6">
            <Link to="/" className="text-primary hover:underline text-sm">
              ← Back to Home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OptInPage;
