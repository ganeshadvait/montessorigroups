"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Phone, Calendar, ArrowRight } from "lucide-react"

export function CTABanner() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (bannerRef.current) observer.observe(bannerRef.current)
    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current)
    }
  }, [])

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={bannerRef}
          className={`rounded-3xl p-12 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[420px] transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=90"
            alt="Students graduating"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/50" />

          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/90 px-4 py-2 mb-6 text-sm font-semibold text-secondary-foreground">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Admissions Closing Soon
            </span>

            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Don't Wait — Give Your Child the Best Start
            </h3>

            <p className="text-white/80 text-lg mb-8">
              Seats are filling fast for 2026–2027. Enquire today and schedule a free campus tour at your nearest branch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:brightness-110 boty-transition shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 boty-transition"
              >
                <Phone className="w-5 h-5" />
                Call: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
