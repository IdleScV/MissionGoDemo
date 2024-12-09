import { SponsorshipOpportunity } from "../types";

export const missionaries: SponsorshipOpportunity[] = [
  {
    id: "20",
    name: "Hope Medical Missions",
    type: "missionary",
    location: "Nairobi, Kenya",
    description:
      "Providing essential healthcare services to remote communities.",
    goal: 35000,
    raised: 22000,
    imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    mission:
      "Bringing quality healthcare to underserved regions through mobile clinics.",
    detailedDescription: `Hope Medical Missions operates mobile clinics that travel to remote villages across Kenya, providing essential healthcare services to communities with limited access to medical facilities. Our team of dedicated healthcare professionals serves thousands of patients annually.

Our mobile clinics offer comprehensive care including preventive services, maternal health care, and treatment for common illnesses. We also provide health education and training to community health workers.

Key programs include:
- Weekly mobile clinic visits to remote villages
- Maternal and child health services
- Vaccination programs
- Health education workshops
- Training for local healthcare workers`,
    sponsorshipTiers: [
      {
        name: "Healer",
        amount: 30,
        frequency: "monthly",
        benefits: [
          "Monthly mission updates",
          "Impact statistics reports",
          "Prayer partnership program",
        ],
      },
      {
        name: "Caregiver",
        amount: 150,
        frequency: "monthly",
        benefits: [
          "All Healer benefits",
          "Quarterly video updates from the field",
          "Personal letters from medical staff",
          "Recognition in annual report",
        ],
      },
      {
        name: "Guardian Angel",
        amount: 500,
        frequency: "monthly",
        benefits: [
          "All Caregiver benefits",
          "Virtual clinic tours",
          "Direct communication with mission leaders",
          "Opportunity to sponsor specific medical equipment",
          "VIP mission trip opportunities",
        ],
      },
    ],
    oneTimeTiers: [
      {
        amount: 75,
        description: "Provide essential medicines for 10 patients",
      },
      {
        amount: 200,
        description: "Fund a day of mobile clinic operations",
      },
      {
        amount: 500,
        description: "Support a week of maternal health services",
      },
      {
        amount: 1000,
        description: "Purchase vital medical equipment",
      },
    ],
    updates: [
      {
        date: "2024-03-20",
        title: "New Mobile Clinic Launch",
        content:
          "Our second mobile clinic unit is now operational, allowing us to serve twice as many communities.",
        imageUrl:
          "https://images.unsplash.com/photo-1584515933487-779824d29309",
      },
      {
        date: "2024-02-25",
        title: "Community Health Worker Training",
        content:
          "Successfully completed training for 20 new community health workers.",
        imageUrl:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1584515933487-779824d29309",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    ],
  },
  {
    id: "21",
    name: "Living Water Project",
    type: "missionary",
    location: "Lima, Peru",
    description: "Building clean water wells in rural communities.",
    goal: 50000,
    raised: 27000,
    imageUrl: "https://images.unsplash.com/photo-1714876906025-77b148689e2c",
    mission:
      "Ensuring sustainable, safe drinking water for families in underdeveloped areas.",
    detailedDescription: `The Living Water Project partners with local communities throughout Peru to construct sustainable wells and filtration systems. By improving access to clean water, we aim to reduce waterborne diseases, improve crop irrigation, and enhance overall quality of life.

Key initiatives include:
- Community-led well construction and maintenance
- Water filtration training for local families
- Hygiene and sanitation workshops
- Infrastructure planning with village leaders`,
    sponsorshipTiers: [
      {
        name: "Water Bearer",
        amount: 25,
        frequency: "monthly",
        benefits: [
          "Monthly email newsletter",
          "Before-and-after well impact photos",
          "Prayer team inclusion",
        ],
      },
      {
        name: "Well Builder",
        amount: 100,
        frequency: "monthly",
        benefits: [
          "All Water Bearer benefits",
          "Quarterly video calls with project teams",
          "Personalized stories from beneficiary families",
          "Listing on our supporters page",
        ],
      },
      {
        name: "Spring of Life",
        amount: 400,
        frequency: "monthly",
        benefits: [
          "All Well Builder benefits",
          "Exclusive virtual site tours",
          "Invitation to an annual supporters summit in Peru",
          "Regular direct communication with project coordinators",
          "Opportunities to sponsor specific wells",
        ],
      },
    ],
    oneTimeTiers: [
      {
        amount: 50,
        description: "Provide water testing kits for a community",
      },
      {
        amount: 250,
        description: "Fund materials for a small filtration unit",
      },
      {
        amount: 600,
        description: "Support the drilling of a shallow well",
      },
      {
        amount: 1500,
        description: "Complete construction of a deep community well",
      },
    ],
    updates: [
      {
        date: "2024-04-10",
        title: "Well Completion in Pucusana",
        content:
          "We successfully completed a new well, providing fresh water to over 300 residents.",
        imageUrl:
          "https://images.unsplash.com/photo-1536113619547-9d83f5f361c9",
      },
      {
        date: "2024-03-05",
        title: "Sanitation Education Classes",
        content:
          "Over 50 families attended our sanitation workshop, learning how to keep their water supply clean.",
        imageUrl:
          "https://images.unsplash.com/photo-1603398071768-cf233e5d70be",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1714876906025-77b148689e2c",
      "https://images.unsplash.com/photo-1536113619547-9d83f5f361c9",
      "https://images.unsplash.com/photo-1603398071768-cf233e5d70be",
    ],
  },
  {
    id: "22",
    name: "Light of Learning Initiative",
    type: "missionary",
    location: "Accra, Ghana",
    description:
      "Supporting education in underserved communities through scholarships and school supplies.",
    goal: 40000,
    raised: 18000,
    imageUrl: "https://images.unsplash.com/photo-1680029548499-7a8b96ba25f6",
    mission:
      "Empowering children through education by providing resources, mentorship, and safe learning environments.",
    detailedDescription: `The Light of Learning Initiative focuses on improving access to quality education. We supply schools with books, desks, and learning materials, and offer scholarships to promising students. Our partnerships with local teachers ensure that educational support is culturally relevant and sustainable.

Key initiatives include:
- School supply drives
- Scholarship programs for high-performing students
- Teacher training workshops
- Mentorship programs with local professionals`,
    sponsorshipTiers: [
      {
        name: "Classroom Friend",
        amount: 20,
        frequency: "monthly",
        benefits: [
          "Monthly education-focused updates",
          "Stories from scholarship recipients",
          "Mentions in newsletters",
        ],
      },
      {
        name: "Academic Ally",
        amount: 75,
        frequency: "monthly",
        benefits: [
          "All Classroom Friend benefits",
          "Quarterly video interviews with students and teachers",
          "Personalized student progress reports",
          "Name listed on supporter wall at school sites",
        ],
      },
      {
        name: "Educational Champion",
        amount: 300,
        frequency: "monthly",
        benefits: [
          "All Academic Ally benefits",
          "Annual virtual school tour",
          "Direct communication with program directors",
          "Option to sponsor a full classroom",
          "Invitation to attend a local school graduation ceremony",
        ],
      },
    ],
    oneTimeTiers: [
      {
        amount: 50,
        description: "Provide notebooks and pencils for an entire class",
      },
      {
        amount: 150,
        description: "Fund a student scholarship for one semester",
      },
      {
        amount: 400,
        description: "Stock a small school library with new books",
      },
      {
        amount: 1000,
        description:
          "Support infrastructure improvements, such as new desks and chairs",
      },
    ],
    updates: [
      {
        date: "2024-05-15",
        title: "New Books for Local Library",
        content:
          "We provided over 200 new textbooks to the local community library, greatly expanding learning resources.",
        imageUrl:
          "https://images.unsplash.com/photo-1593344482729-7d8f5c72bb71",
      },
      {
        date: "2024-04-20",
        title: "First Scholarship Awards Ceremony",
        content:
          "Ten outstanding students received scholarships, enabling them to continue their education.",
        imageUrl:
          "https://images.unsplash.com/photo-1576502200916-3701bbacb861",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1680029548499-7a8b96ba25f6",
      "https://images.unsplash.com/photo-1593344482729-7d8f5c72bb71",
      "https://images.unsplash.com/photo-1576502200916-3701bbacb861",
    ],
  },
  {
    id: "23",
    name: "Harvest for Hope",
    type: "missionary",
    location: "Chennai, India",
    description:
      "Agricultural training and food security initiatives for rural communities.",
    goal: 45000,
    raised: 30000,
    imageUrl: "https://images.unsplash.com/photo-1681586267849-e16c3a14db08",
    mission:
      "Improving food security and livelihoods through sustainable farming techniques.",
    detailedDescription: `Harvest for Hope partners with local farmers to improve crop yields, introduce sustainable farming methods, and create stable food supplies. By providing seeds, tools, and training, we help families achieve food security and reduce poverty.

Key initiatives include:
- Distribution of high-quality seeds and fertilizers
- Training on sustainable, climate-resilient farming techniques
- Introduction of water-saving irrigation methods
- Linking farmers to fair market opportunities`,
    sponsorshipTiers: [
      {
        name: "Seed Sower",
        amount: 25,
        frequency: "monthly",
        benefits: [
          "Bi-monthly project updates",
          "Stories of families impacted",
          "Invitations to online Q&A sessions",
        ],
      },
      {
        name: "Field Cultivator",
        amount: 100,
        frequency: "monthly",
        benefits: [
          "All Seed Sower benefits",
          "Seasonal video documentary segments",
          "Personal farmer success stories emailed quarterly",
          "Recognition in project newsletters",
        ],
      },
      {
        name: "Harvest Benefactor",
        amount: 400,
        frequency: "monthly",
        benefits: [
          "All Field Cultivator benefits",
          "Live virtual farm tours",
          "Direct messaging with project leaders",
          "Opportunities to sponsor large-scale irrigation systems",
          "Invitation to join an annual harvest celebration event",
        ],
      },
    ],
    oneTimeTiers: [
      {
        amount: 60,
        description: "Supply a family farm with quality seeds",
      },
      {
        amount: 200,
        description: "Provide tools and irrigation equipment for a small farm",
      },
      {
        amount: 500,
        description:
          "Sponsor a sustainable farming training program for multiple villages",
      },
      {
        amount: 1200,
        description: "Fund a community-wide irrigation system upgrade",
      },
    ],
    updates: [
      {
        date: "2024-06-10",
        title: "New Irrigation Systems Installed",
        content:
          "We successfully installed drip irrigation systems in three villages, improving water efficiency.",
        imageUrl:
          "https://images.unsplash.com/photo-1598618446587-47b2b136c6e2",
      },
      {
        date: "2024-05-25",
        title: "Farmer Training Workshop",
        content:
          "Trained over 30 farmers in advanced soil management techniques, boosting crop productivity.",
        imageUrl: "https://images.unsplash.com/photo-1559523168-2c5fdc27e295",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1681586267849-e16c3a14db08",
      "https://images.unsplash.com/photo-1598618446587-47b2b136c6e2",
      "https://images.unsplash.com/photo-1559523168-2c5fdc27e295",
    ],
  },
];
