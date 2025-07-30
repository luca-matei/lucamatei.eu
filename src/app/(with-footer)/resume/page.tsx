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
        <div className="flex flex-wrap pb-7">
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
        <div className="flex flex-wrap pb-7">
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
          <div key={index} className={`flex flex-wrap pb-7`}>
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
          <div className="w-5/6 pl-4 text-gray-600">
            <p className="mt-1">Available on <a href="https://lucamatei.eu/projects" className="text-blue">lucamatei.eu/projects</a>.</p>
          </div>
        </div>
        <div className="flex flex-wrap pb-7">
          <div className="w-1/6 pr-4">
            <h2 className="text-md pb-2.5">Digital Marmot / Dima</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <p>
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
        <div className="flex flex-wrap pb-7">
          <div className="w-1/6 pr-4">
            <h2 className="text-md pb-2.5">OSRAM Products Redis RAG</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <p>
            This conversational interface uses a Redis-powered RAG to search and present technical information from OSRAM product specification PDFs. The hybrid search system presents complex document data in a natural, chat-based format, making product specifications instantly accessible to users.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap pb-7">
          <div className="w-1/6 pr-4">
            <h2 className="text-md pb-2.5">#PayWhatYou-ThinkItsWorth</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <p>
              I offer personalized software consultancy services for projects, career guidance, and startup planning with a unique value-based pricing model. You determine what to pay based on the tangible impact our session creates for you. My client-first approach ensures you only invest what matches the value you receive.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap pb-7">
          <div className="w-1/6 pr-4">
            <h2 className="text-md pb-2.5">Mentorship Programs</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <p>
              I teach hands-on programming and web development projects to help students and junior developers master essential skills. My interactive portfolio includes games like Snake and Hangman, practical tools such as Password Managers, and full-stack applications like URL Shorteners with API integration.
            </p>
          </div>
        </div>
        {/* Education */}
        <div className="flex flex-wrap pb-2 break-before-page">
          <div className="w-1/6 pr-4">
            <h2 className="text-xl font-bold">Education</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <p className="mt-1">Self-taught programming for {PROGRAMMING_YEARS} years.</p>
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
        <div className="flex flex-wrap pb-6">
          <div className="w-1/6 pr-4">
            <h2 className="text-md">High School</h2>
          </div>
          <div className="w-5/6 pl-4 text-gray-600">
            <ul className="list-none mt-0.5">
              <li>Colegiul Național &quot;Mihai Viteazul&quot; București</li>
              <li>Mathematics and Computer Science</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
