import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExternalLink} from "@fortawesome/free-solid-svg-icons";

export const workplaces = [
  {
    company: 'getitAI, Inc.',
    role: 'Full Stack Developer with LLMs',
    period: 'Oct 2023 - Present · 1 yr',
    type: 'Remote, Contract',
    location: 'San Francisco, California, United States',
    description: "Key developer in a global team building AI Sales Agents. As the longest-tenured developer, I contributed to all stages of the startup. My work includes improving our custom RAG, building Shopify integrations from the ground up, setting up customers, working on critical infrastructure, and coordinating developers.",
    references: [
      {name: "getit.ai", url: "https://getit.ai/"},
    ],
    bullets: [
      "Improved custom RAG framework with real-time updated product database integration, efficient query caching, vector database optimizations, full text search",
      "Developed async-ready API infrastructure for PostgreSQL, Redis and HTTP requests",
      "Created LLM tools to manage Shopify Carts, Orders, and Subscriptions",
      "Led development of Shopify integrations and systems for agent knowledge",
      "Redesigned API structure to simplify updates and additions",
      "Implemented the API's first complete set of automated tests",
      "Developed a custom test environment for Shopify integrations",
      "Implemented the first automated build and deployment system for the API",
      "Wrote documentation for the development team",
    ],
  },
  {
    company: '',
    role: 'Software Developer and Consultant',
    period: 'Jun 2023 - Present · 1 yr 4 mos',
    type: 'Remote, Self-employed',
    location: 'European Economic Area',
    description: "Helped startups create cost-effective and performant e-commerce products, coached junior developers to build a strong foundation in software development, contributed to and authored open-source projects and documentation,and started my entrepreneurial journey in local markets.",
    references: [],
    bullets: [
      "Invited speaker on AI at a Packet Coders event",
      "Developing a SaaS product for over 11,000 Romanian homeowners associations",
      "Provided private tutoring on Large Language Models (LLMs)",
      "Advised startups on custom software solutions for employee timekeeping and network services",
      "Led weekly Python courses covering APIs, web scraping, and game development for junior developers",
      "Completed freelance projects via Upwork and Fiverr",
      "Authored open-source learning materials",
      "Contributed to the Pydantic library",
      "Managed private Virtual Private Servers (VPSs) and DNS servers",
    ],
  },
  {
    company: 'Signed NDA',
    role: 'Python Developer with LLMs',
    period: 'Jul 2023 - Apr 2024 · 10 mos',
    type: 'Remote, Contract',
    location: 'European Economic Area',
    description: "Quickly progressed to lead developer and architect role. Reconstructed critical API and infrastructure components to improve throughput and maintainability. Delivered new system version 2 months ahead of the 1-year contract schedule.",
    references: [],
    bullets: [
      "Reconstructed and launched a multi-server system to process high-volume custom user requests",
      "Rebuilt the API's core structure, improving speed, stability, and expandability",
      "Designed and implemented a comprehensive credits system for the API, integrating with external subscription services",
      "Established and managed essential infrastructure including CI/CD pipelines, load balancers, and databases",
      "Maintained servers to ensure security and minimize downtime",
    ],
  },
  {
    company: '',
    role: 'Peer Mentor',
    period: 'Jun 2022 - Jun 2023 · 1 yr 1 mo',
    type: 'Hybrid, Freelance',
    location: 'Bucharest, Romania',
    description: "Helped students learn procedural programming using C++ and Python. Wrote setup guides for various software tools.",
    references: [],
    bullets: [
      "Created configuration guides for over 10 software products and systems",
      "Ran web development workshops for 25+ students twice a week for 3 months",
      "Tutored 15+ students in procedural programming",
      "Helped build websites for a high school and local bakery",
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
                <h3 className="mt-4 text-sm text-gray-600">{workplace.period}</h3>
                <h3 className="text-sm text-gray-600">{workplace.type}</h3>
                <h3 className="text-sm text-gray-600">{workplace.location}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{workplace.description}</p>
                <div className="mt-4">
                  {workplace.references.map((reference, index2) => (
                    <a key={index + 5 * index2} href={reference.url} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                      {reference.name}
                      <FontAwesomeIcon icon={faExternalLink} className="w-3 h-3 ml-0.5" aria-hidden="true"/>
                    </a>
                  ))}
                </div>
              </div>
              <dl
                className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-6 text-base leading-7 text-gray-600 sm:grid-cols-2">
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
