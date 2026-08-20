import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PyCon Davao 2026',
  description: 'PyCon Davao 2026 website',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
