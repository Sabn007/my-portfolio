import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      institution: "Himalaya College of Engineering",
      degree: "Bachelor in Computer Engineering",
      period: "2016-2021",
    },
    {
      institution: "National School of Science - NIST",
      degree: "Science (Physical group)",
      period: "2014-2016",
    },
  ]

  return (
    <section id="education" className="py-24 px-6 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.institution}</CardTitle>
              <CardDescription>{edu.degree}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

