'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type TicketId = 'kodigo' | 'coder' | 'kasosyo' | 'kumpanya';

type RegistrationLinks = {
  kodigo: string;
  coderKasosyo: string;
  kumpanya: string;
};

const tickets = [
  {
    id: 'kodigo',
    name: 'Kodigo',
    label: 'Scholarship',
    benefits: ['Event pass', 'Lunch', 'Snacks'],
    className: 'bg-pycon-beige-dark text-pycon-dark-blue',
  },
  {
    id: 'coder',
    name: 'Coder',
    label: 'Regular',
    benefits: ['Full access', 'Lunch', 'Snacks', 'Kit'],
    className: 'bg-pycon-green text-white',
  },
  {
    id: 'kasosyo',
    name: 'Kasosyo',
    label: 'Patron',
    benefits: ['Full access', 'Lunch', 'Snacks', 'Kit', "Speaker's night"],
    className: 'bg-pycon-teal text-white',
  },
  {
    id: 'kumpanya',
    name: 'Kumpanya',
    label: 'Corporate',
    benefits: ['Full access', 'Lunch', 'Snacks', 'Kit', "Speaker's night", 'Bulk discounts'],
    className: 'bg-pycon-orange-accent text-white',
  },
] satisfies Array<{
  id: TicketId;
  name: string;
  label: string;
  benefits: string[];
  className: string;
}>;

function getRegistrationLink(ticket: TicketId, links: RegistrationLinks) {
  if (ticket === 'kodigo') return links.kodigo;
  if (ticket === 'kumpanya') return links.kumpanya;
  return links.coderKasosyo;
}

export default function TicketTypesSelector({
  registrationLinks,
}: {
  registrationLinks: RegistrationLinks;
}) {
  const [selectedTicket, setSelectedTicket] = useState<TicketId | null>(null);

  const secureTicket = () => {
    if (!selectedTicket) return;

    const registrationLink = getRegistrationLink(selectedTicket, registrationLinks);
    if (registrationLink) window.location.assign(registrationLink);
  };

  return (
    <section
      id="ticket-types"
      aria-labelledby="ticket-types-heading"
      className="bg-pycon-beige relative isolate overflow-hidden px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24"
    >
      <div
        aria-hidden
        className="from-pycon-green/70 pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t to-transparent md:h-44"
      />

      <div className="mx-auto max-w-6xl">
        <h2
          id="ticket-types-heading"
          className="font-heading text-pycon-orange-accent text-center text-4xl font-extrabold tracking-tight uppercase sm:text-5xl lg:text-6xl"
        >
          Ticket Types
        </h2>
        <p className="text-pycon-dark-blue mx-auto mt-4 max-w-2xl text-center text-base md:text-lg">
          Choose the ticket that fits you best. You can select one ticket type at a time.
        </p>

        <div
          role="radiogroup"
          aria-label="Ticket type"
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-5"
        >
          {tickets.map((ticket) => {
            const selected = selectedTicket === ticket.id;

            return (
              <button
                key={ticket.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setSelectedTicket(ticket.id)}
                className={cn(
                  'font-heading min-h-64 cursor-pointer rounded-xl p-6 text-left shadow-sm transition-[transform,box-shadow] transition-transform duration-200 duration-300 outline-none hover:-translate-y-1 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-teal-600 md:min-h-72',
                  ticket.className,
                  selected && 'z-10 scale-[1.045] shadow-xl',
                )}
              >
                <span className="block text-center text-xl font-extrabold uppercase">
                  {ticket.name}
                </span>
                <span className="block text-center text-xs italic opacity-90">
                  ({ticket.label})
                </span>

                <ul className="mt-7 space-y-2 text-sm font-medium">
                  {ticket.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0" strokeWidth={3} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <Button
            type="button"
            onClick={secureTicket}
            disabled={!selectedTicket}
            className="w-full max-w-sm disabled:cursor-not-allowed disabled:bg-slate-400 disabled:opacity-70"
          >
            Secure a Ticket
          </Button>
        </div>
      </div>
    </section>
  );
}
