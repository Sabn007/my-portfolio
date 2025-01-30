import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills = [
    "React.js",
    "TypeScript",
    "Redux",
    "Context API",
    "React Router",
    "RESTful APIs",
    "AngularJs",
    "NextJs",
    "Bootstrap",
    "Tailwind CSS",
    "NodeJs (Express)",
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index}>
            <Badge variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
}
