"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

const branches = [
  { name: "Yellandu", phone: "+919876543210" },
  { name: "Bhupalpally", phone: "+919876543211" },
  { name: "Bhongir", phone: "+919876543212" },
  { name: "Bibinagar", phone: "+919876543213" },
  { name: "Huzurabad", phone: "+919876543214" },
  { name: "Manuguru", phone: "+919876543215" },
  { name: "Valigonda", phone: "+919876543216" },
  { name: "Thirumalagiri", phone: "+919876543217" },
  { name: "Zaheerabad", phone: "+919876543218" },
  { name: "Tekulapally", phone: "+919876543219" },
  { name: "Karepally", phone: "+919876543220" },
  { name: "Kataram", phone: "+919876543221" },
  { name: "Husnabad", phone: "+919876543222" },
  { name: "Yellapur", phone: "+919876543223" },
  { name: "Kodada", phone: "+919876543224" },
]

export function DoctorsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    if (headerRef.current) headerObserver.observe(headerRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (headerRef.current) headerObserver.unobserve(headerRef.current)
    }
  }, [])

  return (
    <section id="branches" className="py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 max-w-2xl mx-auto">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={headerVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}
          >
            Our Branches
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-4 ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={headerVisible ? { animationDelay: "0.4s", animationFillMode: "forwards" } : {}}
          >
            15 Campuses Across Telangana
          </h2>
          <p
            className={`text-lg text-muted-foreground ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={headerVisible ? { animationDelay: "0.6s", animationFillMode: "forwards" } : {}}
          >
            Quality education close to your home. Find a branch near you.
          </p>
        </div>

        {/* Branch Grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {branches.map((branch, index) => (
            <div
              key={branch.name}
              className={`group relative bg-card rounded-2xl p-5 boty-shadow boty-transition hover:scale-[1.03] hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground flex-shrink-0 mt-0.5" />
                <h3 className="font-serif text-base font-medium">{branch.name}</h3>
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:${branch.phone}`}
                  className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center boty-transition"
                  aria-label={`Call ${branch.name}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href={`mailto:info@montessori${branch.name.toLowerCase()}.edu`}
                  className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center boty-transition"
                  aria-label={`Email ${branch.name}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Mail className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#enquiry"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium tracking-wide boty-transition hover:bg-primary/90"
          >
            Enquire at Your Nearest Branch
          </a>
        </div>
      </div>
    </section>
  )
}
