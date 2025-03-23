import React from 'react';
import generatePageMetadata from "@/components/generatePageMetadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "Contact",
    description: "Drop me a line if you think we can team up or if you have any questions.",
    path: "/contact",
  })
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
};
