import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong, faBrain, faCodeBranch, faServer} from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    name: 'Personal AI Saas Platform',
    description: 'A platform built with NextJS and Python that simplifies your life by merging everyday tasks with AI-driven analysis and suggestions.',
    icon: faBrain,
    href: "https://github.com/luca-matei/digital-marmot-platform-app",
  },
  {
    name: 'DevOps Automations Tool',
    description: 'An automated tool for managing networks, servers, and services on a home network or small cloud through a Python API.',
    icon: faCodeBranch,
    href: "https://github.com/luca-matei/",
  },
  {
    name: 'WSGI Web Framework',
    description: 'A backend framework written in Python for creating presentation websites, featuring a YAML CMS and a CSS framework akin to Tailwind CSS.',
    icon: faServer,
    href: "https://github.com/luca-matei/",
  },
]

export default function Example() {
  return (
    <div id="projects" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="./projects.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Things I&apos;ve Created</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I love building things, and what I love more, is to make use of them by people finding them useful.
          </p>
          <div className="mt-4 flex items-center gap-x-6">
            <a href="https://github.com/luca-matei/" className="font-semibold leading-6 text-gray-300 hover:text-white">
              Learn more
              <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" aria-hidden="true"/>
            </a>
          </div>
        </div>
        <div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <FontAwesomeIcon icon={card.icon} className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true"/>
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
                <div className="mt-4 flex items-center gap-x-6">
                  <a href={card.href} className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">
                    Learn more
                    <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" aria-hidden="true"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
