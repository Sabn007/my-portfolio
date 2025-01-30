import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      name: "Load Nepal",
      description: "A freelance project",
      url: "https://www.loadnepal.com",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

