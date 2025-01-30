import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      {/* <BackgroundAnimation /> */}
      <Hero />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Services />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
}
