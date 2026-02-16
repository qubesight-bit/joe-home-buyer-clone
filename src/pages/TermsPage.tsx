import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const COMPANY_NAME = "Joe Homebuyer | Simple Sold Homes LLC";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1 py-16 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2 text-center">
            Terms of Service
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
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing or using the website or services of <strong className="text-foreground">{COMPANY_NAME}</strong> (“we,” “us,” or “our”), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Services
              </h2>
              <p className="text-muted-foreground">
                <strong className="text-foreground">{COMPANY_NAME}</strong> provides cash home buying services in Northern Utah, including Ogden, Layton, Bountiful, Clearfield, Centerville, Farmington, and surrounding areas. All offers are made in good faith and are subject to property evaluation. We reserve the right to decline any transaction at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                No Obligation
              </h2>
              <p className="text-muted-foreground">
                Submitting property information or requesting an offer does not create any obligation on your part. You are under no obligation to accept any offer we make. Our process is designed to be no-pressure and no-obligation. Similarly, we are not obligated to make an offer on every property submitted.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Accuracy of Information
              </h2>
              <p className="text-muted-foreground">
                You agree to provide accurate, current, and complete information when contacting us or submitting property details. Misrepresentation of property condition, ownership, or other material facts may result in withdrawal of an offer or termination of any agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                The content on this website, including text, graphics, logos, and images, is the property of <strong className="text-foreground">{COMPANY_NAME}</strong> or its licensors and is protected by copyright and other intellectual property laws. You may not copy, modify, distribute, or use our content for commercial purposes without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, <strong className="text-foreground">{COMPANY_NAME}</strong> and its owners, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim related to these terms or our services shall not exceed the amount, if any, paid by you to us in connection with the specific transaction at issue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Indemnification
              </h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless <strong className="text-foreground">{COMPANY_NAME}</strong>, its owners, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys’ fees) arising from your use of our website or services, your violation of these terms, or your violation of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Governing Law
              </h2>
              <p className="text-muted-foreground">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Utah, without regard to its conflict of law provisions. Any dispute arising from these terms or our services shall be subject to the exclusive jurisdiction of the state and federal courts located in Utah.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Severability
              </h2>
              <p className="text-muted-foreground">
                If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                We may update these Terms of Service from time to time. The “Last updated” date at the top will reflect the most recent version. Your continued use of our website or services after any changes constitutes acceptance of the updated terms. We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact <strong className="text-foreground">{COMPANY_NAME}</strong> at{" "}
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

export default TermsPage;
