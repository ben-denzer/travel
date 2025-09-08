/* eslint-disable @next/next/no-img-element */
import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from '@heroicons/react/20/solid';
import Header from './components/Header';
import Footer from './components/Footer';

const benefitList = [
  {
    name: '1,000,000+ Properties',
    description:
      'Save on all top hotel and resort brands anywhere in the world.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Reward Credits',
    description:
      'Earn reward credits on every purchase you make, and use them to book travel.',
    icon: CreditCardIcon,
  },
  {
    name: 'Value Guarantee',
    description:
      'If you find a hotel cheaper online, we promise to credit you 110% of the difference.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Marketplace',
    description:
      'Rent or bid on weekly stay vacations. Make an offer for a price you want to pay.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Weekly Stay',
    description:
      'Save big when you book a week. Stay for up to 7 nights in a condo starting at $99.',
    icon: CalendarDaysIcon,
  },
];

const featuredTestimonial = {
  body: 'I usually stress about planning trips, but this time everything felt effortless. Great deals, smooth booking, and the savings made it even sweeter.',
  author: {
    name: 'Brenna Goyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl:
      'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
  },
};
const testimonials = [
  [
    [
      {
        body: "I couldn't believe how easy it was to book my hotel. The whole process took minutes, and the price was lower than anywhere else I checked!",
        author: {
          name: 'Leslie Alexander',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: "I saved over $300 on my family's vacation package. We stayed at a beautiful resort and still had extra cash to spend on activities",
        author: {
          name: 'Michael Foster',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'Booking a rental car was a breeze. I got exactly what I needed, and it cost way less than what the big-name sites were offering.',
        author: {
          name: 'Leonard Krasner',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: "The resort was absolutely stunning. From the ocean view to the staff, everything exceeded my expectations. I'll definitely book again!",
        author: {
          name: 'Floyd Miles',
          imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function HomepageContent() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        {/* Hero section */}
        <div className="relative isolate pt-14">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl ">
                Travel and lifestyle benefits are within your reach
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 ">
                Find a lower price anywhere online and we will refund you 110%
                of the difference.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-highlight-600 text-background px-3.5 py-2.5 text-sm font-semibold  shadow-xs hover:bg-highlight-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:shrink-0 lg:grow lg:block">
              <img
                alt="Traveling Worldwide"
                src="/tiles.png"
                className="w-full h-auto max-w-[450px]"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 after:sm:rounded-3xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <video
                controls
                className="relative w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-5xl lg:row-start-1 lg:max-w-md"
              >
                <source src="/plane.mp4" type="video/mp4" />
              </video>
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-background sm:text-4xl">
                  Unlock massive savings
                </h2>
                <p className="mt-6 text-lg/8 text-gray-300">
                  Exclusive deals you won&apos;t want to miss. Sign up now to
                  keep more in your pocket.
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-12 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:-bottom-48 lg:translate-y-0"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="flex flex-wrap justify-center gap-8">
              {benefitList.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col w-sm rounded-lg bg-white px-4 py-5 shadow-md sm:p-6"
                >
                  <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900 ">
                    <feature.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-highlight-600"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 ">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mx-auto mt-32 max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32 bg-gray-800 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/15 after:sm:rounded-3xl">
            <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-background sm:text-5xl">
              Total Member Savings: $147,426,588 USD
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
              Get started today.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-background  outline-1 -outline-offset-1 placeholder:text-background focus:outline-2 focus:-outline-offset-2 focus:outline-highlight-500 sm:text-sm/6 outline-white/20"
              />
              <button
                type="submit"
                className="cursor-pointer flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-none"
              >
                Get Started
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  r={1}
                  cx={0}
                  cy={0}
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="relative isolate mt-32">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-highlight-400">
                  Testimonials
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl ">
                  Real stories from happy customers
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8 ">
                    <p>{`“${featuredTestimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                    <img
                      alt=""
                      src={featuredTestimonial.author.imageUrl}
                      className="size-10 flex-none rounded-full bg-gray-50"
                    />
                    <div className="flex-auto">
                      <div className="font-semibold text-gray-900 ">
                        {featuredTestimonial.author.name}
                      </div>
                    </div>
                  </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div
                    key={columnGroupIdx}
                    className="space-y-8 xl:contents xl:space-y-0"
                  >
                    {columnGroup.map((column, columnIdx) => (
                      <div
                        key={columnIdx}
                        className={classNames(
                          (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 &&
                              columnIdx === columnGroup.length - 1)
                            ? 'xl:row-span-2'
                            : 'xl:row-start-1',
                          'space-y-8'
                        )}
                      >
                        {column.map((testimonial, i) => (
                          <figure
                            key={i}
                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-white/10"
                          >
                            <blockquote className="text-gray-900 ">
                              <p>{`"${testimonial.body}"`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                alt=""
                                src={testimonial.author.imageUrl}
                                className="size-10 rounded-full bg-gray-50"
                              />
                              <div>
                                <div className="font-semibold text-gray-900 ">
                                  {testimonial.author.name}
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
