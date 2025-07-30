"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Patrick Lauber",
    role: "getitAI Founder, Django CMS Creator",
    linkedin: "https://www.linkedin.com/in/patricklauber",
    relation: "Patrick managed Luca directly",
    text: `Should Luca apply to a job at your company, you would be stupid not to hire him!`
  },
  {
    name: "Lio Mendonça",
    role: "getitAI Founder",
    linkedin: "https://www.linkedin.com/in/lio-mendonca",
    relation: "Lio managed Luca directly",
    text: `Luca Matei is an absolutely exceptional fullstack developer, and one of the most capable and reliable professionals I've had the pleasure to work with. His technical depth, particularly in Python, is outstanding—and he consistently pushes the boundaries of what's possible, delivering innovative and high-impact solutions.

Luca thrives in complexity. No challenge seems to phase him; in fact, he often tackles the hardest problems head-on with remarkable calm and efficiency. His contributions include the implementation of cutting-edge AI processes, including Retrieval-Augmented Generation (RAG) and a wide range of performance optimization techniques that significantly improved system scalability and responsiveness.

Beyond his technical skills, Luca stands out for his strong work ethic and collaborative spirit. He's always willing to step outside his domain, lend a hand to others, and find ways to solve cross-functional challenges. His proactive approach and eagerness to help make him an invaluable team member and a force multiplier across any engineering organization.

I highly recommend Luca for any role involving backend, AI, or fullstack systems work—especially where performance, innovation, and teamwork are critical. He is, quite simply, exceptional.`
  },
  {
    name: "Nicholas Ghizu",
    role: "Python Developer",
    linkedin: "https://www.linkedin.com/in/ghizu-antonio-nicolas-2025a0335",
    relation: "Nicholas was Luca's client",
    text: `Am avut ocazia să discut cu Luca despre Python și modele LLM, iar explicațiile lui au fost foarte clare și ușor de înțeles. M-a ajutat să văd mai clar direcțiile în care pot merge ca junior și mi-a oferit tool-uri și perspective valoroase. Îl recomand cu încredere pentru oricine are nevoie de îndrumare sau colaborare în zona de tech și AI!`
  },
  {
    name: "Alexandru Fanaru", 
    role: "Quality Engineer",
    linkedin: "https://www.linkedin.com/in/alex-fanaru",
    relation: "Alexandru was Luca's client",
    text: `Had a couple of both backend and frontend sessions where Luca demonstrated how things work in both areas of an app, with great examples.

Communication was excelent, as you would expect from someone with experience.
You can quickly notice that he possesses a lot of knowledge about the subjects covered.

I personally recommend Luca to anyone that needs a few hours of discussions whith someone experienced.`
  },
  {
    name: "Misoc Iani",
    role: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/misoc-iani-89971622a",
    relation: "Iani was Luca's client",
    text: `Luca, un baiat tare interesant si cu o puternica dorinta de dezvoltare personala cat si pentru a impartasi cu ceilalti.

Ne-am cunoscut pe LinkedIn, am conversat, am schimbat idei si am facut o sesiune de #PayWhatYouThinkIsWorth in care am discutat despre cum facem lucrurile sa mearga de parte fiecaruia in munca cat si cel mai important, a dat din knowledge-ul lui la toate curiozitatile si intrebarile mele despre Python si LLM.

Ulterior, mi-a impartasit la final un mail plin de documentatie si know-how care cu siguranta mi-a salvat mult timp de research continuu. Keep up the good stuff, Luca! :D`
  },
  {
    name: "Bogdan Vuluga",
    role: "Automotive Technical Trainer",
    linkedin: "https://www.linkedin.com/in/bogdan-vuluga",
    relation: "Bogdan was Luca's client",
    text: `Am avut recent plăcerea de a discuta cu Luca pe marginea unui proiect la care lucrez în această perioadă, pentru care am avut nevoie de îndrumare.

Discuția a fost agreabilă și utilă, cu răspunsuri pertinente la întrebările pe care le-am adresat.

Am apreciat deschiderea cu care a abordat întâlnirea și soluțiile oferite.`
  }
];

const formatText = (text: string) => {
  return text.split('\n').map((paragraph, index) => (
    <p key={index} className={index > 0 ? 'mt-4' : ''}>
      {paragraph.trim()}
    </p>
  ));
};

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [truncatedTexts, setTruncatedTexts] = useState<Record<string, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkTruncation = () => {
      const elements = document.querySelectorAll('.testimonial-text');
      const newTruncatedTexts: Record<string, boolean> = {};
      
      elements.forEach((element) => {
        const name = element.getAttribute('data-name');
        if (name) {
          const isTruncated = element.scrollHeight > element.clientHeight;
          newTruncatedTexts[name] = isTruncated;
        }
      });
      
      setTruncatedTexts(newTruncatedTexts);
    };

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 400; // Width of each card
        const gap = 32; // gap-8 = 2rem = 32px
        const scrollPosition = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const newIndex = Math.round(scrollPosition / (cardWidth + gap));
        
        // If we're at the maximum scroll position, select the last index
        if (Math.abs(scrollPosition - maxScroll) < 10) {
          setCurrentIndex(testimonials.length - 1);
        } else if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    };

    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      window.removeEventListener('resize', checkTruncation);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentIndex]);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 400; // Width of each card
      const gap = 32; // gap-8 = 2rem = 32px
      const scrollPosition = index * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  const openModal = (testimonial: typeof testimonials[0]) => {
    setSelectedTestimonial(testimonial);
    // Small delay to allow the state to update before showing the modal
    setTimeout(() => setIsModalOpen(true), 10);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Wait for the animation to complete before removing the testimonial
    setTimeout(() => setSelectedTestimonial(null), 200);
  };

  return (
    <div className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Title and description */}
          <div className="lg:w-1/3">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              See what clients say about my work
            </p>
            <p className="mt-4 text-gray-600">
              From startup founders to fellow developers, these are the stories of successful collaborations and the impact we&apos;ve created together.
            </p>
            <div className="mt-4">
              <a 
                href="https://www.upwork.com/freelancers/~01e6f090a8c4026803" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 hover:bg-green-100"
              >
                <img src="/logos/upwork.png" alt="Upwork" className="h-4 w-4" />
                $10k+ Earned on Upwork
              </a>
            </div>
          </div>

          {/* Right side - Scrollable cards */}
          <div className="lg:w-2/3 relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-8 pb-8 pt-4 px-[1px] scrollbar-hide lg:mr-[-50vw] lg:pr-[50vw]"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name} 
                  className={`flex-shrink-0 w-[400px] ${index === 0 ? 'lg:pl-4' : ''}`}
                >
                  <div className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 hover:ring-gray-300 h-full">
                    <div>
                      <div className="flex w-full justify-between">
                        <div>
                          <div className="font-semibold text-lg">{testimonial.name}</div>
                          <div className="text-gray-600">{testimonial.role}</div>
                        </div>
                        <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#C4A267] hover:text-[#B38F5A]">
                          <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                        </a>
                      </div>
                      <div className="mt-1 text-xs text-indigo-600">{testimonial.relation}</div>
                      <div className="mt-4 text-gray-700 leading-normal text-base">
                        <div 
                          className="testimonial-text line-clamp-6"
                          data-name={testimonial.name}
                        >
                          {formatText(testimonial.text)}
                        </div>
                        {truncatedTexts[testimonial.name] && (
                          <button
                            onClick={() => openModal(testimonial)}
                            className="mt-2 text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                          >
                            Read more
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
                className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-50"
                aria-label="Previous"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scrollToIndex(Math.min(testimonials.length - 1, currentIndex + 1))}
                className="bg-white p-1.5 rounded-full shadow-md hover:bg-gray-50"
                aria-label="Next"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mx-auto mt-16">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 text-center">Trusted By</h2>
          <div className="mx-auto mt-6 grid max-w-lg grid-cols-2 items-center gap-x-4 gap-y-6 sm:max-w-xl sm:grid-cols-4 sm:gap-x-6 lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center gap-1">
              <div className="relative h-10 w-28">
                <Image
                  src="/logos/optura.png"
                  alt="Optura AI"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xs text-gray-500">Optura AI</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="relative h-10 w-28">
                <Image
                  src="/logos/presson.png"
                  alt="Press On Ventures"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xs text-gray-500">Press On Ventures</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="relative h-10 w-28">
                <Image
                  src="/logos/getitai.png"
                  alt="getitAI"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-gray-500">getitAI</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="relative h-10 w-28">
                <Image
                  src="/logos/pydantic.jpg"
                  alt="Pydantic"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-gray-500">Pydantic</span>
            </div>
            <div className="sm:block hidden"></div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center justify-center h-10 w-28">
                <span className="text-xl font-bold text-gray-900">50+</span>
              </div>
              <span className="text-xs text-gray-500">Students & Developers</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center justify-center h-10 w-28">
                <span className="text-xl font-bold text-gray-900">12+</span>
              </div>
              <span className="text-xs text-gray-500">Companies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div 
          className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-200 ${
            isModalOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-labelledby="modal-title" 
          role="dialog" 
          aria-modal="true"
          onClick={handleClickOutside}
        >
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className={`fixed inset-0 bg-gray-500 transition-opacity duration-200 ${
                isModalOpen ? 'bg-opacity-75' : 'bg-opacity-0'
              }`}
              aria-hidden="true"
            ></div>
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
            <div 
              ref={modalRef}
              className={`relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all duration-200 sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle ${
                isModalOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-semibold text-lg">{selectedTestimonial.name}</div>
                  <div className="text-gray-600">{selectedTestimonial.role}</div>
                </div>
                <div className="flex items-center gap-4">
                  <a href={selectedTestimonial.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#C4A267] hover:text-[#B38F5A]">
                    <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                  </a>
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-1 text-xs text-indigo-600">{selectedTestimonial.relation}</div>
              <div className="mt-4 text-gray-700 leading-normal text-base">
                {formatText(selectedTestimonial.text)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
