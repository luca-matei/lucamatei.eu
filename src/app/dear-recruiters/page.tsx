"use client";
import ExternalLink from "@/components/ExternalLink";
import {PROGRAMMING_YEARS} from "@/constants";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {ContactSection} from "@/app/(presentation-pages)/contact/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const faq = [
  {
    "question": "On-site, hybrid or remote?",
    "short_answer": "I work exclusively remotely.",
    "long_answer": "The commute time is excessive, and I am more productive in my own environment. Working from my preferred space allows me to focus on more important priorities.",
  },
  {
    "question": "How would you like to collaborate?",
    "short_answer": (
      <>
        I operate through <ExternalLink
          href={"https://legalfirme.ro/matei-a-daniel-luca-persoana-fizica-autorizata-48291974/"}>my own umbrella
          company</ExternalLink> for all professional engagements.
      </>
    ),
    "long_answer": "Since I'm taking on international jobs and gigs, both short and long term, it would make sense for me organizationally speaking to contract the work.",
  },
  {
    "question": "What are your rates?",
    "short_answer": (
      <>
        Mid-level engagements: €30-40/hour.<br/>
        Senior-level engagements: €40-50/hour.
      </>
    ),
    "long_answer": "I'd be happy to join for a smaller fee if the role gives me an opportunity to grow as a team leader, solutions architect, or as a human (through humanitarian causes).",
  },
  {
    "question": "What is your educational background?",
    "short_answer": `I bring ${PROGRAMMING_YEARS} years of self-taught expertise in lieu of formal education.`,
    "long_answer": `Due to family circumstances, I had to start working earlier than expected, so I don't have a Bachelor's Degree. However, I've been self-teaching for ${PROGRAMMING_YEARS} years on web development and multiple adjacent subjects, and I've been making my knowledge public through several projects and initiatives. I'm now working on getting AWS certification.`,
  },
  {
    "question": "Have you worked with startups before?",
    "short_answer": "My biggest and longest contracts have been with startups.",
    "long_answer": "I'm not interested in working in a medium or large company as I'm now looking to grow in multiple facets.",
  },
]

function FAQContent() {
  return (
    <>
      <div>
        <h2 className={"text-3xl font-bold mb-3"}>Dear Recruiters,</h2>
        <p>To help us use our time efficiently, I&apos;ve created a list of common questions with answers. This
          information
          can help prepare for our conversation or provide quick answers to initial questions you might have.</p>
      </div>
      {faq.map((qa, idx) => (
        <div key={idx} className={"mt-10"}>
          <h3 className={"text-xl font-bold mb-2"}>{qa.question}</h3>
          <h4 className={"font-bold mb-1"}>Short answer</h4>
          <p className={"mb-3 text-gray-600"}>{qa.short_answer}</p>
          <h4 className={"font-bold mb-1"}>Long answer</h4>
          <p className={"mb-3 text-gray-600"}>{qa.long_answer}</p>
        </div>
      ))}
    </>
  )
}

export default function DearRecruitersPage() {
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const bookingConfirmedFlag = url.searchParams.get("booking-confirmed")
    if (bookingConfirmedFlag !== null) setIsBookingConfirmed(true);
  }, [])

  if (isBookingConfirmed)
    return (
      <>
        <Header/>
        <div className={"px-6 py-32 sm:px-6 sm:py-48 lg:px-8 bg-gradient-to-r from-green-500 to-emerald-600"}>
          <div className={"max-w-3xl mx-auto text-center text-white"}>
            <h1 className={"mb-2 flex justify-center items-center text-4xl sm:text-5xl"}>
              Booking Confirmed <FontAwesomeIcon icon={faCircleCheck}
                                                 className={"w-8 h-8 text-green-500 bg-white ml-2 p-0.5 rounded-full inline-block"}/>
            </h1>
            <p className={"font-semibold text-white/90"}>All set! Your call is booked. Looking forward to our call!</p>
          </div>
          <div className={"h-24"}></div>
        </div>
        <div id={"dear-recruiters"} className="bg-white p-6 md:p-10 max-w-3xl mx-auto -mt-40 md:rounded-md md:shadow">
          <FAQContent/>
        </div>
        <Footer/>
      </>
    );
  else
    return (
      <>
        <Header/>
        <div className={"px-6 py-24 sm:px-6 sm:py-32 lg:px-8"}>
          <div id={"dear-recruiters"} className="max-w-3xl mx-auto">
            <FAQContent/>
          </div>
        </div>
        <ContactSection/>
      </>
    )
}
