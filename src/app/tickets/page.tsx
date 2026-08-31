import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Tickets',
  description:
    'Ticket tiers, pricing, and registration details for PyCon Davao 2026.',
  openGraph: {
    title: 'Tickets | PyCon Davao 2026',
    description:
      'Ticket tiers, pricing, and registration details for PyCon Davao 2026.',
    url: '/tickets',
  },
};

export default function TicketsPage() {
  return (
    <PlaceholderPage
      title="TICKETS"
      subtitle="PYCON DAVAO 2026"
      badge="OPENING SOON"
      description="Ticket sales for PyCon Davao 2026 will open soon! We are preparing student, professional, and patron tiers."
      additionalText="Stay tuned on our social media channels or check back here for early bird announcements and registration links."
      actionText="Back to Home"
      actionHref="/"
    />
  );
}
