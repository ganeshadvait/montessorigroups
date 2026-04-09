"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    image: "/10,000+ Students.png",
    value: "10,000+",
    label: "Students & Alumni",
  },
  {
    image: "/33+ Years.png",
    value: "30+",
    label: "Experienced Faculty",
  },
  {
    image: "/LAND.svg",
    value: "9",
    label: "Acres of Campus",
  },
  {
    image: "/CLASS.svg",
    value: "KG - XII",
    label: "Classes Offered",
  },
]

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section className="py-16 bg-background relative -mt-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative bg-card p-6 md:p-8 text-center rounded-2xl boty-shadow transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={stat.image} alt={stat.label} className="mb-3 mx-auto w-8 h-8 md:w-10 md:h-10 object-contain" />
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-1 font-bold">{stat.value}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
