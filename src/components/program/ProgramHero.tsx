import Image from 'next/image';
import flowerOne from '@/assets/program/bg-flower1.svg';
import flowerTwo from '@/assets/program/bg-flower2.svg';
import heroPattern from '@/assets/program/hero-pattern.svg';
import heroPatternTwo from '@/assets/program/hero-pattern2.svg';
import mascot from '@/assets/program/mascot.svg';

export default function ProgramHero() {
  return (
    <section className="bg-pycon-beige relative isolate overflow-hidden">
      <Image
        src={flowerOne}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-5 -left-24 h-[85%] w-auto opacity-35"
      />
      <Image
        src={flowerTwo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -right-28 h-[95%] w-auto opacity-30"
      />
      <div className="relative mx-auto flex min-h-[310px] max-w-[1440px] items-center px-6 py-12 sm:min-h-[370px] sm:px-12 lg:min-h-[470px] lg:px-16">
        <div className="relative z-10 mx-auto -translate-y-7 text-center sm:-translate-y-8 lg:mx-0 lg:ml-[8%] lg:max-w-4xl lg:translate-y-0 lg:text-left">
          <h1 className="font-heading text-pycon-orange mb-1 text-[clamp(2.5rem,9vw,4rem)] leading-[0.95] font-extrabold tracking-tight lg:text-[clamp(3rem,9vw,7rem)]">
            SCHEDULE
          </h1>
          <p className="font-heading text-pycon-teal-dark text-[clamp(0.875rem,3.8vw,1.5rem)] leading-tight font-extrabold tracking-wide lg:text-[clamp(1rem,3vw,2rem)]">
            PYCON DAVAO AT A GLANCE
          </p>
        </div>
        <Image
          src={mascot}
          alt="PyCon Davao mascot sitting beside the schedule heading"
          priority
          className="pointer-events-none absolute right-[3%] bottom-8 hidden h-[80%] w-auto object-contain lg:block"
        />
        <Image
          src={mascot}
          alt="PyCon Davao mascot beside the schedule heading"
          priority
          className="pointer-events-none absolute right-[5%] bottom-6 h-[38%] w-auto object-contain sm:h-[48%] lg:hidden"
        />
      </div>
      <div aria-hidden="true" className="relative h-16 overflow-hidden sm:h-[72px]">
        <Image
          src={heroPattern}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Image
          src={heroPatternTwo}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
      </div>
    </section>
  );
}
