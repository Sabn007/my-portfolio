import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Sabin Maharjan
          </h1>
          <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-4">
            Frontend Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Passionate about creating responsive and user-friendly web
            applications. Experienced in React, TypeScript, and modern web
            technologies.
          </p>
          <div>
            <Button asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/banner.jpg"
            alt="Sabin Maharjan"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
