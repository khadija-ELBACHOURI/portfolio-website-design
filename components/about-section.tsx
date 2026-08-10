"use client"

import { Card } from "@/components/ui/card"
import { Code2, Database, Brain, Layers, Server, Smartphone, Cloud, Globe, Box } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "Java", icon: Code2, color: "text-[#d946ef]" },
  { name: "Python", icon: Code2, color: "text-[#a855f7]" },
  { name: "JavaScript", icon: Code2, color: "text-[#d946ef]" },
  { name: "React", icon: Layers, color: "text-[#a855f7]" },
  { name: "Spring Boot", icon: Server, color: "text-[#d946ef]" },
  { name: "Node.js", icon: Server, color: "text-[#a855f7]" },
  { name: "AI/ML", icon: Brain, color: "text-[#d946ef]" },
  { name: "AWS", icon: Cloud, color: "text-[#a855f7]" },
  { name: "Docker", icon: Box, color: "text-[#d946ef]" },
  { name: "PostgreSQL", icon: Database, color: "text-[#a855f7]" },
  { name: "React Native", icon: Smartphone, color: "text-[#d946ef]" },
  { name: "REST API", icon: Globe, color: "text-[#d946ef]" },
]

export default function AboutSection() {
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
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#d946ef] to-[#a855f7] bg-clip-text text-transparent animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d946ef] to-[#a855f7] mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a passionate software engineering student at the{" "}
                <span className="text-accent font-semibold">National School of Applied Sciences of Fes</span>,
                specializing in full-stack development and AI-powered solutions.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                With hands-on experience in building scalable web applications, intelligent automation systems, and
                machine learning models, I thrive on solving complex problems with elegant, efficient code. I'm
                constantly exploring cutting-edge technologies to create impactful software solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className={`p-6 bg-transparent backdrop-blur-sm border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 group ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <skill.icon
                      className={`h-8 w-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-sm font-semibold text-foreground text-center">{skill.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
