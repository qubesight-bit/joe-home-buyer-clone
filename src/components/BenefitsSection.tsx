import { CheckCircle } from "lucide-react";

const benefits = [
  "You won't need to clean up or make any costly repairs",
  "You don't have to waste time trying to find a trustworthy agent",
  "There's no binding contract locking you into months of uncertainty",
  "You avoid the mountains of paperwork, delays, and endless back-and-forth",
];

const BenefitsSection = () => {
  return (
    <section id="compare" className="py-16 bg-section-alt">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
          Do You Need To Sell Your House in Northern Utah?
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Even if an agent can't sell your house fast, we can help. Sometimes selling through a traditional agent simply doesn't work for every homeowner. And as a bonus…
        </p>

        <ul className="space-y-3 mb-8">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-foreground">{b}</span>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          <strong className="text-foreground">We'll know quickly if we can help</strong> – and unlike selling through an agent, you won't have to wait and wonder if a buyer's financing will go through. We're local home buyers in UT, and we're ready to purchase your house today, for cash.
        </p>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          We'll give you a fair, no-obligation all-cash offer on your house within 24 hours. The best part? You get to choose your closing date. We can close in as little as 7 days because we buy houses with cash.
        </p>

        <a
          href="/opt-in"
          className="btn-flat-3d bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold px-8 py-3 rounded-xl text-lg"
        >
          Get Your Cash Offer
        </a>
      </div>
    </section>
  );
};

export default BenefitsSection;
