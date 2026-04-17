"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
const hostelFeatures = [
  {
    image: "/Comfortable Rooms.png",
    title: "Comfortable Rooms",
    description: "Spacious, well-ventilated rooms accommodating 4 beds each, with two attached washrooms, individual study desks and storage for every student.",
    color: "bg-primary/10 text-primary",
    hoverBorder: "#FCBA28",
  },
  {
    image: "/Nutritious Meals.png",
    title: "Nutritious Meals",
    description: "Hygienic kitchen serving a balanced and nutritious diet with vegetarian & non-vegetarian options - breakfast, lunch, snacks & dinner.",
    color: "bg-secondary/20 text-secondary-foreground",
    hoverBorder: "#20A1A6",
  },
  {
    image: "/24_7 Security.png",
    title: "24/7 Security",
    description: "Round-the-clock CCTV surveillance, warden supervision, and gated campus for complete safety.",
    color: "bg-primary/10 text-primary",
    hoverBorder: "#DD3E74",
  },
  {
    image: "/Digital Access.png",
    title: "Digital Access",
    description: "Smart, Wi-Fi enabled digital classes delivering interactive lessons and modern learning experiences for every student.",
    color: "bg-secondary/20 text-secondary-foreground",
    hoverBorder: "#10B981",
  },
  {
    image: "/Supervised Study Hours.png",
    title: "Supervised Study Hours",
    description: "Dedicated study sessions conducted under supervised teachers, ensuring focused learning and consistent academic progress.",
    color: "bg-primary/10 text-primary",
    hoverBorder: "#FCBA28",
  },
  {
    image: "/Home Away From Home.png",
    title: "Home Away From Home",
    description: "Trained house parents who care for every child's emotional well-being, health, and personal growth.",
    color: "bg-secondary/20 text-secondary-foreground",
    hoverBorder: "#20A1A6",
  },
]

const hostelImages = [
  {
    src: "/hostel.svg",
    alt: "Clean hostel dormitory room",
    label: "Seperate Boys & Girls Hostels",
  },
  {
    src: "/dining hall.svg",
    alt: "Hostel dining hall",
    label: "Spacious Dining Hall",
  },
  {
    src: "/recreation room.png",
    alt: "Students studying in common room",
    label: "Study & Recreation Area",
  },
]

function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 2800,
  start,
}: {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  start: boolean
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let frameId: number
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }
    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [start, target, duration])

  return (
    <>
      {prefix}
      {value}
      {suffix}
    </>
  )
}

export function HostelSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

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

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true)
      },
      { threshold: 0.3 }
    )

    if (gridRef.current) observer.observe(gridRef.current)
    if (headerRef.current) headerObserver.observe(headerRef.current)
    if (statsRef.current) statsObserver.observe(statsRef.current)

    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current)
      if (headerRef.current) headerObserver.unobserve(headerRef.current)
      if (statsRef.current) statsObserver.unobserve(statsRef.current)
    }
  }, [])

  return (
    <section id="hostel" className="py-12 md:py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 max-w-2xl mx-auto">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}
          >
            Residential Facility
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-4 ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.4s", animationFillMode: "forwards" } : {}}
          >
            A Safe & Nurturing Hostel Life
          </h2>
          <p
            className={`text-lg text-muted-foreground ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.6s", animationFillMode: "forwards" } : {}}
          >
            Separate boys & girls hostels with modern amenities, nutritious food, and 24/7 care - so parents can rest easy.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {hostelImages.map((image, index) => (
            <div
              key={image.label}
              className={`relative h-64 md:h-72 rounded-2xl overflow-hidden group boty-shadow transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 boty-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white font-serif text-lg">{image.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostelFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-2xl bg-card boty-shadow hover:scale-[1.02] border-2 border-transparent transition-[opacity,transform] duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = feature.hoverBorder
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent"
              }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.color} mb-5 boty-transition`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={feature.image} alt={feature.title} className="w-7 h-7 object-cover" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div
          ref={statsRef}
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          {[
            { target: 500, suffix: "+", label: "Residential Students" },
            { target: 24, suffix: "/7", label: "Warden Supervision" },
            { target: 4, label: "Meals Per Day" },
            { target: 100, suffix: "%", label: "Safe & Secure" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-primary/5">
              <div className="text-3xl font-bold font-serif text-black mb-1">
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  start={statsVisible}
                />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
