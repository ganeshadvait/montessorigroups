//File :- components/boty/feature-section.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import {
  BookOpen,
  Lightbulb,
  Shield,
  Heart,
  Monitor,
  Trophy,
  FlaskConical,
  Laptop,
  Library,
  Dumbbell,
  Waves,
  Music,
  Bus,
  Stethoscope,
  ShieldCheck,
  TreePine,
  GraduationCap,
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "CBSE Curriculum",
    description: "Nationally recognized curriculum ensuring academic rigor and comprehensive learning outcomes.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    title: "Montessori Methodology",
    description: "Child-centered approach that fosters curiosity, independence, and a lifelong love for learning.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "State-of-the-art digital learning tools and modern facilities across all 15 campuses.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Equal focus on academics, sports, arts, and character building for well-rounded growth.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Shield,
    title: "Safe & Nurturing",
    description: "CCTV-monitored campuses with trained staff ensuring every child feels secure and valued.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Consistent board exam excellence and competitive exam success across all branches.",
    color: "bg-secondary/20 text-secondary-foreground",
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

export function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const INITIAL_COUNT = 6
  const visibleFeatures = showAll ? features : features.slice(0, INITIAL_COUNT)

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

        {/* Feature — Mobile: horizontal scroll, Desktop: grid */}
        <div ref={gridRef}>
          {/* Mobile horizontal scroll */}
          <div className="sm:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-5 pb-4 w-max">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group p-8 rounded-2xl bg-background boty-shadow boty-transition w-[280px] flex-shrink-0 transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.color} mb-5 boty-transition`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-8 rounded-2xl bg-background boty-shadow boty-transition hover:scale-[1.02] transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index % INITIAL_COUNT) * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.color} mb-5 boty-transition`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* View More / View Less button — desktop only */}
          {features.length > INITIAL_COUNT && (
            <div className="hidden sm:flex justify-center mt-10">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium boty-transition hover:scale-105 hover:shadow-lg"
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          )}
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
