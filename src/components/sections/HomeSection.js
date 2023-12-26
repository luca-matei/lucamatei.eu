import React from 'react';
import '../../assets/css/ProfileSection.css';

function HomeSection() {
  return (
      <>
          <div
              className="w-full md:w-1/2 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200">
              <div className="flex flex-col items-center space-y-6">
                  <img src="https://assets.lucamatei.eu/images/profile-picture.jpg" alt="Luca Matei" className="rounded-full h-40 w-40 shadow-lg"/>
                  <h2 className="text-2xl font-semibold text-blue-600">Luca Matei</h2>
                  <p className="text-center text-lg">Full-Stack Developer specializing in Web Development, Server
                      Administration and a bit of Artificial Intelligence</p>
                  <div className="flex items-center space-x-2">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Romania, Bucharest</span>
                  </div>
                  <ul className="flex justify-center space-x-4">
                      <li>
                          <a href="/cdn-cgi/l/email-protection#..." className="hover:text-blue-400">
                              <i className="fas fa-envelope fa-2x"></i>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/lucamatei" className="hover:text-blue-400">
                              <i className="fab fa-linkedin fa-2x"></i>
                          </a>
                      </li>
                      <li>
                          <a href="https://t.me/lucamatei" className="hover:text-blue-400">
                              <i className="fab fa-telegram-plane fa-2x"></i>
                          </a>
                      </li>
                      <li>
                          <a href="https://github.com/luca-matei" className="hover:text-blue-400">
                              <i className="fab fa-github fa-2x"></i>
                          </a>
                      </li>
                      <li>
                          <a href="https://gitlab.com/lucamatei" className="hover:text-blue-400">
                              <i className="fab fa-gitlab fa-2x"></i>
                          </a>
                      </li>
                  </ul>
                  <div className="flex items-center space-x-4">
                      <a href="https://assets.lucamatei.eu/images/files/cv-luca-matei-en.pdf" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">Download
                          CV</a>
                      <span className="text-sm">€25 per hour</span>
                  </div>
              </div>
          </div>
          <div
              className="w-full md:w-1/2 p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200">
              <h2 className="mb-2 text-2xl">Salut,</h2>
              <p className="mb-2">I'm Luca, a 20-year-old programmer from the vibrant lands of Eastern Europe. My journey in programming began at 7, starting with coding math problems in Python and creating small browser games. Over the years, I've been on a continuous learning path, publishing multiple iterations of my websites and developing DiMa, a comprehensive project management tool. More about this journey can be found in the Experience tab.</p>
              <p>At 18, I embraced independence and worked in retail, a period where I honed my interpersonal skills and rebuilt DiMa with a renewed vision. Almost a year later, I landed my first professional role in the tech industry. When I'm not coding, I'm an enthusiast of trains, a planner of my dream wooden cabin, and a proud caretaker of my three cats.</p>
          </div>
      </>
  );
}

export default HomeSection;
