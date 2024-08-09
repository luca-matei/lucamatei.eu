import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExternalLink} from "@fortawesome/free-solid-svg-icons";

const workplaces = [
  {
    company: 'getitAI, Inc.',
    role: 'Full Stack Developer',
    period: 'Oct 2023 - Present (11 months)',
    type: 'Remote, Contract',
    description: <a href="https://getit.ai" target="_blank" rel="noopener noreferrer" className="text-indigo-600"><FontAwesomeIcon icon={faExternalLink} className="w-3 h-3 mr-0.5" aria-hidden="true" /> getit.ai</a>,
    bullets: [
      "Upgraded the RAG framework to reduce delays and costs, adding caching, full text search, and toggling for knowledge bases.",
      "Built async-ready API infrastructure using PostgreSQL and Redis.",
      "Created LLM tools to manage Shopify Carts, Orders, and Subscriptions.",
      "Led development of Shopify integrations and systems for agent knowledge.",
      "Redesigned API structure for easier updates and additions.",
      "Developed the API's first complete set of automated tests.",
      "Wrote clear, detailed setup guides for new clients.",
      "Made a custom test system for Shopify integrations.",
      "Joined as an early employee, helping in all stages of the startup.",
      "Handled confidential tasks, research, problem-solving, and customer support.",
      "Set up the automated build and deployment system for the API.",
    ],
  },
  {
    company: 'Signed NDA',
    role: 'Full Stack Developer',
    period: 'Jul 2023 - Apr 2024 (10 months)',
    type: 'Remote, Contract',
    description: "",
    bullets: [
      "Set up and managed key infrastructure: CI/CD pipelines, load balancers, and databases. Maintained servers to ensure security and minimize downtime.",
      "Created and implemented a full credits system for the API, connecting it with external subscription services like Outseta.",
      "Built and launched a multi-server system for handling custom user requests at high volumes.",
      "Rebuilt the API's core structure, making it faster, more stable, and easier to expand.",
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
