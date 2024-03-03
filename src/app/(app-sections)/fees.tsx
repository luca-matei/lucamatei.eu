const tiers = [
  {
    name: 'Remote / Hybrid',
    id: 'tier-hobby',
    priceMonthly: '€25',
    description: 'Base rate for any remote or hybrid work.',
  },
  {
    name: 'On-site',
    id: 'tier-team',
    priceMonthly: '€35',
    description: 'We all know commuting takes valuable time.',
  },
]

export function Fees() {
    return (
        <div id="fees" className="isolate overflow-hidden bg-gray-900 mb-24 sm:mb-32">
            <div className="mx-auto max-w-7xl px-6 pb-64 pt-24 text-center sm:pt-32 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Hourly Rates</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        The right price for you
                    </p>
                </div>
                <div className="relative mt-6">
                    <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit
                        doloribus
                        molestiae voluptatum.
                    </p>
                    <svg
                        viewBox="0 0 1208 1024"
                        className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
                    >
                        <ellipse cx={604} cy={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx={604} ry={512}/>
                        <defs>
                            <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                                <stop stopColor="#7775D6"/>
                                <stop offset={1} stopColor="#E935C1"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="flow-root bg-white pb-[1px]">
                <div className="-mt-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                            {tiers.map((tier) => (
                                <div
                                    key={tier.id}
                                    className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                                >
                                    <div>
                                        <h3 id={tier.id} className="text-base font-semibold leading-7 text-indigo-600">
                                            {tier.name}
                                        </h3>
                                        <div className="mt-4 flex items-baseline gap-x-2">
                                            <span
                                                className="text-5xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                                            <span
                                                className="text-base font-semibold leading-7 text-gray-600">/hour</span>
                                        </div>
                                        <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                                    </div>
                                </div>
                            ))}
                            <div
                                className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                                <div className="lg:min-w-0 lg:flex-1">
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Negotiable</h3>
                                    <p className="mt-1 text-base leading-7 text-gray-600">
                                        Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non
                                        voluptatem sunt eos nostrum.
                                    </p>
                                </div>
                                <a
                                    href="#contact"
                                    className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Let's Talk <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}