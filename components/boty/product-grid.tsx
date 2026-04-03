"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Star, BookOpen } from "lucide-react"

const institutions = [
  {
    id: "prime",
    icon: Star,
    name: "Montessori Prime Schools",
    tagline: "Premium Learning Experience",
    description:
      "Premium educational institutions offering world-class learning environments with state-of-the-art facilities and innovative teaching methodologies.",
    highlights: ["Smart Classrooms", "AC Facilities", "International Exposure", "Advanced Labs"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    color: "bg-primary",
  },
  {
    id: "group",
    icon: BookOpen,
    name: "Montessori Group Schools",
    tagline: "Excellence for Every Community",
    description:
      "Comprehensive educational solutions focusing on holistic development, academic excellence, and character building for future leaders.",
    highlights: ["Holistic Development", "Value Education", "Sports & Arts", "Community Connect"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    color: "bg-secondary",
  },
]

export function ProductGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true)
      },
      { threshold: 0.1 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    if (headerRef.current) headerObserver.observe(headerRef.current)
    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current)
      if (headerRef.current) headerObserver.unobserve(headerRef.current)
    }
  }, [])

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 max-w-2xl mx-auto">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}
          >
            Our Institutions
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-4 ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.4s", animationFillMode: "forwards" } : {}}
          >
            Two Brands, One Mission
          </h2>
          <p
            className={`text-lg text-muted-foreground ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.6s", animationFillMode: "forwards" } : {}}
          >
            Excellence in education across two renowned brands serving communities across Telangana
          </p>
        </div>

        {/* Institution Cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
          {institutions.map((inst, index) => (
            <div
              key={inst.id}
              className={`group rounded-3xl overflow-hidden boty-shadow boty-transition hover:scale-[1.01] transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={inst.image}
                  alt={inst.name}
                  fill
                  className="object-cover boty-transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className={`inline-flex items-center gap-2 ${inst.color} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                    <inst.icon className="w-4 h-4" />
                    {inst.tagline}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-background">
                <h3 className="font-serif text-2xl text-foreground mb-3">{inst.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{inst.description}</p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {inst.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>

                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 boty-transition"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
