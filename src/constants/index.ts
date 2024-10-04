import {
  Briefcase,
  Building,
  Cog,
  Fish,
  Globe,
  Users,
  TrendingUp,
  Zap,
  GripHorizontal,
  Stars,
  Lightbulb,
  PersonStanding,
  FileText,
  Truck,
  ParkingMeter,
  Home,
} from "lucide-react";

export const companies = [
  {
    title: "Google",
  },
  {
    title: "Microsoft",
  },
  {
    title: "Amazon",
  },
  {
    title: "Facebook",
  },
  {
    title: "Apple",
  },
  {
    title: "Netflix",
  },
  {
    title: "Tesla",
  },
  {
    title: "Spotify",
  },
  {
    title: "Uber",
  },
  {
    title: "Airbnb",
  },
  {
    title: "GitHub",
  },
  {
    title: "Slack",
  },
  {
    title: "PayPal",
  },
  {
    title: "IBM",
  },
  {
    title: "Oracle",
  },
  {
    title: "Salesforce",
  },
  {
    title: "Adobe",
  },
  {
    title: "Intel",
  },
  {
    title: "Zoom",
  },
];


export const divisions = [
  {
    slug: "business-visa-immigration",
    icon: Briefcase,
    title: "Business & Visa Immigration Consultancy",
    description:
      "End-to-end consultancy for business setup, visa & immigration, and legal documentation to help businesses expand globally.",
    cta: "Learn More",
  },
  {
    slug: "seafood",
    icon: Fish,
    title: "Seafood Division",
    description:
      "Providing fresh, sustainably sourced seafood to wholesalers, hotels, and retailers.",
    cta: "Explore More",
  },
  {
    slug: "autoparts",
    icon: Cog,
    title: "Auto Parts & Lubricants Supplier",
    description:
      "High-quality auto parts and lubricants for industrial and commercial vehicles.",
    cta: "View Products",
  },
  {
    slug: "construction",
    icon: Building,
    title: "Construction Division",
    description:
      "Delivering quality residential and commercial construction projects with precision and on time.",
    cta: "Our Projects",
  },
];

export const features = [
  {
    icon: Globe,
    title: "Global Presence",
    description: "Operations in Oman, Dubai, Saudi Arabia, and beyond",
  },
  {
    icon: Users,
    title: "Personalized Solutions",
    description: "Tailored services for your unique business needs",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Helping businesses expand and thrive globally",
  },
  {
    icon: Zap,
    title: "End-to-End Services",
    description: "Comprehensive solutions from start to finish",
  },
];

export const values = [
  {
    icon: GripHorizontal,
    title: "Integrity",
    description: "We uphold the highest ethical standards.",
  },
  {
    icon: Stars,
    title: "Excellence",
    description: "We aim for superior performance in everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continually adapt to offer the best solutions.",
  },
  {
    icon: PersonStanding,
    title: "Client-Centric",
    description: "We focus on our clients' unique needs and goals.",
  },
];

export const services = [
  {slug:'business-visa-immigration',
    title: "Business & Visa Immigration Consultancy",
    description:
      "Helping businesses with registration, visa processes, and legal documentation, ensuring a seamless global expansion.",
    cta: "Learn More",
    icon: Briefcase,
  },
  {slug:'seafood',
    title: "Seafood Division",
    description:
      "Providing fresh, sustainable seafood to the hospitality and retail sectors.",
    cta: "Explore More",
    icon: Fish,
  },
  {slug:'autoparts',
    title: "Auto Parts & Lubricants Supplier",
    description:
      "Offering reliable auto parts and lubricants for industrial and commercial use.",
    cta: "View Products",
    icon: Cog,
  },
  {slug:'construction',
    title: "Construction Division",
    description:
      "Specializing in residential and commercial construction, with a focus on quality and efficiency.",
    cta: "Our Projects",
    icon: Building,
  },
];

export const Businessservices = [
  {
    title: "Business Formation",
    description:
      "We guide businesses through company registration, ensuring compliance with local regulations and helping secure necessary permits and sponsorships.",
    icon: Building,
    subServices: [
      {
        name: "Company Registration",
        description:
          "Expert assistance in registering your company in compliance with local laws.",
      },
      {
        name: "Business Planning",
        description:
          "Strategic planning to set your business up for success from day one.",
      },
      {
        name: "Local Sponsorship",
        description:
          "Securing reliable local sponsors to support your business operations.",
      },
    ],
  },
  {
    title: "Visa & Immigration Services",
    description:
      "Our visa and immigration experts help businesses and individuals secure work visas, residency permits, and family visas for international expansion.",
    icon: Users,
    subServices: [
      {
        name: "Work Visas",
        description:
          "Streamlined process for obtaining work visas for your employees.",
      },
      {
        name: "Residency Permits",
        description:
          "Assistance in securing long-term residency permits for you and your staff.",
      },
      {
        name: "Family Visas",
        description:
          "Support in obtaining visas for family members of employees.",
      },
    ],
  },
  {
    title: "Legal Documentation",
    description:
      "We provide comprehensive legal documentation services, including contract drafting, compliance advisory, and legal representation.",
    icon: FileText,
    subServices: [
      {
        name: "Contract Drafting",
        description:
          "Professional drafting of all necessary business contracts and agreements.",
      },
      {
        name: "Compliance Advisory",
        description:
          "Expert advice to ensure your business remains compliant with local laws and regulations.",
      },
      {
        name: "Legal Representation",
        description:
          "Skilled legal representation for all your business needs.",
      },
    ],
  },
];

//   Seafood Division - Sub-Services Page
// Sustainable Sourcing
// Content:
// "We source fresh, sustainably harvested seafood from local and international suppliers, ensuring high quality for our clients."
// Wholesale Supply
// Content:
// "Supplying seafood in bulk to wholesalers, restaurants, and hotels with flexible delivery schedules to meet your business needs."

// 6. Auto Parts & Lubricants - Sub-Services Page
// Engine Parts
// Content:
// "Supplying high-quality engine parts for industrial and commercial vehicles, ensuring performance and reliability."
// Lubricants
// Content:
// "We provide premium lubricants for engines and machinery, ensuring smooth operation and longevity."

// 7. Construction Division - Sub-Services Page
// Residential Construction
// Content:
// "We offer end-to-end residential construction services, from design and planning to full project management and delivery."
// Commercial Construction
// Content:
// "Specializing in commercial construction projects, including office buildings, retail centers, and industrial facilities."

export const servicesDivisions = {
  seafood: [
    {
      title: "Sustainable Sourcing",
      description:
        "We source fresh, sustainably harvested seafood from local and international suppliers, ensuring high quality for our clients.",
      icon: Fish,
    },
    {
      title: "Wholesale Supply",
      description:
        "Supplying seafood in bulk to wholesalers, restaurants, and hotels with flexible delivery schedules to meet your business needs.",
      icon: Truck,
    },
  ],
  autoparts: [
    {
      title: "Engine Parts",
      description:
        "Supplying high-quality engine parts for industrial and commercial vehicles, ensuring performance and reliability.",
      icon: Cog,
    },
    {
      title: "Lubricants",
      description:
        "We provide premium lubricants for engines and machinery, ensuring smooth operation and longevity.",
      icon: ParkingMeter,
    },
  ],
  construction: [
    {
      title: "Residential Construction",
      description:
        "We offer end-to-end residential construction services, from design and planning to full project management and delivery.",
      icon: Home,
    },
    {
      title: "Commercial Construction",
      description:
        "Specializing in commercial construction projects, including office buildings, retail centers, and industrial facilities.",
      icon: Building,
    },
  ],
};
