import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    name: "DiMa",
    description: "A comprehensive tool for managing hosts, networks, and services, streamlining the creation, deployment, and monitoring of web applications.",
    githubUrl: "https://github.com/luca-matei/dima",
    gitlabUrl: "https://gitlab.com/digitalmarmot/dima",
    demoUrl: null,
    websiteUrl: null,
    date: "Coming soon",
  },
  // More projects can be added here later
];

function ProjectsList() {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <span className="text-sm text-gray-500">{project.date}</span>
          </div>
          <p className="text-gray-700 text-base my-4">{project.description}</p>
          <div className="flex justify-start space-x-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FontAwesomeIcon icon={faGithub} />
              <span className="ml-2">GitHub</span>
            </a>
            <a href={project.gitlabUrl} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <FontAwesomeIcon icon={faGitlab} />
              <span className="ml-2">GitLab</span>
            </a>
          </div>
          {/* Uncomment below when demoUrl and websiteUrl are available
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
          <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">Website</a>
          */}
        </div>
      ))}
    </div>
  );
}

const certificates = [
  {
    name: 'Machine Learning',
    issuerLogo: "https://assets.lucamatei.eu/images/ibm-logo.jpg",
    issuerName: "IBM on Coursera",
    url: '',
    completed: false,
    progressLabel: "1/6 Courses",
  },
  {
    name: 'Back-End Developer',
    issuerLogo: "https://assets.lucamatei.eu/images/meta-logo.png",
    issuerName: "Meta on Coursera",
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/LX73JXQ3YQGK',
    completed: true,
    progressLabel: "9 Courses",
  },
  {
    name: 'Front-End Developer',
    issuerLogo: "https://assets.lucamatei.eu/images/meta-logo.png",
    issuerName: "Meta on Coursera",
    url: '',
    completed: false,
    progressLabel: "9 Courses",
  },
  {
    name: 'IT Automation with Python',
    issuerLogo: "https://assets.lucamatei.eu/images/google-logo.jpg",
    issuerName: "Google on Coursera",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/4VYUGJ4GJJ7N",
    completed: true,
    progressLabel: "6 Courses",
  },
  {
    name: 'Python for Everybody',
    issuerLogo: "https://assets.lucamatei.eu/images/umich-logo.jpg",
    issuerName: "University of Michigan on Coursera",
    url: '',
    completed: false,
    progressLabel: "5 Courses",
  },
];

function CertificatesList() {
  return (
    <div className="space-y-4">
      {certificates.map((cert, index) => (
        <a
          key={index}
          href={cert.completed ? cert.url : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-start p-2 border border-gray-200 rounded-lg ${cert.completed ? 'bg-white hover:bg-gray-100' : 'bg-gray-100'} ${!cert.completed && 'pointer-events-none'}`}
        >
          {/* Logo on the left */}
          <img
            src={cert.issuerLogo}
            alt={`${cert.name} Logo`}
            className={`h-10 w-10 mr-4 ${!cert.completed && 'opacity-50'} rounded`}
          />

          {/* Text in a column on the right */}
          <div className="flex-1 min-w-0"> {/* Flex item to hold text */}
            <span className={`block truncate ${!cert.completed && 'opacity-50'}`}>{cert.name}</span>
            <span className={`block text-xs ${!cert.completed && 'opacity-50'}`}>by {cert.issuerName}</span>
            <span className={`block text-xs pt-1 ${!cert.completed ? 'text-gray-500 opacity-50' : 'text-green-600'}`}>
              {cert.progressLabel}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

const workplaces = [
    {
    companyName: "GetitAI",
    companyLogo: "https://assets.lucamatei.eu/images/getitai-logo.jpg",
    role: "Full Stack Developer",
    startDate: "Oct 2023",
    endDate: "Present",
    accomplishments: [
    ],
  },
  {
    companyName: "Signed NDA",
    companyLogo: "https://assets.lucamatei.eu/images/placeholder-logo.png",
    role: "Full Stack Developer",
    startDate: "July 2023",
    endDate: "Present",
    accomplishments: [
        "Transitioned from a JSON-based to a relational database, implementing the logic for the new system and crafting migration scripts for production data involving hundreds of thousands of rows.",
        "Designed and implemented a multi-machine system to concurrently process hundreds of items per minute, ensuring fairness in client processing queues.",
        "Implemented API-wide architectural changes, eliminating obsolete code and enhancing adherence to DRY principles, resulting in a 100-200% increase in processing speed.",
        "Redesigned and implemented core parts of the API, significantly improving item processing and development speed.",
        "Configured NFS, a database server, and load balancers on dedicated servers, enhancing system efficiency and reliability."
    ],
  },
  {
    companyName: "Freelancer",
    companyLogo: "https://assets.lucamatei.eu/images/placeholder-logo.png",
    role: "Full Stack Developer",
    startDate: "June 2023",
    endDate: "Present",
    accomplishments: [
    ],
  },
];

function WorkplacesList() {
  return (
    <div className="space-y-4">
      {workplaces.map((exp, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center space-x-4">
            {exp.companyLogo ? (
              <img src={exp.companyLogo} alt={`${exp.companyName} Logo`} className="h-10 w-10" />
            ) : (
              <div className="h-10 w-10"></div> // Placeholder if no logo
            )}
            <div>
              <h3 className="text-lg font-semibold">{exp.companyName}</h3>
              <p className="text-sm text-gray-600">{exp.role}</p>
              <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</p>
            </div>
          </div>
          {exp.accomplishments.length > 0 && (
            <ul className="list-disc pl-8 mt-4">
              {exp.accomplishments.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-600">{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

const techStack = [
  {
    title: "Programming Languages",
    items: ["Python (including openai and httpx)", "C++", "JavaScript (ES6)"],
  },
  {
    title: "Web Frameworks",
    items: ["FastAPI", "Flask", "Django", "bottle.py", "Node.js", "React JS"],
  },
  {
    title: "API Standards",
    items: ["WSGI", "ASGI (including WebSockets)"],
  },
  {
    title: "Asynchronous Task Managers",
    items: ["Celery", "Dramatiq"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL (with pgbouncer)", "Redis (including Sentinel and Cluster)", "Supabase", "SQLAlchemy"],
  },
  {
    title: "Web Technologies",
    items: ["HTML5", "CSS3 (including SASS)", "TypeScript", "Ajax"],
  },
  {
    title: "JavaScript Frameworks",
    items: ["Mithril.js", "React JS"],
  },
  {
    title: "CSS Frameworks",
    items: ["Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Network Services",
    items: ["SSH", "Bind9 (DNS Server)", "ISC DHCP Server", "Dnsmasq"],
  },
  {
    title: "Scripting and Automation",
    items: ["Bash", "cron (job scheduling)", "User and File Management (permissions)"],
  },
  {
    title: "DevOps and CI/CD",
    items: ["Docker", "GitHub Actions", "Bitbucket Pipelines"],
  },
  {
    title: "Testing Frameworks",
    items: ["Pytest", "unittest", "CodiumAI"],
  },
  {
    title: "Cloud Services and Hosting",
    items: ["Railway", "Hetzner", "Cloudflare"],
  },
  {
    title: "Version Control and Project Management",
    items: ["Git (GitHub, GitLab, Bitbucket)", "Jira", "ClickUp", "Slack"],
  },
  {
    title: "Web Security Practices",
    items: ["CORS", "CSRF", "JWT", "Data Validation"],
  },
  {
    title: "Performance Optimization",
    items: [
      "Front-end and Back-end Optimization Practices",
      "Minification and Compression Techniques",
      "Caching Strategies at Database and Server Level",
      "Database Query Optimization",
      "Scaling Applications for High Traffic/Data",
      "Load Balancing Techniques and Tools (Round Robin, Health-Based, HAProxy)",
    ],
  },];

function TechStackList() {
  return (
    <div>
      {techStack.map((category, index) => (
        <div key={index}>
          <h4 className="text-md font-semibold mb-2">{category.title}</h4>
          <p className="mb-2">{category.items.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
      <>
        <div
            className="w-full md:w-1/2 p-8 flex flex-col border-t md:border-t-0 md:border-l border-gray-200">
            <h3 className="mb-4 text-lg font-semibold text-blue-600">Certifications</h3>
            <CertificatesList/>
            <hr className="my-6 border-gray-300"/>
            <h3 className="mb-4 text-lg font-semibold text-blue-600">Workplaces</h3>
            <WorkplacesList/>
            <hr className="my-6 border-gray-300"/>
            <h3 className="mb-4 text-lg font-semibold text-blue-600">Open Source Projects</h3>
            <ProjectsList/>
        </div>
        <div
            className="w-full md:w-1/2 p-8 flex flex-col border-t md:border-t-0 md:border-l border-gray-200">
          <h3 className="mb-4 text-lg font-semibold text-blue-600">Tech Stack</h3>
          <TechStackList/>
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">Interested in Collaborating?</p>
            <p>Reach out for an interview or discussion at <a href="mailto:business@lucamatei.eu"
                                                              className="text-blue-600 underline">business@lucamatei.eu</a>
            </p>
          </div>
        </div>
      </>
  );
}