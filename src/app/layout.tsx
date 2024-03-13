import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luca Matei's Portfolio | Full Stack Developer",
  description: "I design and implement complex systems, having a proven track record of developing and enhancing SaaS platforms with Python and JavaScript frameworks in Linux environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer stacked={true} limit={3} position="bottom-right" />
      </body>
    </html>
  );
}
