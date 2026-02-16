import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Checkbox } from "@/components/ui/checkbox";

const OptInPage = () => {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("UT");
  const [zipCode, setZipCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
    setStreetAddress("");
    setCity("");
    setState("UT");
    setZipCode("");
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setSmsConsent(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1 py-16 bg-background">
        <div className="container max-w-xl">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2 text-center">
            Request an Offer
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Get your fair, no-obligation cash offer. Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <div className="card-flat-3d rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="streetAddress" className="block text-sm font-semibold text-foreground mb-1">
                  Street Address <span className="text-destructive">*</span>
                </label>
                <input
                  id="streetAddress"
                  type="text"
                  required
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="123 Main St"
                  className="input-flat w-full rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-foreground mb-1">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ogden"
                    className="input-flat w-full rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-foreground mb-1">
                    State
                  </label>
                  <input
                    id="state"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="UT"
                    className="input-flat w-full rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-semibold text-foreground mb-1">
                    Zip Code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="84401"
                    className="input-flat w-full rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="input-flat w-full rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1">
                  Phone <span className="text-destructive">*</span>
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

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="input-flat w-full rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your property or situation..."
                  rows={3}
                  className="input-flat w-full rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none resize-none"
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
                Request Your Cash Offer
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
