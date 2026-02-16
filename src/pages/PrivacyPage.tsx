import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const COMPANY_NAME = "Joe Homebuyer | Simple Sold Homes LLC";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1 py-16 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2 text-center">
            Privacy Policy
          </h1>
          <p className="text-center text-muted-foreground font-semibold mb-8">
            {COMPANY_NAME}
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US")}
            </p>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Who We Are
              </h2>
              <p className="text-muted-foreground">
                <strong className="text-foreground">{COMPANY_NAME}</strong> (“we,” “us,” or “our”) operates this website and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground mb-2">
                We may collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Property information (address, condition, and details you submit when requesting an offer)</li>
                <li>Communications and correspondence with us</li>
                <li>Any other information you choose to provide when inquiring about our home-buying services</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We may also automatically collect certain information when you visit our website, such as your IP address, browser type, device information, and pages visited, for analytics and to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground">
                We use the information we collect to respond to your inquiries, evaluate properties, make and communicate offers, provide our cash home-buying services, send updates related to your transaction, improve our website and services, and comply with legal obligations. We do not use your personal information for marketing to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground">
                <strong className="text-foreground">We do not sell, rent, trade, or share your personal information with third parties for marketing or promotional purposes.</strong> We may share your information only with service providers who assist us in operating our business (e.g., title companies, legal or accounting advisors) or as required by law. We require such parties to protect your information in a manner consistent with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                Our website may use cookies or similar technologies to enhance your experience, analyze site traffic, and remember your preferences. You can adjust your browser settings to refuse cookies; however, some features of the site may not function properly without them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement reasonable security measures to protect your personal information. No method of transmission over the Internet or electronic storage is 100% secure; we cannot guarantee absolute security but are committed to protecting your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Your Rights and Choices
              </h2>
              <p className="text-muted-foreground">
                You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable law. You may also opt out of marketing communications at any time (see SMS section below for text message opt-out).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                SMS Communications & Data Use
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you provide your phone number, you consent to receive calls and text messages (SMS) from <strong className="text-foreground">{COMPANY_NAME}</strong> (Joe Homebuyer Utah Area) regarding your inquiry, property information, appointment scheduling, updates, and related services.
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
                Children’s Privacy
              </h2>
              <p className="text-muted-foreground">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us so we can delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the most recent version. We encourage you to review this page periodically. Continued use of our website or services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or our practices, please contact <strong className="text-foreground">{COMPANY_NAME}</strong> at{" "}
                <a href="tel:801-515-0649" className="text-primary hover:underline font-semibold">
                  801-515-0649
                </a>.
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
