import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  sponsorPlaceholderLogoUrl,
  type Sponsor,
  type SponsorTier,
  type SponsorTierGroup,
} from '@/data/sponsors-data';

interface SponsorsSectionProps {
  data: SponsorTierGroup[];
}

interface TierStyle {
  gap: string;
  logo: string;
  showDetails: boolean;
}

const tierStyles: Record<SponsorTier, TierStyle> = {
  apo: {
    gap: '',
    logo: 'size-48 lg:size-56',
    showDetails: true,
  },
  agila: {
    gap: 'gap-x-10 gap-y-8',
    logo: 'size-40 lg:size-48',
    showDetails: true,
  },
  durian: {
    gap: 'gap-x-10 gap-y-8',
    logo: 'size-32 lg:size-36',
    showDetails: true,
  },
  cacao: {
    gap: 'gap-3 sm:gap-8',
    logo: 'size-24 sm:size-28 lg:size-32',
    showDetails: false,
  },
  'waling-waling': {
    gap: 'gap-3 sm:gap-4',
    logo: 'size-18 rounded-xl sm:size-20 lg:size-24',
    showDetails: false,
  },
};

const sponsorLogoSize = 224;

const SponsorsSection = ({ data }: SponsorsSectionProps) => {
  const renderSponsor = (sponsor: Sponsor, style: TierStyle) => (
    <li key={sponsor.id}>
      <a
        href={sponsor.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${sponsor.name} website`}
        className="focus-visible:outline-pycon-dark-blue flex flex-col items-center gap-3 rounded-3xl text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none motion-reduce:hover:scale-100"
      >
        <Image
          src={sponsor.logoUrl || sponsorPlaceholderLogoUrl}
          alt={`${sponsor.name} logo`}
          width={sponsorLogoSize}
          height={sponsorLogoSize}
          className={cn('object-contain', style.logo)}
        />

        {style.showDetails && (
          <span className="flex max-w-56 flex-col gap-1">
            <span className="font-heading text-pycon-dark-blue text-lg font-bold lg:text-xl">
              {sponsor.name}
            </span>

            {sponsor.tagline && (
              <span className="text-pycon-dark-blue text-sm leading-relaxed">
                {sponsor.tagline}
              </span>
            )}
          </span>
        )}
      </a>
    </li>
  );

  return (
    <section className="bg-pycon-beige px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 text-center">
          <h2 className="font-heading text-pycon-orange text-4xl font-bold sm:text-5xl">
            Sponsors
          </h2>
          <p className="text-pycon-dark-blue mt-4 text-base sm:text-lg">
            This event was made possible with the help of our sponsors.
          </p>
        </header>

        <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:gap-16">
          {data.map((group) => {
            const style = tierStyles[group.tier];

            return (
              <div
                key={group.tier}
                className="border-pycon-orange/50 relative rounded-[28px] border px-4 pt-12 pb-8 sm:px-8"
              >
                <h3 className="bg-pycon-orange font-heading absolute top-0 left-1/2 w-max min-w-1/4 -translate-x-1/2 -translate-y-1/2 rounded-[18px] px-6 py-1.5 text-center text-base font-bold whitespace-nowrap text-white sm:py-2 sm:text-lg md:px-8 md:py-2.5 md:text-xl lg:py-3 lg:text-2xl">
                  {group.displayName}
                </h3>
                <ul className={cn('flex flex-wrap justify-center', style.gap)}>
                  {group.sponsors.map((sponsor) => renderSponsor(sponsor, style))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
