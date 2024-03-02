const workplaces = [
  {
    id: 1,
    title: 'Full Stack Engineer (Contract)',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    period: 'Oct 2023 - Present',
    category: { title: 'getitAI, Inc.', href: '#' },
  },
  {
    id: 2,
    title: 'Full Stack Engineer (Contract)',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    period: 'Jul 2023 - Present',
    category: { title: 'Signed NDA', href: '#' },
  },
  {
    id: 3,
    title: 'Full Stack Engineer',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    period: 'Jun 2023 - Present',
    category: { title: 'Freelancer', href: '#' },
  },
]

export default function Experience() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {workplaces.map((workplace) => (
            <article key={workplace.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <span className="text-gray-500">
                  {workplace.period}
                </span>
                <a
                  href={workplace.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {workplace.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={workplace.href}>
                    <span className="absolute inset-0" />
                    {workplace.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{workplace.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
