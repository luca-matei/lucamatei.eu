import React from 'react';
import profileImage from '../../assets/img/profile.jpg';
import cvPdf from '../../assets/files/cv-luca-matei-en.pdf';
import '../../assets/css/ProfileSection.css';

function HomeSection() {
  return (
      <>
          <div
              className="w-full md:w-1/2 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200">
              <div className="flex flex-col items-center space-y-6">
                  <img src={`${profileImage}`} alt="Luca Matei" className="rounded-full h-40 w-40 shadow-lg"/>
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
                      <a href={`${cvPdf}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">Download
                          CV</a>
                      <span className="text-sm">€25 per hour</span>
                  </div>
              </div>
          </div>
          <div
              className="w-full md:w-1/2 p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200">
              <h2 className="mb-2 text-xl">Hi,</h2>
              <p>I'm Luca, a 20 year old born in the lands of Eastern Europe. I love trains and wooden cabins.</p>
          </div>
      </>
  );
}

export default HomeSection;
