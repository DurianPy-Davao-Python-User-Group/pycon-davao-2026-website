import CareerTeamLogo from '@/assets/sponsors/career-team.png';
import InventiveLogo from '@/assets/sponsors/inventiv.png';
import OpsWerksLogo from '@/assets/sponsors/opswerks.png';
import PythonPHLogo from '@/assets/sponsors/pythonph.png';
import UnionBankLogo from '@/assets/sponsors/unionbank.jpeg';
import ACCESSLogo from '@/assets/sponsors/access.png';
import AWSUGLogo from '@/assets/sponsors/awsug-davao.png';
import CSSECLogo from '@/assets/sponsors/cssec.png';
import DataEngineeringPHLogo from '@/assets/sponsors/data-engineering-pilipinas.png';
import DevConDavaoLogo from '@/assets/sponsors/devcon-davao.png';
import DjangoGirlsCDOLogo from '@/assets/sponsors/django-girls-cdo.png';
import MinNaLprocRDLabLogo from '@/assets/sponsors/minna-lproc-r&d-laboratory.png';
import PizzayPYLogo from '@/assets/sponsors/pizzapy.png';
import PyBalanghayLogo from '@/assets/sponsors/pybalanghay.webp';
import PythonAsiaOrgLogo from '@/assets/sponsors/python-asia-organization.png';
import PyTsadaLogo from '@/assets/sponsors/pytsada.png';
import SparcsLogo from '@/assets/sponsors/sparcs.png';
import SysdevLogo from '@/assets/sponsors/sysdev.png';
import GdgDavaoLogo from '@/assets/sponsors/gdg-davao.png';

export type SponsorTier = 'apo' | 'agila' | 'durian' | 'cacao' | 'waling-waling' | 'partners';

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  tagline?: string;
  websiteUrl?: string;
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
  { tier: 'partners', displayName: 'Community Partners' },
];

const sponsors: Sponsor[] = [
  {
    id: 'access',
    name: 'ACCESS',
    logoUrl: ACCESSLogo.src,
    tier: 'partners',
  },
  {
    id: 'awsug',
    name: 'AWSUG Davao',
    logoUrl: AWSUGLogo.src,
    tier: 'partners',
  },
  {
    id: 'career-team',
    name: 'Career Team',
    logoUrl: CareerTeamLogo.src,
    websiteUrl: 'http://careerteam.com',
    tier: 'waling-waling',
  },
  {
    id: 'cssec',
    name: 'CSSEC',
    logoUrl: CSSECLogo.src,
    tier: 'partners',
  },
  {
    id: 'data-engineering-pilipinas',
    name: 'Data Engineering Pilipinas',
    logoUrl: DataEngineeringPHLogo.src,
    tier: 'partners',
  },
  {
    id: 'dev-con-davao',
    name: 'DevCon Davao',
    logoUrl: DevConDavaoLogo.src,
    tier: 'partners',
  },
  {
    id: 'django-girls-cdo',
    name: 'Django Girls CDO',
    logoUrl: DjangoGirlsCDOLogo.src,
    tier: 'partners',
  },
  {
    id: 'gdg-davao',
    name: 'GDG Davao',
    logoUrl: GdgDavaoLogo.src,
    tier: 'partners',
  },
  {
    id: 'inventiv',
    name: 'Inventiv',
    logoUrl: InventiveLogo.src,
    websiteUrl: 'https://inventivlabs.io',
    tier: 'agila',
  },
  {
    id: 'minna-lproc-rdlab',
    name: ' MinNa LProc R&D Laboratory',
    logoUrl: MinNaLprocRDLabLogo.src,
    tier: 'partners',
  },
  {
    id: 'opswerks',
    name: 'OpsWerks',
    logoUrl: OpsWerksLogo.src,
    websiteUrl: 'https://opswerks.com/about/about-us',
    tier: 'durian',
  },
  {
    id: 'pizzaypy',
    name: 'PizzayPY',
    logoUrl: PizzayPYLogo.src,
    tier: 'partners',
  },
  {
    id: 'pybalanghay',
    name: 'PyBalanghay',
    logoUrl: PyBalanghayLogo.src,
    tier: 'partners',
  },
  {
    id: 'python-asia-org',
    name: 'Python Asia Organization',
    logoUrl: PythonAsiaOrgLogo.src,
    tier: 'partners',
  },
  {
    id: 'pythonph',
    name: 'Python Philippines, Inc. (PythonPH)',
    logoUrl: PythonPHLogo.src,
    websiteUrl: 'https://python.ph/',
    tier: 'cacao',
  },
  {
    id: 'pytsada',
    name: 'PyTsada',
    logoUrl: PyTsadaLogo.src,
    tier: 'partners',
  },
  {
    id: 'sparcs',
    name: 'SPARCS',
    logoUrl: SparcsLogo.src,
    tier: 'partners',
  },
  {
    id: 'sysdev',
    name: 'SysDev',
    logoUrl: SysdevLogo.src,
    tier: 'partners',
  },
  {
    id: 'unionbank',
    name: 'UnionBank of the Philippines',
    logoUrl: UnionBankLogo.src,
    websiteUrl: 'https://www.unionbankph.com/',
    tier: 'cacao',
  },
];

export const sponsorTierGroups: SponsorTierGroup[] = sponsorTiers
  .map((sponsorTier) => ({
    ...sponsorTier,
    sponsors: sponsors.filter((sponsor) => sponsor.tier === sponsorTier.tier),
  }))
  .filter((group) => group.sponsors.length > 0);
