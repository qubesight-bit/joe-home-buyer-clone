import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container flex justify-between items-center text-sm">
        <div className="flex gap-4">
          <a href="#form" className="hover:underline">Get A Cash Offer Today</a>
          <a href="#about" className="hover:underline">Our Company</a>
        </div>
        <div className="flex items-center gap-2">
          <span>Call Us!</span>
          <a href="tel:801-515-0649" className="text-lg font-heading font-bold tracking-wide">
            801-515-0649
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
