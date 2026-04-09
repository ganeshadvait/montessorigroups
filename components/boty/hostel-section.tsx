"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
const hostelFeatures = [
  {
    image: "/Comfortable Rooms.png",
    title: "Comfortable Rooms",
    description: "Spacious, well-ventilated dormitories with individual study desks and storage for every student.",
    color: "bg-primary/10 text-primary",
  },
  {
    image: "/Nutritious Meals.png",
    title: "Nutritious Meals",
    description: "Hygienic kitchen serving balanced vegetarian & non-vegetarian meals — breakfast, lunch, snacks & dinner.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    image: "/24_7 Security.png",
    title: "24/7 Security",
    description: "Round-the-clock CCTV surveillance, warden supervision, and gated campus for complete safety.",
    color: "bg-primary/10 text-primary",
  },
  {
    image: "/Digital Access.png",
    title: "Digital Access",
    description: "Wi-Fi enabled study halls with computers for research, online classes, and digital learning resources.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    image: "/Supervised Study Hours.png",
    title: "Supervised Study Hours",
    description: "Dedicated evening study sessions with faculty guidance to ensure consistent academic progress.",
    color: "bg-primary/10 text-primary",
  },
  {
    image: "/Home Away From Home.png",
    title: "Home Away From Home",
    description: "Trained house parents who care for every child's emotional well-being, health, and personal growth.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
]

const hostelImages = [
  {
    src: "/hostel.svg",
    alt: "Clean hostel dormitory room",
    label: "Boys & Girls Hostels",
  },
  {
    src: "/dining hall.svg",
    alt: "Hostel dining hall",
    label: "Spacious Dining Hall",
  },
  {
    src: "/recreation room.svg",
    alt: "Students studying in common room",
    label: "Study & Recreation Area",
  },
]

export function HostelSection() {
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
            Separate boys & girls hostels with modern amenities, nutritious food, and 24/7 care — so parents can rest easy.
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
              className={`group p-8 rounded-2xl bg-card boty-shadow boty-transition hover:scale-[1.02] transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
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
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          {[
            { value: "500+", label: "Residential Students" },
            { value: "24/7", label: "Warden Supervision" },
            { value: "4", label: "Meals Per Day" },
            { value: "100%", label: "Safe & Secure" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-primary/5">
              <div className="text-3xl font-bold font-serif text-black mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
