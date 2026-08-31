import type { Metadata } from 'next';
import Head from 'next/head';
import PlaceholderPage from '@/components/PlaceholderPage';

const PROSPECTUS_URL =
  'https://drive.google.com/file/d/1tjZO6lTiZJ3WhD7gU9ZZvloyQ7bvvNnK/view?usp=drive_link';

export const metadata: Metadata = {
  title: 'Sponsorship Prospectus',
  description:
    'Learn how you can partner with PyCon Davao 2026. View our sponsorship packages and prospectus.',
  openGraph: {
    title: 'Sponsorship Prospectus | PyCon Davao 2026',
    description:
      'Learn how you can partner with PyCon Davao 2026. View our sponsorship packages and prospectus.',
    url: '/sponsorship-prospectus',
  },
};

export default function SponsorshipProspectusPage() {
  return (
    <>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${PROSPECTUS_URL}`} />
      </head>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace("${PROSPECTUS_URL}");`,
        }}
      />
      <PlaceholderPage
        title="SPONSORSHIP"
        subtitle="PYCON DAVAO 2026"
        badge="PROSPECTUS"
        description="Redirecting you to the PyCon Davao 2026 Sponsorship Prospectus on Google Drive..."
        additionalText={
          <p>
            If you are not automatically redirected, please{' '}
            <a
              href={PROSPECTUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-pycon-orange underline underline-offset-4 hover:opacity-80"
            >
              click here to open the Sponsorship Prospectus
            </a>
            .
          </p>
        }
        actionText="Open Prospectus"
        actionHref={PROSPECTUS_URL}
      />
    </>
  );
}
