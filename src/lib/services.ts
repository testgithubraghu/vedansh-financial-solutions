export interface LoanService {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  useCases: string[];
  eligibility: string[];
  documents: string[];
  steps: string[];
  faqs: { question: string; answer: string }[];
}

export const loanServices: LoanService[] = [
  {
    slug: "personal-loan",
    title: "Personal Loan",
    shortDescription:
      "Explore financing options for personal needs such as travel, medical expenses, or consolidating existing obligations.",
    description:
      "A personal loan can help you manage planned or unexpected expenses. Vendansh Financial Solutions can help you understand available lender options, documentation requirements and the general application process.",
    useCases: [
      "Medical or healthcare expenses",
      "Travel and holiday planning",
      "Debt consolidation",
      "Home renovation or repairs",
      "Wedding or event expenses",
    ],
    eligibility: [
      "Indian resident aged 21 to 60 years",
      "Stable source of income",
      "Minimum income criteria as per lender policy",
      "Satisfactory credit history",
    ],
    documents: [
      "Identity proof (Aadhaar, PAN, Passport)",
      "Address proof",
      "Income proof (salary slips, bank statements, ITR)",
      "Passport-size photographs",
    ],
    steps: [
      "Submit your enquiry with basic details",
      "Discuss your requirement with our team",
      "Review lender options and documentation",
      "Complete the lender's application process",
      "Receive the lender's decision",
    ],
    faqs: [
      {
        question: "What can a personal loan be used for?",
        answer:
          "Personal loans may be used for a variety of purposes including medical expenses, travel, home improvement, or consolidating existing debt. The actual permitted uses depend on the lender's policy.",
      },
      {
        question: "How long does the process take?",
        answer:
          "Timelines vary by lender. After you submit an enquiry, our team can guide you on the typical processing time for the relevant options.",
      },
    ],
  },
  {
    slug: "business-loan",
    title: "Business Loan",
    shortDescription:
      "Explore financing to support business expansion, working capital, or new project investment.",
    description:
      "Business loans can support growth, cash flow management, or capital investment. We help you understand lender requirements and navigate the application process.",
    useCases: [
      "Business expansion or new branch setup",
      "Working capital requirements",
      "Equipment or machinery purchase",
      "Inventory financing",
      "Debt consolidation for business obligations",
    ],
    eligibility: [
      "Registered business entity in India",
      "Minimum operational history as per lender policy",
      "Adequate annual turnover",
      "Satisfactory financial records and credit history",
    ],
    documents: [
      "Business registration documents",
      "GST returns and financial statements",
      "Bank statements",
      "Income Tax Returns (ITR)",
      "Business plan or project report",
    ],
    steps: [
      "Share your business requirement",
      "Discuss suitable lender options",
      "Prepare and review documentation",
      "Submit application to the lender",
      "Receive decision and terms",
    ],
    faqs: [
      {
        question: "Do I need collateral for a business loan?",
        answer:
          "Some business loans are unsecured while others require collateral. The requirement depends on the lender, loan amount, and your business profile.",
      },
      {
        question: "What is the typical loan amount?",
        answer:
          "Loan amounts vary significantly by lender and your business financials. We can help you understand what may be available based on your profile.",
      },
    ],
  },
  {
    slug: "home-loan",
    title: "Home Loan",
    shortDescription:
      "Explore financing options for purchasing a new home, constructing a property, or transferring an existing loan.",
    description:
      "A home loan is a significant financial commitment. We help you understand lender options, interest rate structures, documentation needs, and the step-by-step process.",
    useCases: [
      "Purchase of ready-to-move-in property",
      "Purchase of under-construction property",
      "Home construction on owned land",
      "Home renovation or extension",
      "Balance transfer of existing home loan",
    ],
    eligibility: [
      "Indian resident aged 21 to 65 years",
      "Stable income source",
      "Satisfactory credit score",
      "Property meets lender's technical and legal criteria",
    ],
    documents: [
      "Identity and address proof",
      "Income proof (salary slips, Form 16, ITR)",
      "Bank statements",
      "Property documents",
      "Passport-size photographs",
    ],
    steps: [
      "Submit your property and financial details",
      "Discuss lender options and rates",
      "Property valuation and legal verification",
      "Complete lender documentation",
      "Disbursement upon approval",
    ],
    faqs: [
      {
        question: "What is the typical tenure for a home loan?",
        answer:
          "Home loan tenures typically range from 5 to 30 years. The available tenure depends on your age, income, and the lender's policy.",
      },
      {
        question: "Can I transfer my existing home loan?",
        answer:
          "Yes, loan balance transfer may be possible. We can help you understand the process, costs, and potential benefits.",
      },
    ],
  },
  {
    slug: "loan-against-property",
    title: "Loan Against Property",
    shortDescription:
      "Explore financing by leveraging your residential or commercial property as security.",
    description:
      "A loan against property allows you to unlock the value of your real estate for personal or business needs. We guide you through lender options and requirements.",
    useCases: [
      "Business expansion funding",
      "Higher education expenses",
      "Medical emergencies",
      "Debt consolidation",
      "Large personal expenses",
    ],
    eligibility: [
      "Ownership of residential or commercial property",
      "Clear property title",
      "Stable income to service the loan",
      "Property meets lender's valuation criteria",
    ],
    documents: [
      "Property ownership documents",
      "Identity and address proof",
      "Income proof",
      "Bank statements",
      "Property valuation report",
    ],
    steps: [
      "Submit property and financial details",
      "Property valuation by lender",
      "Review loan terms and documentation",
      "Complete legal and technical verification",
      "Disbursement upon approval",
    ],
    faqs: [
      {
        question: "What types of property can be used?",
        answer:
          "Most lenders accept residential, commercial, and industrial properties. The property should have a clear title and meet the lender's criteria.",
      },
      {
        question: "How is the loan amount determined?",
        answer:
          "The loan amount is typically a percentage of the property's market value as assessed by the lender's valuer.",
      },
    ],
  },
  {
    slug: "car-loan",
    title: "Car Loan",
    shortDescription:
      "Explore financing options for purchasing a new or used vehicle.",
    description:
      "Whether you are buying a new car or a pre-owned vehicle, we can help you understand available financing options and lender requirements.",
    useCases: [
      "Purchase of new car",
      "Purchase of used car",
      "Two-wheeler financing",
      "Commercial vehicle purchase",
    ],
    eligibility: [
      "Indian resident aged 21 to 65 years",
      "Stable income source",
      "Satisfactory credit history",
      "Vehicle meets lender's criteria",
    ],
    documents: [
      "Identity and address proof",
      "Income proof",
      "Bank statements",
      "Vehicle quotation or invoice",
      "Passport-size photographs",
    ],
    steps: [
      "Share vehicle and financial details",
      "Discuss lender options",
      "Submit required documents",
      "Vehicle valuation if used",
      "Receive decision and disbursement",
    ],
    faqs: [
      {
        question: "Can I get a loan for a used car?",
        answer:
          "Yes, many lenders offer loans for used cars. The terms may differ from new car loans, including interest rates and tenure.",
      },
      {
        question: "What is the typical down payment?",
        answer:
          "Down payment requirements vary by lender and vehicle type. Typically, lenders finance 80-90% of the vehicle's value.",
      },
    ],
  },
  {
    slug: "education-loan",
    title: "Education Loan",
    shortDescription:
      "Explore financing for higher education in India or abroad.",
    description:
      "Education loans can help cover tuition fees, living expenses, and other costs associated with higher education. We help you understand lender options and requirements.",
    useCases: [
      "Undergraduate studies in India",
      "Postgraduate studies in India",
      "Studies abroad",
      "Vocational or professional courses",
    ],
    eligibility: [
      "Indian resident with confirmed admission",
      "Co-applicant with stable income",
      "Course and institution recognized by lender",
      "Satisfactory academic record",
    ],
    documents: [
      "Admission letter from institution",
      "Identity and address proof",
      "Academic records",
      "Co-applicant income proof",
      "Course fee structure",
    ],
    steps: [
      "Submit admission and financial details",
      "Discuss lender options",
      "Prepare documentation",
      "Submit application to lender",
      "Disbursement as per fee schedule",
    ],
    faqs: [
      {
        question: "When does repayment start?",
        answer:
          "Most education loans have a moratorium period covering the course duration plus a grace period. Repayment typically starts after this period.",
      },
      {
        question: "Is a co-applicant required?",
        answer:
          "Yes, most education loans require a co-applicant, typically a parent or guardian, who will be jointly responsible for repayment.",
      },
    ],
  },
  {
    slug: "professional-loan",
    title: "Professional Loan",
    shortDescription:
      "Explore financing tailored for doctors, chartered accountants, architects, and other professionals.",
    description:
      "Professional loans are designed for self-employed professionals to meet personal or practice-related financing needs. We help you understand available options.",
    useCases: [
      "Setting up or expanding a practice",
      "Equipment purchase",
      "Working capital needs",
      "Personal expenses",
    ],
    eligibility: [
      "Qualified professional (CA, doctor, architect, etc.)",
      "Valid professional registration",
      "Stable practice income",
      "Satisfactory credit history",
    ],
    documents: [
      "Professional degree and registration certificate",
      "Identity and address proof",
      "Income proof (ITR, bank statements)",
      "Practice establishment proof",
    ],
    steps: [
      "Submit professional and financial details",
      "Discuss tailored lender options",
      "Prepare documentation",
      "Submit application",
      "Receive decision",
    ],
    faqs: [
      {
        question: "Which professionals are eligible?",
        answer:
          "Eligibility varies by lender but typically includes doctors, chartered accountants, architects, engineers, and company secretaries.",
      },
      {
        question: "Can the loan be used for personal needs?",
        answer:
          "Some professional loans can be used for both practice and personal needs. The permitted use depends on the specific lender's policy.",
      },
    ],
  },
  {
    slug: "machinery-equipment-finance",
    title: "Machinery & Equipment Finance",
    shortDescription:
      "Explore financing for purchasing industrial machinery, equipment, or technology upgrades.",
    description:
      "Machinery and equipment finance helps businesses acquire the tools they need to grow. We guide you through lender options tailored to asset financing.",
    useCases: [
      "Manufacturing machinery",
      "Construction equipment",
      "Medical equipment",
      "IT and technology infrastructure",
      "Agricultural equipment",
    ],
    eligibility: [
      "Registered business entity",
      "Relevant industry experience",
      "Adequate financial track record",
      "Equipment meets lender's criteria",
    ],
    documents: [
      "Business registration documents",
      "Equipment quotation or proforma invoice",
      "Financial statements and ITR",
      "Bank statements",
      "Project report if applicable",
    ],
    steps: [
      "Share equipment and business details",
      "Discuss asset financing options",
      "Prepare documentation",
      "Lender evaluates equipment and business",
      "Receive decision and disbursement",
    ],
    faqs: [
      {
        question: "Is the equipment hypothecated to the lender?",
        answer:
          "Yes, in most cases the financed equipment is hypothecated to the lender until the loan is fully repaid.",
      },
      {
        question: "Can used equipment be financed?",
        answer:
          "Some lenders finance used equipment depending on its age, condition, and residual value. Terms may differ from new equipment financing.",
      },
    ],
  },
  {
    slug: "working-capital-finance",
    title: "Working Capital Finance",
    shortDescription:
      "Explore financing solutions to manage day-to-day business operations and cash flow.",
    description:
      "Working capital finance helps businesses manage operational expenses, inventory, and receivables. We help you understand suitable lender options.",
    useCases: [
      "Inventory purchase",
      "Managing accounts receivable",
      "Operational expense coverage",
      "Seasonal demand financing",
      "Supplier payment management",
    ],
    eligibility: [
      "Established business with turnover history",
      "Positive cash flow track record",
      "Satisfactory banking history",
      "Relevant industry experience",
    ],
    documents: [
      "Business financial statements",
      "GST returns",
      "Bank statements",
      "Debtors and creditors ageing",
      "Stock statements",
    ],
    steps: [
      "Submit business financial details",
      "Discuss working capital options",
      "Prepare and review documentation",
      "Lender evaluates cash flow and credit",
      "Receive sanctioned limit or disbursement",
    ],
    faqs: [
      {
        question: "What is the typical tenure?",
        answer:
          "Working capital facilities are typically short-term, ranging from 1 month to 12 months, and may be renewable.",
      },
      {
        question: "Is collateral required?",
        answer:
          "Some working capital facilities are unsecured, while others may require collateral such as stock, receivables, or property.",
      },
    ],
  },
  {
    slug: "loan-balance-transfer",
    title: "Loan Balance Transfer",
    shortDescription:
      "Explore transferring your existing loan to another lender for potentially better terms.",
    description:
      "A loan balance transfer allows you to move your existing loan to a new lender. We help you understand the process, costs, and potential benefits.",
    useCases: [
      "Home loan balance transfer",
      "Personal loan balance transfer",
      "Business loan balance transfer",
      "Loan against property transfer",
    ],
    eligibility: [
      "Existing loan with satisfactory repayment track record",
      "Minimum repayment period completed",
      "Property meets new lender's criteria (for secured loans)",
      "Satisfactory credit profile",
    ],
    documents: [
      "Existing loan statement and sanction letter",
      "Identity and address proof",
      "Income proof",
      "Property documents (for secured loans)",
      "NOC from existing lender",
    ],
    steps: [
      "Share existing loan details",
      "Discuss new lender options",
      "Compare terms and costs",
      "Apply to new lender",
      "Complete foreclosure and new disbursement",
    ],
    faqs: [
      {
        question: "What are the typical costs involved?",
        answer:
          "Costs may include foreclosure charges from the existing lender, processing fees from the new lender, and legal/valuation charges.",
      },
      {
        question: "When does balance transfer make sense?",
        answer:
          "It may make sense when there is a meaningful difference in interest rates or terms that outweighs the transfer costs over the remaining tenure.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): LoanService | undefined => {
  return loanServices.find((s) => s.slug === slug);
};

export const serviceSlugs = loanServices.map((s) => s.slug);
