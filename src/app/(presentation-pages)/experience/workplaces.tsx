import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExternalLink} from "@fortawesome/free-solid-svg-icons";

const workplaces = [
  {
    company: 'getitAI, Inc.',
    role: 'Full Stack Developer',
    period: 'Oct 2023 - Present',
    type: 'Remote, Contract',
    description: <a href="https://getit.ai" target="_blank" rel="noopener noreferrer" className="text-indigo-600"><FontAwesomeIcon icon={faExternalLink} className="w-3 h-3 mr-0.5" aria-hidden="true" /> getit.ai</a>,
    bullets: [
      'Enhanced the custom RAG framework with reduced latency and costs, and new features - caching, full text search, knowledge base toggling.',
      'Designed and implemented async-capable infrastructure for the API using PostgreSQL and Redis.',
      'Developed tools and integrations for managing Shopify Carts, Orders, and Subscriptions.',
      'Lead the development and maintenance of Shopify integrations and agent knowledge infrastructure.',
      'Restructured the API to improve modularity and flexibility.',
      'Created the first comprehensive test suite for the API.',
      'Authored detailed technical documentation for client onboarding.',
      'Built a custom testing environment for Shopify integrations.',
      'Pioneered as one of the first employees, contributing through all startup phases.',
      'Trusted with sensitive tasks, research, troubleshooting, and support.',
      'Built the API’s initial CI/CD pipelines.',
    ],
  },
  {
    company: 'Signed NDA',
    role: 'Full Stack Developer',
    period: 'Jul 2023 - Apr 2024',
    type: 'Remote, Contract',
    description: "",
    bullets: [
      "Played a key role in both designing and building vital API components, focusing on creating solutions that were both durable and capable of scaling effectively.",
      "Led the complete redesign and implementation of a high-capacity system across multiple servers, optimizing for user-customizable request handling and efficiency.",
      "Managed various DevOps tasks, including setting up CI/CD pipelines, load balancers, and databases, and performed maintenance on both bare-metal servers and VPSes, prioritizing security and high-availability.",
      "Significantly improved API performance by overhauling its architecture, resulting in increased development speed, stability, scalability, and flexibility.",
      "Developed and integrated a comprehensive credits system for the API, working with third-party subscription managers like Outseta.",
      "Engaged in peer code reviews, providing constructive feedback to enhance code quality and team collaboration.",
    ],
  },
]

export default function Workplaces() {
  return (
    <div id="workplaces" className="pt-24 sm:pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 mb-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Where I&apos;ve Contributed</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            People know me for my resilience, structure and strong commitment to growth.
          </p>
        </div>
      </div>
      {workplaces.map((workplace, index) => (
      <div key={index} className={index !== workplaces.length - 1 ? "pb-24 sm:pb-32" : ""}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-indigo-600">{workplace.company}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{workplace.role}</p>
              <h3 className="mt-4 text-sm leading-7 text-gray-600">{workplace.period}</h3>
              <h3 className="text-sm leading-7 text-gray-600">{workplace.type}</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">{workplace.description}</p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2">
                {workplace.bullets.map((bullet, index2) => (
                  <div key={index + 5 * index2} className="relative pl-9">
                    <dt>
                      <FontAwesomeIcon icon={faCheck} className="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                      {bullet}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
