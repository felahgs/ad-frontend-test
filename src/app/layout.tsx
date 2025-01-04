import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

import Image from "next/image";
import Link from "next/link";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamer Shop",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const HeaderLogo = (
    <Link href="/">
      <Image
        width={150}
        height={24}
        alt="gamer shop"
        src={"gamer-shop.svg"}
        title="Gamer shop logo"
      />
    </Link>
  );

  const FooterLogo = (
    <Link href="/">
      <Image
        width={170}
        height={44}
        alt="apply digital"
        src={"apply-digital.svg"}
        title="apply digital logo"
      />
    </Link>
  );

  return (
    <html lang="en">
      <body className={archivo.className}>
        <Header logo={HeaderLogo} />
        {children}
        <Footer>{FooterLogo}</Footer>
      </body>
    </html>
  );
}
