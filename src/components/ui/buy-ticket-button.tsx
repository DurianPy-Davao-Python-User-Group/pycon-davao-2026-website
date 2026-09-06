import Link from 'next/link';
import { cn } from '@/lib/utils';
import { getCtaStatus } from '@/config/tickets-config';

interface BuyTicketButtonProps {
  isVisible?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function BuyTicketButton({
  isVisible = true,
  className,
  onClick,
}: BuyTicketButtonProps) {
  if (!isVisible) return null;

  const headerCta = getCtaStatus('header');

  return (
    <Link
      href={headerCta.href}
      onClick={onClick}
      className={cn(
        'bg-pycon-orange hover:bg-pycon-orange-accent focus-visible:outline-pycon-dark-blue font-nav inline-flex shrink-0 items-center justify-center rounded-[10px] px-5 py-2 text-xs font-bold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-6 sm:text-sm',
        className,
      )}
    >
      {headerCta.text}
    </Link>
  );
}
