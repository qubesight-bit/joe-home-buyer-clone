const locations = [
  { name: "Clearfield", slug: "clearfield" },
  { name: "Bountiful", slug: "bountiful" },
  { name: "Centerville", slug: "centerville" },
  { name: "Farmington", slug: "farmington" },
  { name: "Layton", slug: "layton" },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">
          Areas We Serve in Northern Utah
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          We buy houses all over Northern Utah, including Ogden, Clearfield, Layton, Bountiful, Centerville, Farmington, and nearby cities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {locations.map((loc) => (
            <a
              key={loc.slug}
              href="tel:801-515-0649"
              className="card-flat-3d px-6 py-3 rounded-xl font-semibold text-foreground hover:bg-muted/50"
            >
              {loc.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
