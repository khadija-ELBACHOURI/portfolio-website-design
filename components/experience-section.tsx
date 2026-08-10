"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    type: "work",
    title: "AI Agent Internship – Intelligent Automation",
    organization: "IZEMX",
    period: "July 2025 – Sept 2025",
    location: "Remote",
    description:
      "Designed and deployed AI-powered agents integrating 10+ workflows across multi-channel platforms (web, WhatsApp, Discord), improving automation efficiency by 45%. Implemented real-time monitoring dashboard with integration controls and adaptive parameter tuning, reducing debugging time by 30%.",
    icon: Briefcase,
    highlights: [
      "Integrated conversational AI services (Dialogflow, OpenAI API, Rasa)",
      "Developed and secured REST APIs for third-party integrations",
    ],
  },
  {
    type: "work",
    title: "Employee Management Web Application",
    organization: "WEBMARKO",
    period: "July 2024 – Aug 2024",
    location: "Fes, Morocco",
    description:
      "Built full-stack employee management system with Laravel and role-based access, automating HR workflows. Developed responsive UI with Splade, Blade, Bootstrap, and real-time dashboards. Optimized MySQL database (6+ tables), improving performance by 35%.",
    icon: Briefcase,
    highlights: ["Secured authentication and developed REST APIs", "Automated HR workflows with role-based access"],
  },
  {
    type: "education",
    title: "Computer Science Engineering",
    organization: "National School of Applied Sciences of Fes",
    period: "Sep 2021 – June 2026",
    location: "Fes, Morocco",
    description:
      "Pursuing a degree in Computer Science Engineering with focus on full-stack development, algorithms, artificial intelligence, and machine learning.",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Baccalaureate in Mathematical Sciences",
    organization: "Bensouda High School",
    period: "Sep 2018 – June 2021",
    location: "Fes, Morocco",
    description:
      "Graduated with honors in Mathematical Sciences, building a strong foundation in mathematics and logic.",
    icon: GraduationCap,
  },
]

export default function ExperienceSection() {
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
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#d946ef] to-[#a855f7] bg-clip-text text-transparent animate-fade-in">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d946ef] to-[#a855f7] mx-auto mb-12 rounded-full" />

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d946ef] via-[#a855f7] to-[#d946ef]" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-accent border-4 border-background z-10 animate-pulse" />

                  <div
                    className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"} ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <Card className="p-6 bg-transparent backdrop-blur-sm border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                          <exp.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                          <p className="text-accent font-semibold mb-1">{exp.organization}</p>
                          <p className="text-sm text-muted-foreground mb-3">
                            {exp.period} • {exp.location}
                          </p>
                          <p className="text-foreground leading-relaxed mb-3">{exp.description}</p>
                          {exp.highlights && (
                            <ul className="space-y-1">
                              {exp.highlights.map((highlight, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-accent mt-1">•</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
