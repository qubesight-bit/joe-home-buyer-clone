import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PHONE = "tel:801-515-0649";

const navItems = [
  { label: "Sell Your House ›", href: "/#form" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Compare", href: "/#listing-vs-us" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Compliance", href: "/#compliance" },
  { label: "FAQ", href: "/#faq" },
  { label: "Locations", href: "/#locations", hasDropdown: true },
  { label: "Contact Us", href: PHONE },
];

const locations = [
  { name: "Clearfield", href: PHONE },
  { name: "Bountiful", href: PHONE },
  { name: "Centerville", href: PHONE },
  { name: "Farmington", href: PHONE },
  { name: "Layton", href: PHONE },
];

const navLinkClass = "block px-4 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(210_40%_95%)] hover:text-primary transition-colors flex items-center gap-1";
const mobileNavLinkClass = "block px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(210_40%_95%)] transition-colors";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[hsl(var(--nav-bg))] text-[hsl(var(--nav-foreground))] border-b border-border">
      <div className="container flex items-center justify-between py-0">
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0 w-full">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.hasDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className={navLinkClass + " outline-none cursor-pointer w-full text-left border-0 bg-transparent font-inherit"}>
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {locations.map((loc) => (
                      <DropdownMenuItem key={loc.name} asChild>
                        <a href={loc.href}>{loc.name}</a>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem asChild>
                      <a href="/#locations">View All Areas</a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-3"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="md:hidden border-t border-border">
          {navItems.flatMap((item) =>
            item.hasDropdown
              ? [
                  <li key="locations-label">
                    <span className={mobileNavLinkClass + " text-muted-foreground"}>Locations</span>
                  </li>,
                  ...locations.map((loc) => (
                    <li key={loc.name}>
                      <a
                        href={loc.href}
                        className={mobileNavLinkClass + " pl-10"}
                        onClick={() => setMobileOpen(false)}
                      >
                        {loc.name}
                      </a>
                    </li>
                  )),
                  <li key="locations-view-all">
                    <a
                      href="/#locations"
                      className={mobileNavLinkClass + " pl-10"}
                      onClick={() => setMobileOpen(false)}
                    >
                      View All Areas
                    </a>
                  </li>,
                ]
              : [
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={mobileNavLinkClass}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>,
                ]
          )}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
