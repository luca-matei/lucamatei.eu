import Hero from "@/app/(presentation-pages)/(home)/hero";
import Services from "@/app/(presentation-pages)/(home)/services";
import About from "@/app/(presentation-pages)/(home)/about";
import Projects from "@/app/(presentation-pages)/(home)/projects";
import Testimonials from "@/app/(presentation-pages)/(home)/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Projects />
    </>
  )
}