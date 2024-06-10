export default function About() {
  const content = {
    title: () => {
      return (<>A Few Words<br /><span className={"text-indigo-600"}>About Me</span></>);
    },
    description: () => {
      return (
          <>
            <p className="mb-6">I've got a chance at learning to code when I was 7 and I've loved it so much that I
              haven't stopped doing it since then. I've passed all my computer science classes with 10/10. In Sophomore year, I was trusted
              by my teacher to lead a HTML and CSS class. In Junior Year I led a Web Development
              after-hours course where 25+ people across the school have joined for a semester.</p>
            <p className="mb-6">2 years after graduating high school, I consult for small entrepreneurs and those starting their programming careers and I'm building amazing
              products with LLMs. I aspire to be a Solutions Architect and ultimately a leader, already holding a Scrum
              Master certification. My success is due to dedication, resilience, and a love for learning.</p>
            <p>My goal is to keep improving so I can inspire others to see learning about what they love as an essential
              part of life. Ongoing curiosity and experimenting have led to amazing opportunities to grow as a person
              and become a better software developer.</p>
          </>
      )
    },
    industry: {
      title: "Starting Out in My Software Career",
      description: () => {
        return (
            <>
              <p className="mb-6">Breaking into the industry was a long journey. It took years of trying out different
                things, building various software - websites, games, complex automation scripts - and facing intense research, frequent burnouts, and consuming personal challenges. The three years before applying for my first job were the toughest, but once I felt ready, I started applying and, within three weeks, landed my first job at a European company with decent pay.</p>
              <p>I quickly gained credibility and trust through the principles I developed over years of programming. Within a month, I received a 10% raise. In two months, I became the main developer. Three months later, another European company approached me, and I doubled my salary. In nine months, I gained lots of knowledge, and I tripled my initial salary. Now I'm being assigned on business-critical tasks and to coordinate the development of core product parts.</p>
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