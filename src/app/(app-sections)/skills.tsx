const features = [
    {
      name: 'Python',
      description:
        "I started coding in Python with the release of version 3.2 in 2011. My work spans scripting, gaming, web development, automation, and more recently, projects involving Large Language Models.",
      tags: ['uwsgi', 'asyncio', 'openai', 'unittest', 'httpx', 'lxml', 'black'],
    },
    {
      name: 'Linux',
      description:
        'Since getting my first computer, I\'ve used Debian for everything from setting up servers and building networks to managing services and fixing system issues. I host my projects on VPSes that I manage myself.',
      tags: ['debian', 'openssh', 'qemu', 'nftables', 'nfs', 'bind9', 'isc-dhcp-server', 'dnsmasq', 'bash'],
    },
    {
      name: 'Open Source',
      description:
        "I've helped improve Pydantic and I'm looking to do more work on open-source projects. You can find all my personal projects available for anyone to see on my GitHub.",
      tags: ['pydantic', 'llms', 'automations', 'saas', 'tools'],
    },
    {
      name: 'Backend',
      description:
        'I work with ASGI REST APIs daily to support SaaS platforms. In 2020, I developed a framework on a uWSGI server to manage the backend of multiple presentation websites.',
      tags: ['fastapi', 'postgresql', 'redis', 'celery', 'dramatiq', 'supabase', 'sqlalchemy', 'pydantic'],
    },
    {
      name: 'Frontend',
      description:
        "I mainly work on backend development, but I'm also good at making user interfaces and connecting them to the backend. In 2020, I built a CSS framework from the ground up to give websites a look similar to what you get with Tailwind CSS.",
      tags: ['nextjs', 'react', 'typescript', 'javascript', 'tailwindcss', 'bootstrap', 'material', 'sass'],
    },
    {
      name: 'DevOps',
      description:
        'I can install and take care of Linux, web, and database servers, along with containers, making sure they handle traffic smoothly. I\'ve also set up systems for continuous integration and delivery, as well as monitoring tools.',
      tags: ['railway', 'github-actions', 'bitbucket-pipelines', 'hetzner', 'haproxy', 'pgbouncer', 'git', 'docker', 'prometheus', 'grafana', 'sentry', 'supervisor'],
    },
]

export default function Skills() {
  return (
    <>
      <div className="pt-24 sm:pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Skills I&apos;ve Gained</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Here&apos;s the knowledge I&apos;ve gained from 13 years of coding and how I&apos;ve applied it in my last six months of professional experience.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="my-1 text-gray-600">{feature.description}</dd>
              <div className="flex flex-row flex-wrap">
                {feature.tags.map((tag) => (
                  <span
                    key={feature.name + ' ' + tag}
                    className="relative z-10 rounded-full bg-gray-50 px-2 py-1 mt-2 mr-2 text-sm text-gray-500 hover:bg-gray-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}
