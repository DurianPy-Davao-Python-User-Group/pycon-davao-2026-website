import Link from 'next/link';

interface BuyTicketButtonProps {
  isVisible: boolean;
}

export default function BuyTicketButton({ isVisible }: BuyTicketButtonProps) {
  if (!isVisible) return null;

  return (
    <Link
      href="/tickets"
      className="bg-pycon-orange hover:bg-pycon-orange-accent focus-visible:outline-pycon-dark-blue ml-auto inline-flex shrink-0 items-center justify-center rounded-[10px] px-5 py-2 font-nav text-xs font-bold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-6 sm:text-sm lg:ml-auto"
    >
      Buy Tickets
    </Link>
  );
}
