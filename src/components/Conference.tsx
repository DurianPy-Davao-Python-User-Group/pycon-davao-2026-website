import Image from 'next/image';
import mobileBg from '@/assets/conference/mobile-bg.svg';
import mobileMountainLeft from '@/assets/conference/mobile-mountain-left.svg';
import mobileMountainRight from '@/assets/conference/mobile-mountain-right.svg';
import mobileGradientMountain from '@/assets/conference/mobile-gradient-mountain.svg';

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
    <article className="border-secondary bg-card h-[400px] w-full max-w-[805px] rounded-[45px] border-[4px] p-6 md:h-auto md:min-h-[400px] md:max-w-none md:flex-1">
      <p className="text-primary text-xs font-bold tracking-wide uppercase">{day.label}</p>
      <h3 className="font-heading text-secondary mt-1 text-2xl font-bold">{day.title}</h3>
      <p className="text-foreground mt-1 list-disc text-sm italic">{day.date}</p>
      <ul className="text-foreground mt-4 list-disc space-y-1.5 pl-5 text-sm">
        {day.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Conference() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
      >
        <Image
          src={mobileBg}
          alt=""
          priority
          unoptimized
          className="pointer-events-none absolute inset-0 h-full w-[3200px] md:w-full md:object-cover"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[45vh] rotate-180"
        style={{
          background: 'linear-gradient(180deg, rgba(251, 239, 207, 0) 0%, #FBEFCF 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[45vh]"
        style={{
          background: 'linear-gradient(180deg, rgba(251, 239, 207, 0) 0%, #FBEFCF 100%)',
        }}
      />

      <Image
        src={mobileMountainLeft}
        alt=""
        aria-hidden
        priority
        unoptimized
        width={0}
        height={0}
        className="pointer-events-none absolute bottom-0 left-0 z-30 h-auto w-[220px] sm:w-[300px] md:w-[360px]"
      />

      <Image
        src={mobileMountainRight}
        alt=""
        aria-hidden
        priority
        unoptimized
        width={0}
        height={0}
        className="pointer-events-none absolute right-0 bottom-0 z-30 h-auto w-[200px] sm:w-[270px] md:w-[330px]"
      />

      <Image
        src={mobileGradientMountain}
        alt=""
        aria-hidden
        priority
        unoptimized
        className="pointer-events-none absolute bottom-0 left-0 z-40 h-auto w-full"
      />

      <div className="relative z-20 mx-auto my-auto flex w-full max-w-[807.6px] flex-col gap-6 px-4 md:flex-row md:items-stretch md:gap-4">
        {days.map((day) => (
          <DayCard key={day.label} day={day} />
        ))}
      </div>
    </section>
  );
}
