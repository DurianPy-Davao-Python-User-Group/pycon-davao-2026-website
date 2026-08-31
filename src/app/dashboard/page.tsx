import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Attendee Dashboard',
  description: 'Attendee dashboard and badge management for PyCon Davao 2026.',
  openGraph: {
    title: 'Attendee Dashboard | PyCon Davao 2026',
    description: 'Attendee dashboard and badge management for PyCon Davao 2026.',
    url: '/dashboard',
  },
};

export default function DashboardPage() {
  return (
    <PlaceholderPage
      title="DASHBOARD"
      subtitle="PYCON DAVAO 2026"
      badge="ATTENDEE PORTAL"
      description="The PyCon Davao 2026 attendee dashboard will let you manage your profile, schedule, and digital badge."
      additionalText="The dashboard will be active once registration is open and accounts are issued."
      actionText="Back to Home"
      actionHref="/"
    />
  );
}
