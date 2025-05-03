"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, 
  faGraduationCap, 
  faArrowRight, 
  faDatabase, 
  faServer,
  faExternalLinkAlt, 
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { CAL_URL, GITHUB_URL } from '@/constants';

const projects = [
  {
    title: '#PayWhatYouThinkItsWorth',
    description: 'I offer personalized software consultancy services for projects, career guidance, and startup planning with a unique value-based pricing model. You determine what to pay based on the tangible impact our session creates for you. My client-first approach ensures you only invest what matches the value you receive.',
    icon: faLightbulb,
    image: '/projects/paywhatyouthinkitsworth.jpg',
    link: `${CAL_URL}/pay-what-you-think-it-s-worth`,
    linkText: 'Schedule a Meeting',
    isExternal: true,
  },
  {
    title: 'Mentorship Programs',
    description: 'I teach hands-on programming and web development projects to help students and junior developers master essential skills. My interactive portfolio includes games like Snake and Hangman, practical tools such as Password Managers, and full-stack applications like URL Shorteners with API integration.',
    icon: faGraduationCap,
    image: '/projects/mentorship-programs.jpg',
    link: `${GITHUB_URL}/sandbox`,
    linkText: 'View Materials',
    isExternal: true,
  },
  {
    title: 'OSRAM Products Redis RAG',
    description: 'This conversational interface uses a Redis-powered RAG to search and present technical information from OSRAM product specification PDFs. The hybrid search system presents complex document data in a natural, chat-based format, making product specifications instantly accessible to users.',
    icon: faDatabase,
    image: '/projects/osram-rag.jpg',
    link: 'https://osram.lucamatei.dev',
    linkText: 'Try Project',
    isExternal: true,
  },
  /*
  {
    title: 'eBloc',
    description: 'A digital platform for Romanian apartment buildings that simplifies utility meter management, report generation, and invoicing processes. It offers consumption analysis tools while enabling direct communication between residents and building administrators.',
    icon: faLaptopCode,
    image: '/projects/ebloc.jpg',
    link: 'https://demo.ebloc.app',
    linkText: 'Try Demo',
    isExternal: true,
  },
  */
  {
    title: 'DIMA',
    description: 'A unified homelab management platform that handles web app deployment, VM provisioning, and network service configuration. This all-in-one solution simplifies infrastructure management with integrated DNS, DHCP, and web server controls.',
    icon: faServer,
    image: '/projects/dima.jpg',
    link: `${GITHUB_URL}/dima`,
    linkText: 'View on GitHub',
    isExternal: true,
  },
  {
    title: 'WeWantWaste Redesign',
    description: "Before and after redesign of a waste management company's skip selection form, showcasing significant UX improvements. The enhanced interface simplifies the decision-making process, allowing customers to choose appropriate skip sizes more intuitively.",
    icon: faArrowRight,
    image: '/projects/wewantwaste.jpg',
    link: 'https://wewantwaste.lucamatei.dev',
    linkText: 'Check Redesign',
    isExternal: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[96rem] px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">Projects</h2>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-square">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  <FontAwesomeIcon icon={project.icon} className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                href={project.link}
                target={project.isExternal ? '_blank' : undefined}
                rel={project.isExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                {project.linkText}
                {project.isExternal ? (
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3 ml-2" />
                ) : (
                  <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-2" />
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
