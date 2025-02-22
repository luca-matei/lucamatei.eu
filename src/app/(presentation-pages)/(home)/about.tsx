export default function About() {
  const content = {
    title: () => {
      return (<>A Few Words<br /><span className={"text-indigo-600"}>About Me</span></>);
    },
    description: () => {
      return (
        <>
          <p className="mb-6">I started learning to code when I was 7 years old and I’ve been hooked ever since. I aced all my computer science classes. In my sophomore year of high school, my teacher assigned me to lead a class on HTML and CSS. The following year, I ran an after-school web development course that attracted roughly 30 students.</p>
          <p className="mb-6">Two years after finishing high school, I began consulting for small business owners and those just starting out in programming. I’m also working on some cool projects with large language models. I’m aiming to become a Solutions Architect and eventually take on more leadership roles. I’ve earned my Scrum Master certification, and my commitment, perseverance, and passion for learning have really driven my success.</p>
          <p>My main goal is to keep getting better so I can encourage others to see learning about their passions as a
            vital part of life. Staying curious and willing to experiment has opened up incredible opportunities for
            personal and professional growth as a software engineer.</p>
        </>
      )
    },
    industry: {
      title: "Kicking Off My Career in Software Development\n",
      description: () => {
        return (
            <>
              <p className="mb-6">Breaking into the tech industry was tough. It took years of experimenting with different types of software—from websites to games and complex automation scripts—while dealing with heavy research, regular burnouts, and a lot of personal challenges. The three years leading up to my first job application were especially hard, but once I felt ready, I started applying. In just three weeks, I landed my first job at a European company with good pay.</p>
              <p>I quickly built a reputation for reliability and expertise, thanks to the skills I learned from years of coding. Within a month, I got a 10% raise. By the end of two months, I was the lead developer. Three months into the job, another European company offered me a position that doubled my salary. Within nine months, my salary had tripled from where I started. Now, I&apos;m tasked with business-critical projects and leading the development of key product features.</p>
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