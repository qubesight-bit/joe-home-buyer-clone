import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <header className="bg-[hsl(var(--header-bg))] border-b border-border shadow-flat">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="shrink-0">
          <img
            src="/combined-logo.png"
            alt="Joe Homebuyer | Simple Sold Homes LLC"
            className="h-12 md:h-14 w-auto"
          />
        </Link>
        <div className="flex items-center gap-6 text-[hsl(var(--header-foreground))]">
          <a href="/#form" className="text-sm font-semibold hover:text-primary transition-colors hidden sm:inline">
            Get A Cash Offer Today
          </a>
          <a href="/#about" className="text-sm font-semibold hover:text-primary transition-colors hidden sm:inline">
            Our Company
          </a>
          <a
            href="tel:801-515-0649"
            className="flex items-center gap-2 text-primary font-heading font-bold text-lg"
          >
            <Phone className="w-5 h-5" />
            801-515-0649
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
