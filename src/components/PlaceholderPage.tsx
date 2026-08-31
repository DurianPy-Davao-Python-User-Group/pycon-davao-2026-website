import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bridgePattern from '@/assets/code-of-conduct/Bridge_Pattern.svg';
import tail4 from '@/assets/code-of-conduct/Tail4.svg';
import border from '@/assets/code-of-conduct/Border.svg';
import mountain from '@/assets/code-of-conduct/Mountain.svg';
import frame from '@/assets/code-of-conduct/Frame_10.svg';
import montySurprised from '@/assets/placeholder/monty_surprised.webp';
import tonyStanding from '@/assets/placeholder/tony_standing.webp';

export interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  additionalText?: React.ReactNode | string;
  actionText?: string;
  actionHref?: string;
}

export default function PlaceholderPage({
  title,
  subtitle = 'PYCON DAVAO 2026',
  badge = 'COMING SOON',
  description = 'This page is currently under construction. Please check back soon for updates!',
  additionalText,
  actionText = 'Back to Home',
  actionHref = '/',
}: PlaceholderPageProps) {
  return (
    <main className="bg-background relative flex min-h-[100dvh] flex-col justify-between overflow-hidden">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <Image
          src={bridgePattern}
          alt=""
          fill
          className="object-cover object-center opacity-95"
          priority
        />
      </div>

      {/* Header Hero Banner */}
      <section className="relative z-10 w-full">
        {/* <div className="relative mx-auto flex w-full items-center justify-between gap-4 px-6 pt-8 pb-6 sm:px-10 sm:pt-12 sm:pb-8 md:px-14 md:pt-16 md:pb-10 lg:px-20 lg:pt-20 lg:pb-12 xl:px-24 xl:pt-24 xl:pb-14">
          <div className="relative z-10 flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h1 className="font-heading text-pycon-orange text-4xl font-extrabold leading-[0.88] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9.5rem]">
              <span className="block">{title}</span>
            </h1>
            <h2 className="font-heading text-pycon-teal text-base font-bold tracking-tight sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              {subtitle}
            </h2>
          </div>
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 shrink-0 select-none">
            <div className="w-24 sm:w-40 md:w-56 lg:w-[360px] xl:w-[440px] 2xl:w-[560px]">
              <Image
                src={tail4}
                alt=""
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div> */}

        {/* Bottom Pattern Border Ribbon */}
        <div className="relative z-20 w-full overflow-hidden leading-none select-none">
          <Image
            src={border}
            alt=""
            width={1920}
            height={56}
            draggable={false}
            className="h-6 w-full object-cover object-center sm:h-8 md:h-10 lg:h-12 xl:h-14"
            priority
          />
        </div>
      </section>

      {/* Main Content Section */}
      <div className="relative z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center gap-8 p-6 sm:p-10 md:p-14 lg:p-20">
        <div className="flex w-full max-w-4xl flex-col items-center rounded-3xl border border-[#fae4b7] bg-[#fbefcf]/85 p-8 text-center shadow-xl backdrop-blur-md sm:p-12 md:p-16">

          {/* Mascots Display */}
          <div className="mb-6 flex items-end justify-center gap-4 sm:gap-8">
            <div className="relative h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44">
              <Image
                src={montySurprised}
                alt="Monty mascot"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48">
              <Image
                src={tonyStanding}
                alt="Tony mascot"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
          </div>

          {/* Badge */}
          {badge && (
            <span className="mb-4 inline-flex items-center rounded-full bg-pycon-beige-card px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-pycon-teal sm:text-sm">
              {badge}
            </span>
          )}

          {/* Description */}
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-pycon-dark-blue sm:text-xl md:text-2xl">
            {description}
          </p>

          {/* Optional Additional Custom Text */}
          {additionalText && (
            <div className="mt-6 max-w-2xl rounded-2xl bg-[#FFF9F2] p-5 font-sans text-base leading-relaxed text-[#072E47]/90 sm:text-lg">
              {typeof additionalText === 'string' ? <p>{additionalText}</p> : additionalText}
            </div>
          )}

          {/* Action Button & Contact */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href={actionHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-pycon-orange px-8 font-heading text-base font-semibold text-pycon-beige shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#e98a00] active:scale-95 sm:h-14 sm:text-lg"
            >
              {actionText}
            </Link>
            <a
              href="mailto:contact@durianpy.org"
              className="inline-flex h-12 items-center justify-center rounded-full border border-pycon-teal bg-transparent px-8 font-heading text-base font-semibold text-pycon-teal transition-all duration-200 hover:bg-pycon-teal hover:text-white active:scale-95 sm:h-14 sm:text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Mountain & Frame Footer Art */}
      <div className="relative pointer-events-none z-10 flex w-full select-none">
        <div className="absolute bottom-[-30px] w-full h-[500px] lg:h-[700px]">
          <Image
            src={frame}
            alt=""
            className="to-pycon-beige from-transparent h-auto w-full opacity-40 object-contain"
            priority
          />
        </div>
        <div className="w-full z-10">
          <Image
            src={mountain}
            alt=""
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}
