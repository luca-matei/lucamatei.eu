const features = [
  {
    name: 'Python',
    description:
      "I've been writing Python code since version 3.2 was released in 2011. I use it in scripting, games, web development, automations and recently in LLM projects.",
    tags: ['uwsgi', 'asyncio', 'openai', 'unittest', 'httpx', 'lxml', 'black'],
  },
  {
    name: 'Linux',
    description:
      'I use Debian since my first computer from basic server management to building networks, managing services and troubleshooting systems. I host my projects on self-managed VPSes.',
    tags: ['debian', 'openssh', 'qemu', 'nftables', 'nfs', 'bind9', 'isc-dhcp-server', 'dnsmasq', 'bash'],
  },
  {
    name: 'Backend',
    description:
      'I work with REST APIs on a daily basis. In 2020 I built a framework on top of a uWSGI server to serve the backend of multiple websites.',
    tags: ['fastapi', 'celery', 'dramatiq', 'pydantic', 'sqlalchemy', 'flask', 'django', 'bottle.py'],
  },
  {
    name: 'Full Stack',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
    tags: ['Linux', 'Bash', 'SSH', 'Nginx', 'Apache', 'Docker', 'Kubernetes'],
  },
  {
    name: 'DevOps',
    description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
    tags: ['Linux', 'Bash', 'SSH', 'Nginx', 'Apache', 'Docker', 'Kubernetes'],
  },
  {
    name: 'Open Source',
    description:
      'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    tags: ['Linux', 'Bash', 'SSH', 'Nginx', 'Apache', 'Docker', 'Kubernetes'],
  },
]

export default function Skills() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills I've Gained</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Here's what I've learned in 13 years of writing code and what I brought into my recent 6 months of professional work.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name}>
            <dt className="font-semibold text-gray-900">{feature.name}</dt>
            <dd className="my-1 text-gray-600">{feature.description}</dd>
            <div className="flex flex-row flex-wrap">
              {feature.tags.map((tag) => (
                <span
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
  )
}
