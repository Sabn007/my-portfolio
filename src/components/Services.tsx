import { Code, Palette, Globe, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: <Code className="h-8 w-8 mb-4" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.",
  },
  {
    icon: <Palette className="h-8 w-8 mb-4" />,
    title: "UI/UX Implementation",
    description:
      "Translating design mockups into pixel-perfect, accessible, and performant web applications.",
  },
  {
    icon: <Globe className="h-8 w-8 mb-4" />,
    title: "Web Application Development",
    description:
      "Creating full-stack web applications with seamless integration between frontend and backend services.",
  },
  {
    icon: <Zap className="h-8 w-8 mb-4" />,
    title: "Performance Optimization",
    description:
      "Improving website speed and efficiency through code optimization and modern web technologies.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
