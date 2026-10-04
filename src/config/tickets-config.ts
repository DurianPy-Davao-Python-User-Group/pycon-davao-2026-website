export type SaleId = 'none' | 'early-bird' | '9.9-sale' | 'flash-sale';

export interface SaleProfile {
  id: SaleId;
  name: string;
  badge: string;
  discountPercent: number;
  heroCtaText: string;
  footerCtaText: string;
  headerCtaText: string;
}

export const SALES_PROFILES: Record<SaleId, SaleProfile> = {
  none: {
    id: 'none',
    name: 'Regular',
    badge: '',
    discountPercent: 0,
    heroCtaText: 'Get Tickets',
    footerCtaText: 'BUY TICKETS',
    headerCtaText: 'Buy Tickets',
  },
  'early-bird': {
    id: 'early-bird',
    name: 'Early Bird Discount',
    badge: 'EARLY BIRD — 30% OFF',
    discountPercent: 30,
    heroCtaText: 'Early-Bird Sale (30% OFF)',
    footerCtaText: 'EARLY-BIRD TICKETS (30% OFF)',
    headerCtaText: 'Early Bird (30% OFF)',
  },
  '9.9-sale': {
    id: '9.9-sale',
    name: '9.9 Sale',
    badge: '9.9 SALE — 25% OFF',
    discountPercent: 25,
    heroCtaText: '9.9 Sale (25% OFF)',
    footerCtaText: '9.9 SALE (25% OFF)',
    headerCtaText: '9.9 Sale (25% OFF)',
  },
  'flash-sale': {
    id: 'flash-sale',
    name: 'Flash Sale',
    badge: 'FLASH SALE — 15% OFF',
    discountPercent: 15,
    heroCtaText: 'Flash Sale (15% OFF)',
    footerCtaText: 'FLASH SALE (15% OFF)',
    headerCtaText: 'Flash Sale (15% OFF)',
  },
};

/**
 * Switch the active sale here:
 * Options: 'none' | 'early-bird' | '9.9-sale' | 'flash-sale'
 */
export const ACTIVE_SALE: SaleId = 'none';

export type TicketId = 'kodigo' | 'coder' | 'kasosyo' | 'kumpanya' | 'extra';

export type TicketStatus = 'open' | 'slots-full' | 'registrations-closed' | 'closed';

export const TICKET_STATUS_LABELS: Record<TicketStatus, string> = {
  open: 'Open',
  'slots-full': 'Slots Full',
  'registrations-closed': 'Registrations Closed',
  closed: 'Closed',
};

/**
 * Configure each ticket's availability status individually:
 * - 'open': Available for registration
 * - 'registrations-closed': Registrations are closed
 * - 'slots-full': All slots are filled / sold out
 * - 'closed': Ticket tier is closed
 */
export const TICKET_STATUSES: Record<TicketId, TicketStatus> = {
  kodigo: 'registrations-closed',
  coder: 'open',
  kasosyo: 'open',
  kumpanya: 'registrations-closed',
  extra: 'open',
};

/**
 * Global toggle to configure that ticket selling is done / concluded.
 * - When true (or when all tickets in TICKET_STATUSES are closed):
 *   Global CTAs (Header, Hero, Footer, CallToAction) indicate "Tickets Closed",
 *   and the tickets section announces that ticket selling has concluded.
 * - Set to false when tickets are still actively being sold.
 */
export const IS_TICKETS_SELLING_DONE: boolean = false;

export function areAllTicketsClosed(): boolean {
  return Object.values(TICKET_STATUSES).every((status) => status !== 'open');
}

export function isTicketSellingDone(): boolean {
  return IS_TICKETS_SELLING_DONE || areAllTicketsClosed();
}

export function isTicketOpen(ticketId: TicketId): boolean {
  if (IS_TICKETS_SELLING_DONE) return false;
  return TICKET_STATUSES[ticketId] === 'open';
}

export function getTicketStatus(ticketId: TicketId): TicketStatus {
  return TICKET_STATUSES[ticketId];
}

/**
 * Toggle whether ticket registrations are actively open overall.
 * Automatically false when ticket selling is done or all tickets are closed.
 */
export const IS_REGISTRATION_OPEN: boolean = !IS_TICKETS_SELLING_DONE && !areAllTicketsClosed();

/**
 * Base regular prices for each ticket type in PHP
 */
export const BASE_TICKETS = {
  kodigo: {
    id: 'kodigo',
    name: 'KODIGO',
    label: 'Scholarship',
    regularPrice: 375,
  },
  coder: {
    id: 'coder',
    name: 'CODER',
    label: 'Regular',
    regularPrice: 750,
  },
  kasosyo: {
    id: 'kasosyo',
    name: 'KASOSYO',
    label: 'Patron',
    regularPrice: 2000,
  },
  kumpanyaPromo: {
    id: 'kumpanya',
    name: 'Kumpanya/Company Promo',
    // Tiered volume discount promo: get tickets for as low as ₱487.50
    asLowAsPrice: 487.5,
  },
  extra: {
    id: 'extra',
    name: 'EXTRA',
    label: 'Sprint Day',
    regularPrice: 500,
  },
} as const;

export function formatPHP(amount: number): string {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(amount)
    .replace('PHP', '₱')
    .trim();
}

export function getActiveSale(): SaleProfile {
  return SALES_PROFILES[ACTIVE_SALE] ?? SALES_PROFILES.none;
}

export interface TicketPricing {
  regularPrice: number;
  discountedPrice: number;
  discountPercent: number;
  formattedRegularPrice: string;
  formattedDiscountedPrice: string;
  hasDiscount: boolean;
  saleBadge: string;
  saleName: string;
}

export function getTicketPricing(
  ticketId: 'kodigo' | 'coder' | 'kasosyo' | 'extra',
): TicketPricing {
  const base = BASE_TICKETS[ticketId];
  const sale = getActiveSale();
  // Scholarship ('kodigo') and Sprint Day add-on ('extra') are fixed prices and excluded from ticket sales
  const discountPercent = ticketId === 'kodigo' || ticketId === 'extra' ? 0 : sale.discountPercent;
  const hasDiscount = discountPercent > 0;

  const discountedPrice = hasDiscount
    ? Math.round(base.regularPrice * (1 - discountPercent / 100) * 100) / 100
    : base.regularPrice;

  return {
    regularPrice: base.regularPrice,
    discountedPrice,
    discountPercent,
    formattedRegularPrice: formatPHP(base.regularPrice),
    formattedDiscountedPrice: formatPHP(discountedPrice),
    hasDiscount,
    saleBadge: sale.badge,
    saleName: sale.name,
  };
}

export function getCtaStatus(location: 'header' | 'hero' | 'footer' | 'cta') {
  const sale = getActiveSale();
  const sellingDone = isTicketSellingDone();

  if (sellingDone) {
    let text: string;

    switch (location) {
      case 'footer':
        text = 'TICKETS CLOSED';
        break;
      case 'header':
      case 'hero':
      case 'cta':
      default:
        text = 'Tickets Closed';
        break;
    }

    return {
      text,
      href: '/tickets',
      isOpen: false,
    };
  }

  if (!IS_REGISTRATION_OPEN) {
    return {
      text: location === 'hero' ? 'Tickets Opening Soon' : 'TICKETS OPENING SOON',
      href: '/tickets',
      isOpen: false,
    };
  }

  let text = 'Buy Tickets';
  if (location === 'header') {
    text = sale.headerCtaText;
  } else if (location === 'hero') {
    text = sale.heroCtaText;
  } else if (location === 'footer') {
    text = sale.footerCtaText;
  } else if (location === 'cta') {
    text = sale.discountPercent > 0 ? `Get Tickets (${sale.discountPercent}% OFF)` : 'Get Tickets';
  }

  return {
    text,
    href: '/tickets',
    isOpen: true,
  };
}
