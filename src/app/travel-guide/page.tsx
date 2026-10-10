import type { Metadata } from 'next';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Building2, CarFront, ExternalLink, MapPin } from 'lucide-react';

import heroLogo from '@/assets/hero/hero-logo.svg';
import travelBackgroundPattern from '@/assets/travel-guide/travel-background-pattern.svg';
import bottomAccent from '@/assets/travel-guide/travel-bottom-accent.svg';
import finsterMap from '@/assets/travel-guide/finster-map.png';
import heroMascot from '@/assets/travel-guide/travel-guide-mascot.svg';
import travelGuideTail from '@/assets/travel-guide/travel-guide-tail.svg';
import travelMountains from '@/assets/travel-guide/travel-guide-mountains.svg';
import textileBorder from '@/assets/travel-guide/travel-textile-divider.svg';
import waveDivider from '@/assets/travel-guide/travel-wave-divider.svg';

export const metadata: Metadata = {
  title: 'Travel Guide',
  description:
    'Travel guide for PyCon Davao 2026 attendees visiting Davao City, Philippines. Venue directions, lodging, and transport.',
  openGraph: {
    title: 'Travel Guide | PyCon Davao 2026',
    description:
      'Travel guide for PyCon Davao 2026 attendees visiting Davao City, Philippines. Venue directions, lodging, and transport.',
    url: '/travel-guide',
  },
};

export default function TravelGuidePage() {
  return (
    <main className="bg-pycon-beige relative isolate overflow-hidden">
      <TravelGuideHero />

      <section className="relative px-[7.6%] pt-9 pb-9 sm:pt-20 sm:pb-20 lg:px-[5.7%] lg:pt-24 lg:pb-24 xl:pt-28 xl:pb-36 2xl:pb-48">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[length:100%_auto] bg-top bg-repeat-y opacity-45 select-none"
          style={{ backgroundImage: `url(${travelBackgroundPattern.src})` }}
        />

        <article className="bg-pycon-beige-card relative z-10 mx-auto mb-6 max-w-[1706px] overflow-hidden rounded-[20px] px-7 pt-12 pb-[clamp(3rem,29vw,36rem)] sm:mb-8 sm:px-12 sm:pt-16 md:px-20 md:pt-20 lg:mb-10 lg:px-[5.15%] lg:pt-[6.45%]">
          <div className="relative z-10 flex flex-col gap-14 sm:gap-20 lg:gap-[120px]">
            <GuideSection icon={MapPin} title="Venue">
              <div className="space-y-8 sm:space-y-10">
                <section aria-labelledby="travel-guide-day-1-venue">
                  <p className="font-heading text-pycon-teal-dark text-sm font-semibold tracking-[0.12em] uppercase sm:text-base">
                    Day 1 · Main Conference
                  </p>
                  <h3
                    id="travel-guide-day-1-venue"
                    className="font-heading text-pycon-orange mt-2 text-lg leading-tight font-medium sm:text-xl lg:text-[clamp(1.5rem,2.08vw,2.5rem)]"
                  >
                    <a
                      href="https://maps.app.goo.gl/H4HgpAG9dVsahDLP7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm underline decoration-transparent underline-offset-4 hover:decoration-current focus-visible:decoration-current focus-visible:outline-pycon-teal focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      <span>Finster Auditorium, Ateneo de Davao University</span>
                      <MapPin aria-hidden="true" className="size-[0.8em] shrink-0" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </h3>
                  <p className="mt-2">Jacinto Street, Davao City</p>

                  <div className="mt-5 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.9fr)]">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                      <div>
                        <h4 className="font-heading text-pycon-teal-dark font-semibold">
                          What to expect
                        </h4>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          <li>Inspiring talks</li>
                          <li>Panel discussions</li>
                          <li>Networking with fellow Pythonistas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-heading text-pycon-teal-dark font-semibold">
                          Nearby landmarks
                        </h4>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          <li>Roxas Night Market</li>
                          <li>Aldevinco Shopping Center</li>
                          <li>People’s Park</li>
                        </ul>
                      </div>
                    </div>

                    <figure className="bg-pycon-beige/70 border-pycon-beige-dark rounded-xl border p-3 sm:p-4">
                      <figcaption className="font-heading text-pycon-teal-dark mb-3 text-sm font-semibold tracking-[0.12em] uppercase">
                        Jacinto Campus Map
                      </figcaption>
                      <Image
                        src={finsterMap}
                        alt="Ateneo de Davao University Jacinto Campus map showing Finster Hall."
                        className="h-auto w-full rounded-lg border border-pycon-beige-dark bg-white"
                      />
                      <p className="text-pycon-teal-dark mt-2 text-center text-sm font-medium sm:text-base">
                        Finster Hall · Building 3
                      </p>
                    </figure>
                  </div>

                  <aside className="border-pycon-orange bg-pycon-beige/70 mt-5 rounded-r-lg border-l-4 px-4 py-3">
                    <h4 className="font-heading text-pycon-orange-accent font-semibold">Pro tip</h4>
                    <p className="mt-1">
                      Ateneo is in the heart of the city, with lots of food options within walking
                      distance.
                    </p>
                  </aside>

                  <a
                    className="group border-pycon-teal-dark bg-pycon-beige/70 hover:bg-pycon-beige focus-visible:ring-pycon-teal mt-5 block rounded-r-lg border-l-4 p-4 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:p-5"
                    href="https://drive.google.com/file/d/1kHNammCmcEPZ970hALJVcSWcBZVgQwiT/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span>
                        <span className="font-heading text-pycon-teal-dark block font-semibold">
                          Dress Code
                        </span>
                        <span className="mt-1 block">
                          Review the event dress code before you arrive.
                        </span>
                      </span>
                      <span className="text-pycon-teal-dark inline-flex shrink-0 items-center gap-2 text-sm font-semibold sm:text-base">
                        View Guide
                        <ExternalLink aria-hidden="true" className="size-4" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </span>
                    </span>
                  </a>
                </section>

                <div aria-hidden="true" className="border-pycon-beige-dark border-t" />

                <section aria-labelledby="travel-guide-day-2-venue">
                  <p className="font-heading text-pycon-teal-dark text-sm font-semibold tracking-[0.12em] uppercase sm:text-base">
                    Day 2 · Sprint Day
                  </p>
                  <h3
                    id="travel-guide-day-2-venue"
                    className="font-heading text-pycon-orange mt-2 text-lg leading-tight font-medium sm:text-xl lg:text-[clamp(1.5rem,2.08vw,2.5rem)]"
                  >
                    Training Room, 8th Floor
                  </h3>
                  <p className="mt-2">
                    Community Center of the First Companions Building (CCFC Building), Ateneo de
                    Davao University
                  </p>
                </section>
              </div>
            </GuideSection>

            <WavyDivider />

            <GuideSection icon={CarFront} title="Transportation">
              <div className="space-y-10 sm:space-y-12">
                <section aria-labelledby="travel-guide-transport-tips">
                  <h3
                    id="travel-guide-transport-tips"
                    className="font-heading text-pycon-orange text-lg leading-tight font-medium sm:text-xl lg:text-[clamp(1.5rem,2.08vw,2.5rem)]"
                  >
                    Getting Around Davao
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      Jeepneys display route codes/signs on the windshield (e.g., “Roxas,” “San
                      Pedro,” “Uyanguren”).
                    </li>
                    <li>Fare is usually ₱15–20, exact change is best.</li>
                  </ul>
                  <aside className="border-pycon-orange bg-pycon-beige/70 mt-5 rounded-r-lg border-l-4 px-4 py-3">
                    <p>
                      For first-time visitors, Grab/taxi is easiest, while jeepneys give a more
                      local experience.
                    </p>
                  </aside>
                </section>

                <section aria-labelledby="travel-guide-nearby-dining">
                  <p className="text-pycon-teal-dark mb-3 font-medium">
                    Walking distance from Ateneo’s Jacinto gate (Day 1 venue).
                  </p>
                  <h3
                    id="travel-guide-nearby-dining"
                    className="font-heading text-pycon-orange text-lg leading-tight font-medium sm:text-xl lg:text-[clamp(1.5rem,2.08vw,2.5rem)]"
                  >
                    Dining, Coffee &amp; Recreation Nearby
                  </h3>
                  <p className="mt-2">
                    Local cafés and light food spots near Roxas Avenue and along the routes between
                    hotels and Ateneo. Good for breakfast, snacks, and informal meetups.
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      <strong>Roxas Night Market:</strong> Great for dinner, street food, and
                      souvenirs.
                    </li>
                    <li>
                      <strong>People’s Park:</strong> Nice spot for relaxation in afternoons and
                      evenings.
                    </li>
                    <li>
                      <strong>Local specialty food to try:</strong> Grilled tuna belly, pastil, and
                      fresh fruits (durian, pomelo), etc.
                    </li>
                  </ul>
                </section>
              </div>
            </GuideSection>

            <WavyDivider />

            <GuideSection icon={Building2} title="Hotels & Airbnb">
              <div className="space-y-8">
                <section aria-labelledby="travel-guide-where-to-stay">
                  <h3
                    id="travel-guide-where-to-stay"
                    className="font-heading text-pycon-orange text-lg leading-tight font-medium sm:text-xl lg:text-[clamp(1.5rem,2.08vw,2.5rem)]"
                  >
                    Where to Stay
                  </h3>
                  <p className="mt-2">
                    If you’re coming from outside Davao, staying around downtown Davao is a
                    convenient option. The area around Ateneo de Davao University’s Jacinto Campus
                    has plenty of accommodations, restaurants, cafés, and places to explore after
                    the conference.
                  </p>
                </section>

                <section aria-labelledby="travel-guide-hotels">
                  <h4
                    id="travel-guide-hotels"
                    className="font-heading text-pycon-teal-dark font-semibold"
                  >
                    Hotels
                  </h4>
                  <p className="mt-2">Here are some nearby hotel options:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>RedDoorz</li>
                    <li>Hotel Uno</li>
                    <li>Central District Hotel</li>
                    <li>The Royal Mandaya Hotel</li>
                    <li>The Apo View Hotel</li>
                  </ul>
                </section>

                <section aria-labelledby="travel-guide-condo-stays">
                  <h4
                    id="travel-guide-condo-stays"
                    className="font-heading text-pycon-teal-dark font-semibold"
                  >
                    Airbnb / Condo Stays
                  </h4>
                  <p className="mt-2">
                    If you prefer having your own space or are traveling with a group, you can also
                    look into short-term condo rentals:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Avida</li>
                    <li>Vivaldi Residences / Euro Towers</li>
                    <li>Mesatierra Garden Residences</li>
                  </ul>
                  <p className="mt-3">
                    Most of these condo properties have units listed on Airbnb or other short-term
                    rental platforms, so you can compare prices, amenities, and available units
                    based on your group size.
                  </p>
                </section>
              </div>
            </GuideSection>
          </div>
        </article>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none">
          <Image src={bottomAccent} alt="" className="h-auto w-full" />
        </div>

        <div className="pointer-events-none absolute right-0 bottom-0 z-20 w-[34.64%] max-w-[665px] select-none">
          <Image src={travelGuideTail} alt="" className="h-auto w-full" />
        </div>
      </section>
    </main>
  );
}

function TravelGuideHero() {
  return (
    <section className="relative flex min-h-[62vw] flex-col justify-end overflow-hidden lg:min-h-[max(640px,calc(100svh-92px))]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-70 select-none"
        style={{ backgroundImage: `url(${travelBackgroundPattern.src})` }}
      />

      <div className="relative z-40 flex w-full flex-1 items-center px-[3%] pt-3 pb-[12vw] sm:px-[6%] sm:pt-12 sm:pb-20 lg:items-end lg:px-[2.65%] lg:pt-14 lg:pb-0">
        <div className="flex w-full min-w-0 translate-x-[2vw] translate-y-[7vw] items-center justify-center gap-[1.5%] sm:translate-x-0 sm:translate-y-[2vw] sm:gap-[0.8%] lg:translate-y-0 lg:items-start lg:justify-center lg:gap-[2%] 2xl:justify-start">
          <Image
            src={heroMascot}
            alt="PyCon Davao mascot waving"
            priority
            className="h-auto w-[17%] max-w-[315px] shrink-0 translate-x-[4vw] translate-y-[8vw] sm:w-[18.5%] sm:translate-x-0 sm:translate-y-0 lg:w-[16.4%]"
          />
          <Image
            src={heroLogo}
            alt="PyCon Davao 2026"
            priority
            className="h-auto w-[26%] max-w-[420px] shrink-0 sm:w-[24.6%] lg:w-[23%] lg:translate-y-[clamp(16px,2.5vw,32px)] 2xl:w-[21.85%] 2xl:translate-y-[clamp(84px,10.5vh,124px)]"
          />
          <h1 className="font-heading text-pycon-teal w-[49%] max-w-[650px] min-w-0 text-[clamp(11px,3.1vw,50px)] leading-[0.92] font-bold tracking-[-0.025em] sm:w-[44.2%] sm:text-[clamp(13px,2.6vw,50px)] sm:leading-[1.05] lg:w-[42%] lg:translate-y-[clamp(16px,2.5vw,32px)] 2xl:w-[40%] 2xl:translate-y-[clamp(84px,10.5vh,124px)]">
            Your Guide to Venue,
            <br />
            Accommodations,
            <br />
            Dining, and Leisure in
            <br />
            Davao City, Philippines
          </h1>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[13vw] z-10 h-[32vw] select-none lg:bottom-[calc(clamp(56px,10.78vw,207px)-clamp(24px,3vw,58px))] lg:h-[clamp(190px,21.15vw,406px)]">
        <Image
          src={travelMountains}
          alt=""
          priority
          className="h-full w-full object-cover object-bottom opacity-70"
        />
        <div className="from-pycon-beige/0 via-pycon-beige/65 to-pycon-beige absolute inset-0 bg-linear-to-b from-20% via-58%" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 45% 78% at 50% 76%, rgba(251, 239, 207, 0.84) 0%, rgba(251, 239, 207, 0.58) 42%, rgba(251, 239, 207, 0) 78%)',
          }}
        />
      </div>

      <div className="relative z-30 w-full overflow-hidden leading-none">
        <Image
          src={textileBorder}
          alt=""
          width={1920}
          height={207}
          priority
          draggable={false}
          className="h-[19.17vw] w-full object-cover object-center lg:h-[clamp(56px,10.78vw,207px)]"
        />
      </div>
    </section>
  );
}

interface GuideSectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

function GuideSection({ icon: Icon, title, children }: GuideSectionProps) {
  return (
    <section aria-labelledby={`travel-guide-${title.toLowerCase().replaceAll(' ', '-')}`}>
      <h2
        id={`travel-guide-${title.toLowerCase().replaceAll(' ', '-')}`}
        className="font-heading text-pycon-teal flex items-center gap-2 text-2xl leading-tight font-bold sm:text-3xl lg:text-[clamp(1.5rem,2.08vw,2.5rem)]"
      >
        <Icon aria-hidden="true" className="size-[0.8em] shrink-0 fill-current stroke-[2.5]" />
        {title}
      </h2>
      <div className="mt-4 text-sm leading-relaxed text-black sm:mt-6 sm:text-base lg:text-[clamp(1rem,1.56vw,1.875rem)] lg:leading-[1.48]">
        {children}
      </div>
    </section>
  );
}

function WavyDivider() {
  return (
    <div className="-my-8 w-full sm:-my-12 lg:-my-[76px]">
      <Image src={waveDivider} alt="" className="h-auto w-full" />
    </div>
  );
}
