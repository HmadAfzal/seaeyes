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
  Stamp, Plane, Award, Scale, ShieldCheck
} from "lucide-react";

export const qualities = [
  {
    title: "Efficiency",
  },
  {
    title: "Growth",
  },
  {
    title: "Precision",
  },
  {
    title: "Quality",
  },
  {
    title: "Reliability",
  },
  {
    title: "Strategy",
  },
  {
    title: "Sustainability",
  },
  {
    title: "Partnership",
  },
  {
    title: "Security",
  },
  {
    title: "Excellence",
  },
];



export const divisions = [
  {
    slug: "business-formation",
    icon: FileText,
    title: "Business Formation",
    description: "Simplified solutions for company registration, licensing, and compliance.",
    cta: "Learn More",
    imageUrl: "business.jpg"
  },
  {
    slug: "visa-immigration",
    icon: Briefcase,
    title: "Visa & Immigration Consultancy",
    description: "Expert guidance to help you navigate visa and immigration processes.",
    cta: "Explore More",
    imageUrl: "visa.jpg"
  },
  {
    slug: "seafood",
    icon: Fish,
    title: "Seafood Division",
    description: "High-quality, sustainably sourced seafood for wholesale supply.",
    cta: "Explore More",
    imageUrl: "seafood.jpg"
  },
  {
    slug: "autoparts",
    icon: Cog,
    title: "Auto Parts & Lubricants Supplier",
    description: "Supplying high-performance auto parts and lubricants for commercial and industrial vehicles.",
    cta: "View Products",
    imageUrl: "autoparts.jpg"
  },
  {
    slug: "construction",
    icon: Building,
    title: "Construction Division",
    description: "End-to-end construction management services for residential and commercial projects.",
    cta: "Our Projects",
    imageUrl: "construction.jpg"
  }
]

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

export const servicesDivisions = {
  "business-formation": [
    {
      title: "Company Registration",
      description: "Guidance through company registration, ensuring compliance with local regulations.",
      icon: FileText,
    },
    {
      title: "Licensing & Permits",
      description: "Assistance with obtaining necessary licenses for your business operations.",
      icon: Stamp,
    },
    {
      title: "Business Planning",
      description: "Strategic business planning and operational setup for long-term success.",
      icon: Briefcase,
    },
    {
      title: "Local Sponsorship",
      description: "Secure local sponsorship for foreign entrepreneurs in compliance with regional laws.",
      icon: Users,
    },
  ],
  "visa-immigration": [
    {
      title: "Work Visas",
      description: "Assistance with obtaining work visas for professionals.",
      icon: Briefcase,
    },
    {
      title: "Residency Permits",
      description: "Help with securing residency permits for individuals and families.",
      icon: Home,
    },
    {
      title: "Family Visa Applications",
      description: "Visa services for dependents and family members.",
      icon: Users,
    },
    {
      title: "Investor Visas",
      description: "Guidance on securing visas for business owners and investors.",
      icon: Award,
    },
    {
      title: "Citizenship & Permanent Residency",
      description: "Consultation for citizenship or permanent residency options.",
      icon: Plane,
    },
  ],
  seafood: [
    {
      title: "Sustainable Seafood Sourcing",
      description: "Responsibly sourced seafood from local and international waters.",
      icon: Fish,
    },
    {
      title: "Wholesale Supply",
      description: "Bulk orders of fresh and frozen seafood to meet business needs.",
      icon: Truck,
    },
    {
      title: "Packaging & Distribution",
      description: "Specialized packaging services for secure and efficient transport.",
      icon: ParkingMeter,
    },
    {
      title: "Quality Assurance",
      description: "Ensuring all seafood meets the highest safety and quality standards.",
      icon: ShieldCheck,
    },
    {
      title: "Export & Import Services",
      description: "Handling logistics for international seafood trade, including customs and shipping.",
      icon: Plane,
    },
  ],
  autoparts: [
    {
      title: "Engine Parts Supply",
      description: "Durable and reliable engine parts for heavy-duty vehicles.",
      icon: Cog,
    },
    {
      title: "Brake Systems",
      description: "High-quality brake components that meet stringent safety standards.",
      icon: ParkingMeter,
    },
    {
      title: "Lubricants & Oils",
      description: "Premium lubricants and transmission fluids for enhanced vehicle performance.",
      icon: Truck,
    },
    {
      title: "Vehicle Accessories",
      description: "A wide range of vehicle accessories for both personal and commercial use.",
      icon: Cog,
    },
    {
      title: "Maintenance Consultation",
      description: "Expert vehicle maintenance advice to extend the lifespan of your fleet.",
      icon: Briefcase,
    },
  ],
  construction: [
    {
      title: "Residential Construction",
      description: "Custom home building services with modern design and architecture.",
      icon: Home,
    },
    {
      title: "Commercial Construction",
      description: "Office, retail, and industrial construction services with end-to-end project management.",
      icon: Building,
    },
    {
      title: "Renovation & Remodeling",
      description: "Transforming outdated spaces into modern environments with interior and exterior renovation services.",
      icon: Cog,
    },
    {
      title: "Project Management",
      description: "Complete project coordination, from procurement to completion, ensuring quality and timeliness.",
      icon: Briefcase,
    },
    {
      title: "Turnkey Construction Solutions",
      description: "Ready-to-use spaces delivered with high-quality standards for residential and commercial projects.",
      icon: Scale,
    },
  ],
};




export const faqCategories = [
  {
    title: "General FAQs",
    faqs: [
      {
        question: "What services does SeaEyes International offer?",
        answer: "We're your one-stop solution for business formation, visa & immigration consultancy, seafood sourcing, auto parts & lubricants supply, and construction project management. Whatever your business needs, we've got you covered!"
      },
      {
        question: "How can I get in touch with SeaEyes International?",
        answer: "We'd love to hear from you! Reach us at info@seaeyesintl.com or give us a call at +968 9485 0208. Let's talk business!"
      }
    ]
  },
  {
    title: "Business Formation FAQs",
    faqs: [
      {
        question: "Can SeaEyes help me start my company?",
        answer: "We simplify the entire company registration process, taking care of licenses and compliance, so you can focus on growing your business."
      },
      {
        question: "Do I need a local sponsor to set up a business in the UAE?",
        answer: "In many cases, yes. But don't worry, we provide trusted local sponsorship to help you get started without the hassle!"
      }
    ]
  },
  {
    title: "Visa & Immigration Consultancy FAQs",
    faqs: [
      {
        question: "What visa services does SeaEyes provide?",
        answer: "Whether you're looking for a work visa, investor visa, family visa, or residency permit, we're here to make the process smooth and stress-free."
      },
      {
        question: "How long will it take to process my visa?",
        answer: "It depends on the visa type, but with us handling the paperwork, we aim to get you through the process quickly and efficiently."
      }
    ]
  },
  {
    title: "Seafood Division FAQs",
    faqs: [
      {
        question: "Is your seafood sustainably sourced?",
        answer: "Yes! We're passionate about protecting the ocean, and all our seafood comes from eco-friendly, sustainable fisheries. Fresh, tasty, and good for the planet."
      },
      {
        question: "Who do you supply seafood to?",
        answer: "We supply top-quality seafood to hotels, restaurants, wholesalers, and businesses that need the freshest catch. Let us deliver straight to your kitchen!"
      }
    ]
  },
  {
    title: "Auto Parts & Lubricants FAQs",
    faqs: [
      {
        question: "What kind of auto parts do you provide?",
        answer: "From engine parts to brake systems, lubricants, and more, we keep your vehicles running smoothly with top-quality components."
      },
      {
        question: "Can you help with fleet maintenance advice?",
        answer: "You bet! Our experts can guide you on the best maintenance practices to keep your fleet in peak condition and avoid unnecessary downtime."
      }
    ]
  },
  {
    title: "Construction Division FAQs",
    faqs: [
      {
        question: "What construction services does SeaEyes offer?",
        answer: "We handle everything from custom home builds to large-scale commercial projects. If you can dream it, we can build it!"
      },
      {
        question: "Do you provide project management for construction?",
        answer: "We oversee every step, from planning to completion, ensuring your project stays on time and within budget."
      }
    ]
  }
]