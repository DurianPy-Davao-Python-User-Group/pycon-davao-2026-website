'use client';

import Image from 'next/image';
import { useCallback, useState, useSyncExternalStore } from 'react';

import leaf6 from '@/assets/hero/leaf6.svg';
import leafRight from '@/assets/hero/leafRight.svg';
import pattern4 from '@/assets/hero/pattern-4.svg';
import image1 from '@/assets/highlights-2025/1.webp';
import image2 from '@/assets/highlights-2025/2.webp';
import image3 from '@/assets/highlights-2025/3.webp';
import image4 from '@/assets/highlights-2025/4.webp';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const highlights = [
  {
    id: 1,
    src: image1,
    alt: 'PyCon Davao 2025 highlight 1',
  },
  {
    id: 2,
    src: image2,
    alt: 'PyCon Davao 2025 highlight 2',
  },
  {
    id: 3,
    src: image3,
    alt: 'PyCon Davao 2025 highlight 3',
  },
  {
    id: 4,
    src: image4,
    alt: 'PyCon Davao 2025 highlight 4',
  },
  {
    id: 5,
    src: image4,
    alt: 'PyCon Davao 2025 highlight 5',
  },
];

const stats = [
  {
    value: '200–400',
    label: 'Attendees expected',
  },
  {
    value: '2 Days',
    label: 'Talks, workshops, and sprints',
  },
  {
    value: '20+',
    label: 'Philippine dev communities',
  },
  {
    value: 'Multiple',
    label: 'Parallel tracks',
  },
];

function ArrowGlyph({ direction }: { direction: 'left' | 'right' }) {
  return (
    <span
      aria-hidden="true"
      className="font-heading block text-[96px] leading-none font-bold tracking-[-0.06em] text-[#072e47] select-none"
    >
      {direction === 'left' ? '<' : '>'}
    </span>
  );
}

function Divider() {
  return (
    <div className="relative z-20 w-full overflow-hidden leading-none">
      <Image
        src={pattern4}
        alt=""
        width={1920}
        height={99}
        draggable={false}
        className="h-6 w-full object-cover object-center sm:h-9 md:h-12"
      />
    </div>
  );
}

export default function PyCon2025Highlights() {
  const [api, setApi] = useState<CarouselApi>();

  const subscribe = useCallback(
    (callback: () => void) => {
      if (!api) return () => { };
      api.on('select', callback);
      api.on('reInit', callback);
      return () => {
        api.off('select', callback);
        api.off('reInit', callback);
      };
    },
    [api],
  );

  const activeIndex = useSyncExternalStore(
    subscribe,
    () => (api ? api.selectedScrollSnap() : 0),
    () => 0,
  );

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f7efd1]">
      <div className="relative pt-[52px] pb-[54px] md:pt-[62px] md:pb-[70px] lg:pt-[78px] lg:pb-[92px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[250px] left-[-5px] z-0 block h-[36px] w-[36px] bg-[#5da144] [clip-path:polygon(0_0,0_100%,100%_100%)] md:hidden"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[42px] left-[50.5556%] z-0 w-[59.4863%] select-none lg:hidden"
        >
          <Image
            src={leafRight}
            alt=""
            width={642}
            height={657}
            priority
            draggable={false}
            className="h-auto w-full rotate-[10.87deg] select-none"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[88px] left-[83.3%] z-0 hidden w-[33.461%] select-none lg:block"
        >
          <Image
            src={leafRight}
            alt=""
            width={642}
            height={657}
            priority
            draggable={false}
            className="h-auto w-full rotate-[10.87deg] select-none"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <header className="relative z-10 text-center">
            <p className="font-heading text-[23px] leading-none font-bold tracking-[-0.06em] text-[#04B1A4] md:text-[30px] lg:text-[35px]">
              Looking Back:
            </p>

            <h2 className="font-heading mt-[8px] text-[45px] leading-none font-bold tracking-[-0.06em] whitespace-nowrap text-[#F99508] md:text-[50px] lg:mt-[12px] lg:text-[68px]">
              PyCon Davao 2025
            </h2>
          </header>

          {/* Carousel – single responsive instance for all breakpoints */}
          <Carousel
            opts={{ loop: true }}
            setApi={setApi}
            className="relative z-10 mx-auto mt-[38px] w-[71.6667%] md:mt-[42px] md:w-[72%] lg:mt-[38px] lg:w-full lg:max-w-[1240px]"
          >
            {/* Desktop arrow buttons – hidden on mobile */}
            <CarouselPrevious
              variant="ghost"
              size="icon"
              className="hidden cursor-pointer border-0 bg-transparent p-0 shadow-none hover:bg-transparent lg:absolute lg:top-1/2 lg:left-[2px] lg:z-20 lg:flex lg:h-[121px] lg:w-[58px] lg:-translate-y-1/2 lg:items-center lg:justify-center lg:rounded-none"
            >
              <ArrowGlyph direction="left" />
            </CarouselPrevious>

            <div className="overflow-hidden rounded-[5.185vw] border-[3px] border-[#F99508] bg-[#d9d9d9] md:rounded-[32px] lg:mx-auto lg:max-w-[850px] lg:rounded-[50px]">
              <CarouselContent className="-ml-0">
                {highlights.map((highlight, index) => (
                  <CarouselItem key={highlight.id} className="pl-0">
                    <div className="relative aspect-[774/435] w-full lg:aspect-auto lg:h-[476px]">
                      <Image
                        src={highlight.src}
                        alt={highlight.alt}
                        fill
                        draggable={false}
                        priority={index === 0}
                        className="pointer-events-none object-cover select-none"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>

            <CarouselNext
              variant="ghost"
              size="icon"
              className="hidden cursor-pointer border-0 bg-transparent p-0 shadow-none hover:bg-transparent lg:absolute lg:top-1/2 lg:right-[2px] lg:z-20 lg:flex lg:h-[121px] lg:w-[58px] lg:-translate-y-1/2 lg:items-center lg:justify-center lg:rounded-none"
            >
              <ArrowGlyph direction="right" />
            </CarouselNext>
          </Carousel>

          {/* Dot indicators synced with Embla API */}
          <div className="mt-[27px] flex items-center justify-center gap-3">
            {highlights.map((highlight, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={highlight.id}
                  type="button"
                  aria-label={`Show highlight ${highlight.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => api?.scrollTo(index)}
                  className={[
                    'size-3 cursor-pointer rounded-full border-0 p-0',
                    isActive ? 'bg-[#F99508]' : 'bg-[#f6d394]',
                  ].join(' ')}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[28px] left-[-88px] z-0 w-[280px] select-none sm:left-[-100px] sm:w-[340px] md:top-[16px] md:left-[-122px] md:w-[420px] lg:hidden"
        >
          <Image
            src={leaf6}
            alt=""
            width={642}
            height={657}
            draggable={false}
            className="block h-auto w-full max-w-none select-none"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-642px] left-[-125px] z-0 hidden w-[520px] select-none lg:block xl:left-[-110px] xl:w-[570px]"
        >
          <Image
            src={leaf6}
            alt=""
            width={642}
            height={657}
            draggable={false}
            className="block h-auto w-full max-w-none select-none"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] pb-[46px] md:pb-[66px] lg:pb-[82px]">
          <div className="mx-auto w-[72%] rounded-[24px] border-[2px] border-[#F99508] px-[22px] py-[24px] text-[#072E47] sm:rounded-[28px] sm:px-[28px] sm:py-[28px] md:w-[76%] md:rounded-[34px] md:px-[38px] md:py-[34px] lg:w-[76.4%] lg:max-w-[1100px] lg:rounded-[40px] lg:border-[3px] lg:px-[46px] lg:py-[39px]">
            <h3 className="font-heading text-[27px] leading-none font-bold tracking-[-0.06em] text-[#F99508] sm:text-[31px] md:text-[38px] lg:text-[46px]">
              What went down?
            </h3>

            <div className="mt-[12px] font-sans text-[14px] leading-[1.16] font-normal tracking-[-0.045em] sm:text-[16px] md:text-[20px] lg:mt-[15px] lg:text-[25px] lg:leading-[1.12]">
              <p>
                PyCon Davao 2025, themed Panaghiusa (&quot;unity&quot; or &quot;coming
                together&quot;), was the first full-scale Python conference in the Davao Region.
                Over two days the community:
              </p>

              <ul className="mt-[18px] list-disc space-y-[3px] pl-[22px] sm:pl-[26px] md:pl-[30px] lg:mt-[24px] lg:pl-[34px]">
                <li>
                  Ran an in-person conference with 16 national and international speakers across
                  keynotes, web development, AI and data science, Python internals, open source, and
                  community-building tracks.
                </li>

                <li>
                  Capped the weekend with a dedicated Sprint Day contributing to open-source
                  projects such as Air and pandas.
                </li>

                <li>
                  Celebrated community-driven innovation, knowledge sharing, and collaboration
                  across Davao and beyond.
                </li>
              </ul>

              <p className="mt-[18px] font-bold tracking-[-0.055em] md:mt-[22px] lg:mt-[26px]">
                That milestone set the stage for an even more ambitious PyCon Davao 2026.
              </p>
            </div>
          </div>
        </div>

        <Divider />

        <div className="relative z-10 mx-auto w-full max-w-[1464px] px-0 pt-[46px] pb-[45px] sm:pt-[54px] sm:pb-[55px] md:pt-[62px] md:pb-[62px] lg:px-[46px] lg:pt-[72px] lg:pb-[68px]">
          <div className="mx-auto grid w-[65.6%] grid-cols-1 gap-[22px] md:w-[82%] md:grid-cols-2 md:gap-[30px] lg:w-full lg:grid-cols-2 lg:gap-[46px]">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex aspect-[709/243] w-full flex-col items-center justify-center rounded-[23px] bg-[#F99508] px-[16px] text-center text-[#FBEFCF] sm:rounded-[28px] md:aspect-auto md:min-h-[160px] lg:min-h-[190px] lg:rounded-[36px]"
              >
                <p className="font-heading text-[40px] leading-[0.94] font-bold tracking-[-0.06em] sm:text-[47px] md:text-[48px] lg:text-[62px]">
                  {stat.value}
                </p>

                <p className="mt-[7px] font-sans text-[17px] leading-none font-normal tracking-[-0.04em] sm:text-[19px] md:text-[20px] lg:mt-[10px] lg:text-[27px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-[34px] w-[72%] max-w-[760px] text-center font-sans text-[13px] leading-[1.3] font-normal tracking-[-0.035em] text-[#072E47] italic sm:text-[15px] md:mt-[40px] md:text-[17px] lg:mt-[46px] lg:text-[20px]">
            Numbers updated as we get closer. Lock in your seat before we hit capacity.
          </p>
        </div>

        <Divider />
      </div>
    </section>
  );
}
