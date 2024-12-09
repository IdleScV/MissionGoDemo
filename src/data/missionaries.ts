import { SponsorshipOpportunity } from '../types';

export const missionaries: SponsorshipOpportunity[] = [
  {
    id: '3',
    name: 'Hope Medical Missions',
    type: 'missionary',
    location: 'Nairobi, Kenya',
    description: 'Providing essential healthcare services to remote communities.',
    goal: 35000,
    raised: 22000,
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309',
    mission: 'Bringing quality healthcare to underserved regions through mobile clinics.',
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
        name: 'Healer',
        amount: 30,
        frequency: 'monthly',
        benefits: [
          'Monthly mission updates',
          'Impact statistics reports',
          'Prayer partnership program'
        ]
      },
      {
        name: 'Caregiver',
        amount: 150,
        frequency: 'monthly',
        benefits: [
          'All Healer benefits',
          'Quarterly video updates from the field',
          'Personal letters from medical staff',
          'Recognition in annual report'
        ]
      },
      {
        name: 'Guardian Angel',
        amount: 500,
        frequency: 'monthly',
        benefits: [
          'All Caregiver benefits',
          'Virtual clinic tours',
          'Direct communication with mission leaders',
          'Opportunity to sponsor specific medical equipment',
          'VIP mission trip opportunities'
        ]
      }
    ],
    oneTimeTiers: [
      {
        amount: 75,
        description: 'Provide essential medicines for 10 patients'
      },
      {
        amount: 200,
        description: 'Fund a day of mobile clinic operations'
      },
      {
        amount: 500,
        description: 'Support a week of maternal health services'
      },
      {
        amount: 1000,
        description: 'Purchase vital medical equipment'
      }
    ],
    updates: [
      {
        date: '2024-03-20',
        title: 'New Mobile Clinic Launch',
        content: 'Our second mobile clinic unit is now operational, allowing us to serve twice as many communities.',
        imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309'
      },
      {
        date: '2024-02-25',
        title: 'Community Health Worker Training',
        content: 'Successfully completed training for 20 new community health workers.',
        imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1584515933487-779824d29309',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'
    ]
  }
];