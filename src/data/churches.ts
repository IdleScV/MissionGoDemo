import { SponsorshipOpportunity } from "../types";

export const churches: SponsorshipOpportunity[] = [
  {
    id: "1",
    name: "St. Mary's Mission",
    type: "church",
    location: "Guatemala City, Guatemala",
    description:
      "Supporting local communities through education and healthcare initiatives.",
    goal: 25000,
    raised: 15000,
    imageUrl: "https://images.unsplash.com/photo-1569627137255-c7b038bdd643",
    mission:
      "Bringing hope through education and healthcare to underserved communities.",
    detailedDescription: `St. Mary's Mission has been serving the local community in Guatemala City for over 20 years. Our mission focuses on providing essential education and healthcare services to families who would otherwise lack access to these fundamental needs.

We operate a primary school serving 200 children, a medical clinic providing basic healthcare services, and a food bank supporting 150 families monthly. Your support helps us maintain and expand these vital services.

Current initiatives include:
- Expanding our medical clinic to include dental services
- Providing school supplies and uniforms to students
- Operating a daily meal program for students
- Offering adult education and vocational training`,
    sponsorshipTiers: [
      {
        name: "Friend",
        amount: 25,
        frequency: "monthly",
        benefits: [
          "Monthly email updates",
          "Access to our prayer request forum",
          "Quarterly newsletter",
        ],
      },
      {
        name: "Supporter",
        amount: 100,
        frequency: "monthly",
        benefits: [
          "All Friend benefits",
          "Personalized impact reports",
          "Virtual meet-and-greets with mission staff",
          "Name on donor wall",
        ],
      },
      {
        name: "Guardian",
        amount: 500,
        frequency: "monthly",
        benefits: [
          "All Supporter benefits",
          "Annual video call with mission leadership",
          "Dedicated relationship manager",
          "VIP mission visits when available",
          "Recognition in annual report",
        ],
      },
    ],
    oneTimeTiers: [
      {
        amount: 50,
        description: "Provide school supplies for one student for a semester",
      },
      {
        amount: 100,
        description: "Support our food bank to feed 5 families for a week",
      },
      {
        amount: 250,
        description: "Fund medical supplies for our clinic for a month",
      },
      {
        amount: 500,
        description: "Sponsor a students education for one semester",
      },
    ],
    updates: [
      {
        date: "2024-03-15",
        title: "New Medical Equipment Arrives",
        content:
          "Thanks to our generous donors, we have received new diagnostic equipment for our clinic.",
        imageUrl:
          "https://images.unsplash.com/photo-1584515933487-779824d29309",
      },
      {
        date: "2024-02-28",
        title: "Student Achievement Celebration",
        content:
          "Our students achieved a 95% pass rate in their recent examinations.",
        imageUrl:
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1548515836-1c6127f5d228",
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    ],
  },
  {
    id: "2",
    name: "Sacred Heart Cathedral",
    type: "church",
    location: "Manila, Philippines",
    description:
      "Restoring historic church while serving urban poor communities.",
    goal: 50000,
    raised: 35000,
    imageUrl: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6",
    mission:
      "Preserving heritage while serving the community through outreach programs.",
    detailedDescription: `Sacred Heart Cathedral stands as a beacon of hope in Manila's bustling urban landscape. Our dual mission encompasses preserving this historic place of worship while actively serving the surrounding communities through various outreach programs.

The cathedral, built in 1891, requires essential restoration work to preserve its architectural heritage and ensure safety for worshippers. Simultaneously, we maintain robust community programs serving over 500 families in our parish.

Our current focus areas include:
- Structural restoration of the cathedral's historic bell tower
- Daily soup kitchen serving 200+ people
- After-school programs for underprivileged children
- Weekly medical missions in partnership with local doctors`,
    sponsorshipTiers: [
      {
        name: "Steward",
        amount: 20,
        frequency: "monthly",
        benefits: [
          "Monthly cathedral newsletter",
          "Prayer intention inclusion",
          "Digital restoration updates",
        ],
      },
      {
        name: "Patron",
        amount: 100,
        frequency: "monthly",
        benefits: [
          "All Steward benefits",
          "Commemorative restoration certificate",
          "Guided cathedral tours",
          "Name on donors wall",
        ],
      },
      {
        name: "Benefactor",
        amount: 500,
        frequency: "monthly",
        benefits: [
          "All Patron benefits",
          "Private blessing ceremony",
          "Custom prayer plaque installation",
          "VIP access to cathedral events",
          "Annual dinner with church leadership",
        ],
      },
    ],
    oneTimeTiers: [
      {
        amount: 100,
        description: "Support our soup kitchen for a week",
      },
      {
        amount: 250,
        description: "Contribute to bell tower restoration materials",
      },
      {
        amount: 500,
        description: "Fund after-school programs for a month",
      },
      {
        amount: 1000,
        description: "Sponsor a major restoration project",
      },
    ],
    updates: [
      {
        date: "2024-03-10",
        title: "Bell Tower Restoration Begins",
        content:
          "The first phase of our historic bell tower restoration project has commenced.",
        imageUrl:
          "https://images.unsplash.com/photo-1642000796206-07db00dfddce",
      },
      {
        date: "2024-02-15",
        title: "Community Kitchen Milestone",
        content:
          "Our soup kitchen has served its 50,000th meal to the community.",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6",
      "https://images.unsplash.com/photo-1642000796206-07db00dfddce",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    ],
  },
];
