import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luca Matei | Senior Full Stack Engineer",
  description: "Experienced impact-driven engineer specializing in B2B startup environments. Creator of open-source IaC tool, WSGI web framework, and utility-first CSS library. Authored technical guides for various software products. Proficient in Python, TypeScript, and Linux. Mentor for students and junior developers in procedural programming, web development, and LLMs. Open-source contributor to Pydantic. Built high-throughput e-commerce products in global, agile teams. Certified ScrumMaster with multiple Coursera certifications in full-stack development, AI, and Rust. Pursuing AWS certification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`{inter.className} h-full`}>
        {children}
        <ToastContainer stacked={true} limit={3} position="bottom-right" />
      </body>
    </html>
  );
}
