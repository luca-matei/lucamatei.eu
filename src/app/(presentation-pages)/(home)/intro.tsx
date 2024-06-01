export default function Intro() {
  const content = {
    title: () => {
      return (<>A Few Words<br /><span className={"text-indigo-600"}>About Me</span></>);
    },
    description: () => {
      return (
        <>
          <p className="mb-6">I'm driven by the desire to grow and learn, taking each day as a chance to pick up something new. It's not just programming that interests me; I have a passion for social science and trains as well.</p>
          <p>My goal is to keep improving so I can inspire others to see learning about what they love as an essential part of life. Ongoing curiosity and experimenting have led to amazing opportunities to grow as a person and become a better software developer.</p>
        </>
      )
    },
    industry: {
      title: "Starting Out in My Software Career",
      description: () => {
        return (
          <>
            <p className="mb-6">Breaking into the industry was a long journey. It took years of trying out different things, building various software - websites, games, automation scripts - and facing intense research, burnout, and personal challenges. The three years before applying for my first job were the toughest. Once I felt ready, I started applying and, within three weeks, landed my first job at a European company with decent pay.</p>
            <p className="mb-6">I quickly gained credibility and trust through the principles I developed over 12 years of programming. Within a month, I received a 10% raise. In two months, I became the main developer. Three months later, another European company approached me, and I doubled my salary. In nine months, I learned new tools and frameworks, tripling my initial salary.</p>
            <p>Now, I consult for small entrepreneurs and those starting their programming careers, creating amazing products with LLMs. I aspire to be a software architect and ultimately a leader, already holding a Scrum Master certification. My success is due to dedication, resilience, and a love for learning.</p>
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