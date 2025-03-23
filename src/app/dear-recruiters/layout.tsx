import React from 'react';
import generatePageMetadata from "@/components/generatePageMetadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "Dear Recruiters",
    description: "To help us use our time efficiently, I've created a list of common questions with answers. This information can help prepare for our conversation or provide quick answers to initial questions you might have.",
    path: "/dear-recruiters",
  })
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
};
