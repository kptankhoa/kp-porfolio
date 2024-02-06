import type { Metadata } from "next";
import { Cutive_Mono, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const cutive = Cutive_Mono({
  subsets: ["latin"],
  weight: "400"
});

const ubuntu = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "kptankhoa",
  description: "Khoa Phan Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} ${cutive.className}`}>{children}</body>
    </html>
  );
}
