import React from 'react';
import generatePageMetadata from "@/components/generatePageMetadata";
import {PROFESSIONAL_YEARS, PROGRAMMING_YEARS} from "@/constants";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "Experience",
    description: `Here's the knowledge I've gained from ${PROGRAMMING_YEARS} years of coding and how I've applied it in my last ${PROFESSIONAL_YEARS} years of professional experience.`,
    path: "/experience",
  })
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
};
