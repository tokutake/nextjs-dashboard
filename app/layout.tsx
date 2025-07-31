import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Next.js Dashboard',
    template: '%s | Next.js Dashboard',
  },
  description: 'A simple dashboard built with Next.js',
  metadataBase: new URL('https://nextjs-dashboard.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
       <body>{children}</body>
    </html>
  );
}
