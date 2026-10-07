import CareerTeamLogo from '@/assets/sponsors/career-team.png';
import InventiveLogo from '@/assets/sponsors/inventiv.png';
import OpsWerksLogo from '@/assets/sponsors/opswerks.png';
import PythonPHLogo from '@/assets/sponsors/pythonph.png';
import SnazzyFramesLogo from '@/assets/sponsors/snazzy-frames.png';
import UnionBankLogo from '@/assets/sponsors/unionbank.jpeg';

export type SponsorTier = 'apo' | 'agila' | 'durian' | 'cacao' | 'waling-waling';

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  tagline?: string;
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

const sponsors: Sponsor[] = [
    {
    id: 'pythonph',
    name: 'Python Philippines, Inc. (PythonPH)',
    logoUrl: PythonPHLogo.src,
    websiteUrl: 'https://python.ph/',
    tier: 'cacao',
  },
  {
    id: 'opswerks',
    name: 'OpsWerks',
    logoUrl: OpsWerksLogo.src,
    websiteUrl: 'https://opswerks.com/about/about-us',
    tier: 'durian',
  },
  {
    id: 'inventiv',
    name: 'Inventiv',
    logoUrl: InventiveLogo.src,
    websiteUrl: 'https://inventivlabs.io',
    tier: 'agila',
  },
  {
    id: 'careerteam',
    name: 'Career Team',
    logoUrl: CareerTeamLogo.src,
    websiteUrl: 'http://careerteam.com',
    tier: 'waling-waling',
  },
  {
    id: 'unionbank',
    name: 'UnionBank of the Philippines',
    logoUrl: UnionBankLogo.src,
    websiteUrl: 'https://www.unionbankph.com/',
    tier: 'cacao',
  },
  {
    id: 'snazzyframes',
    name: 'Snazzy Frames',
    logoUrl: SnazzyFramesLogo.src,
    websiteUrl: 'https://www.facebook.com/snazzyframes',
    tier: 'durian',
  }
];

export const sponsorTierGroups: SponsorTierGroup[] = sponsorTiers.map((sponsorTier) => ({
  ...sponsorTier,
  sponsors: sponsors.filter((sponsor) => sponsor.tier === sponsorTier.tier),
})) .filter((group) => group.sponsors.length > 0);
