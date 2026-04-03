"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, GraduationCap } from "lucide-react"

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
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <span className="font-serif font-bold text-lg block text-foreground">Montessori</span>
            <span className="text-[10px] tracking-widest uppercase text-muted-foreground">Groups of Schools</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#why-us" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}>Why Us</a>
          <a href="#founder" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}>Our Founder</a>
          <a href="#branches" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}>Branches</a>
          <a href="#testimonials" className={`boty-transition ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}>Testimonials</a>
          <a
            href="tel:+919876543210"
            className={`inline-flex items-center gap-2 boty-transition ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}
          >
            <Phone className="w-4 h-4" />
            Call Us
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
          <a href="tel:+919876543210" className="block py-3 text-primary font-semibold" onClick={() => setOpen(false)}>📞 Call Us</a>
          <a href="#enquiry" className="block text-center py-3 mt-2 rounded-full bg-secondary text-secondary-foreground font-semibold" onClick={() => setOpen(false)}>Apply Now</a>
        </div>
      )}
    </nav>
  )
}
