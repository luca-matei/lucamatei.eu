"use client";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudArrowDown, faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {usePathname} from "next/navigation";
import {ContactSection} from "@/app/(presentation-pages)/contact/ContactSection";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
]

export default function PresentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const currentPathname = usePathname()

  return (
    <>
      <header className="fixed bg-white ring-1 ring-gray-900/10 inset-x-0 top-0 z-50 print:hidden">
        <nav className="flex items-center justify-between p-4 sm:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex sm:flex-1">
          </div>
          <div className="flex sm:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div className="hidden sm:flex sm:gap-x-12">
            {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`p-1 text-sm font-semibold leading-6 text-gray-900 ${currentPathname === item.href ? 'border-b-2 border-b-[#4F46E5]' : ''}`}
                >
                  {item.name}
                </a>
            ))}
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:justify-end">
            <a href="/luca-matei-resume-en.pdf" className="p-1 text-sm font-semibold leading-6 text-gray-900">
              Resume<FontAwesomeIcon icon={faCloudArrowDown} className="inline ml-2 h-4 w-4" aria-hidden="true"/>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="sm:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50"/>
          <Dialog.Panel
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <span></span>
              <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <FontAwesomeIcon icon={faTimes} className="h-6 w-6" aria-hidden="true"/>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                      <a
                          key={item.name}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${currentPathname === item.href ? 'bg-gray-50' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                      href="https://assets.lucamatei.eu/files/luca-matei-resume-en.pdf"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Resume<FontAwesomeIcon icon={faCloudArrowDown} className="ml-2 h-4 w-4" aria-hidden="true"/>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {children}
      {currentPathname !== "/resume" &&
        <ContactSection />
      }
    </>
  )
}
