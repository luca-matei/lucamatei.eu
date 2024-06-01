import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Hero() {
  const content = {
    subtitle: "Full Stack Developer",
    title: () => {
      return <>Hi, I&apos;m Luca,<br /><span className="text-indigo-600">Full Stack Developer</span></>
    },
    description: "I've been writing software for 13 years and have spent the last year helping startups build their products. I've quickly become the developer they count on and a key person for major architectural changes and planning. Outside of work, I share my thoughts on programming and help others learn to code.",
  }

  return (
    <div id="home" className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div
          className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1
            className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            {content.title()}
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-gray-600">
              {content.description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book a meeting
              </a>
              <a href="#about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <FontAwesomeIcon icon={faArrowRightLong} className="inline h-3 ml-1" aria-hidden="true"></FontAwesomeIcon>
              </a>
            </div>
          </div>
          <img
            src="ART00045.jpg"
            alt=""
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
    </div>
  )
}

{/*
      <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
        <div className="mx-auto w-96 max-w-full">
          <img
            className="rounded-2xl" src="https://assets.lucamatei.eu/images/profile-picture.jpg"
            alt="Luca Matei Profile Picture"
          />
          <div className="items-center mt-2 grid grid-cols-3 gap-4">
            <a className="mx-auto" href="https://bcert.me/sipbjjrqi" target="_blank">
              <img
                className="h-24 w-24 rounded-xl" src="https://assets.lucamatei.eu/images/seal-csm.png"
                alt="Certified ScrumMaster Badge"
                />
              </a>
              <div className="mx-auto h-20 w-20 rounded-full bg-gray-50">
              </div>
              <div className="mx-auto h-20 w-20 rounded-full bg-gray-50">
              </div>
            </div>
          </div>
        </div>
      </div>

      */}