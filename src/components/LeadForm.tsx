import { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch within 24 hours with your cash offer.");
  };

  return (
    <div className="bg-card rounded-lg shadow-xl p-6 max-w-md w-full">
      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
        What Do You Have To Lose? Get Started Now...
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        We buy houses in ANY CONDITION in UT. There are no commissions or fees and no obligation whatsoever. Start below by giving us a bit of info about your property or call{" "}
        <a href="tel:801-515-0649" className="font-semibold text-foreground">801-515-0649</a>...
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">
            Property Address <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Address"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full border border-input rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">
              Phone <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-input rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-input rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <p className="text-xs text-muted-foreground italic">
          We respect your privacy and will not share or sell your information.{" "}
          <a href="/privacy" className="text-primary hover:underline font-medium">
            Privacy Policy
          </a>
        </p>

        <button
          type="submit"
          className="w-full bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-lg py-3 rounded transition-colors"
        >
          Get My Fair Cash Offer ››
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
