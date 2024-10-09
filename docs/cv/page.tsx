import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobe, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {workplaces} from "@/app/(presentation-pages)/experience/workplaces";

export default function CV() {
  return (
    <>
      <div className="flex flex-wrap pb-10">
        <div className="w-1/4 pr-4">
          <h2 className="sr-only">Resume of</h2>
          <h1 className="text-5xl font-bold">Luca Matei</h1>
        </div>
        <div className="w-3/4 pl-4 text-gray-600">
          <div className="flex gap-x-8">
            <ul className="list-none">
              <li>
                <FontAwesomeIcon icon={faPhone} className="inline-block w-3.5 h-3.5 mr-1"/>
                +40 771 344 046
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="inline-block w-3.5 h-3.5 mr-1"/>
                <a href="mailto:hello@lucamatei.eu" className="text-blue">hello@lucamatei.eu</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} className="inline-block w-3.5 h-3.5 mr-1"/>
                <a href="https://lucamatei.eu" className="text-blue">https://lucamatei.eu</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="inline-block w-3.5 h-3.5 mr-1"/>
                Rotterdam, South Holland, Netherlands
              </li>
            </ul>
            <ul className="list-none">
              <li>
                <FontAwesomeIcon icon={faLinkedin} className="inline-block w-3.5 h-3.5 mr-1"/>
                <a href="https://linkedin.com/in/lucamatei" className="text-blue">lucamatei</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} className="inline-block w-3.5 h-3.5 mr-1"/>
                <a href="https://github.com/luca-matei" className="text-blue">luca-matei</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faTelegram} className="inline-block w-3.5 h-3.5 mr-1"/>
                <a href="https://t.me/lucamatei" className="text-blue">lucamatei</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Summary */}
      <div className="flex flex-wrap pb-4">
        <div className="w-1/6 pr-4">
          <h2 className="text-xl font-bold">Summary</h2>
        </div>
        <div className="w-5/6 pl-4 text-gray-600">
          <p className="mt-2">Experienced impact-driven developer specializing in B2B startup environments. Creator of open-source IaC tool, WSGI web framework, and utility-first CSS library. Authored technical guides for various software products. Proficient in Python, FastAPI, TypeScript, Next.js, PostgreSQL, Redis, Shopify, and Linux. Mentor for students and junior developers in procedural programming, web development, and LLMs. Open-source contributor to Pydantic. Built high-throughput e-commerce products in global, agile teams. Certified ScrumMaster with multiple Coursera certifications in full-stack development, AI, and Rust. Pursuing AWS certification.</p>
        </div>
      </div>
      <div className="flex flex-wrap pb-2">
        <div className="w-1/6 pr-4">
          <h2 className="text-md">Desired roles</h2>
        </div>
        <div className="w-5/6 pl-4 text-gray-600">
          <p className="mt-0.5">Python Developer or Full Stack Developer</p>
        </div>
      </div>
      <div className="flex flex-wrap pb-10">
        <div className="w-1/6 pr-4">
          <h2 className="text-md">Tech Stack</h2>
        </div>
        <div className="w-5/6 pl-4 text-gray-600">
          <p className="mt-0.5">Python, FastAPI, TypeScript, Next.js, PostgreSQL, Redis, Shopify, Linux</p>
        </div>
      </div>
      {/* Experience */}
      <div className="flex flex-wrap pb-2">
        <div className="w-1/4 pr-4">
          <h2 className="text-xl font-bold">Experience</h2>
        </div>
        <div className="w-3/4 pl-4 text-gray-600">
        </div>
      </div>
      {workplaces.map((workplace, index) => (
        <div key={index} className="flex flex-wrap pb-10">
          <div className="w-1/4 pr-4">
            <h2 className="text-md pb-2.5">{workplace.role}</h2>
            <h2 className="text-sm text-gray-600">{workplace.company}</h2>
            <h2 className="text-sm text-gray-600 whitespace-nowrap">{workplace.period}</h2>
            <h2 className="text-sm text-gray-600">{workplace.type}</h2>
            <h2 className="text-sm pb-2.5 text-gray-600">{workplace.location}</h2>
          </div>
          <div className="w-3/4 pl-4 text-gray-600">
            <p className="mb-2.5">{workplace.description}</p>
            <ul className="!list-disc pl-4">
              {workplace.bullets.map((bullet, index2) => (
                <li key={index + 5 * index2}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      {/* Projects */}
      <div className="flex flex-wrap pb-10">
        <div className="w-1/6 pr-4">
          <h2 className="text-xl font-bold">Projects</h2>
        </div>
        <div className="w-5/6 pl-4 text-gray-600">
          <p className="mt-2">I have 18 repositories filled with websites, APIs, games, tools, and more on <a
            href="https://github.com/luca-matei">my Github</a>. Most of these are developed in the courses I teach.</p>
        </div>
      </div>
      {/* Courses */}
      <div className="flex flex-wrap pb-2">
        <div className="w-1/4 pr-4">
          <h2 className="text-xl font-bold">Education</h2>
        </div>
        <div className="w-3/4 pl-4 text-gray-600">
        </div>
      </div>
      <div className="flex flex-wrap pb-6">
        <div className="w-1/6 pr-4">
          <h2 className="text-md">Certifications</h2>
        </div>
        <div className="w-5/6 pl-4 text-gray-600">
          <ul className="list-none mt-0.5">
            <li>Certified Scrum Master from Scrum Alliance</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap pb-6">
        <div className="w-1/6 pr-4">
          <h2 className="text-md">Courses</h2>
        </div>
        <div className="w-5/6 pl-4 text-gray-600">
          <ul className="list-none mt-0.5">
            <li>Backend Developer from Meta (9 courses)</li>
            <li>Frontend Developer from Meta (9 courses)</li>
            <li>IT Automation with Python from Google (6 courses)</li>
            <li>Python for Everybody from University of Michigan (5 courses)</li>
            <li>Machine Learning Specialization from IBM (1/6 courses)</li>
          </ul>
        </div>
      </div>
    </>
  );
}
