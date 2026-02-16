import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-10">
      <div className="container text-center">
        <p className="font-heading text-lg font-bold mb-2">
          Joe Homebuyer | Simple Sold Homes LLC
        </p>
        <p className="text-sm mb-4">
          We buy houses in Ogden, UT and all surrounding areas. Enter your address to receive a fair, no-obligation offer.
        </p>
        <Link
          to="/opt-in"
          className="inline-block btn-flat-3d bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold px-6 py-2 rounded-xl text-sm mb-4"
        >
          Get Your Cash Offer
        </Link>
        <p className="text-sm mb-4">
          <a href="tel:801-515-0649" className="text-accent hover:underline font-semibold">
            801-515-0649
          </a>
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/opt-in" className="hover:underline">SMS Opt-In</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
        </div>
        <p className="text-xs mt-6 opacity-60">
          © {new Date().getFullYear()} Simple Sold Homes LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
