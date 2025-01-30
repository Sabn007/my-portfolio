import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
  console.log(motion);
  return (
    <section id="about" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3">
          <Image
            src="/pp.jpeg"
            alt="Sabin Maharjan"
            width={500}
            height={400}
            className="rounded-full mx-auto"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-4">
            Hello! I'm Sabin Maharjan, a passionate Frontend Developer with a
            strong background in Computer Engineering. I specialize in creating
            efficient, user-friendly web applications using modern technologies
            like React, TypeScript, and Next.js.
          </p>
          <p className="text-lg mb-4">
            With experience ranging from internships to professional roles, I've
            honed my skills in translating design concepts into functional,
            responsive websites. I'm always eager to learn and adapt to new
            technologies, ensuring that I stay at the forefront of web
            development trends.
          </p>
          <p className="text-lg mb-6">
            When I'm not coding, you can find me exploring new tech blogs,
            contributing to open-source projects, or enjoying a good cup of
            coffee while brainstorming my next big idea. And when I need a break
            from the screen, you'll probably catch me on the field, playing
            football—one of my favorite ways to unwind.
          </p>
          <Button asChild>
            <a href="/resume.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
