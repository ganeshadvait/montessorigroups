"use client"

import { motion } from "framer-motion"
import { Calendar, CheckCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-8 md:pt-16">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src="/montessori school video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-secondary/20 floating hidden lg:block" />
      <div className="absolute bottom-32 right-40 w-20 h-20 rounded-full bg-secondary/15 floating-delayed hidden lg:block" />
      <div className="absolute top-40 left-[60%] w-16 h-16 rounded-full bg-primary/20 floating-slow hidden lg:block" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20 w-full flex items-end md:items-center min-h-[inherit]">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FCBA28] animate-pulse" />
            <span className="text-sm font-semibold text-white">
              Admissions Open 2026–2027
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-2xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Where Every Child{" "}
            <span className="text-primary">Discovers</span> Their{" "}
            <span className="text-primary">True Potential</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block text-lg md:text-xl text-white/80 mb-8 max-w-xl"
          >
            Providing CBSE-affiliated education that fosters confident, independent thinkers.
Our focus is on developing well-rounded individuals, not just academic achievers.
Empowering students to excel in life, both inside and outside the classroom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden md:flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-secondary-foreground font-semibold text-lg shadow-lg hover:brightness-110 boty-transition"
              style={{ animation: "pulse-gentle 3s ease-in-out infinite" }}
            >
              <Calendar className="w-5 h-5" />
              Apply Now - Limited Seats
            </a>
            <a
              href="tel:7700051010"
              className="md:hidden inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-white font-semibold text-lg hover:bg-white/10 boty-transition"
            >
              <img src="/Call white.svg" alt="Call" className="w-6 h-6" />
              Call Now
            </a>
            <a
              href="https://wa.me/917700051010?text=Hi%2C%20I%27m%20interested%20in%20admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-white font-semibold text-lg hover:bg-white/10 boty-transition"
            >
              <img src="/Whatsapp white.svg" alt="WhatsApp" className="w-6 h-6" />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 my-8 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              CBSE Affiliated
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              Day & Residential
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              IIT & NEET
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              AC Campus
            </span>
          </motion.div>
        </div>
      </div>

      {/* Curved bottom separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80H1440V30C1440 30 1200 0 720 0C240 0 0 30 0 30V80Z" className="fill-background" />
        </svg>
      </div>
    </section>
  )
}
