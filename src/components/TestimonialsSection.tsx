const CORY_JEN_PHOTO = "https://image-cdn.carrot.com/uploads/sites/31595/2024/03/Cory-Jen-Professional-683x1024.jpg";

const testimonials = [
  {
    id: "xno2N88VkRU",
    title: "Hank and Mary Testimonial",
    quote: "Was delightful and really nice.",
    description: "Hank and Mary say Cory \"Was delightful and really nice.\" They recently sold their home for cash in Salt Lake City and we helped them downsize into a smaller home that is easier to manage in Murray, UT. Congrats Mary and Hank!",
  },
  {
    id: "sid6aB7M4Ys",
    title: "David and Julie Testimonial",
    quote: "It was excellent. Went by real quick.",
    description: "David and Julie share what their experience was like selling for cash in Harrisville, UT to Joe Homebuyer: \"It was excellent. Went by real quick. We got what we hoped for, and what we asked for.\"",
  },
  {
    id: "f5289X6s2Cw",
    title: "Jasmine's Testimonial",
    quote: "It has been so awesome, stress-free, cash money.",
    description: "Jasmine's experience selling her home in Roy, Utah for cash with Joe Homebuyer. \"It has been so awesome, stress-free, cash money. They are all so sweet, gave us upfront information, no games, straight-forward information, it's been a great process!\"",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-section-alt">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src={CORY_JEN_PHOTO}
            alt="Cory and Jen"
            className="w-32 h-auto rounded-xl shadow-elevated shrink-0"
          />
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Cory and Jen</h2>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Testimonials</h3>
            <p className="text-muted-foreground">
              Hear from homeowners who sold their houses to Joe Homebuyer Utah Area. Click any video to watch their full story.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <a
              key={t.id}
              href={`https://www.youtube.com/watch?v=${t.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block card-flat-3d rounded-xl overflow-hidden group"
            >
              <div className="aspect-video relative bg-muted">
                <img
                  src={`https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`}
                  alt={t.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-heading font-bold text-foreground mb-2">{t.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-3">{t.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
