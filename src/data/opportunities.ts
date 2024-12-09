import { churches } from './churches';
import { missionaries } from './missionaries';
import { SponsorshipOpportunity } from '../types';

export const opportunities: SponsorshipOpportunity[] = [
  ...churches,
  ...missionaries
];