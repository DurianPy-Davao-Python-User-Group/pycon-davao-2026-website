import Image from 'next/image';
import mobileBg from '@/assets/conference/mobile-bg.svg';
import bgPattern from '@/assets/conference/bg-pattern.svg';
import mountainLeft from '@/assets/conference/mountain-left.svg';
import mountainRight from '@/assets/conference/mountain-right.svg';

type Day = {
  label: string;
  title: string;
  date: string;
  items: string[];
};

const days: Day[] = [
  {
    label: 'Day 1',
    title: 'Main Conference',
    date: 'October 17, 2026',
    items: [
      'Keynotes and regular talks',
      'Panel discussions: Python in Startups and Enterprises, and Careers in Python',
      'Lightning talks',
      'Afternoon breakout workshops, community-led sessions, and open spaces',
      'Sponsor booth visits and raffle',
    ],
  },
  {
    label: 'Day 2',
    title: 'Sprints and Workshops',
    date: 'October 18, 2026',
    items: [
      'Open-source contributions to projects like pandas and PyGame',
      'Mentor-led sessions',
      'Project showcases',
    ],
  },
];

function DayCard({ day }: { day: Day }) {
  return (
    <article className="relative h-auto min-h-[400px] w-full p-2 md:flex-1 lg:min-h-[450px]">
      <div className="border-secondary bg-card absolute inset-0 z-30 rounded-[45px] border-[3.5px]" />
      <div className="relative z-50 p-6">
        <p className="font-heading text-primary text-sm font-bold tracking-wide lg:text-base">
          {day.label}
        </p>

        <h3 className="font-heading text-secondary mt-1 text-2xl font-bold lg:text-3xl">
          {day.title}
        </h3>

        <p className="text-foreground mt-1 text-base italic lg:text-lg">{day.date}</p>

        <ul className="text-foreground mt-4 list-disc space-y-1.5 pl-5 text-base sm:text-lg md:text-xl">
          {day.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Conference() {
  return (
    <section className="bg-pycon-beige relative flex min-h-[100dvh] w-full flex-col overflow-hidden px-4 py-12 sm:py-16 md:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        <Image
          src={mobileBg}
          alt=""
          priority
          unoptimized
          fill
          sizes="100vw"
          className="object-fill lg:hidden"
        />
        <Image
          src={bgPattern}
          alt=""
          priority
          unoptimized
          fill
          sizes="100vw"
          className="hidden object-cover lg:block"
        />
      </div>

      {/* Top gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[32%]"
        style={{
          background:
            'linear-gradient(180deg, var(--pycon-beige) 0%, rgba(251,239,207,0.9) 35%, rgba(251,239,207,0) 100%)',
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[950px] flex-col items-center gap-6 px-4">
        <h3 className="font-heading text-secondary relative z-30 text-center text-2xl font-bold lg:block lg:text-4xl">
          Conference at a Glance
        </h3>

        {/* Cards */}
        <div className="flex w-full flex-col gap-6 md:flex-row md:items-stretch md:gap-5">
          {days.map((day) => (
            <DayCard key={day.label} day={day} />
          ))}
        </div>
      </div>

      {/* Left mountain */}
      <Image
        src={mountainLeft}
        alt=""
        aria-hidden
        priority
        unoptimized
        width={613}
        height={427}
        className="pointer-events-none absolute right-[42vw] bottom-0 z-40 h-auto w-[61vw] sm:right-[55vw] sm:w-[47vw] md:right-[42vw] md:w-[68vw] lg:right-[55vw] lg:w-[45vw] xl:right-[64vw] xl:w-[36vw]"
      />

      {/* Right mountain */}
      <Image
        src={mountainRight}
        alt=""
        aria-hidden
        priority
        unoptimized
        width={853}
        height={515}
        className="pointer-events-none absolute bottom-0 left-[48vw] z-40 h-auto w-[93vw] md:left-[42vw] md:w-[221vw] lg:left-[44vw] lg:w-[60vw] xl:left-[54vw] xl:w-[46vw]"
      />

      {/* Foreground mountain gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[200px] md:h-[400px] lg:h-[500px]"
        style={{
          background: 'linear-gradient(180deg, rgba(251,239,207,0) 0%, var(--pycon-beige) 100%)',
        }}
      />
    </section>
  );
}
