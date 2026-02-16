import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const compareData = [
  { topic: "Commissions/Fees:", agent: "6% on average is paid by you, the seller", us: "NONE" },
  { topic: "Who Pays Closing Costs?:", agent: "2% on average is paid by you, the seller", us: "NONE – We pay all costs" },
  { topic: "Inspection & Financing Contingency:", agent: "Yes, up to 15% of sales fall through", us: "NONE" },
  { topic: "Appraisal Needed:", agent: "Yes, sale is often subject to appraisal", us: "NONE – We make cash offers" },
  { topic: "Average Days Until Sold:", agent: "+/- 91 Days", us: "IMMEDIATE CASH OFFER" },
  { topic: "Number of Showings:", agent: "It Depends", us: "1 (Just Us)" },
  { topic: "Closing Date:", agent: "30-60 +/- days after accepting buyers offer", us: "The Date Of YOUR CHOICE" },
  { topic: "Who Pays For Repairs?:", agent: "Negotiated During Inspection Period", us: "NONE – We pay for all repairs" },
];

const CompareSection = () => {
  return (
    <section id="listing-vs-us" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-2 text-center">
          Listing vs. Selling To Us
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Which route is quicker? Puts more cash in your pocket? Has less hassle? See The Difference Here
        </p>

        <div className="overflow-x-auto rounded-xl border border-border max-w-4xl mx-auto shadow-flat">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold w-1/3">Selling w/ An Agent</TableHead>
                <TableHead className="font-semibold w-1/3">SOLD To Joe Homebuyer Utah Area</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {compareData.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <span className="font-medium text-foreground">{row.topic}</span>
                    <br />
                    <span className="text-muted-foreground text-sm">{row.agent}</span>
                  </TableCell>
                  <TableCell className="font-semibold text-accent">{row.us}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/opt-in"
            className="btn-flat-3d bg-cta hover:bg-cta-hover text-cta-foreground font-heading font-bold text-lg px-8 py-3 rounded-xl"
          >
            Get Your Fair Cash Offer
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
