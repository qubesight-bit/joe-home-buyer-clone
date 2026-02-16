const ARROW_IMG = "https://image-cdn.carrot.com/images/arrow/arrow_right_01.png";

const steps = [
  { title: "Submit your info", sub: "Quick, Easy & Free!" },
  { title: "Let's talk – consult with us to discuss your property details" },
  { title: "Receive cash – we close on your timeline and you get paid within days" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 bg-section-alt">
      <div className="container">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">
          Our Process is Simple
        </h2>
        <p className="text-muted-foreground text-center mb-4">
          Sell Your House Fast for Cash In 3 Easy Steps.
        </p>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-2 mt-8">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="flex-1 card-flat-3d rounded-xl p-4 text-center min-h-[80px] flex flex-col justify-center">
                {i === 0 && (
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {step.sub}
                  </h3>
                )}
                <p className="text-sm text-muted-foreground">{step.title}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 shrink-0">
                  <img src={ARROW_IMG} alt="" className="w-6 h-6 opacity-70" aria-hidden />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-center mt-6 max-w-2xl mx-auto mb-8">
          <strong className="text-foreground">Timeframe:</strong> Once we receive your property details, we'll send you a fair, all-cash offer within 24 hours. You pick the closing date — whether you need to sell your house fast in Utah or prefer a flexible timeline that fits your move.
        </p>
        <div className="text-center">
          <a
            href="/opt-in"
            className="btn-flat-3d bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold px-8 py-3 rounded-xl text-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
