import {faLinux, faPython, faShopify} from "@fortawesome/free-brands-svg-icons";
import {faCog, faLaptopCode, faServer} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {PROFESSIONAL_YEARS, PROGRAMMING_YEARS} from "@/constants";

const skills = [
    {
      icon: faPython,
      name: 'Python',
      description:
        "I started coding in Python with the release of version 3.2 in 2011. My work spans scripting, gaming, web development, automation, and more recently, projects involving Large Language Models. I'm also teaching students and juniors to code in Python.",
      tags: ['uwsgi', 'shopify', 'langchain', 'asyncio', 'openai', 'unittest', 'httpx', 'lxml', 'black'],
    },
    {
      icon: faLinux,
      name: 'Linux',
      description:
        'Since getting my first computer, I\'ve used Debian for everything from setting up servers and building networks to managing services and fixing system issues. I host my projects on VPSes that I manage myself.',
      tags: ['debian', 'openssh', 'qemu', 'nftables', 'nfs', 'bind9', 'isc-dhcp-server', 'dnsmasq', 'bash'],
    },
    {
      icon: faServer,
      name: 'Backend',
      description:
        'I work with ASGI REST APIs daily to support SaaS platforms. In 2020, I developed a framework on a uWSGI server to manage the backend of multiple presentation websites. My code is self-documenting, scalable and consistent within design patterns.',
      tags: ['fastapi', 'postgresql', 'redis', 'celery', 'dramatiq', 'supabase', 'sqlalchemy', 'pydantic'],
    },
    {
      icon: faLaptopCode,
      name: 'Frontend',
      description:
        "I mainly work on backend development, but I'm also good at making user interfaces and connecting them to the backend. In 2020, I built a CSS framework from the ground up to give websites a look similar to what you get with Tailwind CSS.",
      tags: ['nextjs', 'react', 'typescript', 'javascript', 'tailwindcss', 'bootstrap', 'material', 'sass'],
    },
    {
      icon: faCog,
      name: 'DevOps',
      description:
        'I can install and take care of Linux, web, and database servers, along with containers, making sure they handle traffic smoothly. I\'ve also set up systems for continuous integration and delivery, as well as monitoring tools.',
      tags: ['railway', 'github-actions', 'hetzner', 'haproxy', 'pgbouncer', 'git', 'docker', 'prometheus', 'grafana', 'sentry', 'supervisor'],
    },
    {
      icon: faShopify,
      name: 'Shopify',
      description:
        "I've built integrations with Shopify involving Custom Apps, App Embeds, LLM tools for cart manipulation, and more. I'm currently writing an open-source Python SDK aimed to be better documented and better structured than the official one.",
      tags: ['custom-app', 'webhooks', 'app-embeds', 'shopify-cli', 'admin-api', 'open-source'],
    },
]

export default function Skills() {
  const content = {
    title: "Skills I've Gained",
    description: `Here's the knowledge I've gained from ${PROGRAMMING_YEARS} years of coding and how I've applied it in my last ${PROFESSIONAL_YEARS} years of professional experience.`,
  }
  return (
    <>
      <div id="skills" className="pt-24 sm:pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{content.title}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">{content.description}</p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name}>
                <dt className="flex items-center font-semibold text-gray-900 mb-4">
                  <FontAwesomeIcon icon={skill.icon} className="w-5 h-5 mr-3 text-indigo-600" />
                  <span>{skill.name}</span>
                </dt>
                <dd className="mb-4 text-gray-600">{skill.description}</dd>
                <div className="flex flex-row flex-wrap">
                  {skill.tags.map((tag) => (
                    <span
                      key={skill.name + ' ' + tag}
                      className="relative z-10 rounded-full bg-gray-50 px-2 py-1 mb-2 mr-2 text-sm text-gray-500 hover:bg-gray-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}
