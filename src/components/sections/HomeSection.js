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
                  <p className="text-center text-lg">Full Stack Developer specializing in Web Technologies and
                      Artificial Intelligence</p>
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
              className="w-full md:w-1/2 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200">
              <h3 className="mb-4 text-lg font-semibold text-blue-600">Backend Development</h3>
              <p className="mb-2"><strong>Programming Languages:</strong> Python (including openai and httpx), C++</p>
              <p className="mb-2"><strong>Web Frameworks:</strong> Django, FastAPI, bottle.py</p>
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

export default HomeSection;
