import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobe, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {workplaces} from "@/app/(with-contact)/experience/workplaces";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  PHONE_NUMBER,
  PROGRAMMING_YEARS,
  TELEGRAM_URL
} from "@/constants";

export default function Resume() {
  return (
    <div className={"mt-24 py-4 px-6 w-full max-w-4xl mx-auto print:p-0 print:m-0"}>
      <div className={"aspect-[1/1.4142]"}>
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
                  {PHONE_NUMBER}
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="inline-block w-3.5 h-3.5 mr-1"/>
                  <span className="text-blue">{EMAIL}</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGlobe} className="inline-block w-3.5 h-3.5 mr-1"/>
                  <a href="https://lucamatei.eu" className="text-blue">https://lucamatei.eu</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="inline-block w-3.5 h-3.5 mr-1"/>
                  {LOCATION}
                </li>
              </ul>
              <ul className="list-none">
                <li>
                  <FontAwesomeIcon icon={faLinkedin} className="inline-block w-3.5 h-3.5 mr-1"/>
                  <a href={LINKEDIN_URL} className="text-blue">lucamatei</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGithub} className="inline-block w-3.5 h-3.5 mr-1"/>
                  <a href={GITHUB_URL} className="text-blue">luca-matei</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faTelegram} className="inline-block w-3.5 h-3.5 mr-1"/>
                  <a href={TELEGRAM_URL} className="text-blue">lucamatei</a>
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
            <p className="mt-2">Seasoned impact-driven engineer with over 8 years of experience, recently collaborating with SaaS startups on a B2B basis. Designed and built high-traffic solutions while leading system development for AI-driven and scraping-based e-commerce products across global, agile teams. Creator of open-source IaC tool, WSGI web framework, and utility-first CSS library. Authored technical guides for a wide array of DevOps, networking and cybersecurity software. Guided students and junior developers in LLMs, web and game development, and procedural programming. Open-source contributor to Pydantic.</p>
          </div>
        </div>
        <div className="flex flex-wrap pb-2">
          <div className="w-1/6 pr-4">
            <h2 className="text-md">Desired roles</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <p className="mt-0.5">Senior / Middle Full Stack Engineer or Python Developer</p>
          </div>
        </div>
        <div className="flex flex-wrap pb-10">
          <div className="w-1/6 pr-4">
            <h2 className="text-md">Tech Stack</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <p className="mt-0.5">Python, FastAPI, TypeScript, Next.js, PostgreSQL, Redis, Docker, Linux</p>
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
          <div key={index} className={`flex flex-wrap pb-10`}>
            <div className="w-1/4 pr-4">
              <h2 className="text-md pb-2.5">{workplace.role}</h2>
              <h2 className="text-sm text-gray-600">{workplace.company}</h2>
              <h2 className="text-sm text-gray-600 whitespace-nowrap">{workplace.period}</h2>
              <h2 className="text-sm text-gray-600">{workplace.type}</h2>
              <h2 className="text-sm pb-2.5 text-gray-600">{workplace.location}</h2>
              <hr/>
              <h2 className="text-sm py-2.5 text-gray-600">{workplace.tech_stack}</h2>
            </div>
            <div className="w-3/4 pl-4 text-gray-600">
              <ul className="!list-disc pl-4 mb-2.5">
                {workplace.bullets.map((bullet, index2) => (
                  <li key={index + 5 * index2}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {/* Projects */}
        <div className="flex flex-wrap pb-2 break-before-page">
          <div className="w-1/6 pr-4">
            <h2 className="text-xl font-bold">Projects</h2>
          </div>
        </div>
        <div className="flex flex-wrap pb-10">
          <div className="w-1/6 pr-4">
            <h2 className="text-md pb-2.5">Digital Marmot / Dima</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <p className="mb-2.5">
              <i>
                This project was developed before the use of large language models in programming and before I discovered Ansible and TailwindCSS.<br/>
              </i>
              <br/>
              This tool is a complete Python-based solution for building and deploying virtual machines, networks, and web apps in a home lab. It features a command line interface with history and a Tkinter GUI, offering over 65 commands.<br/>
              <br/>
              It can configure and manage Git repositories, uWSGI servers, Nginx web servers, Let’s Encrypt SSL certificates, system services, Bind DNS servers, DHCP servers, SSH keys, GPG keys, PostgreSQL servers, nftables firewalls (with geo-blocking and port knocking), development, staging, and production environments, as well as preseed Debian virtual machines. Configurations are based on a custom templating system, with every setting carefully selected by me.<br/>
              <br/>
              Websites are built on a custom web framework based on the WSGI application. They support multilingual content using a YAML-based CMS for managing static, blog, and gallery content.<br/>
              <br/>
              The frontend of the websites uses a SCSS-based library for multimedia structure, spacing, color palettes, UI components, and animations.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap pb-10">
          <div className="w-1/6 pr-4">
            <h2 className="text-md pb-2.5">Mentorship Programs</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <p className="mb-2.5">
              When mentoring or teaching, I use engaging small projects to help kids, students, and juniors learn programming:
            </p>
            <ul className={"!list-disc pl-4 mb-2.5"}>
              <li>Game Collection (Snake, Dino, AOTF): Introduces programming fundamentals with Pygame while encouraging them to handle edge cases to prevent bugs or cheating.</li>
              <li>URL Shortener: Demonstrates web development concepts with FastAPI, including intensive read-write operations with Redis, worker processes with Dramatiq, and analytics derived from web requests.</li>
              <li>AI Assistant: Teaches how to build a chat app using Next.js, incorporating conversation management with Postgres and Redis, prompt engineering, large language models (LLMs) with tool calling, and systems design.</li>
            </ul>
          </div>
        </div>
        {/* Education */}
        <div className="flex flex-wrap pb-2 break-before-page">
          <div className="w-1/6 pr-4">
            <h2 className="text-xl font-bold">Education</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <p className="mt-2">Self-taught programming for {PROGRAMMING_YEARS} years.</p>
          </div>
        </div>
        <div className="flex flex-wrap pb-6">
          <div className="w-1/6 pr-4">
            <h2 className="text-md">Certifications</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <ul className="list-none mt-0.5">
              <li>Certified Scrum Master through Scrum Alliance</li>
              <li>Accountant through APSAP (Romania)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
