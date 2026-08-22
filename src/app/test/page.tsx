import HomeFaqSection from '@/components/sections/home-faq-section';
import { HomeFaqSectionData } from '@/data/home-faq-section-data';

const page = () => {
  return (
    <div>
      <HomeFaqSection title="Frequently Asked Questions" data={HomeFaqSectionData} />
    </div>
  );
};

export default page;
