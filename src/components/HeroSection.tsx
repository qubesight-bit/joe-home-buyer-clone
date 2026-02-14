import heroBg from "@/assets/hero-bg.jpg";
import couplePhoto from "@/assets/couple-photo.jpg";
import LeadForm from "./LeadForm";

const HeroSection = () => {
  return (
    <section
      id="form"
      className="relative bg-cover bg-center min-h-[600px]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.55)]" />

      <div className="relative container py-12 flex flex-col lg:flex-row items-start gap-8">
        {/* Left side - headline */}
        <div className="flex-1 text-primary-foreground pt-4">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3 leading-tight">
            Sell Your House Fast In Northern Utah!
          </h1>
          <p className="text-lg mb-4">
            <strong>No</strong> Fees. <strong>No</strong> Commissions. More Cash for Your Utah Home.
          </p>
          <h2 className="text-xl md:text-2xl font-heading font-bold mb-6">
            Get a Fair Cash Offer – You Choose the Closing Date. We Cover All Costs!
          </h2>
          <p className="text-sm mb-6 opacity-90">Fill out the short form… →</p>

          <img
            src={couplePhoto}
            alt="Cory and Jen - Local Home Buyers"
            className="w-40 h-auto rounded shadow-lg"
          />
        </div>

        {/* Right side - form */}
        <div className="flex-shrink-0 w-full lg:w-auto">
          <LeadForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
