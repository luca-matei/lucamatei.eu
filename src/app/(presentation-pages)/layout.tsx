"use client";
import {ContactSection} from "@/app/(presentation-pages)/contact/ContactSection";
import Header from "@/components/Header";

export default function PresentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      {children}
      <ContactSection />
    </>
  )
}
