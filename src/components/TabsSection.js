import React, { useState } from 'react';
import '../assets/css/TabsSection.css';

function TabsSection() {
  const [activeTab, setActiveTab] = useState('backend');

  const TabButton = ({ id, title }) => (
    <button
      className={`tab ${activeTab === id ? 'tab-active' : ''}`}
      onClick={() => setActiveTab(id)}
    >
      {title}
    </button>
  );

  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200">
      <div className="flex space-x-2 mb-4">
        <TabButton id="backend" title="Backend" />
        <TabButton id="frontend" title="Frontend" />
        <TabButton id="servers" title="Servers" />
      </div>

      <div className="tab-content-area">
        {activeTab === 'backend' && (
            <div id="backend" className="tab-content p-2">
                <h3 className="mb-4 text-lg font-semibold">Backend Development</h3>
                <p className="mb-2"><strong>Programming Languages:</strong> Python (including openai and httpx), C++</p>
                <p className="mb-2"><strong>Web Frameworks:</strong> Django, FastAPI, bottle.py</p>
                <p className="mb-2"><strong>API Standards:</strong> WSGI, ASGI (including WebSockets)</p>
                <p className="mb-2"><strong>Asynchronous Task Managers:</strong> Celery, Dramatiq</p>
                <p className="mb-2"><strong>Databases:</strong> PostgreSQL (with pgbouncer), Redis (including Sentinel
                    and Cluster), Supabase</p>
                <p><strong>Learning:</strong> Litestar</p>
            </div>
        )}

          {activeTab === 'frontend' && (
              <div id="frontend" className="tab-content p-2">
                  <h3 className="mb-4 text-lg font-semibold">Frontend Development</h3>
                  <p className="mb-2"><strong>Web Technologies:</strong> HTML5, CSS3 (including SASS), JavaScript ES6,
                      TypeScript, Ajax</p>
                  <p className="mb-2"><strong>JavaScript Frameworks:</strong> Mithril.js</p>
                  <p className="mb-2"><strong>CSS Frameworks:</strong> Bootstrap, Tailwind CSS</p>
                  <p><strong>Learning:</strong> React</p>
              </div>
          )}

          {activeTab === 'servers' && (
              <div id="servers" className="tab-content p-2">
                  <h3 className="mb-4 text-lg font-semibold">Linux System Administration</h3>
                  <p className="mb-2"><strong>Network Services:</strong> SSH, Bind9 (DNS Server), ISC DHCP Server,
                      Dnsmasq</p>
                  <p className="mb-2"><strong>Scripting and Automation:</strong> Bash, cron (job scheduling), User and
                      File Management (permissions)</p>
                  <p><strong>Learning:</strong> Postfix</p>
              </div>
          )}
      </div>
        <p className="text-xs text-gray-500 text-center mt-auto">&copy; 2023 Luca Matei, All rights reserved.</p>
    </div>
  );
}

export default TabsSection;
