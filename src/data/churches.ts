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
        description: "Sponsor a student's education for one semester",
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
      "https://images.unsplash.com/photo-1569627137255-c7b038bdd643",
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
    imageUrl: "https://images.unsplash.com/photo-1556206346-02882b689a77",
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
        imageUrl:
          "https://images.unsplash.com/photo-1658402218554-f108f838f106",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556206346-02882b689a77",
      "https://images.unsplash.com/photo-1642000796206-07db00dfddce",
      "https://images.unsplash.com/photo-1658402218554-f108f838f106",
    ],
  },
  {
    id: "3",
    name: "Our Lady of Hope Parish",
    type: "church",
    location: "Nairobi, Kenya",
    description:
      "Empowering youth and women through education, mentorship, and microfinance.",
    goal: 30000,
    raised: 10000,
    imageUrl: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4",
    mission:
      "Fostering self-sufficiency and social development in marginalized communities.",
    detailedDescription: `Our Lady of Hope Parish in Nairobi focuses on creating sustainable pathways out of poverty. We emphasize youth education, women's empowerment, and economic development through small-scale enterprise.

Over the past decade, we've supported numerous families through mentorship programs, career counseling, and microloans for budding entrepreneurs. We also run a community library and a vocational training center.

Current initiatives include:
- A women's cooperative providing microloans for small businesses
- Weekly tutoring sessions for 100+ students
- Career guidance and job placement support
- Nutritional support for families affected by drought`,
    sponsorshipTiers: [
      {
        name: "Mentor",
        amount: 30,
        frequency: "monthly",
        benefits: [
          "Monthly program highlights email",
          "Invitations to online mentorship webinars",
          "Special prayer mentions",
        ],
      },
      {
        name: "Advocate",
        amount: 150,
        frequency: "monthly",
        benefits: [
          "All Mentor benefits",
          "Personal stories from program beneficiaries",
          "Name listed on parish support board",
          "Quarterly video updates with parish leaders",
        ],
      },
      {
        name: "Champion",
        amount: 600,
        frequency: "monthly",
        benefits: [
          "All Advocate benefits",
          "Opportunity to sponsor a vocational training module",
          "Annual private Q&A with parish leadership",
          "VIP invitation to community ceremonies",
        ],
      },
    ],
    oneTimeTiers: [
      {
        amount: 50,
        description: "Provide schoolbooks for 5 children",
      },
      {
        amount: 200,
        description: "Fund a microloan for a women's cooperative member",
      },
      {
        amount: 400,
        description: "Sponsor vocational training tools for one semester",
      },
      {
        amount: 800,
        description: "Fund a community library expansion project",
      },
    ],
    updates: [
      {
        date: "2024-04-01",
        title: "Microloan Success Stories",
        content:
          "Five women have successfully grown their small businesses, increasing family income and stability.",
        imageUrl:
          "https://images.unsplash.com/photo-1614474079884-4f6772851ac3",
      },
      {
        date: "2024-03-05",
        title: "Youth Career Fair",
        content:
          "Over 200 young adults attended our career fair, receiving guidance and networking opportunities.",
        imageUrl: "https://images.unsplash.com/photo-1553242041-4f6efefc7b95",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519491050282-cf00c82424b4",
      "https://images.unsplash.com/photo-1614474079884-4f6772851ac3",
      "https://images.unsplash.com/photo-1553242041-4f6efefc7b95",
    ],
  },
  {
    id: "4",
    name: "Basilica of Our Lady of Guadalupe",
    type: "church",
    location: "Mexico City, Mexico",
    description:
      "Preserving cultural heritage and supporting local artisans and community festivities.",
    goal: 60000,
    raised: 20000,
    imageUrl:
      "https://cdn.britannica.com/79/84879-050-D5AF643B/Old-Basilica-of-Guadalupe-Mexico-Our-Lady.jpg",
    mission:
      "Celebrating faith, tradition, and community through art, music, and social support.",
    detailedDescription: `The Basilica of Our Lady of Guadalupe is a vibrant cultural and spiritual hub. Beyond welcoming millions of pilgrims annually, we invest in the local community by promoting traditional crafts, musical education, and cultural events that preserve our rich heritage.

Our projects range from supporting local artisans to offering free music classes to children, ensuring that traditional songs, dances, and craftsmanship thrive for generations to come.

Current initiatives include:
- Artisanal workshops for 50 local craftspeople
- Annual cultural festival showcasing traditional music and dance
- Scholarships for young musicians
- Food and clothing drives for underprivileged families`,
    sponsorshipTiers: [
      {
        name: "Artisan Ally",
        amount: 25,
        frequency: "monthly",
        benefits: [
          "Monthly cultural insights email",
          "Inclusion in community prayer list",
          "Access to craft showcase livestreams",
        ],
      },
      {
        name: "Culture Patron",
        amount: 120,
        frequency: "monthly",
        benefits: [
          "All Artisan Ally benefits",
          "Exclusive festival highlights video",
          "Name in event programs",
          "Quarterly virtual artisan workshops",
        ],
      },
      {
        name: "Heritage Guardian",
        amount: 500,
        frequency: "monthly",
        benefits: [
          "All Culture Patron benefits",
          "Private music class recital invites",
          "Personal introductions to local artisans",
          "Annual behind-the-scenes basilica tour",
        ],
      },
    ],
    oneTimeTiers: [
      {
        amount: 100,
        description: "Fund a week of music lessons for 10 children",
      },
      {
        amount: 300,
        description: "Support a local artisan's material costs for a month",
      },
      {
        amount: 600,
        description: "Sponsor the production of a cultural festival exhibit",
      },
      {
        amount: 1200,
        description: "Fund scholarships for young musicians for a semester",
      },
    ],
    updates: [
      {
        date: "2024-03-25",
        title: "Artisanal Workshop Expansion",
        content:
          "We added a new workshop series teaching traditional weaving techniques to 20 additional families.",
        imageUrl:
          "https://images.unsplash.com/photo-1723074832961-397744da2380",
      },
      {
        date: "2024-02-10",
        title: "Musical Scholarship Winners",
        content:
          "Three talented youths received scholarships to study violin and guitar under renowned instructors.",
        imageUrl:
          "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b",
      },
    ],
    gallery: [
      "https://cdn.britannica.com/79/84879-050-D5AF643B/Old-Basilica-of-Guadalupe-Mexico-Our-Lady.jpg",
      "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b",
      "https://images.unsplash.com/photo-1723074832961-397744da2380",
    ],
  },
  {
    id: "5",
    name: "St. Francis Church",
    type: "church",
    location: "Lusaka, Zambia",
    description:
      "Promoting health, education, and sustainable agriculture in rural communities.",
    goal: 40000,
    raised: 18000,
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipNuRD-im4a29Ll-w2nkW4D_o41y579btEyBegsK=s680-w680-h510",
    mission:
      "Providing holistic community support through faith, health, and livelihood programs.",
    detailedDescription: `St. Francis Church serves as a community anchor in rural Zambia. Our outreach extends beyond spiritual support, focusing on healthcare access, educational opportunities, and sustainable farming practices that improve food security.

From operating a small clinic and a mobile library to training local farmers in modern techniques, we aim to break cycles of poverty and ensure long-term community resilience.

Current initiatives include:
- Mobile health clinics serving 10 villages
- A literacy program reaching 150 children
- Sustainable agriculture workshops for 50 local farmers
- Installation of clean water wells`,
    sponsorshipTiers: [
      {
        name: "Community Friend",
        amount: 20,
        frequency: "monthly",
        benefits: [
          "Monthly project updates",
          "Inclusion in prayer circle",
          "Photos from field activities",
        ],
      },
      {
        name: "Development Partner",
        amount: 100,
        frequency: "monthly",
        benefits: [
          "All Community Friend benefits",
          "Detailed quarterly impact reports",
          "Acknowledgment in church publications",
          "Virtual Q&A with project coordinators",
        ],
      },
      {
        name: "Sustainability Advocate",
        amount: 400,
        frequency: "monthly",
        benefits: [
          "All Development Partner benefits",
          "Opportunity to sponsor a clean water well",
          "Private video calls with program beneficiaries",
          "Annual invitation to on-site visits",
        ],
      },
    ],
    oneTimeTiers: [
      {
        amount: 50,
        description: "Purchase textbooks for 5 children",
      },
      {
        amount: 200,
        description: "Support mobile clinic operations for one week",
      },
      {
        amount: 500,
        description: "Fund training sessions for 10 farmers",
      },
      {
        amount: 1000,
        description: "Install a clean water well serving 100 villagers",
      },
    ],
    updates: [
      {
        date: "2024-03-20",
        title: "New Water Well Completed",
        content:
          "Thanks to generous donors, we completed a new well providing clean water to 80 families.",
        imageUrl:
          "https://images.unsplash.com/photo-1607478907242-35634dc4ce5a",
      },
      {
        date: "2024-02-05",
        title: "Literacy Program Milestone",
        content:
          "Our mobile library now visits three additional villages, expanding access to educational materials.",
        imageUrl:
          "https://images.unsplash.com/photo-1573767128721-5d8d85c4a4b1",
      },
    ],
    gallery: [
      "https://lh3.googleusercontent.com/p/AF1QipNuRD-im4a29Ll-w2nkW4D_o41y579btEyBegsK=s680-w680-h510",
      "https://images.unsplash.com/photo-1607478907242-35634dc4ce5a",
      "https://images.unsplash.com/photo-1573767128721-5d8d85c4a4b1",
    ],
  },
];
