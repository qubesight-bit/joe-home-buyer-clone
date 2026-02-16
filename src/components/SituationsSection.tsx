import {
  Home,
  Briefcase,
  AlertTriangle,
  HeartCrack,
  House,
  Wrench,
  ArrowDownCircle,
  CreditCard,
  Users,
  MapPin,
  Sunset,
  Stethoscope,
} from "lucide-react";

const situations = [
  { label: "Inherited Home", icon: Home },
  { label: "Job Loss", icon: Briefcase },
  { label: "Damage", icon: AlertTriangle },
  { label: "Divorce", icon: HeartCrack },
  { label: "Foreclosure", icon: House },
  { label: "Costly Repairs", icon: Wrench },
  { label: "Downsizing", icon: ArrowDownCircle },
  { label: "Bankruptcy", icon: CreditCard },
  { label: "Bad Tenants", icon: Users },
  { label: "Relocating", icon: MapPin },
  { label: "Retirement", icon: Sunset },
  { label: "Health Issues", icon: Stethoscope },
];

const SituationsSection = () => {
  return (
    <section id="situations" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">
          Why Northern Utah Homeowners Choose Us
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Whatever your situation, we're here to help. Homeowners work with us for many reasons — and the outcome is always the same: a fast, fair cash sale with no hassles.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {situations.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="card-flat-3d rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[100px]"
            >
              <Icon className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/opt-in"
            className="btn-flat-3d bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold px-8 py-3 rounded-xl text-lg"
          >
            Get Your Cash Offer
          </a>
        </div>
      </div>
    </section>
  );
};

export default SituationsSection;
