import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "@/components/ExternalLink";

const getElapsedPeriod = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();

  const months = (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth()) + 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) {
    return `${years}y`;
  }
  
  return `${years}y ${remainingMonths}mo`;
};

const getPresentDate = (): string => {
  const now = new Date();
  return now.toLocaleString('en-US', { month: 'short', year: 'numeric' });
}

export const workplaces = [
  {
    company: '',
    role: 'Senior Full Stack Engineer',
    period: `Jun 2023 - ${getPresentDate()} · ${getElapsedPeriod('June 2023')}`,
    type: 'Remote, Self-employed',
    location: 'Worldwide',
    description: "Helped startups create cost-effective and performant e-commerce products, coached junior developers to build a strong foundation in software development, contributed to and authored open-source projects and documentation,and started my entrepreneurial journey in local markets.",
    references: [],
    bullets: [
      "Built prototypes for Venture Capitalist (VC) companies",
      "Contributed to the Pydantic and pptx2md libraries",
      "Invited speaker on AI at a Packet Coders event",
      "Provided private tutoring on Large Language Models (LLMs) and web development",
      "Authored open-source learning materials",
      "Managed websites, private Virtual Private Servers (VPSs) and DNS servers",
      "Worked with companies in US, UK, Switzerland, The Netherlands, Germany, Estonia",
    ],
    tech_stack: "Python, FastAPI, TypeScript, Next.js, PostgreSQL, Redis, Linux",
  },
  {
    company: 'getitAI, Inc.',
    role: 'Senior AI Engineer',
    period: `Oct 2023 - May 2025 · 1y 8mo`,
    type: 'Remote, Contract',
    location: 'San Francisco, California, United States',
    references: [
      {name: "getit.ai", url: "https://getit.ai/"},
    ],
    bullets: [
      "Performance: Rewrote a multi-modal Retrieval-Augmented Generation (RAG) system using Redis Stack, reducing query response times from 300ms to under 12ms. Integrated keyword search, semantic search, metadata filtering, chunk joining, and query optimization",
      "Backend: Built asynchronous API infrastructure in Python using FastAPI, Postgres, Redis, SQLAlchemy, asyncio, and aiohttp.",
      "LLM Tools: Created tools allowing e-commerce actions like cart management, subscription handling, and order processing.",
      "Knowledge System: Designed an LLM-agnostic knowledge ingestion pipeline with interfaces integrated into the Next.js application. Can ingest files, web pages, Shopify products.",
      "Shopify Integration: Created a custom Shopify block for store integration and built pipelines to handle real-time updates for over 6,000 products and 150,000+ daily transactions across multiple stores.",
      "Scalability: Designed a user rollout system with geo-filtering and planned solutions for custom client requirements during onboarding.",
      "Testing and CI/CD: Created the first unit test suite and CI/CD pipeline to validate pull requests before merging.",
      "Team Coordination: Worked closely with RevOps team to align business and software goals. Occasionally led daily meetings, coordinated 2-3 developers on projects, and managed production deployments.",
      "Documentation and Modularity: Reduced development time through modular architecture and improved onboarding with detailed documentation.",
      "Technical Support: Acted as the go-to engineer for resolving critical issues and implementing new features.",
    ],
    tech_stack: "Python, FastAPI, TypeScript, Next.js, PostgreSQL, Redis, Shopify, AWS, Clickhouse",
  },
  {
    company: 'Signed NDA',
    role: 'Python Developer with DevOps',
    period: 'Jul 2023 - Apr 2024 · 10mo',
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
    tech_stack: "Python, FastAPI, PostgreSQL, Redis, Linux, HAProxy, Docker",
  },
  {
    company: '',
    role: 'Python Developer with DevOps, Instructor',
    period: 'Sep 2017 - Jun 2023 · 5y 10mo',
    type: 'Hybrid, Freelance',
    location: 'Bucharest, Romania',
    description: "Helped students learn procedural programming using C++ and Python. Wrote setup guides for various software tools.",
    references: [],
    bullets: [
      "Created configuration guides for over 10 software products",
      "Ran web development workshops for 25+ students twice a week",
      "Tutored 15+ students in web development and procedural programming",
      "Built dozens of websites, blogs, galleries in Flask, Django and bottle.py with Bootstrap, jQuery, and vanilla JS, HTML, CSS",
      "Built software for DevOps, networking and security products"
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
                    <ExternalLink key={index + 5 * index2} href={reference.url}>
                      {reference.name}
                    </ExternalLink>
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
