'use client';

import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { speakerGroups, speakersData, type Speaker, type SpeakerGroup } from '@/data/speakers-data';

const checkerboard = {
  backgroundColor: '#fff',
  backgroundImage: 'repeating-conic-gradient(#e5e5e5 0% 25%, transparent 0% 50%)',
  backgroundSize: '20px 20px',
};

function SpeakerCard({ speaker, group }: { speaker: Speaker; group: SpeakerGroup }) {
  const fullName = `${speaker.firstName} ${speaker.lastName}`;

  const card = (
    <article
      className={cn(
        'relative aspect-4/5 w-full overflow-hidden rounded-2xl border-2 bg-white',
        group.borderClassName,
      )}
    >
      {speaker.image ? (
        <Image
          src={speaker.image}
          alt={fullName}
          fill
          sizes="(min-width: 1024px) 220px, (min-width: 768px) 30vw, 70vw"
          className="object-cover"
        />
      ) : (
        <div aria-hidden className="absolute inset-0" style={checkerboard} />
      )}

      <div
        className={cn(
          'absolute inset-x-0 bottom-0 flex h-1/2 flex-col justify-end bg-linear-to-t to-transparent px-2 pb-3 text-center',
          group.gradientClassName,
        )}
      >
        <p className="font-heading text-pycon-dark-blue text-base leading-tight font-bold">
          {fullName}
        </p>
        <p className="text-pycon-dark-blue text-xs font-semibold">{speaker.designation}</p>
      </div>
    </article>
  );

  if (!speaker.socials) return card;

  return (
    <a
      href={speaker.socials}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${fullName} on social media`}
      className="block transition-transform hover:-translate-y-1"
    >
      {card}
    </a>
  );
}

function SpeakerGroupSection({ group }: { group: SpeakerGroup }) {
  const speakers = speakersData.filter((speaker) => speaker.speakerType === group.type);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <h3
        className={cn(
          'font-heading rounded-full px-10 py-1.5 text-center text-lg font-bold text-white lg:text-xl',
          group.badgeClassName,
        )}
      >
        {group.title}
      </h3>

      <div className="hidden w-full flex-wrap justify-center gap-5 md:flex">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)]">
            <SpeakerCard speaker={speaker} group={group} />
          </div>
        ))}
      </div>

      <Carousel opts={{ align: 'center' }} className="w-full md:hidden">
        <CarouselContent>
          {speakers.map((speaker) => (
            <CarouselItem key={speaker.id} className="basis-[70%]">
              <SpeakerCard speaker={speaker} group={group} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default function Speakers() {
  return (
    <section className="bg-pycon-beige relative w-full overflow-hidden px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-237.5 flex-col items-center gap-12">
        <h2 className="font-heading text-secondary text-center text-2xl font-bold lg:text-4xl">
          Speakers
        </h2>

        {speakerGroups.map((group) => (
          <SpeakerGroupSection key={group.type} group={group} />
        ))}
      </div>
    </section>
  );
}
