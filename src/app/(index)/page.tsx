import Hero from '@/components/Hero';
import Conference from '@/components/Conference';
import HomeFaqSection from '@/components/sections/home-faq-section';
import { HomeFaqSectionData } from '@/data/home-faq-section-data';

export default function Home() {
  return (
    <>
      <Hero />
      <Conference />
      <HomeFaqSection title="Frequently Asked Questions" data={HomeFaqSectionData} />
    </>
  );
}
