'use client';

import { useState, useRef, useEffect } from 'react';
import { Check, X, Info, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  getTicketPricing,
  BASE_TICKETS,
  formatPHP,
  IS_REGISTRATION_OPEN,
} from '@/config/tickets-config';

export type RegistrationLinks = {
  kodigo: string;
  coderKasosyo: string;
  kumpanya: string;
};

interface TicketTypesSelectorProps {
  registrationLinks: RegistrationLinks;
}

export default function TicketTypesSelector({ registrationLinks }: TicketTypesSelectorProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const kodigoPricing = getTicketPricing('kodigo');
  const coderPricing = getTicketPricing('coder');
  const kasosyoPricing = getTicketPricing('kasosyo');
  const extraPricing = getTicketPricing('extra');

  // Kumpanya promo is exclusive of any ticket sale discounts (fixed 15% off regular Coder price)
  const kumpanyaOriginalPrice = coderPricing.regularPrice;
  const kumpanyaDiscountedPrice =
    Math.round(
      coderPricing.regularPrice * (1 - BASE_TICKETS.kumpanyaPromo.discountPercent / 100) * 100,
    ) / 100;

  // Close tooltip when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(false);
      }
    }
    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showTooltip]);

  const handleCardClick = (url: string) => {
    if (!IS_REGISTRATION_OPEN) return;
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="ticket-types"
      aria-labelledby="ticket-types-heading"
      className="bg-pycon-beige relative isolate overflow-hidden px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24"
    >
      <div
        aria-hidden
        className="from-pycon-green/40 pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t to-transparent md:h-48"
      />

      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2
          id="ticket-types-heading"
          className="font-heading text-pycon-orange text-center text-4xl font-extrabold tracking-tight uppercase sm:text-5xl lg:text-6xl"
        >
          Ticket Types
        </h2>

        {/* Notice when registrations are closed */}
        {!IS_REGISTRATION_OPEN ? (
          <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2.5 rounded-xl border border-amber-600/30 bg-amber-500/10 px-5 py-3 text-center text-sm font-semibold text-amber-900 md:text-base">
            <AlertCircle className="size-5 shrink-0 text-amber-700" />
            <span>
              Ticket registrations are currently closed. Check back soon for announcements!
            </span>
          </div>
        ) : (
          <p className="text-pycon-dark-blue mx-auto mt-3 max-w-2xl text-center font-sans text-sm md:text-base">
            Click on any ticket tier to proceed to registration.
          </p>
        )}

        {/* Disclaimers */}
        <div className="text-pycon-dark-blue/80 mx-auto mt-3 flex max-w-3xl flex-col items-center justify-center gap-1 text-center font-sans text-xs sm:flex-row sm:gap-4 md:text-sm">
          <span>* All ticket prices are exclusive of transaction fees.</span>
          <span className="hidden sm:inline">•</span>
          <span>* Sprint Day is exclusive of conference tickets.</span>
        </div>

        {/* 3 Main Ticket Tiers */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {/* 1. KODIGO (Scholarship) */}
          <div
            onClick={() => handleCardClick(registrationLinks.kodigo)}
            role={IS_REGISTRATION_OPEN ? 'button' : undefined}
            tabIndex={IS_REGISTRATION_OPEN ? 0 : undefined}
            onKeyDown={(e) => {
              if (IS_REGISTRATION_OPEN && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                handleCardClick(registrationLinks.kodigo);
              }
            }}
            className={cn(
              'relative flex flex-col justify-between rounded-[28px] bg-[#FBE2B7] p-7 text-[#072E47] shadow-md transition-all duration-300 md:p-8',
              IS_REGISTRATION_OPEN
                ? 'cursor-pointer hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#072E47]'
                : 'opacity-90',
            )}
          >
            <div>
              {/* Sale badge if active */}
              {kodigoPricing.hasDiscount && (
                <div className="bg-pycon-orange mb-3 inline-block rounded-full px-3 py-0.5 text-center text-xs font-bold text-white shadow-sm">
                  {kodigoPricing.saleBadge}
                </div>
              )}

              <h3 className="font-heading text-center text-2xl font-black tracking-tight text-[#072E47] uppercase sm:text-3xl">
                Kodigo
              </h3>
              <p className="font-heading mt-0.5 text-center text-sm font-semibold text-[#072E47]/75">
                (Scholarship)
              </p>

              {/* Pricing Display */}
              <div className="mt-5 text-center">
                {kodigoPricing.hasDiscount ? (
                  <div className="flex flex-col items-center">
                    <span className="font-heading text-base font-semibold text-[#072E47]/60 line-through">
                      {kodigoPricing.formattedRegularPrice}
                    </span>
                    <span className="font-heading text-3xl font-extrabold tracking-tight text-[#072E47] sm:text-4xl">
                      {kodigoPricing.formattedDiscountedPrice}
                    </span>
                  </div>
                ) : (
                  <span className="font-heading text-3xl font-extrabold tracking-tight text-[#072E47] sm:text-4xl">
                    {kodigoPricing.formattedRegularPrice}
                  </span>
                )}
              </div>

              {/* Benefits List */}
              <ul className="mt-7 space-y-3 font-sans text-sm font-medium text-[#072E47]">
                <IncludedBenefit text="Lunch" theme="dark" />
                <IncludedBenefit text="Snack" theme="dark" />
                <IncludedBenefit text="Kit – Lanyard + ID" theme="dark" />
                <IncludedBenefit text="Workshops" theme="dark" />
                <IncludedBenefit text="Talks" theme="dark" />
                <IncludedBenefit text="Panel Discussions" theme="dark" />
                <IncludedBenefit text="Open Spaces" theme="dark" />
                <ExcludedBenefit text="Stickers" theme="dark" />
                <ExcludedBenefit text="Special Merch" theme="dark" />
                <ExcludedBenefit text="Kasosyo Night with Speakers & Volunteers" theme="dark" />
              </ul>
            </div>

            {IS_REGISTRATION_OPEN && (
              <div className="mt-8 pt-4">
                <span className="font-heading block w-full rounded-xl bg-[#072E47] py-2.5 text-center text-xs font-bold tracking-wider text-white uppercase shadow-sm transition-colors group-hover:bg-[#0c4061]">
                  Select Kodigo
                </span>
              </div>
            )}
          </div>

          {/* 2. CODER (Regular) */}
          <div
            onClick={() => handleCardClick(registrationLinks.coderKasosyo)}
            role={IS_REGISTRATION_OPEN ? 'button' : undefined}
            tabIndex={IS_REGISTRATION_OPEN ? 0 : undefined}
            onKeyDown={(e) => {
              if (IS_REGISTRATION_OPEN && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                handleCardClick(registrationLinks.coderKasosyo);
              }
            }}
            className={cn(
              'relative flex flex-col justify-between rounded-[28px] bg-[#4E9F45] p-7 text-white shadow-md transition-all duration-300 md:p-8',
              IS_REGISTRATION_OPEN
                ? 'cursor-pointer hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                : 'opacity-90',
            )}
          >
            {/* BEST VALUE Badge */}
            <div className="font-heading absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#F99508] px-4 py-1 text-xs font-black tracking-wider text-white uppercase shadow-md">
              Best Value
            </div>

            <div>
              {/* Sale badge if active */}
              {coderPricing.hasDiscount && (
                <div className="mt-1 mb-2 text-center">
                  <span className="inline-block rounded-full bg-white px-3 py-0.5 text-xs font-bold text-[#4E9F45] shadow-sm">
                    {coderPricing.saleBadge}
                  </span>
                </div>
              )}

              <h3 className="font-heading mt-1 text-center text-2xl font-black tracking-tight text-white uppercase sm:text-3xl">
                Coder
              </h3>
              <p className="font-heading mt-0.5 text-center text-sm font-semibold text-white/80">
                (Regular)
              </p>

              {/* Pricing Display */}
              <div className="mt-5 text-center">
                {coderPricing.hasDiscount ? (
                  <div className="flex flex-col items-center">
                    <span className="font-heading text-base font-semibold text-white/70 line-through">
                      {coderPricing.formattedRegularPrice}
                    </span>
                    <span className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      {coderPricing.formattedDiscountedPrice}
                    </span>
                  </div>
                ) : (
                  <span className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {coderPricing.formattedRegularPrice}
                  </span>
                )}
              </div>

              {/* Benefits List */}
              <ul className="mt-7 space-y-3 font-sans text-sm font-medium text-white">
                <IncludedBenefit text="Lunch" theme="light" />
                <IncludedBenefit text="Snack" theme="light" />
                <IncludedBenefit text="Kit – Lanyard + ID" theme="light" />
                <IncludedBenefit text="Special Merch" theme="light" />
                <IncludedBenefit text="Stickers" theme="light" />
                <IncludedBenefit text="Workshops" theme="light" />
                <IncludedBenefit text="Talks" theme="light" />
                <IncludedBenefit text="Panel Discussions" theme="light" />
                <IncludedBenefit text="Open Spaces" theme="light" />
                <ExcludedBenefit text="Special Metallic Pin" theme="light" />
                <ExcludedBenefit text="Kasosyo Night with Speakers & Volunteers" theme="light" />
              </ul>

              {/* Nested Kumpanya/Company Promo Box */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(registrationLinks.kumpanya);
                }}
                className={cn(
                  'mt-6 rounded-2xl border-2 border-dashed border-white/60 bg-white/10 p-4 transition-all duration-200',
                  IS_REGISTRATION_OPEN
                    ? 'cursor-pointer hover:border-white hover:bg-white/20 hover:shadow-md'
                    : '',
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-heading rounded-full bg-[#F99508] px-2.5 py-0.5 text-[11px] font-black text-white uppercase">
                    Save 15%
                  </span>
                  <span className="text-[11px] font-medium text-white/80">
                    Min. {BASE_TICKETS.kumpanyaPromo.minPurchases} purchases
                  </span>
                </div>
                <h4 className="font-heading mt-2 text-base font-bold text-white">
                  Kumpanya/Company Promo
                </h4>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-heading text-xl font-extrabold text-white">
                    {formatPHP(kumpanyaDiscountedPrice)}
                  </span>
                  <span className="font-heading text-xs text-white/70 line-through">
                    {formatPHP(kumpanyaOriginalPrice)}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-white/80">
                  Click here to register bulk/corporate tickets
                </p>
              </div>
            </div>

            {IS_REGISTRATION_OPEN && (
              <div className="mt-8 pt-4">
                <span className="font-heading block w-full rounded-xl bg-white py-2.5 text-center text-xs font-bold tracking-wider text-[#4E9F45] uppercase shadow-sm transition-colors hover:bg-white/90">
                  Select Coder
                </span>
              </div>
            )}
          </div>

          {/* 3. KASOSYO (Patron) */}
          <div
            onClick={() => handleCardClick(registrationLinks.coderKasosyo)}
            role={IS_REGISTRATION_OPEN ? 'button' : undefined}
            tabIndex={IS_REGISTRATION_OPEN ? 0 : undefined}
            onKeyDown={(e) => {
              if (IS_REGISTRATION_OPEN && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                handleCardClick(registrationLinks.coderKasosyo);
              }
            }}
            className={cn(
              'relative flex flex-col justify-between rounded-[28px] bg-[#0F766E] p-7 text-white shadow-md transition-all duration-300 md:p-8',
              IS_REGISTRATION_OPEN
                ? 'cursor-pointer hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                : 'opacity-90',
            )}
          >
            <div>
              {/* Sale badge if active */}
              {kasosyoPricing.hasDiscount && (
                <div className="mb-3 text-center">
                  <span className="bg-pycon-orange inline-block rounded-full px-3 py-0.5 text-xs font-bold text-white shadow-sm">
                    {kasosyoPricing.saleBadge}
                  </span>
                </div>
              )}

              <h3 className="font-heading text-center text-2xl font-black tracking-tight text-white uppercase sm:text-3xl">
                Kasosyo
              </h3>
              <p className="font-heading mt-0.5 text-center text-sm font-semibold text-white/80">
                (Patron)
              </p>

              {/* Pricing Display */}
              <div className="mt-5 text-center">
                {kasosyoPricing.hasDiscount ? (
                  <div className="flex flex-col items-center">
                    <span className="font-heading text-base font-semibold text-white/70 line-through">
                      {kasosyoPricing.formattedRegularPrice}
                    </span>
                    <span className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      {kasosyoPricing.formattedDiscountedPrice}
                    </span>
                  </div>
                ) : (
                  <span className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {kasosyoPricing.formattedRegularPrice}
                  </span>
                )}
              </div>

              {/* Benefits List */}
              <ul className="mt-7 space-y-3 font-sans text-sm font-medium text-white">
                <IncludedBenefit text="Lunch" theme="light" />
                <IncludedBenefit text="Snack" theme="light" />
                <IncludedBenefit text="Kit – Lanyard + ID" theme="light" />
                <IncludedBenefit text="Special Merch" theme="light" />
                <IncludedBenefit text="Stickers" theme="light" />
                <IncludedBenefit text="Special Metallic Pin" theme="light" />
                <IncludedBenefit text="Workshops" theme="light" />
                <IncludedBenefit text="Talks" theme="light" />
                <IncludedBenefit text="Panel Discussions" theme="light" />
                <IncludedBenefit text="Open Spaces" theme="light" />
                <IncludedBenefit text="Kasosyo Night with Speakers & Volunteers" theme="light" />
              </ul>
            </div>

            {IS_REGISTRATION_OPEN && (
              <div className="mt-8 pt-4">
                <span className="font-heading block w-full rounded-xl bg-white py-2.5 text-center text-xs font-bold tracking-wider text-[#0F766E] uppercase shadow-sm transition-colors hover:bg-white/90">
                  Select Kasosyo
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Card: EXTRA (Sprint Day Access) */}
        <div
          ref={tooltipRef}
          className="relative mt-8 overflow-visible rounded-[24px] bg-[#E57D06] p-6 text-white shadow-md transition-all duration-300 hover:shadow-lg sm:p-7 md:p-8"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            {/* Left: ADD-ON Pill & Title */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-heading rounded-full bg-white px-3 py-0.5 text-xs font-black text-[#E57D06] uppercase">
                  Add-On
                </span>
                <span className="text-xs font-medium text-white/80">Exclusive of tickets</span>
              </div>
              <h3 className="font-heading mt-2 text-2xl font-black tracking-tight text-white uppercase sm:text-3xl">
                EXTRA <span className="font-semibold text-white/90">(Sprint Day)</span>
              </h3>
            </div>

            {/* Middle Divider on tablet+ */}
            <div className="hidden h-14 w-px bg-white/30 sm:block" />

            {/* Right: Pricing & Sprint Access feature with Interactive Tooltip */}
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <div>
                {extraPricing.hasDiscount ? (
                  <div className="flex items-baseline gap-2 sm:justify-end">
                    <span className="font-heading text-sm text-white/70 line-through">
                      {extraPricing.formattedRegularPrice}
                    </span>
                    <span className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                      {extraPricing.formattedDiscountedPrice}
                    </span>
                  </div>
                ) : (
                  <span className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                    {extraPricing.formattedRegularPrice}
                  </span>
                )}
              </div>

              {/* Tooltip trigger button */}
              <button
                type="button"
                onClick={() => setShowTooltip((prev) => !prev)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="group flex cursor-pointer items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
                aria-expanded={showTooltip}
                aria-label="Sprint Day Access info tooltip"
              >
                <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-[#E57D06]">
                  <Check className="size-3.5 stroke-[3]" />
                </div>
                <span>Sprint Day access</span>
                <Info className="size-4 shrink-0 text-white/80 transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>

          {/* Interactive Tooltip Popover */}
          {showTooltip && (
            <div className="animate-in fade-in zoom-in-95 absolute right-6 bottom-full z-30 mb-2 w-72 rounded-xl border border-white/20 bg-[#072E47] p-4 text-xs leading-relaxed text-white shadow-2xl duration-150 sm:right-8 sm:w-80">
              <div className="flex items-start gap-2.5">
                <Info className="mt-0.5 size-4 shrink-0 text-[#F99508]" />
                <p>
                  <strong>Add-On Notice:</strong> Sprint Day access is exclusive of the conference
                  ticket and can be added to your cart upon registration.
                </p>
              </div>
              <div className="absolute right-10 -bottom-1.5 size-3 rotate-45 bg-[#072E47]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function IncludedBenefit({ text, theme }: { text: string; theme: 'dark' | 'light' }) {
  return (
    <li className="flex items-start gap-2.5">
      <div
        className={cn(
          'mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full',
          theme === 'dark' ? 'bg-[#072E47] text-[#FBE2B7]' : 'bg-white/25 text-white',
        )}
      >
        <Check className="size-3 stroke-[3]" />
      </div>
      <span>{text}</span>
    </li>
  );
}

function ExcludedBenefit({ text, theme }: { text: string; theme: 'dark' | 'light' }) {
  return (
    <li className="flex items-start gap-2.5 opacity-40">
      <div
        className={cn(
          'mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full',
          theme === 'dark' ? 'bg-[#072E47]/20 text-[#072E47]' : 'bg-white/10 text-white',
        )}
      >
        <X className="size-3 stroke-[2.5]" />
      </div>
      <span className="line-through">{text}</span>
    </li>
  );
}
