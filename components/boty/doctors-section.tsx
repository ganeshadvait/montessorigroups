//File: components/boty/doctors-section.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Navigation, Mail, Clock } from "lucide-react"
import Image from "next/image"

const branch = {
  name: "Yellapur",
  address:
    "Bavupet, X Road, Yellapur, Telangana 506371",
  phone: "7700051010",
  email: "info@montessorijnprime.com",
  hours: "Mon – Sat : 8:30 AM – 4:30 PM",
  // Random Yellandu coordinates for embed
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.5927787991886!2d79.4911602!3d18.090397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334920b900d44b%3A0x7772fea1f8980e51!2sMontessori%20Prime%20School!5e0!3m2!1sen!2sin!4v1775727153886!5m2!1sen!2sin",
  directionsUrl:
    "https://maps.app.goo.gl/LKDPGMnGmtyx8Tsn7",
}

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
    <section id="branches" className="py-12 md:py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 max-w-2xl mx-auto">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={headerVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}
          >
            Visit Our Campus
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-4 ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={headerVisible ? { animationDelay: "0.4s", animationFillMode: "forwards" } : {}}
          >
            Find Us in {branch.name}
          </h2>
          <p
            className={`text-lg text-muted-foreground ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={headerVisible ? { animationDelay: "0.6s", animationFillMode: "forwards" } : {}}
          >
            We&apos;d love to welcome you to our campus. Drop in for a tour or get in touch.
          </p>
        </div>

        {/* Location Card */}
        <div
          ref={sectionRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-card boty-shadow transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left - Google Map */}
          <div className="relative h-[350px] lg:h-[500px] w-full">
            <iframe
              src={branch.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${branch.name} location map`}
            />
          </div>

          {/* Right - Address & CTAs */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
                Our Branch
              </span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Montessori Prime School, {branch.name}
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Address
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    {branch.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Office Hours
                  </p>
                  <p className="text-base text-foreground">{branch.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${branch.email}`}
                    className="text-base text-foreground hover:text-primary boty-transition"
                  >
                    {branch.email}
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={branch.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full text-sm font-medium tracking-wide boty-transition hover:bg-primary/90 flex-1"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={`tel:${branch.phone}`}
                className="md:hidden inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-4 rounded-full text-sm font-medium tracking-wide boty-transition hover:brightness-110 flex-1"
              >
                <Image src="/Call white.svg" alt="Call" width={24} height={24} className="w-6 h-6" />
                Call Now
              </a>
              <a
                href={`https://wa.me/91${branch.phone}?text=Hi%2C%20I%27m%20interested%20in%20admissions`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center gap-2 bg-green-600 text-secondary-foreground px-6 py-4 rounded-full text-sm font-medium tracking-wide boty-transition hover:brightness-110 flex-1"
              >
                <Image src="/Whatsapp white.svg" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
