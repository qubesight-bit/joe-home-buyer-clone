import couplePhoto from "@/assets/couple-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container flex flex-col lg:flex-row gap-10">
        {/* Main content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            "I Need To Sell My House Fast In Northern Utah!"
          </h2>
          <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
            We Buy Houses in Ogden, Layton, Bountiful, and Across Northern Utah – In Any Condition, At Any Price.
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            If you need to sell your Northern Utah house fast, we're here to help. Whether you're in Ogden, Clearfield, Centerville, or anywhere else in the region – we're ready with a fair cash offer.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Stop the frustration of your unwanted property. We buy homes regardless of condition – whether you're facing foreclosure, divorce, relocating, dealing with liens, or inherited an unwanted property. We buy houses as-is, no repairs needed.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We help Utah homeowners in all kinds of situations. If you have a property and need to sell it, we'd like to make you a fair cash offer and close on it when you're ready.
          </p>
          <a
            href="#form"
            className="inline-block bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold px-8 py-3 rounded transition-colors text-lg"
          >
            Get Your Cash Offer
          </a>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-card border border-border rounded-lg p-6 shadow-md">
            <h4 className="font-heading font-bold text-lg text-foreground mb-3">Cory and Jen</h4>
            <img
              src={couplePhoto}
              alt="Cory and Jen"
              className="w-full rounded mb-3"
            />
            <p className="text-sm text-muted-foreground">
              We're local home buyers dedicated to helping Northern Utah homeowners sell quickly and stress-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
