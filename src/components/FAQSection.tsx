import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How fast can I sell my house?",
    a: "We can make you a fair, all-cash offer within 24 hours and close in as little as 7 days—depending on your timeline.",
  },
  {
    q: "What types of houses do you buy in Northern Utah?",
    a: "We buy houses in any condition, including vacant properties, inherited homes, houses with liens, fire damage, or problem tenants.",
  },
  {
    q: "Do I need to clean or repair my home before selling?",
    a: "No! You don't need to make any repairs or even clean the property. We buy houses as-is.",
  },
  {
    q: "Are there any fees or commissions involved?",
    a: "Absolutely not. There are no fees, commissions, or hidden charges. We even cover closing costs.",
  },
  {
    q: "What areas in Utah do you serve?",
    a: "We buy houses all over Northern Utah, including Ogden, Clearfield, Layton, Bountiful, Centerville, Farmington, and nearby cities.",
  },
  {
    q: "What if I'm going through foreclosure or dealing with a tough situation?",
    a: "We specialize in helping homeowners in tough situations—whether you're facing foreclosure, divorce, probate, back taxes, or need to relocate fast.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-section-alt">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="card-flat-3d rounded-xl px-4 border-b-0">
              <AccordionTrigger className="text-left font-semibold text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
