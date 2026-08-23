import Hero from '@/components/Hero';
import Conference from '@/components/Conference';
import HomeFaqSection from '@/components/sections/home-faq-section';
import { HomeFaqSectionData } from '@/data/home-faq-section-data';
import PyCon2025Highlights from '@/components/PyCon2025Highlights';

export default function Home() {
  return (
    <>
      <Hero />
      <Conference />
      <PyCon2025Highlights />
      <HomeFaqSection data={HomeFaqSectionData} />
    </>
  );
}
