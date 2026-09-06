import type { Metadata } from 'next';
import TicketTypesSection from '@/components/sections/ticket-types-section';

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
    <main>
      <TicketTypesSection />
    </main>
  );
}
