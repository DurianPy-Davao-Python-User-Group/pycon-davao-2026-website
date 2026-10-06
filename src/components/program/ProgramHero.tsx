import Image from 'next/image';
import backgroundFlowersLeft from '@/assets/program/bg-flower1.svg';
import backgroundFlowersRight from '@/assets/program/bg-flower2.svg';
import backgroundPattern from '@/assets/program/bg-pattern1.svg';
import tail from '@/assets/program/tail.svg';
import bottomPattern from '@/assets/program/hero-pattern.svg';
import bottomTribalPattern from '@/assets/program/hero-pattern2.svg';
import mascot from '@/assets/program/mascot.svg';
import gradient from '@/assets/program/gradient.svg';

export default function ProgramHero() {
  return (
    <>
      <section
        className="relative flex min-h-[280px] w-full items-center justify-center overflow-hidden bg-pycon-beige sm:min-h-[300px] sm:aspect-[1369/557]"
      >
        {/* Background decorations */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-no-repeat"
          aria-hidden="true"
          style={{
            backgroundImage: `
              url(${backgroundFlowersLeft.src}),
              url(${backgroundPattern.src}),
              url(${backgroundFlowersRight.src}),
              url(${tail.src})
            `,
            backgroundPosition:
              'left center, center center, right center, center bottom',
            backgroundSize:
              'auto 100%, auto 130%, auto 100%, auto 31%',
          }}
        />

        {/* Hero text */}
        <div className="relative z-10 flex w-full flex-col items-center px-4 text-center lg:mr-[8%] lg:w-[72%] lg:px-6">
          <h1
            id="program-hero-title"
            className="font-heading text-[clamp(2.8rem,10vw,8.5rem)] leading-[0.92] font-extrabold tracking-[0.015em] text-pycon-orange"
          >
            SCHEDULE
          </h1>
          <p className="font-heading mt-3 max-w-full text-[clamp(1rem,3.35vw,3rem)] leading-tight font-bold tracking-[-0.035em] text-pycon-teal sm:mt-4">
            PYCON DAVAO AT A GLANCE
          </p>
        </div>

        {/* Gradient at the bottom of the section */}
        <div
          className="absolute inset-x-0 bottom-0 z-25 h-[100px] bg-bottom bg-repeat-x sm:h-[120px]"
          style={{
            backgroundImage: `url(${gradient.src})`,
            backgroundSize: 'auto 100%',
          }}
          aria-hidden="true"
        />

        {/* Mascot */}
        <Image
          src={mascot}
          alt=""
          priority
          className="absolute right-[0%] z-30 h-[65%] w-auto max-w-none object-contain object-bottom sm:h-[75%] lg:h-[85%]"
        />
      </section>

      <div className="w-full">
        <div
          className="h-[50px] w-full bg-repeat-x bg-bottom"
          style={{
            backgroundImage: `url(${bottomPattern.src})`,
            backgroundSize: 'auto 100%',
          }}
          aria-hidden="true"
        />

        <div
          className="mt-2 h-[50px] w-full bg-repeat-x bg-bottom"
          style={{
            backgroundImage: `url(${bottomTribalPattern.src})`,
            backgroundSize: 'auto 100%',
          }}
          aria-hidden="true"
        />
      </div>
    </>
  );
}
