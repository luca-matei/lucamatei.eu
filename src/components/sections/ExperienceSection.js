import React from 'react';
import CourseraLogo from '../../assets/img/coursera-logo.jpg';
import GetitAILogo from '../../assets/img/getitai-logo.jpg';

const certificates = [
  {
    name: 'Meta Back-End Developer',
    issuerLogo: CourseraLogo,
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/LX73JXQ3YQGK',
    completed: true,
    progressLabel: "9 Courses",
  },
  {
    name: 'Meta Front-End Developer',
    issuerLogo: CourseraLogo,
    url: '',
    completed: false,
    progressLabel: "7/9 Courses",
  },
  {
    name: 'Google Cybersecurity',
    issuerLogo: CourseraLogo,
    url: '',
    completed: false,
    progressLabel: "2/8 Courses",
  }
];

function CertificatesList() {
  return (
    <div className="space-y-4">
      {certificates.map((cert, index) => (
        <a
          key={index}
          href={cert.completed ? cert.url : '#'}
          className={`flex items-center justify-between p-2 border border-gray-200 rounded-lg ${cert.completed ? 'bg-white hover:bg-gray-100' : 'bg-gray-100'} ${!cert.completed && 'pointer-events-none'}`}
        >
          <div className="flex items-center">
            <img src={cert.issuerLogo} alt={`${cert.name} Logo`} className={`h-10 w-10 mr-4 ${!cert.completed && 'opacity-50'} rounded`} />
            <span className={`truncate ${!cert.completed && 'opacity-50'}`}>{cert.name}</span>
          </div>
          <span className={`ml-auto text-xs truncate ${!cert.completed ? 'text-gray-500' : 'text-blue-600'}`}>
            {cert.progressLabel}
          </span>
        </a>
      ))}
    </div>
  );
}

const workplaces = [
  {
    companyName: "GetitAI",
    companyLogo: GetitAILogo,
    role: "Full Stack Developer",
    startDate: "Oct 2023",
    endDate: "Present",
    isNDA: false,
    accomplishments: [
    ],
  },
  {
    companyName: "Singed NDA",
    companyLogo: GetitAILogo,
    role: "Full Stack Developer",
    startDate: "July 2023",
    endDate: "Present",
    isNDA: true,
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
    companyLogo: GetitAILogo,
    role: "Full Stack Developer",
    startDate: "June 2023",
    endDate: "Present",
    isNDA: false,
    accomplishments: [
    ],
  },
];

function WorkplaceList() {
  return (
    <div className="space-y-4">
      {workplaces.map((exp, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center space-x-4">
            {exp.isNDA ? (
              <i className="fas fa-lock fa-2x"></i> // Render lock icon for NDA
            ) : (
              <img src={exp.companyLogo} alt={`${exp.companyName} Logo`} className="h-10 w-10" /> // Render logo
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

function ExperienceSection() {
  return (
      <>
          <div
              className="w-full md:w-1/2 p-8 flex flex-col border-t md:border-t-0 md:border-l border-gray-200">
              <h3 className="mb-4 text-lg font-semibold text-blue-600">Certifications</h3>
              <CertificatesList/>
              <hr className="my-6 border-gray-300"/>
              <h3 className="mb-4 text-lg font-semibold text-blue-600">Workplaces</h3>
              <WorkplaceList/>
          </div>
          <div
              className="w-full md:w-1/2 p-8 flex flex-col border-t md:border-t-0 md:border-l border-gray-200">
              <h3 className="mb-4 text-lg font-semibold text-blue-600">Backend Development</h3>
              <p className="mb-2"><strong>Programming Languages:</strong> Python (including openai and httpx), C++</p>
              <p className="mb-2"><strong>Web Frameworks:</strong> FastAPI, Flask, Django, bottle.py</p>
              <p className="mb-2"><strong>API Standards:</strong> WSGI, ASGI (including WebSockets)</p>
              <p className="mb-2"><strong>Asynchronous Task Managers:</strong> Celery, Dramatiq</p>
              <p className="mb-2"><strong>Databases:</strong> PostgreSQL (with pgbouncer), Redis (including Sentinel and
                  Cluster), Supabase</p>
              <p><strong>Learning:</strong> Litestar</p>

              <hr className="my-6 border-gray-300"/>
              <h3 className="mb-4 text-lg font-semibold text-blue-600">Frontend Development</h3>
              <p className="mb-2"><strong>Web Technologies:</strong> HTML5, CSS3 (including SASS), JavaScript ES6,
                  TypeScript, Ajax</p>
              <p className="mb-2"><strong>JavaScript Frameworks:</strong> Mithril.js</p>
              <p className="mb-2"><strong>CSS Frameworks:</strong> Bootstrap, Tailwind CSS</p>
              <p><strong>Learning:</strong> React</p>

              <hr className="my-6 border-gray-300"/>
              <h3 className="mb-4 text-lg font-semibold text-blue-600">Linux System Administration</h3>
              <p className="mb-2"><strong>Network Services:</strong> SSH, Bind9 (DNS Server), ISC DHCP Server, Dnsmasq
              </p>
              <p className="mb-2"><strong>Scripting and Automation:</strong> Bash, cron (job scheduling), User and File
                  Management (permissions)</p>
              <p><strong>Learning:</strong> Postfix</p>
          </div>
      </>
  );
}

export default ExperienceSection
