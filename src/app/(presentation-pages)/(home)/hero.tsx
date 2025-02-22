import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const content = {
    subtitle: "Full Stack Engineer",
    title: () => {
      return <>Hi, I&apos;m Luca,<br /><span className="text-indigo-600">Full Stack Engineer</span></>
    },
    description: "Experienced impact-driven engineer specializing in B2B startup environments. Creator of open-source IaC tool, WSGI web framework, and utility-first CSS library. Authored technical guides for various software products. Proficient in Python, TypeScript, and Linux. Mentor for students and junior developers in procedural programming, web development, and LLMs. Open-source contributor to Pydantic. Built high-throughput e-commerce products in global, agile teams. Certified ScrumMaster with multiple Coursera certifications in full-stack development, AI, and Rust. Pursuing AWS certification.",
  }

  return (
    <div id="home" className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div
          className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1
            className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            {content.title()}
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-gray-600">
              {content.description}
            </p>
            <div className="mt-6 leading-8">
              <h3 className="text-lg font-semibold">My everyday stack</h3>
              <div className="mt-2 grid grid-cols-4 text-gray-600">
                <p className="whitespace-nowrap">
                  <img src="logos/python.png" className="mr-1 inline-block h-5 w-auto" alt="Python Logo"/> Python
                </p>
                <p className="whitespace-nowrap">
                  <img src="logos/fastapi.png" className="mr-1 inline-block h-5 w-auto" alt="FastAPI Logo"/> FastAPI
                </p>
                <p className="whitespace-nowrap">
                  <img src="logos/typescript.png" className="mr-1 inline-block h-5 w-auto" alt="TypeScript Logo"/> TypeScript
                </p>
                <p className="whitespace-nowrap">
                  <img src="logos/nextjs.png" className="mr-1 inline-block h-5 w-auto" alt="Next.js Logo"/> Next.js
                </p>
                <p className="whitespace-nowrap">
                  <img src="logos/postgresql.png" className="mr-1 inline-block h-5 w-auto" alt="PostgreSQL Logo"/> PostgreSQL
                </p>
                <p className="whitespace-nowrap">
                  <img src="logos/redis.png" className="mr-1 inline-block h-5 w-auto" alt="Redis Logo"/> Redis
                </p>
                <p className="whitespace-nowrap">
                  <img src="logos/shopify.png" className="mr-1 inline-block h-5 w-auto" alt="Shopify Logo"/> Shopify
                </p>
                <p className="whitespace-nowrap">
                  <img src="logos/debian.png" className="mr-1 inline-block h-5 w-auto" alt="Debian Logo"/> Debian
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="/experience" className="font-semibold text-gray-900">
                See my full experience <FontAwesomeIcon icon={faArrowRightLong} className="inline h-3 ml-1" aria-hidden="true"></FontAwesomeIcon>
              </a>
            </div>
          </div>
          <img
            src="https://assets.lucamatei.eu/images/profile-picture.jpg"
            alt="Profile Picture"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
    </div>
  )
}
