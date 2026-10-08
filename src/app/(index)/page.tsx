import Hero from '@/components/Hero';
import Conference from '@/components/Conference';
import WhatIsPyCon from './components/what-is-pycon';
import PyCon2025Highlights from '@/components/PyCon2025Highlights';
import { sponsorTierGroups } from '@/data/sponsors-data';
import SponsorsSection from '@/components/sections/sponsors-section';
import VenueHighlight from '@/components/VenueHighlight';
import HomeFaqSection from '@/components/sections/home-faq-section';
import { HomeFaqSectionData } from '@/data/home-faq-section-data';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsPyCon />
      <Conference />
      <PyCon2025Highlights />
      <SponsorsSection data={sponsorTierGroups} />
      <VenueHighlight /> {/* <-- Line 2: Rendered here */}
      <HomeFaqSection data={HomeFaqSectionData} />
      <CallToAction />
    </>
  );
}