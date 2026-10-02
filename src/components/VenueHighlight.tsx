import Image from 'next/image';
import Link from 'next/link';

import auditoriumBg from '@/assets/travel-guide/auditorium-bg.png';
import venueMapCard from '@/assets/travel-guide/venue-map-card.png';
import venueBorder from '@/assets/travel-guide/venue-border.svg';

export default function VenueHighlight() {
  return (
    <section
      aria-labelledby="venue-highlight-heading"
      className="relative w-full overflow-hidden bg-[#126b68] text-[#FBEFCF]"
    >

      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={auditoriumBg}
          alt=""
          role="presentation"
          fill
          priority
          className="object-cover"
        />
      </div>


      <div className="relative z-10 w-full leading-none">
        <Image
          src={venueBorder}
          alt=""
          role="presentation"
          className="h-auto w-full block"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          

          <div className="flex flex-col items-start lg:col-span-6">
            <div className="mb-6 self-center lg:self-start">
              <span className="inline-flex items-center justify-center rounded-full bg-[#f47b20] px-8 py-3.5 font-heading text-lg font-bold tracking-wide text-white shadow-md sm:px-10 sm:py-4 sm:text-xl lg:px-12 lg:py-4 lg:text-2xl">
                Venue Highlight
              </span>
            </div>

            <Link
              href="/travel-guide"
              aria-label="View travel guide and venue location"
              className="group relative block w-full max-w-[530px] cursor-pointer rounded-2xl transition-all duration-300 ease-out hover:scale-[1.015] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f47b20] focus-visible:ring-offset-4 focus-visible:ring-offset-[#126b68]"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={venueMapCard}
                  alt="Finster Auditorium at Ateneo de Davao University location map with photos"
                  width={624}
                  height={443}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:brightness-105"
                  priority
                />
              </div>
            </Link>
          </div>


          <div className="flex flex-col items-start text-left lg:col-span-6">
            <p className="font-heading text-lg font-medium text-[#FBEFCF]/90 sm:text-xl">
              17-18 October, 2026
            </p>

            <h2
              id="venue-highlight-heading"
              className="font-heading mt-3 text-2xl font-bold leading-tight text-[#FBEFCF] sm:text-3xl lg:text-[2.2rem]"
            >
              Finster Auditorium, Ateneo de Davao University ▪ Davao City
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#FBEFCF]/90 sm:text-lg">
              Enter through the Claveria/CM Recto entrance and take the elevator nearest
              to the entrance to the 7th floor. Once you exit the elevator, turn right
              toward the spiral staircases. You&apos;ll see a set of doors directly across
              from the staircases. Enter through the doors to reach the venue.
            </p>

            <div className="mt-8">
              <Link
                href="/travel-guide"
                className="inline-flex items-center justify-center rounded-full bg-[#f47b20] px-8 py-3.5 font-heading text-lg font-bold text-white shadow-md transition-all duration-200 hover:bg-[#e06b15] hover:shadow-lg sm:px-10 sm:py-4 sm:text-xl"
              >
                View Travel Guide
              </Link>
            </div>
          </div>

        </div>
      </div>


      <div className="relative z-10 w-full leading-none">
        <Image
          src={venueBorder}
          alt=""
          role="presentation"
          className="h-auto w-full block rotate-180"
        />
      </div>
    </section>
  );
}