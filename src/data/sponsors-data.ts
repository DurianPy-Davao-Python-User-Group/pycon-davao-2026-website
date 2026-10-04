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

const sponsors: Sponsor[] = [
    {
    id: 'pythonph',
    name: 'Python Philippines, Inc. (PythonPH)',
    tagline: 'PythonPH is a non-stock, non-profit, volunteer-run organization dedicated to support and facilitate the growth of the community of Python programmers in the Philippines.',
    logoUrl: PythonPHLogo.src,
    websiteUrl: 'https://python.ph/',
    tier: 'cacao',
  },
  {
    id: 'opswerks',
    name: 'OpsWerks',
    tagline: 'IT Managed Services',
    logoUrl: OpsWerksLogo.src,
    websiteUrl: 'https://opswerks.com/about/about-us',
    tier: 'durian',
  },
  {
    id: 'inventiv',
    name: 'Inventiv',
    tagline: 'Inventiv is a software development company that builds scalable systems designed to grow with intention. We deliver custom software development, cloud solutions, API integration, system architecture, and technical consulting to forward-thinking businesses, managing each engagement from concept through deployment and ongoing support.',
    logoUrl: InventiveLogo.src,
    websiteUrl: 'https://inventivlabs.io',
    tier: 'agila',
  },
  {
    id: 'careerteam',
    name: 'Career Team',
    tagline: 'As a workforce services provider and a workforce technology vendor, we bring practical, on-the-ground knowledge into system design and implementation. Our platform is Career Edge - a cloud-native, purpose-built solution designed by workforce development professionals for workforce development professionals — solving common legacy challenges such as outdated user experiences, limited integrations, siloed workflows, and cumbersome reporting.',
    logoUrl: CareerTeamLogo.src,
    websiteUrl: 'http://careerteam.com',
    tier: 'waling-waling',
  },
  {
    id: 'unionbank',
    name: 'UnionBank of the Philippines',
    tagline: 'UnionBank empowers consumers to live their best lives through the latest financial innovations.',
    logoUrl: UnionBankLogo.src,
    websiteUrl: 'https://www.unionbankph.com/',
    tier: 'cacao',
  },
  {
    id: 'snazzyframes',
    name: 'Snazzy Frames',
    tagline: 'Snazzy Frames is an interactive photobooth experience that brings fun, creativity, and instant keepsakes to events. Guests can take photos, receive printed photo strips or keychains, and get their digital copies online—making every event a little more memorable and shareable.',
    logoUrl: SnazzyFramesLogo.src,
    websiteUrl: 'https://www.facebook.com/snazzyframes',
    tier: 'durian',
  }
];

export const sponsorTierGroups: SponsorTierGroup[] = sponsorTiers.map((sponsorTier) => ({
  ...sponsorTier,
  sponsors: sponsors.filter((sponsor) => sponsor.tier === sponsorTier.tier),
})) .filter((group) => group.sponsors.length > 0);
