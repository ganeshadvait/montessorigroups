"use client"

import Link from "next/link"
import { Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Academic Programmes", href: "#academic" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Location", href: "#branches" },
]

const academicLinks = [
  { name: "CBSE Curriculum", href: "#why-us" },
  { name: "Montessori Method", href: "#why-us" },
  { name: "Co-Curricular", href: "#why-us" },
  { name: "Results", href: "#testimonials" },
]

export function Footer() {
  return (
    <footer className="bg-foreground pt-20 pb-10 relative overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="font-serif text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px] font-bold text-white/[0.03] whitespace-nowrap leading-none">
          Montessori
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img
                src="/montessori footer logo website.png"
                alt="Montessori Groups of Schools"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Nurturing excellence across Telangana for 33+ years. Building confident, capable individuals through quality education.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/montessorijnprime/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 boty-transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/montessorijnprime/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 boty-transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@montessorijnprime/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 boty-transition"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white boty-transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          {/* <div>
            <h3 className="font-medium text-white mb-4">Academics</h3>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white boty-transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="font-medium text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:7700051010" className="md:hidden flex items-center gap-2 text-sm text-white/60 hover:text-white boty-transition">
                  <img src="/Call white.svg" alt="Call" className="w-6 h-6 flex-shrink-0" />
                  +91 77000 51010
                </a>
                <a href="https://wa.me/917700051010?text=Hi%2C%20I%27m%20interested%20in%20admissions" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm text-white/60 hover:text-white boty-transition">
                  <img src="/Whatsapp white.svg" alt="WhatsApp" className="w-4 h-4 flex-shrink-0" />
                  +91 77000 51010
                </a>
              </li>
              <li>
                <a href="mailto:admissions@montessorigroups.edu" className="flex items-center gap-2 text-sm text-white/60 hover:text-white boty-transition">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  admissions@montessori.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Montessori Groups of Schools, Telangana. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              <Link href="/" className="text-sm text-white/40 hover:text-white/60 boty-transition">
                Privacy Policy
              </Link>
              <Link href="/" className="text-sm text-white/40 hover:text-white/60 boty-transition">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
