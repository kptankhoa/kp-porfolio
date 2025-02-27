import React from 'react';
import type { Metadata } from 'next';
import { Cutive_Mono } from 'next/font/google';
import { CircleCursor, Header } from '@components';
import { navItems, summaryData } from '@data';
import './globals.css';

const cutive = Cutive_Mono({
  subsets: ['latin'],
  weight: '400'
});

export const metadata: Metadata = {
  title: 'kptankhoa',
  description: 'Khoa Phan Porfolio',
  openGraph: {
    images: 'https://bucket.kptankhoa.dev/bg.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cutive.className}>
        <main>
          <CircleCursor />
          <Header
            firstName={summaryData.firstName}
            lastName={summaryData.lastName}
            navItems={navItems}
          />
          {children}
        </main>
      </body>
    </html>
  );
}
