import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Registration',
  description: 'Registration portal for PyCon Davao 2026.',
  openGraph: {
    title: 'Registration | PyCon Davao 2026',
    description: 'Registration portal for PyCon Davao 2026.',
    url: '/register',
  },
};

export default function RegisterPage() {
  return (
    <PlaceholderPage
      title="REGISTRATION"
      subtitle="PYCON DAVAO 2026"
      badge="COMING SOON"
      description="Attendee registration for PyCon Davao 2026 will open soon alongside ticket release."
      additionalText="Be sure to have your details ready when registration opens to secure your spot!"
      actionText="Back to Home"
      actionHref="/"
    />
  );
}
