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
    slug: "business-visa-immigration",
    icon: Briefcase,
    title: "Business & Visa Immigration Consultancy",
    description:
      "End-to-end consultancy for business setup, visa & immigration, and legal documentation to help businesses expand globally.",
    cta: "Learn More",
    imageUrl:"business.jpg"

  },
  {
    slug: "seafood",
    icon: Fish,
    title: "Seafood Division",
    description:
      "Providing fresh, sustainably sourced seafood to wholesalers, hotels, and retailers.",
    cta: "Explore More",
    imageUrl:"seafood.jpg"

  },
  {
    slug: "autoparts",
    icon: Cog,
    title: "Auto Parts & Lubricants Supplier",
    description:
      "High-quality auto parts and lubricants for industrial and commercial vehicles.",
    cta: "View Products",
    imageUrl:"autoparts.jpg"

  },
  {
    slug: "construction",
    icon: Building,
    title: "Construction Division",
    description:
      "Delivering quality residential and commercial construction projects with precision and on time.",
    cta: "Our Projects",
    imageUrl:"construction.jpg"

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

export const 
services = [
  {slug:'business-visa-immigration',
    title: "Business & Visa Immigration Consultancy",
    description:
      "Helping businesses with registration, visa processes, and legal documentation, ensuring a seamless global expansion.",
    cta: "Learn More",
    icon: Briefcase,
    imageUrl:"business.jpg"
  },
  {slug:'seafood',
    title: "Seafood Division",
    description:
      "Providing fresh, sustainable seafood to the hospitality and retail sectors.",
    cta: "Explore More",
    icon: Fish,
    imageUrl:"seafood.jpg"
  },
  {slug:'autoparts',
    title: "Auto Parts & Lubricants Supplier",
    description:
      "Offering reliable auto parts and lubricants for industrial and commercial use.",
    cta: "View Products",
    icon: Cog,
    imageUrl:"autoparts.jpg"
  },
  {slug:'construction',
    title: "Construction Division",
    description:
      "Specializing in residential and commercial construction, with a focus on quality and efficiency.",
    cta: "Our Projects",
    icon: Building,
    imageUrl:"construction.jpg"
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