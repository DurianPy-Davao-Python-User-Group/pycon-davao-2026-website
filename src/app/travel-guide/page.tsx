import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Travel Guide',
  description:
    'Travel guide for PyCon Davao 2026 attendees visiting Davao City, Philippines. Venue directions, lodging, and transport.',
  openGraph: {
    title: 'Travel Guide | PyCon Davao 2026',
    description:
      'Travel guide for PyCon Davao 2026 attendees visiting Davao City, Philippines. Venue directions, lodging, and transport.',
    url: '/travel-guide',
  },
};

export default function TravelGuidePage() {
  return (
    <PlaceholderPage
      title="TRAVEL GUIDE"
      subtitle="PYCON DAVAO 2026"
      badge="DAVAO CITY"
      description="Planning your trip to Davao City? We are curating our comprehensive travel guide for attendees."
      additionalText="Our guide will cover nearby partner hotels, airport navigation, public transportation tips, and local food spots in Davao City."
      actionText="Back to Home"
      actionHref="/"
    />
  );
}
