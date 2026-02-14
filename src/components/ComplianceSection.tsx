import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const complianceRequirements = [
  {
    requirement: "Business Identity",
    whatMatters: "Business name must match legal registration",
    designRelevance: "Name only - design irrelevant",
  },
  {
    requirement: "Privacy Policy",
    whatMatters: 'Must include "no sharing" clause for mobile data',
    designRelevance: "Text content only",
  },
  {
    requirement: "Terms & Conditions",
    whatMatters: "Must be publicly accessible",
    designRelevance: "Link presence only",
  },
  {
    requirement: "Opt-In Checkbox",
    whatMatters: "Must be unchecked by default",
    designRelevance: "Functionality, not appearance",
  },
  {
    requirement: "Opt-In Language",
    whatMatters: "Must disclose message frequency, rates, STOP/HELP",
    designRelevance: "Text accuracy only",
  },
  {
    requirement: "Website Functionality",
    whatMatters: "Must be live and publicly accessible",
    designRelevance: "Working URL only",
  },
  {
    requirement: "HTTPS Security",
    whatMatters: "Must have SSL certificate",
    designRelevance: "Security, not design",
  },
];

const ComplianceSection = () => {
  return (
    <section id="compliance" className="py-16 bg-background">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4 text-center">
          What Compliance Reviewers Actually Check
        </h2>
        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          The website requirements for 10DLC approval focus entirely on content and functionality, not design fidelity:
        </p>

        <div className="rounded-xl border border-border overflow-hidden shadow-flat">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-semibold">Requirement</TableHead>
                <TableHead className="font-semibold">What Matters</TableHead>
                <TableHead className="font-semibold">Design Relevance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {complianceRequirements.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{row.requirement}</TableCell>
                  <TableCell className="text-muted-foreground">{row.whatMatters}</TableCell>
                  <TableCell className="text-muted-foreground italic">{row.designRelevance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
