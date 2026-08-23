import Image from 'next/image';
import tealSnakeBody from '@/assets/what-is-pycon/teal-snake-body.svg';

const content = {
  intro: {
    eyebrow: 'What is PyCon?',
    title: "The world's go-to Python conference.",
    description:
      'Born in 2003, PyCon has grown into a global family of events where developers of every level meet to learn, share, and build alongside the wider global Python community.',
  },
  davao: {
    eyebrow: 'What is PyCon Davao 2026?',
    title: 'Two days. Endless possibilities.',
    description:
      'DurianPy, Davao’s Python Software Foundation-recognized Python user group, brings PyCon back to Davao to help drive the city’s growing tech community and Southeast Asia’s next tech hub.',
    additionalDescription:
      'Building on the momentum of PyCon Davao 2025, this year’s conference goes bigger with distinguished keynotes, multiple parallel tracks, and a full sprint day. Over two days, it brings together engineers, data scientists, educators, founders, and students to learn, build, and collaborate.',
  },
  features: [
    '<strong>World-class keynotes</strong> from core contributors, startup founders, and industry leaders.',
    '<strong>Multi-track talks and hands-on workshops</strong> from core contributors, startup founders, and industry leaders.',
    'A <strong>dedicated sprint day</strong> where you ship code with maintainers on projects like pandas and PyGame (laptop required).',
    'A <strong>career expo and sponsor zone</strong> that link you directly with hiring teams and product experts.',
    'An <strong>interactive Stamp Quest</strong> across sponsor booths, powered by QR codes.',
  ],
  footer:
    'Join 200 to 400 builders, students, and founders for two days of code, coffee, and collaboration.',
};

export default function WhatIsPyCon() {
  return (
    <section
      aria-labelledby="what-is-pycon-heading"
      className="bg-pycon-beige relative overflow-hidden px-6 py-12 sm:px-10 sm:py-16 md:px-12 md:py-20"
    >
      <Image
        src={tealSnakeBody}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-14 right-0 z-0 w-[220px] max-w-none translate-x-16 -rotate-12 sm:-top-20 sm:w-[300px] sm:translate-x-12 sm:-rotate-6 md:-top-28 md:w-[330px] md:translate-x-8 md:-rotate-3 lg:w-[350px] lg:translate-x-0 lg:rotate-0 xl:w-[400px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="max-w-4xl">
          <p className="font-heading text-pycon-teal text-xs font-bold tracking-tight sm:text-sm">
            {content.intro.eyebrow}
          </p>
          <h2
            id="what-is-pycon-heading"
            className="font-heading text-pycon-orange mt-2 max-w-3xl text-2xl leading-tight font-bold sm:text-xl md:text-4xl"
          >
            {content.intro.title}
          </h2>
          <p className="text-pycon-dark-blue mt-2 max-w-4xl text-xs leading-snug sm:text-sm md:mt-3 md:text-base">
            {content.intro.description}
          </p>
        </div>

        <div className="mt-8 max-w-4xl sm:mt-10 md:mt-12">
          <p className="font-heading text-pycon-teal text-xs font-bold tracking-tight sm:text-sm">
            {content.davao.eyebrow}
          </p>
          <h3 className="font-heading text-pycon-orange mt-2 max-w-3xl text-2xl leading-tight font-bold sm:text-3xl md:text-4xl">
            {content.davao.title}
          </h3>
          <p className="text-pycon-dark-blue mt-2 text-xs leading-snug sm:text-sm md:mt-3 md:text-base">
            {content.davao.description}
          </p>
          <p className="text-pycon-dark-blue mt-3 text-xs leading-snug sm:text-sm md:mt-4 md:text-base">
            {content.davao.additionalDescription}
          </p>
        </div>

        <ul
          className="bg-pycon-beige mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:mt-10"
          aria-label="Conference highlights"
        >
          {content.features.map((feature) => (
            <li
              key={feature}
              className="bg-pycon-beige-card text-pycon-dark-blue rounded-xl px-4 py-3 text-xs leading-snug sm:px-5 sm:py-4 sm:text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: feature }}
            />
          ))}
        </ul>
      </div>
      <p className="font-heading text-pycon-teal mx-auto mt-8 max-w-5xl text-center text-sm leading-snug font-bold sm:mt-10 sm:text-base md:mt-12 md:text-lg">
        {content.footer}
      </p>
    </section>
  );
}
