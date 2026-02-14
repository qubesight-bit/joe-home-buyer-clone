const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-10">
      <div className="container text-center">
        <p className="font-heading text-lg font-bold mb-2">
          Joe Homebuyer | Simple Sold Homes LLC
        </p>
        <p className="text-sm mb-4">
          We buy houses in Ogden, UT and all surrounding areas. If you need to sell your house fast, connect with us for a fair no-obligation offer.
        </p>
        <p className="text-sm mb-4">
          <a href="tel:801-515-0649" className="text-accent hover:underline font-semibold">
            801-515-0649
          </a>
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <p className="text-xs mt-6 opacity-60">
          © {new Date().getFullYear()} Simple Sold Homes LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
