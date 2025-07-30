const statuses: Record<string, string> = {
  "Complete": "text-green-700 bg-green-50 ring-green-600/20",
  "Planned": "text-gray-600 bg-gray-50 ring-gray-500/10",
  "In progress": "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
}

interface Course {
  id: number;
  name: string;
  href: string;
  status: string;
  createdBy: string;
  courses: number | string;
  completedOn: string | undefined;
  completedOnTime: string | undefined;
}

const courses = [
  {
    id: 1,
    name: "Backend Developer",
    href: "https://coursera.org/share/119d8b3955d78aa262873a5587bb1528",
    status: "Complete",
    createdBy: "Meta",
    courses: 9,
    completedOn: "Jun 25, 2023",
    completedOnTime: "2023-06-25T00:00Z",
  },
  {
    id: 2,
    name: "Machine Learning Specialization",
    href: "https://www.coursera.org/user/aaae60f377016d8fe27a0ab27467edb4",
    status: "In progress",
    createdBy: "IBM",
    courses: "1/6",
    completedOn: undefined,
    completedOnTime: undefined,
  },
  {
    id: 3,
    name: "Frontend Developer",
    href: "https://www.coursera.org/user/aaae60f377016d8fe27a0ab27467edb4",
    status: "Complete",
    createdBy: "Meta",
    courses: 9,
    completedOn: undefined,
    completedOnTime: undefined,
  },
  {
    id: 4,
    name: "Python For Everybody",
    href: "https://www.coursera.org/user/aaae60f377016d8fe27a0ab27467edb4",
    status: "Complete",
    createdBy: "University of Michigan",
    courses: 5,
    completedOn: undefined,
    completedOnTime: undefined,
  },
  {
    id: 5,
    name: "IT Automation with Python",
    href: "https://coursera.org/share/ef006a0a91c90a0a6fc7b6a50cb44db6",
    status: "Complete",
    createdBy: "Google",
    courses: 6,
    completedOn: "Dec 19, 2023",
    completedOnTime: "2023-12-19T00:00Z",
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

function Course(course: Course) {
  return (
    <li key={course.id} className="flex items-center justify-between gap-x-6 py-5">
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">{course.name}</p>
          <p
            className={classNames(
              statuses[course.status],
              "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
            )}
          >
            {course.status}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p className="whitespace-nowrap">{course.courses} courses</p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle cx={1} cy={1} r={1}/>
          </svg>
          {course.completedOn &&
            <>
              <p className="whitespace-nowrap">
                Completed on <time dateTime={course.completedOnTime}>{course.completedOn}</time>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1}/>
              </svg>
            </>
          }
          <p className="truncate">Created by {course.createdBy}</p>
        </div>
      </div>
      <div className="flex flex-none items-center gap-x-4">
        <a
            href={course.href}
            target="_blank"
            className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
            rel="noopener noreferrer"
        >
          View certificate<span className="sr-only">, {course.name}</span>
        </a>
      </div>
    </li>
  )
}


export default function Courses() {
  const content = {
    title: "Courses & Certifications",
    description: "I love learning and have made it a daily habit.",
  }
  return (
    <div id="courses" className="py-24 sm:py-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:mx-0">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{content.title}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {content.description}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <ul role="list" className="divide-y divide-gray-100">
              {courses.map((course) => (
                  <Course key={course.id} {...course} />
              ))}
            </ul>
            <img src="/csm-certificate.jpg" className="w-full max-w-4xl my-5 h-auto border rounded-lg shadow-md" alt="Certificate"/>
          </div>
        </div>
      </div>
    </div>
  )
}
