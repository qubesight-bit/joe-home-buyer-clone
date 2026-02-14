import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Sell Your House ›", href: "#form" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Locations", href: "#locations", hasDropdown: true },
  { label: "Contact Us", href: "#form" },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-nav text-nav-foreground">
      <div className="container flex items-center justify-between py-0">
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0 w-full">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-4 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-primary/40 transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-3"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="md:hidden border-t border-primary/30">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-primary/40 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
