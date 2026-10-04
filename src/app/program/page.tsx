import type { Metadata } from 'next';
import { EventSchedule } from '@/components/program/EventSchedule'
import { schedules } from '@/data/schedule';
import backgroundPattern from '@/assets/program/bg-pattern2.svg';
import ProgramHero from '@/components/program/ProgramHero';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Program & Schedule',
  description:
    'Explore keynotes, talk tracks, and hands-on workshops scheduled for PyCon Davao 2026.',
  openGraph: {
    title: 'Program & Schedule | PyCon Davao 2026',
    description:
      'Explore keynotes, talk tracks, and hands-on workshops scheduled for PyCon Davao 2026.',
    url: '/program',
  },
};

export default function ProgramPage() {
  return (
    <>
      <ProgramHero />
      <section
        className="bg-pycon-orange bg-repeat p-0 sm:p-8"
        style={{
          backgroundImage: `url(${backgroundPattern.src})`,
        }}
      >
        <div className="bg-pycon-custard-light rounded-xl px-12 py-4">
          <div className="mx-auto">
            <EventSchedule schedules={schedules} />
          </div>
        </div>
      </section>
    </>
  );
}
