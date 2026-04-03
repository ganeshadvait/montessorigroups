"use client"

import { motion } from "framer-motion"
import { Phone, Calendar, CheckCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
          alt="Students in a bright, nurturing classroom environment"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          style={{ animation: "slow-zoom 20s ease-out forwards" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-secondary/20 floating hidden lg:block" />
      <div className="absolute bottom-32 right-40 w-20 h-20 rounded-full bg-secondary/15 floating-delayed hidden lg:block" />
      <div className="absolute top-40 left-[60%] w-16 h-16 rounded-full bg-primary/20 floating-slow hidden lg:block" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-secondary/90 px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-semibold text-secondary-foreground">
              Admissions Open 2026–2027
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Where Every Child{" "}
            <span className="text-secondary">Discovers</span> Their{" "}
            <span className="text-secondary">True Potential</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
          >
            33+ years of nurturing excellence across 15 campuses in Telangana.
            CBSE-affiliated education that builds confident, independent thinkers — not just toppers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-secondary-foreground font-semibold text-lg shadow-lg hover:brightness-110 boty-transition"
              style={{ animation: "pulse-gentle 3s ease-in-out infinite" }}
            >
              <Calendar className="w-5 h-5" />
              Apply Now — Limited Seats
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-white font-semibold text-lg hover:bg-white/10 boty-transition"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              CBSE Affiliated
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              15 Campuses
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              Day & Residential
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              33+ Years Legacy
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
