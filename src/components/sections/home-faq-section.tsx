import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { HomeFaqItem } from '@/data/home-faq-section-data';

interface HomeFaqSectionProps {
  data: HomeFaqItem[];
}

const HomeFaqSection = ({ data }: HomeFaqSectionProps) => {
  return (
    <section className="bg-pycon-beige px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading text-pycon-orange mb-14 text-4xl font-bold sm:text-5xl">
          Frequently Asked Questions
        </h2>

        <Accordion className="grid items-start gap-x-10 gap-y-3 md:grid-cols-2">
          {data.map((item, index) => {
            const question = typeof item === 'string' ? item : item.question;
            const answer = typeof item === 'string' ? '' : item.answer;

            return (
              <AccordionItem
                key={`${question}-${index}`}
                value={`faq-${index}`}
                className="overflow-hidden rounded-3xl border border-[#f4d79a] bg-[#fde6b5] transition-colors focus-within:border-[#efc66f] hover:border-[#efc66f]"
              >
                <AccordionTrigger className="font-heading text-pycon-dark-blue [&_[data-slot=accordion-trigger-icon]]:text-pycon-dark-blue min-h-11 cursor-pointer items-center px-4 py-3 font-bold hover:no-underline sm:px-5">
                  {question}
                </AccordionTrigger>

                {answer && (
                  <AccordionContent className="text-pycon-dark-blue px-4 pb-4 leading-relaxed sm:px-5">
                    {answer}
                  </AccordionContent>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default HomeFaqSection;
