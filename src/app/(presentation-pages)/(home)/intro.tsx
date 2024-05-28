export default function Intro() {
  const content = {
    title: () => {
      return (<>A Few Words<br /><span className={"text-indigo-600"}>About Me</span></>);
    },
    description: () => {
      return (
        <>
          <p className="mb-6">I am a Full Stack Developer with a strong commitment to growth and a proven track record of developing and enhancing SaaS platforms with Python and JavaScript frameworks in Linux environments.</p>
          <p>I am a Full Stack Developer with a strong commitment to growth and a proven track record of developing and enhancing SaaS platforms with Python and JavaScript frameworks in Linux environments.</p>
        </>
      )
    },
    industry: {
      title: "How I Started In The Software Industry",
      description: () => {
        return (
          <>
            <p className="mb-6">I started my career in the software industry in 2019 as a Full Stack Developer at a startup. I was responsible for designing and implementing complex systems, focusing on creating solutions that were both durable and capable of scaling effectively.</p>
            <p>Since then, I've worked on a variety of projects, including developing a framework on a uWSGI server to manage the backend of multiple presentation websites and improving Pydantic.</p>
          </>
        )
      },
    },
  }
  return (
    <div id="about" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40 bg-white">
      <div className="mx-auto lg:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{content.title()}</h2>
            <div className="mt-6 text-lg leading-8 text-gray-600">{content.description()}</div>
          </div>
          <div className="bg-gray-100 rounded-3xl p-14">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">{content.industry.title}</h3>
            <div className="mt-4 text-lg leading-8 text-gray-600">{content.industry.description()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};