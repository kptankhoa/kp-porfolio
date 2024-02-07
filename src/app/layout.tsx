import type { Metadata } from "next";
import { Cutive_Mono } from "next/font/google";
import "./globals.css";

const cutive = Cutive_Mono({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "kptankhoa",
  description: "Khoa Phan Porfolio",
  openGraph: {
    images: "https://i.pinimg.com/originals/73/c5/b2/73c5b2afc684e0e6bc1b9469e5120b88.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cutive.className}>{children}</body>
    </html>
  );
}
