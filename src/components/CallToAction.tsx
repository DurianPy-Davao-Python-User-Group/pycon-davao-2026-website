import Image from 'next/image';
import ctaBg from '@/assets/cta/mobile-bridge-bg.svg';
import ctaBridgePattern from '@/assets/cta/cta-bridge-pattern.svg';
import ctaCard from '@/assets/cta/cta-image.jpg';
import tailLeft from '@/assets/cta/left-tail.svg';
import tailRight from '@/assets/cta/right-tail.svg';
import mascot from '@/assets/cta/pycon-mascot.svg';
import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section className="to-pycon-teal relative flex h-auto min-h-[55dvh] sm:min-h-[60dvh] w-full flex-col overflow-hidden bg-gradient-to-b from-transparent p-6 sm:p-10 md:min-h-[70dvh] md:p-14 lg:min-h-[90dvh] lg:p-20 xl:min-h-[100dvh]">
      {/* Mobile background */}
      <Image
        src={ctaBg}
        alt=""
        priority
        unoptimized
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover md:hidden"
      />

      {/* Tablet and Desktop background pattern */}
      <Image
        src={ctaBridgePattern}
        alt=""
        priority
        unoptimized
        fill
        sizes="100vw"
        className="hidden object-cover md:block"
      />

      {/* CTA Card Container */}
      <div className="relative mx-auto mt-auto flex h-full min-h-[300px] w-full max-w-[400px] items-center justify-center overflow-hidden rounded-[36px] shadow-[0px_4px_39.3px_0px_#00000040] md:min-h-[400px] md:max-w-[680px] md:rounded-[52px] lg:min-h-[460px] lg:max-w-[820px] lg:rounded-[59px] xl:max-w-[1200px]">
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
          <p className="text-foreground w-auto text-center text-sm sm:text-base md:text-lg lg:w-[550px] lg:text-xl xl:w-auto">
            Secure your badge and be part of Davao&apos;s biggest open-source celebration.
          </p>
          <Button disabled className="disabled:pointer-events-none contrast-50 w-[200px] cursor-pointer rounded-full px-6 py-5.5 text-sm font-bold sm:px-8 sm:py-6.5 sm:text-base md:w-[300px] md:px-10 md:py-7.5 md:text-lg lg:text-xl">
            Coming Soon
          </Button>
        </div>
      </div>

      {/* Decorative Tails */}
      <Image
        src={tailLeft}
        alt=""
        priority
        unoptimized
        width={371}
        height={741}
        className="pointer-events-none absolute bottom-58 -left-32 z-40 w-[70vw] drop-shadow-[0px_4px_39.3px_#00000040] md:bottom-78 md:-left-45 md:w-[50vw] lg:bottom-80 lg:-left-80 lg:w-[60vw] xl:bottom-95 xl:w-[45vw] overflow-visible"
      />

      <Image
        src={tailRight}
        alt=""
        priority
        unoptimized
        width={311}
        height={411}
        className="pointer-events-none absolute -right-22 -bottom-4 z-40 w-[48vw] drop-shadow-[0px_4px_39.3px_#00000040] md:w-[35vw] lg:-right-30 lg:-bottom-18 lg:w-[40vw] xl:-bottom-20 xl:w-[30vw]"
      />

      {/*Mascot Image*/}
      <Image
        src={mascot}
        alt="PyCon Mascot"
        priority
        unoptimized
        width={200}
        height={200}
        className="pointer-events-none absolute bottom-0 left-0 z-40 hidden lg:block lg:w-[30vw] xl:w-[22vw]"
      />
    </section>
  );
}
