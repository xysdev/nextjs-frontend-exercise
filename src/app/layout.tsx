import './globals.css';

import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Pets | Find your perfect companion',
  description: 'Browse and filter pets available for adoption.',
};

const openSans = Open_Sans({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <footer className={styles.footer}>
          <Container>
            <p className={styles.footerText}>© 1996 - 2024 ~ Pets B.V.</p>
          </Container>
        </footer>
      </body>
    </html>
  );
}
