import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1 py-16 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-foreground">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US")}
            </p>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                SMS Communications & Data Use
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you provide your phone number, you consent to receive calls and text messages (SMS) from Joe Homebuyer Utah Area regarding your inquiry, property information, appointment scheduling, updates, and related services.
                </p>
                <p>
                  <strong className="text-foreground">We do not sell, rent, trade, or share your personal information with third parties for marketing or promotional purposes.</strong>
                </p>
                <p>
                  <strong className="text-foreground">Your SMS consent and phone number will not be shared with any third party or affiliates for marketing purposes.</strong>
                </p>
                <p>
                  Message frequency may vary depending on your interaction with us. Message and data rates may apply according to your mobile carrier.
                </p>
                <p>
                  You may opt out of receiving SMS messages at any time by replying:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong className="text-foreground">STOP</strong> – to unsubscribe</li>
                  <li><strong className="text-foreground">HELP</strong> – for assistance</li>
                </ul>
                <p>
                  After you send STOP, you will receive a confirmation message and will no longer receive SMS messages from us unless you re-subscribe.
                </p>
                <p>
                  We may still contact you regarding service-related matters if necessary for active transactions or legal obligations.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                General Information
              </h2>
              <p className="text-muted-foreground">
                Joe Homebuyer | Simple Sold Homes LLC is committed to protecting your privacy. We collect information you provide when inquiring about our home-buying services. We use this information solely to respond to your inquiry and provide our services.
              </p>
            </section>
          </div>

          <p className="text-center mt-12">
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

export default PrivacyPage;
