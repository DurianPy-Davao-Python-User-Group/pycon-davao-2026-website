import type { Metadata } from 'next';
import PlaceholderPage from '@/components/PlaceholderPage';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <PlaceholderPage
      title="404"
      subtitle="PAGE NOT FOUND"
      badge="ERROR 404"
      description="Oops! It looks like Monty and Tony couldn't find the page you were looking for."
      additionalText="The link you followed may be broken, or the page may have been removed. Head back to the homepage to explore PyCon Davao 2026."
      actionText="Back to Home"
      actionHref="/"
    />
  );
}
