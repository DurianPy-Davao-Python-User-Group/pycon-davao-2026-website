import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

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
    <PlaceholderPage
      title="PROGRAM"
      subtitle="PYCON DAVAO 2026"
      badge="IN PREPARATION"
      description="The full conference schedule, keynote speakers, workshops, and panel sessions are currently being finalized."
      additionalText="Interested in speaking at PyCon Davao 2026? Watch out for the Call for Speakers (CFS) announcement on DurianPy social media!"
      actionText="Back to Home"
      actionHref="/"
    />
  );
}
