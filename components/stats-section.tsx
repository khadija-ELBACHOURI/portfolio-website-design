"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Briefcase, Award, Users } from "lucide-react"

const stats = [
  { label: "Projects Completed", value: 15, icon: Code, suffix: "+" },
  { label: "Years Coding", value: 3, icon: Briefcase, suffix: "+" },
  { label: "Technologies", value: 12, icon: Award, suffix: "+" },
  { label: "Collaborations", value: 8, icon: Users, suffix: "+" },
]

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [end, duration, hasStarted])

  useEffect(() => {
    setHasStarted(true)
  }, [])

  return <span>{count}</span>
}

export default function StatsSection() {
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
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-accent/10 border-2 border-accent/20 group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#d946ef] to-[#a855f7] bg-clip-text text-transparent mb-2 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                  {isVisible && <Counter end={stat.value} />}
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
