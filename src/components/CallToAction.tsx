import Image from 'next/image';
import ctaCard from '@/assets/cta/cta-image.jpg';
import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section className="to-pycon-teal relative flex h-auto min-h-[65dvh] w-full flex-col overflow-hidden bg-gradient-to-b from-transparent p-6 sm:p-10 md:min-h-[70dvh] md:p-14 lg:min-h-[80dvh] xl:min-h-[105dvh] lg:p-20">
      {/* CTA Card Container */}
      <div className="relative mx-auto mt-auto flex h-full min-h-[300px] w-full max-w-[400px] items-center justify-center overflow-hidden rounded-[36px] shadow-[0px_4px_39.3px_0px_#00000040] sm:min-h-[350px] sm:max-w-[520px] sm:rounded-[44px] md:min-h-[400px] md:max-w-[680px] md:rounded-[52px] lg:min-h-[460px] lg:max-w-[820px] lg:rounded-[59px] xl:max-w-[1200px]">
        <Image
          src={ctaCard}
          alt=""
          priority
          unoptimized
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 920px"
          className="object-cover"
        />
        <div aria-hidden className="bg-pycon-beige/90 pointer-events-none absolute inset-0" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 py-8 text-center sm:gap-5 sm:px-10 sm:py-10 md:gap-6 md:px-14 md:py-12 lg:px-20 lg:py-16">
          <h3 className="font-heading text-secondary mt-1 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            Ready to level up your Python journey?
          </h3>
          <p className="text-foreground w-auto text-center text-sm sm:text-base md:text-lg lg:text-xl">
            Secure your badge and be part of Mindanao&apos;s biggest open-source celebration.
          </p>
          <Button className="w-[200px] md:w-[300px] px-6 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-3.5 md:text-lg lg:text-xl font-bold rounded-full">
            Get Tickets
          </Button>
        </div>
      </div>
    </section>
  );
}
