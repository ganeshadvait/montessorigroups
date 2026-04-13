"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

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
    <section className="py-12 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={bannerRef}
          className={`rounded-3xl p-12 md:p-16 flex flex-col justify-center relative overflow-hidden min-h-[420px] transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Background Image */}
          <Image
            src="/footer image.svg"
            alt="Students graduating"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/50" />

          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/90 px-4 py-2 mb-6 text-sm font-semibold text-secondary-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Admissions are Open for 2026–2027
            </span>

            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Don't Wait - Give Your Child the Best Start
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
                Get Admission Details
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:7700051010"
                className="md:hidden inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 boty-transition"
              >
                <img src="/Call white.svg" alt="Call" className="w-6 h-6" />
                Call: +91 77000 51010
              </a>
              <a
                href="https://wa.me/917700051010?text=Hi%2C%20I%27m%20interested%20in%20admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 boty-transition"
              >
                <img src="/Whatsapp white.svg" alt="WhatsApp" className="w-6 h-6" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
