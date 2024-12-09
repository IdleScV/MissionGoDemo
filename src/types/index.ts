export interface SponsorshipOpportunity {
  id: string;
  name: string;
  type: "church" | "missionary";
  location: string;
  description: string;
  goal: number;
  raised: number;
  imageUrl: string;
  mission: string;
  detailedDescription: string;
  sponsorshipTiers: SponsorshipTier[];
  oneTimeTiers: OneTimeTier[];
  updates: Update[];
  gallery: string[];
}

export interface SponsorshipTier {
  name: string;
  amount: number;
  frequency: "monthly";
  benefits: string[];
}

export interface OneTimeTier {
  amount: number;
  description: string;
}

export interface Update {
  date: string;
  title: string;
  content: string;
  imageUrl?: string;
}

// Add a helper type to handle the "all" filtering scenario
export type OpportunityTypeFilter = "all" | "church" | "missionary";
