import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Luca Matei - Full-Stack Developer working with the Web, Servers and AI',
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isActive = (path: string) => {
    return false;
  };

  return (
    <html lang="en" className={inter.className}>
      <body>
        <div
          className="bg-cover bg-fixed bg-no-repeat flex flex-col items-center justify-center min-h-screen"
          style={{ backgroundImage: `url('/images/bg.gif')`, backdropFilter: "blur(4px)" }}
        >
          <div className="flex flex-col md:flex-row md:max-w-4xl w-full mx-auto my-10 bg-white rounded-lg shadow-md overflow-hidden text-gray-600">
            <div className="flex flex-col">
              <header className="border-b border-gray-200">
                <nav className="flex justify-center py-2">
                  <div className="flex justify-center w-full max-w-md mx-auto">
                    <Link href="/" className={`mx-2 px-4 py-2 ${isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>
                        Home
                    </Link>
                    <Link href="/about" className={`mx-2 px-4 py-2 whitespace-nowrap ${isActive('/about') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>
                        About Me
                    </Link>
                    <Link href="/experience" className={`mx-2 px-4 py-2 ${isActive('/experience') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>
                        Experience
                    </Link>
                    <Link href="/projects" className={`mx-2 px-4 py-2 ${isActive('/experience') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}>
                        Projects
                    </Link>
                  </div>
                </nav>
              </header>
              <main className="flex flex-col md:flex-row w-full">
                {children}
              </main>
              <footer className="border-t border-gray-200 text-center text-xs py-4 text-gray-500 px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                <p>Information is being updated and will be finalized in several days.</p>
                <p>© 2023 Luca Matei, All rights reserved.</p>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
