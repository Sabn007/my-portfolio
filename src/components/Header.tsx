"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 px-4 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              Sabin Maharjan
            </span>
          </a>
          <nav className="flex items-center space-x-6 ml-96 text-sm font-medium">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
            >
              About
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#experience"
              onClick={(e) => handleNavClick(e, "experience")}
            >
              Experience
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#education"
              onClick={(e) => handleNavClick(e, "education")}
            >
              Education
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
            >
              Skills
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
            >
              Services
            </a>
            {/* <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
            >
              Projects
            </a> */}
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
