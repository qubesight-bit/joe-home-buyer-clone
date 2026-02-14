import LeadForm from "./LeadForm";

const SecondFormSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-xl">
        <div className="text-center mb-6">
          <p className="text-foreground font-semibold mb-2">
            Our goal is to help make your life easier and get you out from under the property that's stressing you out… while still paying a fast, fair, and honest price for your house.
          </p>
        </div>
        <LeadForm />
        <p className="text-center mt-6 text-foreground font-heading font-bold text-lg">
          Or Give Us A Call Now At:{" "}
          <a href="tel:801-515-0649" className="text-accent hover:underline">
            801-515-0649
          </a>
        </p>
      </div>
    </section>
  );
};

export default SecondFormSection;
