import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCloudArrowDown, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from "react";
import {usePathname} from "next/navigation";

interface NavigationItem {
  name: string;
  href: string;
}

const NAVIGATION: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
//  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const currentPathname = usePathname()

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed bg-white ring-1 ring-gray-900/10 inset-x-0 top-0 z-50 print:hidden">
      {/* Desktop menu */}
      <nav className="flex items-center justify-between p-4 md:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex md:flex-1">
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`p-1 text-sm font-semibold leading-6 text-gray-900 ${currentPathname === item.href ? 'border-b-2 border-b-[#4F46E5]' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <a href="/luca-matei-resume-en.pdf" className="whitespace-nowrap px-4 py-2 text-sm font-semibold leading-6 text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors">
            Resume<FontAwesomeIcon icon={faCloudArrowDown} className="inline ml-2 h-4 w-4" aria-hidden="true"/>
          </a>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-25"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Modal panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 md:max-w-sm md:ring-1 md:ring-gray-900/10">
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
                  {NAVIGATION.map((item) => (
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
                    href="/luca-matei-resume-en.pdf"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Resume<FontAwesomeIcon icon={faCloudArrowDown} className="ml-2 h-4 w-4" aria-hidden="true"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
