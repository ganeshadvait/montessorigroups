//File :- components/boty/amenities-section.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import {
  FlaskConical,
  Monitor,
  Library,
  Dumbbell,
  Bus,
  Stethoscope,
  Music,
  Laptop,
  TreePine,
  ShieldCheck,
  Waves,
  GraduationCap,
} from "lucide-react"

const amenities = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "Interactive digital boards and projectors in every classroom for engaging, modern teaching.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    description: "Well-equipped Physics, Chemistry & Biology labs for hands-on practical learning.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Laptop,
    title: "Computer Lab",
    description: "Modern computer labs with high-speed internet for coding, research, and digital literacy.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Library,
    title: "Library & Reading Room",
    description: "Extensive collection of books, journals, and digital resources to foster a reading culture.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Dumbbell,
    title: "Sports Facilities",
    description: "Cricket, volleyball, basketball courts, and indoor games — promoting fitness and team spirit.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Safe, supervised swimming pool for physical fitness and recreational activities.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Music,
    title: "Music & Dance Room",
    description: "Dedicated spaces for vocal, instrumental music, and classical/western dance training.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Bus,
    title: "Transport Facility",
    description: "GPS-tracked school buses covering all major routes ensuring safe and timely commute.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Stethoscope,
    title: "Medical Room",
    description: "On-campus first aid and regular health check-ups with a trained nurse on duty.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "CCTV Surveillance",
    description: "Complete campus coverage with CCTV cameras monitored in real-time for child safety.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: TreePine,
    title: "Green Campus",
    description: "Eco-friendly, spacious campus with gardens, play areas, and open-air learning spaces.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    title: "Activity Halls",
    description: "Multi-purpose halls for assemblies, cultural events, seminars, and parent-teacher meetings.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
]

export function AmenitiesSection() {
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
    <section id="amenities" className="py-24 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 max-w-2xl mx-auto">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}
          >
            Campus Amenities
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-4 ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.4s", animationFillMode: "forwards" } : {}}
          >
            World-Class Facilities for Every Student
          </h2>
          <p
            className={`text-lg text-muted-foreground ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.6s", animationFillMode: "forwards" } : {}}
          >
            From smart classrooms to sports grounds — everything your child needs for holistic development under one roof.
          </p>
        </div>

        {/* Amenities — Mobile: horizontal scroll, Desktop: grid */}
        <div ref={gridRef}>
          {/* Mobile horizontal scroll */}
          <div className="sm:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4 w-max">
              {amenities.map((amenity, index) => (
                <div
                  key={amenity.title}
                  className={`group relative p-6 rounded-2xl bg-background boty-shadow boty-transition w-[260px] flex-shrink-0 transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${amenity.color} mb-4 group-hover:scale-110 boty-transition`}>
                    <amenity.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-1.5">{amenity.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.title}
                className={`group relative p-6 rounded-2xl bg-background boty-shadow boty-transition hover:scale-[1.02] transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${amenity.color} mb-4 group-hover:scale-110 boty-transition`}>
                  <amenity.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-1.5">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
