"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const wings = [
  {
    title: "Pre- Primary Wing",
    grade: "(Grade KG-I, KG-II, KG-III)",
    color: "#5BB5B0",
    bgColor: "#D4ECEA",
    image: "/pre primary wing.svg",
    alt: "Pre-primary students learning",
    description:
      "The Pre-Primary Wing focuses on joyful learning through play, exploration, and imagination. Our early learners engage in hands-on activities using Montessori materials and interactive tools that make learning fun and meaningful. The emphasis is on developing fine motor skills, communication, social interaction, and emotional growth.",
    description2:
      "We provide a safe, nurturing, and stimulating environment where every child discovers the joy of learning.",
  },
  {
    title: "Primary Wing",
    grade: "(Grade I to V)",
    color: "#E85A6B",
    bgColor: "#FBD5DA",
    image: "/primary wing.svg",
    alt: "Primary student studying",
    description:
      "The Primary Wing lays the foundation for academic excellence and curiosity. At this stage, formal learning begins with an emphasis on conceptual understanding rather than rote memorization. Interactive digital classrooms, activity-based learning, and integrated projects make lessons engaging and effective.",
    description2:
      "Alongside academics, students participate in co-curricular and value-based programs that encourage teamwork, confidence, and creativity.",
  },
  {
    title: "High School",
    grade: "(Grade VI to X)",
    color: "#F4A93D",
    bgColor: "#FCE7C2",
    image: "/high school.svg",
    alt: "High school students",
    description:
      "The High School curriculum is designed to prepare students for academic success and future challenges under the CBSE framework. The focus is on developing analytical, problem-solving, and leadership skills.",
    description2:
      "Students are guided to explore subjects in-depth while balancing academics with sports, arts, and life skill education. With dedicated mentorship and career guidance, learners are equipped to make informed choices for their higher education and professional aspirations.",
  },
]

export function CurriculumSection() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true)
      },
      { threshold: 0.1 }
    )
    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) headerObserver.observe(headerRef.current)
    if (gridRef.current) gridObserver.observe(gridRef.current)

    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current)
      if (gridRef.current) gridObserver.unobserve(gridRef.current)
    }
  }, [])

  return (
    <section id="academic" className="py-12 md:py-24 bg-background scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 max-w-2xl mx-auto">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}
          >
            Our Curriculum
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-4 ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.4s", animationFillMode: "forwards" } : {}}
          >
            Learning for Every Stage
          </h2>
          <p
            className={`text-lg text-muted-foreground ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.6s", animationFillMode: "forwards" } : {}}
          >
            From early discovery to academic mastery - a thoughtful curriculum that grows with your child.
          </p>
        </div>

        {/* Wings Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {wings.map((wing, index) => (
            <div
              key={wing.title}
              className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Cloud-shaped Image */}
              <div className="relative w-full max-w-[340px] mb-8 group">
                <div
                  className="relative aspect-[4/3] cloud-shape boty-transition group-hover:scale-105"
                  style={{
                    backgroundColor: wing.bgColor,
                    padding: "8px",
                  }}
                >
                  <div className="relative w-full h-full cloud-shape overflow-hidden">
                    <Image
                      src={wing.image}
                      alt={wing.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Title Banner */}
              <div
                className="px-6 py-2.5 mb-4 relative banner-shape"
                style={{ backgroundColor: wing.bgColor }}
              >
                <h3
                  className="font-serif text-2xl font-bold whitespace-nowrap"
                  style={{ color: wing.color }}
                >
                  {wing.title}
                </h3>
              </div>

              {/* Grade */}
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: wing.color }}
              >
                {wing.grade}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 px-2">
                {wing.description}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed px-2">
                {wing.description2}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cloud-shape {
          border-radius: 50% 40% 55% 45% / 55% 50% 45% 50%;
        }
        .banner-shape {
          clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
        }
      `}</style>
    </section>
  )
}
