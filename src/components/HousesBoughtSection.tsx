const BASE_URL = "https://coryandjenbuyhouses.com/wp-content/uploads";

const beforeAfterPairs = [
  { before: `${BASE_URL}/south-weber-before.webp`, after: `${BASE_URL}/south-weber-after.webp`, title: "South Weber" },
  { before: `${BASE_URL}/ct-ave-before.webp`, after: `${BASE_URL}/ct-ave-after.webp`, title: "Ct Ave" },
  { before: `${BASE_URL}/ct-kitchen-before.webp`, after: `${BASE_URL}/ct-kitchen-after.webp`, title: "Ct Kitchen" },
  { before: `${BASE_URL}/slc-condo-before.webp`, after: `${BASE_URL}/slc-condo-after.webp`, title: "SLC Condo" },
  { before: `${BASE_URL}/slc-bathroom-before.webp`, after: `${BASE_URL}/slc-bathroom-after.webp`, title: "SLC Bathroom" },
  { before: `${BASE_URL}/lincoln-exterior-before.webp`, after: `${BASE_URL}/lincoln-exterior-after.webp`, title: "Lincoln Exterior" },
  { before: `${BASE_URL}/lincoln-bathroom-before.webp`, after: `${BASE_URL}/lincoln-bathroom-after.webp`, title: "Lincoln Bathroom" },
  { before: `${BASE_URL}/providence-kitchen-before.webp`, after: `${BASE_URL}/providence-kitchen-after.webp`, title: "Providence Kitchen" },
];

const additionalImages = [
  { src: `${BASE_URL}/remodeled-living-room.webp`, alt: "Remodeled Living Room", title: "Remodeled Living Room" },
  { src: `${BASE_URL}/white-house-with-split-level-garage-photo.webp`, alt: "White House With Split Level Garage", title: "White House With Split Level Garage" },
];

const HousesBoughtSection = () => {
  return (
    <section id="before-after" className="py-16 bg-section-alt">
      <div className="container">
        <h1 className="text-3xl font-heading font-bold text-foreground mb-2 text-center">
          Before & After
        </h1>
        <h2 className="text-xl font-heading font-semibold text-muted-foreground mb-10 text-center">
          Check Out Some of the Local Homes We've Restored!
        </h2>

        {/* Additional featured images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {additionalImages.map((img) => (
            <div key={img.alt} className="card-flat-3d rounded-xl overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-video object-cover"
              />
              <p className="p-3 text-sm font-semibold text-foreground text-center">{img.title}</p>
            </div>
          ))}
        </div>

        {/* Before & After pairs */}
        <div className="space-y-12">
          {beforeAfterPairs.map((pair) => (
            <div key={pair.title} className="card-flat-3d rounded-xl overflow-hidden p-4">
              <h3 className="text-lg font-heading font-bold text-foreground mb-4 text-center">{pair.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Before</p>
                  <img
                    src={pair.before}
                    alt={`${pair.title} before`}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">After</p>
                  <img
                    src={pair.after}
                    alt={`${pair.title} after`}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/opt-in"
            className="btn-flat-3d bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold px-8 py-3 rounded-xl text-lg"
          >
            Get Your No-Obligation Cash Offer in 24 Hours or Less!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HousesBoughtSection;
