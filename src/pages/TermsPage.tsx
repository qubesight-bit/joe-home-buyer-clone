import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <main className="flex-1 py-16 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Terms of Service
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-foreground">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US")}
            </p>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing or using the services of Joe Homebuyer | Simple Sold Homes LLC, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Services
              </h2>
              <p className="text-muted-foreground">
                We provide cash home buying services in Northern Utah, including Ogden, Layton, Bountiful, Clearfield, Centerville, Farmington, and surrounding areas. All offers are made in good faith and are subject to property evaluation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                No Obligation
              </h2>
              <p className="text-muted-foreground">
                Submitting property information or requesting an offer does not create any obligation on your part. You are under no obligation to accept any offer we make. Our process is designed to be no-pressure and no-obligation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                Contact
              </h2>
              <p className="text-muted-foreground">
                For questions about these terms, please contact us at{" "}
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
