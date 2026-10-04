export type SponsorTier = 'apo' | 'agila' | 'durian' | 'cacao' | 'waling-waling';

export interface Sponsor {
  id: string;
  name: string;
  tagline?: string;
  logoUrl: string;
  websiteUrl: string;
  tier: SponsorTier;
}
export interface SponsorTierGroup {
  tier: SponsorTier;
  displayName: string;
  sponsors: Sponsor[];
}

export const sponsorPlaceholderLogoUrl = '/images/sponsors/placeholder.svg';

const sponsorTiers: Omit<SponsorTierGroup, 'sponsors'>[] = [
  { tier: 'apo', displayName: 'Apo' },
  { tier: 'agila', displayName: 'Agila' },
  { tier: 'durian', displayName: 'Durian' },
  { tier: 'cacao', displayName: 'Cacao' },
  { tier: 'waling-waling', displayName: 'Waling-Waling' },
];

const sponsors: Sponsor[] = [];

export const sponsorTierGroups: SponsorTierGroup[] = sponsorTiers.map((sponsorTier) => ({
  ...sponsorTier,
  sponsors: sponsors.filter((sponsor) => sponsor.tier === sponsorTier.tier),
}));
