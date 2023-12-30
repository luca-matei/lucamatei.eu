import { ReactNode } from 'react';
import Link from 'next/link';

// Define the Project type
interface Project {
  name: string;
  category: string;
  url: string;
}

// Define your project data
const projects: Project[] = [
  { name: 'QR Generator', category: 'Apps', url: '/projects/qr-generator' },
  { name: 'URL Shortener', category: 'Apps', url: 'https://example.com/url-shortener' },
  { name: 'Password Generator', category: 'Tools', url: '/projects/password-generator' },
  { name: 'Days Until', category: 'Tools', url: '/projects/days-until' },
  { name: 'Word Counter', category: 'Tools', url: '/projects/word-counter' },
  { name: 'BMI Calculator', category: 'Tools', url: '/projects/bmi-calculator' },
];

// ProjectLayout component props
interface ProjectLayoutProps {
  children: ReactNode;
}

// ProjectLayout component
const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  // Organize projects by categories
  const categories = projects.reduce((acc: Record<string, Project[]>, project) => {
    const { category } = project;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {});

  // Helper function to determine if a URL is external
  const isExternalUrl = (url: string) => /^https?:\/\//.test(url);

  return (
    <div className="flex-grow flex flex-col md:flex-row w-full">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-100" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 h-full">
          <input
            type="text"
            placeholder="Search..."
            className="mb-4 p-2 w-full rounded"
          />
          {/* Dynamically generate category groups and links */}
          {Object.entries(categories).map(([categoryName, projects], categoryIndex) => (
            <div key={categoryName} className={`mt-4 ${categoryIndex !== 0 ? 'pt-4 border-t' : ''}`}>
              <h4 className="font-bold">{categoryName}</h4>
              <ul>
                {projects.map((project) => (
                  <li key={project.name} className="mt-2">
                    {isExternalUrl(project.url) ? (
                      // External link
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{project.name}</a>
                    ) : (
                      // Internal link using Next.js Link component
                      <Link href={project.url}
                            className="text-blue-600 hover:underline">{project.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-8 w-max-full">
        {children}
      </main>
    </div>
  );
}

export default ProjectLayout;
