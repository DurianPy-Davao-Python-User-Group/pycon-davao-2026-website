import type { Metadata } from 'next';
import TicketTypesSection from '@/components/sections/ticket-types-section';

export const metadata: Metadata = {
  title: 'Ticket Types',
  description: 'Choose your ticket for PyCon Davao 2026.',
};

export default function TicketTypesPage() {
  return (
    <main>
      <TicketTypesSection />
    </main>
  );
}
