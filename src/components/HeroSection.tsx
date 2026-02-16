const HERO_BG = "https://image-cdn.carrot.com/uploads/hero-bg-default-full.jpg";
const CORY_JEN_PHOTO = "https://image-cdn.carrot.com/uploads/sites/31595/2024/03/Cory-Jen-Professional-683x1024.jpg";

const HeroSection = () => {
  return (
    <section
      id="form"
      className="relative bg-cover bg-center min-h-[500px]"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.55)]" />

      <div className="relative container py-16 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3 leading-tight text-primary-foreground">
          Sell Your House Fast In Northern Utah!
        </h1>
        <p className="text-lg mb-4 text-primary-foreground">
          <strong>No</strong> Fees. <strong>No</strong> Commissions. More Cash for Your Utah Home.
        </p>
        <h2 className="text-xl md:text-2xl font-heading font-bold mb-6 text-primary-foreground">
          Get a Fair Cash Offer – You Choose the Closing Date. We Cover All Costs!
        </h2>
        <a
          href="/opt-in"
          className="btn-flat-3d bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-xl px-10 py-4 rounded-xl mb-8"
        >
          Get Your Cash Offer
        </a>
        <img
          src={CORY_JEN_PHOTO}
          alt="Cory and Jen - Local Home Buyers"
          className="w-40 h-auto rounded-xl shadow-elevated"
        />
      </div>
    </section>
  );
};

export default HeroSection;
