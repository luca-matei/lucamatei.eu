"use client";
import {usePathname} from "next/navigation";
import {ContactSection} from "@/app/(presentation-pages)/contact/ContactSection";
import Header from "@/components/Header";

export default function PresentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPathname = usePathname()

  return (
    <>
      <Header/>
      {children}
      <ContactSection />
    </>
  )
}
