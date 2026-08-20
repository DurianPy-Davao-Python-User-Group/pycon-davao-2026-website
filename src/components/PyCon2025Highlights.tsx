'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

import leafRight from '../assets/hero/leafRight.svg';
import image1 from '../assets/highlights-2025/1.png';
import image2 from '../assets/highlights-2025/2.png';
import image3 from '../assets/highlights-2025/3.png';
import image4 from '../assets/highlights-2025/4.png';

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

export default function PyCon2025Highlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);

  const cycleIndex = (offset: number) => {
    setActiveIndex((current) => (current + offset + highlights.length) % highlights.length);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;

    const deltaX = event.clientX - dragStartX.current;

    if (Math.abs(deltaX) >= 45) {
      cycleIndex(deltaX < 0 ? 1 : -1);
    }

    dragStartX.current = null;
  };

  const resetPointer = () => {
    dragStartX.current = null;
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f7efd1] px-0 pt-[52px] pb-[22px] md:pt-[62px] md:pb-[32px] lg:min-h-[820px] lg:pt-[78px] lg:pb-[64px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[250px] left-[-5px] z-0 block h-[36px] w-[36px] bg-[#5da144] [clip-path:polygon(0_0,0_100%,100%_100%)] md:hidden"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[42px] left-[50.5556%] z-0 block w-[59.4863%] select-none lg:hidden"
      >
        <Image
          src={leafRight}
          alt=""
          width={642}
          height={657}
          priority
          draggable={false}
          className="h-auto w-full rotate-[10.87deg] opacity-100 select-none"
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
          className="h-auto w-full rotate-[10.87deg] opacity-100 select-none"
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

        <div className="relative z-10 mx-auto mt-[38px] hidden w-full max-w-[1240px] items-center justify-center lg:flex">
          <button
            type="button"
            aria-label="Previous 2025 highlight"
            onClick={() => cycleIndex(-1)}
            className="absolute top-1/2 left-[2px] z-20 flex h-[121px] w-[58px] -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0 outline-none"
          >
            <ArrowGlyph direction="left" />
          </button>

          <div
            className="relative h-[476px] w-[850px] overflow-hidden rounded-[50px] border-[3px] border-[#F99508] bg-[#d9d9d9]"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={resetPointer}
            onPointerLeave={resetPointer}
            onDragStart={(event) => event.preventDefault()}
            onContextMenu={(event) => event.preventDefault()}
            style={{
              touchAction: 'pan-y',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
          >
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                aria-hidden={index !== activeIndex}
                className={[
                  'absolute inset-0',
                  index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0',
                ].join(' ')}
              >
                <Image
                  src={highlight.src}
                  alt={highlight.alt}
                  fill
                  draggable={false}
                  priority={index === 0}
                  className="pointer-events-none object-cover select-none"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next 2025 highlight"
            onClick={() => cycleIndex(1)}
            className="absolute top-1/2 right-[2px] z-20 flex h-[121px] w-[58px] -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0 outline-none"
          >
            <ArrowGlyph direction="right" />
          </button>
        </div>

        <div className="relative z-10 mx-auto mt-[38px] w-[71.6667%] md:mt-[42px] md:w-[72%] lg:hidden">
          <div
            className="relative aspect-[774/435] w-full overflow-hidden rounded-[5.185vw] bg-[#d9d9d9] md:rounded-[32px]"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={resetPointer}
            onPointerLeave={resetPointer}
            onDragStart={(event) => event.preventDefault()}
            onContextMenu={(event) => event.preventDefault()}
            style={{
              touchAction: 'pan-y',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
          >
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                aria-hidden={index !== activeIndex}
                className={[
                  'absolute inset-0',
                  index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0',
                ].join(' ')}
              >
                <Image
                  src={highlight.src}
                  alt={highlight.alt}
                  fill
                  draggable={false}
                  priority={index === 0}
                  className="pointer-events-none object-cover select-none"
                />
              </div>
            ))}
          </div>

          <div className="mt-[27px] flex items-center justify-center gap-[12px]">
            {highlights.map((highlight, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={highlight.id}
                  type="button"
                  aria-label={`Show highlight ${highlight.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={[
                    'h-[12px] w-[12px] rounded-full border-0 p-0',
                    isActive ? 'bg-[#F99508]' : 'bg-[#f6d394]',
                  ].join(' ')}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
