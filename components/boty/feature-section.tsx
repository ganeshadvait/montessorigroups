"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, Lightbulb, Shield, Heart, Monitor, Trophy } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "CBSE Curriculum",
    description: "Nationally recognized curriculum ensuring academic rigor and comprehensive learning outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Montessori Methodology",
    description: "Child-centered approach that fosters curiosity, independence, and a lifelong love for learning.",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "State-of-the-art digital learning tools and modern facilities across all 15 campuses.",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Equal focus on academics, sports, arts, and character building for well-rounded growth.",
  },
  {
    icon: Shield,
    title: "Safe & Nurturing",
    description: "CCTV-monitored campuses with trained staff ensuring every child feels secure and valued.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Consistent board exam excellence and competitive exam success across all branches.",
  },
]

export function FeatureSection() {
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
    <section id="why-us" className="py-24 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 max-w-2xl mx-auto">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}
          >
            Why Choose Us
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-4 ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.4s", animationFillMode: "forwards" } : {}}
          >
            Education That Shapes Futures
          </h2>
          <p
            className={`text-lg text-muted-foreground ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.6s", animationFillMode: "forwards" } : {}}
          >
            33 years of trust. A proven system that nurtures every child into a confident, capable individual.
          </p>
        </div>

        {/* Feature Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-2xl bg-background boty-shadow boty-transition hover:scale-[1.02] transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/20 boty-transition">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
