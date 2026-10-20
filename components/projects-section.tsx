"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  status?: string
}

const projects: Project[] = [
  {
    title: "Task Manager",
    description:
      "Full-stack web application to organize projects and tasks. JWT authentication with BCrypt password hashing, protected routes, project CRUD with real-time progress tracking, and task management with due dates, completion status, and overdue indicators. Responsive UI built with Tailwind CSS.",
    image: "/task-manager.png",
    tags: ["Spring Boot 3", "React 18", "MySQL", "JWT", "Tailwind CSS", "Docker"],
    github: "https://github.com/khadija-ELBACHOURI/task-manager-fullstack",
  },
  {
    title: "Daret Digital",
    description:
      "Full-stack platform digitizing daret (tontine) management, a traditional rotating savings system widely used in Morocco. JWT-based dynamic roles: users start with no role and become an organizer when they create a daret group. Organizers define the member turn order and manage members; members view the group and make payments. Includes a Next.js admin dashboard and a multi-stage Docker build.",
    image: "/daret-digital.png",
    tags: ["Spring Boot", "PostgreSQL", "JWT", "Next.js", "Docker"],
    status: "In progress",
    github: "https://github.com/khadija-ELBACHOURI/daret_digital_app",
  },
]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#d946ef] to-[#a855f7] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d946ef] to-[#a855f7] mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-1000">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group bg-transparent backdrop-blur-sm border-border hover:border-accent transition-all duration-500 overflow-hidden transform-3d animate-float-3d animate-neon-glow hover:scale-105 hover:rotate-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.status && (
                    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-background/80 text-accent border border-accent/40 backdrop-blur-sm">
                      {project.status}
                    </span>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}