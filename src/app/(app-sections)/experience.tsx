import { CheckIcon } from '@heroicons/react/20/solid'

const workplaces = [
  {
    period: 'Oct 2023 - Present',
    company: 'getitAI, Inc.',
    title: 'Full Stack Engineer (Contract)',
    bullets: [
      "Contributed to the development and enhancement of the knowledge base infrastructure for AI-driven sales agents, involving tasks such as refining database functionalities, optimizing storage connections, and improving search algorithms.",
      "Assisted in the onboarding process for new team members, ensuring a smooth integration into our project environment.",
      "Implemented a versatile global component that enables pagination, full-text search, filtering, and sorting capabilities for dynamically updated tables, enhancing user experience and data accessibility.",
    ],
  },
  {
    period: 'Jul 2023 - Present',
    company: 'Signed NDA',
    title: 'Full Stack Engineer (Contract)',
    bullets: [
        "Actively contributed to the design and development of essential API components, ensuring robust and scalable solutions from the ground up.",
        "Engaged in peer code reviews, providing constructive feedback to enhance code quality and team collaboration.",
        "Led the complete redesign and implementation of a high-capacity system across multiple servers, optimizing for user-customizable request handling and efficiency.",
        "Developed and integrated a comprehensive credits system for the API, working with third-party subscription managers like Outseta to enhance user experience.",
        "Significantly improved API performance by overhauling its architecture, resulting in increased development speed, stability, scalability, and flexibility.",
        "Managed various DevOps tasks, including the setup of advanced CI/CD pipelines, load balancers, and databases, and performed maintenance on both bare-metal servers and VPSes, prioritizing security and high-availability.",
    ],
  },
  {
    period: 'Jun 2023 - Present',
    company: 'Freelancer',
    title: 'Full Stack Engineer',
    bullets: [],
  },
]

const features = [
  {
    name: 'Invite team members',
    description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
  },
  { name: 'List view', description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.' },
  {
    name: 'Keyboard shortcuts',
    description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
  },
  {
    name: 'Calendars',
    description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
  },
  { name: 'Notifications', description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.' },
  { name: 'Boards', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
  {
    name: 'Reporting',
    description: 'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.',
  },
  {
    name: 'Mobile app',
    description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
  },
]

export default function Experience() {
  return (
    <>
      <div className="pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Places I've Worked</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm known for my resilience, self-reliance and strong commitment to growth.
            </p>
          </div>
        </div>
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-indigo-600">getitAI, Inc.</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Full Stack Engineer</p>
              <h3 className="mt-4 text-sm leading-7 text-gray-600">October 2023 - Present</h3>
              <h3 className="text-sm leading-7 text-gray-600">Remote, Contract</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste
                dolor cupiditate blanditiis ratione.
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt>
                      <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                      {feature.description}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
    </>
  )
}
