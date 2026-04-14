"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border/50" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 md:h-18">
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <img
            src="/School Logo_MPS.png"
            alt="Montessori Groups of Schools"
            className="h-10 sm:h-12 md:h-16 w-auto object-contain"
          />
          <img
            src="/CBSE LOGO.svg"
            alt="CBSE"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          <a href="#academic" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-secondary" : "text-black/80 hover:text-secondary"}`}>Academic Programmes</a>
          <a href="#about" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-secondary" : "text-black/80 hover:text-secondary"}`}>About</a>
          <a href="#testimonials" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-secondary" : "text-black/80 hover:text-secondary"}`}>Testimonials</a>
          <a href="#location" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-secondary" : "text-black/80 hover:text-secondary"}`}>Location</a>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917700051010?text=Hi%2C%20I%27m%20interested%20in%20admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2 xl:px-6 xl:py-2.5 text-white font-semibold hover:brightness-110 boty-transition shadow-lg"
            >
              <img src="/Whatsapp white.svg" alt="WhatsApp" className="w-5 h-5" />
              07700051010
            </a>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 xl:px-6 xl:py-2.5 text-secondary-foreground font-semibold hover:brightness-110 boty-transition shadow-lg"
            >
              Apply Now
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-black"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-black"}`} />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 sm:px-6 py-4 space-y-1 shadow-lg">
          <a href="#academic" className="block py-3 text-foreground hover:text-primary boty-transition" onClick={() => setOpen(false)}>Academic Programmes</a>
          <a href="#about" className="block py-3 text-foreground hover:text-primary boty-transition" onClick={() => setOpen(false)}>About</a>
          <a href="#testimonials" className="block py-3 text-foreground hover:text-primary boty-transition" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#branches" className="block py-3 text-foreground hover:text-primary boty-transition" onClick={() => setOpen(false)}>Location</a>
          <a href="tel:7700051010" className="flex items-center justify-center gap-2 py-3 mt-2 rounded-full bg-white border border-secondary text-secondary font-semibold" onClick={() => setOpen(false)}>
            <img src="/Call green.svg" alt="Call" className="w-5 h-5" />
            07700051010
          </a>
          <a
            href="https://wa.me/917700051010?text=Hi%2C%20I%27m%20interested%20in%20admissions"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 mt-2 rounded-full bg-green-600 text-white font-semibold"
            onClick={() => setOpen(false)}
          >
            <img src="/Whatsapp white.svg" alt="WhatsApp" className="w-6 h-6" />
            WhatsApp Us
          </a>
          <a href="#enquiry" className="block text-center py-3 mt-2 rounded-full bg-secondary text-secondary-foreground font-semibold" onClick={() => setOpen(false)}>Apply Now</a>
        </div>
      )}
    </nav>
  )
}
