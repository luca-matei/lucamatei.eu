"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';


export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [firstNameValidation, setFirstNameValidation] = useState('');
  const [lastNameValidation, setLastNameValidation] = useState('');
  const [emailValidation, setEmailValidation] = useState('');
  const [phoneValidation, setPhoneValidation] = useState('');
  const [messageValidation, setMessageValidation] = useState('');

  // onBlur handlers for validation
  const validateFirstName = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value || e.target.value.length < 2 || e.target.value.length > 32 ) {
      setFirstNameValidation('Between 2 and 32 characters.');
    } else {
      setFirstNameValidation('');
    }
  };

  const validateLastName = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value && (e.target.value.length < 2 || e.target.value.length > 32) ) {
      setLastNameValidation('Between 2 and 32 characters.');
    } else {
      setLastNameValidation('');
    }
  };

  const validateEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailValidation('Invalid email.');
    } else if (e.target.value.length > 64) {
      setEmailValidation('Max 64 characters.');
    } else {
      setEmailValidation('');
    }
  };

  const validatePhone = (e: React.FocusEvent<HTMLInputElement>) => {
    const phoneRegex = /^\+?([0-9]{1,3})?([0-9]{10})$/;
    if (e.target.value && !phoneRegex.test(e.target.value)) {
      setPhoneValidation('Invalid phone.');
    } else if (e.target.value.length > 16) {
      setPhoneValidation('Max 16 characters.');
    } else {
      setPhoneValidation('');
    }
  };

  const validateMessage = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (!e.target.value || e.target.value.length < 8 || e.target.value.length > 4096) {
      setMessageValidation('Between 8 and 4096 characters.');
    } else {
      setMessageValidation('');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget)
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      });

      if (!response.ok) {
        setIsLoading(false);
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData['message']);

      toast.success('Message successfully sent');
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Error, please try resubmitting the form");
    }
  }

  return (
    <>
    <div id="contact" className="relative isolate h-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="grow mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <div
              className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let&apos;s get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Drop me a line if you think we can team up or if you have any questions.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <FontAwesomeIcon icon={faMapPin} className="h-7 w-6 text-gray-400" aria-hidden="true"/>
                </dt>
                <dd>
                  Bucharest, Romania
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <FontAwesomeIcon icon={faPhone} className="h-7 w-6 text-gray-400" aria-hidden="true"/>
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+40 771 344 046">
                    +40 771 344 046
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <FontAwesomeIcon icon={faEnvelope} className="h-7 w-6 text-gray-400" aria-hidden="true"/>
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="mailto:hello@lucamatei.eu">
                    hello@lucamatei.eu
                  </a>
                </dd>
              </div>
              <div className="flex items-center space-x-4 text-gray-400">
                <a href="https://t.me/lucamatei" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} className="h-7 w-6 hover:text-gray-900 cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/lucamatei" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="h-7 w-6 hover:text-gray-900 cursor-pointer"/>
                </a>
                <a href="https://github.com/luca-matei" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="h-7 w-6 hover:text-gray-900 cursor-pointer"/>
                </a>
              </div>
            </dl>
          </div>
          <p className="text-sm leading-5 text-gray-500 lg:block hidden">
            &copy; 2024 Luca Matei. All rights reserved.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {/* First Name Field */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    minLength={2}
                    maxLength={32}
                    onBlur={validateFirstName}
                    autoComplete="given-name"
                    placeholder="John"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className={`mt-2 text-red-500 text-sm ${firstNameValidation ? 'opacity-100' : 'opacity-0'}`}>
                    {firstNameValidation || 'Placeholder text for spacing'}
                  </p>
                </div>
              </div>
              {/* Last Name Field */}
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    minLength={0}
                    maxLength={32}
                    onBlur={validateLastName}
                    autoComplete="family-name"
                    placeholder="Doe"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className={`mt-2 text-red-500 text-sm ${lastNameValidation ? 'opacity-100' : 'opacity-0'}`}>
                    {lastNameValidation || 'Placeholder text for spacing'}
                  </p>
                </div>
              </div>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    maxLength={64}
                    onBlur={validateEmail}
                    autoComplete="email"
                    placeholder="john.doe@example.com"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className={`mt-2 text-red-500 text-sm ${emailValidation ? 'opacity-100' : 'opacity-0'}`}>
                    {emailValidation || 'Placeholder text for spacing'}
                  </p>
                </div>
              </div>
              {/* Phone Number Field */}
              <div>
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    maxLength={16}
                    onBlur={validatePhone}
                    autoComplete="tel"
                    placeholder="1234567890"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    title="Expected format: +1234567890 or 1234567890"
                  />
                  <p className={`mt-2 text-red-500 text-sm ${phoneValidation ? 'opacity-100' : 'opacity-0'}`}>
                    {phoneValidation || 'Placeholder text for spacing'}
                  </p>
                </div>
              </div>
              {/* Message Field */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    minLength={10}
                    maxLength={4096}
                    onBlur={validateMessage}
                    placeholder={"Hey Luca, I'd like to talk about..."}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className={`mt-2 text-red-500 text-sm ${messageValidation ? 'opacity-100' : 'opacity-0'}`}>
                    {messageValidation || 'Placeholder text for spacing'}
                  </p>
                </div>
                <p className={"text-gray-400 text-sm"}>
                  <span className={"font-bold"}>Note:</span> Data you enter is not stored on my servers and is directly sent to my email as seen in the <a href={"https://github.com/luca-matei/lucamatei.eu"} target={"_blank"} className={"underline underline-offset-4"}>source code</a> of this website.
                </p>
              </div>
              <div className="sm:col-span-2 mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex justify-center items-center"
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading ? (
                    <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full"
                      role="status">
                    </div>
                  ) : (
                    "Send message"
                  )}
                </button>
              </div>
            </div>
            <p className="text-sm text-center leading-5 text-gray-500 mt-16 lg:hidden">
              &copy; 2024 Luca Matei. All rights reserved.
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default function Contact() {
  return (
    <>
    </>
  );
}
