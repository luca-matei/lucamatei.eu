import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {GITHUB_URL} from "@/constants";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Open Source Projects
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Explore my collection of open source projects, from web applications to developer tools. Each project showcases my passion for clean code, modern technologies, and solving real-world problems.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/projects"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Projects <FontAwesomeIcon icon={faArrowRightLong} className="inline h-3 ml-1" aria-hidden="true"></FontAwesomeIcon>
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <FontAwesomeIcon icon={faGithub} className="inline h-4 mr-1" aria-hidden="true"></FontAwesomeIcon> See Github
          </a>
        </div>
      </div>
    </div>
  )
}
