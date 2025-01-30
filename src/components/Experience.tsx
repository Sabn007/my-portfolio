"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      company: "Javra Software",
      position: "Frontend Developer",
      period: "January 2023 to Present",
      description:
        "Developed and implemented complex user interfaces and web applications using advanced frameworks like React.js, collaborated with cross-functional teams to ensure seamless integration and delivered high-quality, scalable solutions.",
    },
    {
      company: "Amnil Technology",
      position: "Associate Software Engineer",
      period: "July 2021 to December 2022",
      description:
        "Developed UIs and apps using React.js and integrated APIs, while also being responsible for testing and deploying the website. Collaborated closely with web designers, back-end engineers, QA engineers, and UI/UX designers to build, design, test, and enhance the web product.",
    },
    {
      company: "Charo Digital",
      position: "Frontend Developer Intern",
      period: "April 2021 to June 2021",
      description:
        "Converting Figma design into a website involves translating the visual elements and layout from a Figma design file into HTML5, CSS, and JavaScript code to create an interactive and functional website.",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-6">
      <h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{exp.position}</CardTitle>
                <CardDescription>{exp.company}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.period}
                </p>
                <Button
                  variant="outline"
                  onClick={() => toggleExpand(index)}
                  className="w-full mt-auto"
                >
                  {expandedIndex === index ? (
                    <>
                      Hide Details
                      <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Show Details
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
              <AnimatePresence>
                {expandedIndex === index && (
                  <div>
                    <CardContent>
                      <p className="text-sm">{exp.description}</p>
                    </CardContent>
                  </div>
                )}
              </AnimatePresence>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
