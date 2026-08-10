"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Job Finding Platform",
    description:
      "Full-stack recruitment platform with JWT authentication and role-based access. Implemented ML-powered recommendation engine improving job-candidate matching accuracy by 35%. Built with Spring Boot backend and React/React Native frontend.",
    image: "/job-platform.jpg",
    tags: ["Spring Boot", "React", "React Native", "MySQL", "Python", "ML"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Learning Management System",
    description:
      "Comprehensive training center management system with course creation, user enrollment, and admin dashboards. Features secure authentication with ASP.NET Core Identity and multiple user roles. Built with Entity Framework Core for robust database operations.",
    image: "/elearning-system.jpg",
    tags: ["ASP.NET Core", "Entity Framework", "Bootstrap", "SQL Server"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI-Powered Chatbot Platform",
    description:
      "Intelligent conversational AI platform integrating Dialogflow, OpenAI API, and Rasa. Supports multi-channel deployment across web, WhatsApp, and Discord with real-time monitoring and adaptive parameter tuning.",
    image: "/ai-chatbot-interface.png",
    tags: ["Python", "OpenAI API", "Dialogflow", "Rasa", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Employee Management System",
    description:
      "Full-stack HR automation platform with role-based access control. Features responsive dashboards, real-time updates, and optimized MySQL database. Built with Laravel backend and modern frontend using Splade and Bootstrap.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API"],
    github: "#",
    demo: "#",
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

          <div className="grid md:grid-cols-2 gap-8 perspective-1000">
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

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
