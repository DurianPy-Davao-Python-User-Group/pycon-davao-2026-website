import Hero from '@/components/Hero';
import Conference from '@/components/Conference';
import WhatIsPyCon from './components/what-is-pycon';
import HomeFaqSection from '@/components/sections/home-faq-section';
import { HomeFaqSectionData } from '@/data/home-faq-section-data';
import PyCon2025Highlights from '@/components/PyCon2025Highlights';
import CallToAction from '@/components/CallToAction';
import TicketTypesSection from '@/components/sections/ticket-types-section';

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsPyCon />
      <Conference />
      <PyCon2025Highlights />
      <TicketTypesSection />
      <HomeFaqSection data={HomeFaqSectionData} />
      <CallToAction />
    </>
  );
}
