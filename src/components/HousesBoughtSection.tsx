const houses = [
  { title: "Ogden Area", placeholder: "Utah home" },
  { title: "Layton Home", placeholder: "Northern Utah property" },
  { title: "Bountiful House", placeholder: "Davis County home" },
  { title: "Clearfield Property", placeholder: "Weber County" },
  { title: "Centerville Sale", placeholder: "Northern Utah" },
  { title: "Farmington Home", placeholder: "Davis County property" },
];

const HousesBoughtSection = () => {
  return (
    <section id="before-after" className="py-16 bg-section-alt">
      <div className="container">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">
          Houses We've Bought in Northern Utah
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          We've helped hundreds of homeowners sell quickly throughout Ogden, Layton, Bountiful, Clearfield, and surrounding areas — in any condition.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {houses.map((house) => (
            <div
              key={house.title}
              className="card-flat-3d rounded-xl overflow-hidden aspect-[4/3] bg-muted flex items-center justify-center"
            >
              <div className="text-center p-4">
                <div className="w-full aspect-video bg-primary/10 rounded-lg mb-2 flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-foreground">{house.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/opt-in"
            className="btn-flat-3d bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold px-8 py-3 rounded-xl text-lg"
          >
            Sell Your House – Get Your Offer
          </a>
        </div>
      </div>
    </section>
  );
};

export default HousesBoughtSection;
