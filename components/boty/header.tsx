"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18">
        <Link href="/" className="flex items-center">
          <img
            src="/School Logo_MPS.png"
            alt="Montessori Groups of Schools"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#why-us" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}>Why Us</a>
          <a href="#founder" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}>Our Founder</a>
          <a href="#testimonials" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}>Testimonials</a>
          <a href="#branches" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}>Location</a>
          <a
            href="https://wa.me/917700051010?text=Hi%2C%20I%27m%20interested%20in%20admissions"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 boty-transition ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}
          >
            <Phone className="w-4 h-4" />
            WhatsApp Us
          </a>
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-2.5 text-secondary-foreground font-semibold hover:brightness-110 boty-transition shadow-lg"
          >
            Apply Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-1 shadow-lg">
          <a href="#why-us" className="block py-3 text-foreground hover:text-primary boty-transition" onClick={() => setOpen(false)}>Why Us</a>
          <a href="#founder" className="block py-3 text-foreground hover:text-primary boty-transition" onClick={() => setOpen(false)}>Our Founder</a>
          <a href="#branches" className="block py-3 text-foreground hover:text-primary boty-transition" onClick={() => setOpen(false)}>Branches</a>
          <a href="#testimonials" className="block py-3 text-foreground hover:text-primary boty-transition" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="tel:7700051010" className="block py-3 text-primary font-semibold" onClick={() => setOpen(false)}>📞 Call Us</a>
          <a href="#enquiry" className="block text-center py-3 mt-2 rounded-full bg-secondary text-secondary-foreground font-semibold" onClick={() => setOpen(false)}>Apply Now</a>
        </div>
      )}
    </nav>
  )
}
