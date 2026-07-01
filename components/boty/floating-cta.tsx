"use client"

import { useState } from "react"
import { Phone, MapPin } from "lucide-react"

const CALL_URL = "tel:08065064810"
const DIRECTIONS_URL = "https://maps.app.goo.gl/LKDPGMnGmtyx8Tsn7"
const INSTAGRAM_URL = "https://www.instagram.com/montessorijnprime/"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5A3.95 3.95 0 0 0 7.75 20.2h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zM12 6.85a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7zm5.6-2.55a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
    </svg>
  )
}

function FloatingButton({
  href,
  target,
  label,
  bgClass,
  icon,
}: {
  href: string
  target?: string
  label: string
  bgClass: string
  icon: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={`flex items-center rounded-full shadow-lg transition-all duration-300 overflow-hidden ${bgClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ padding: hovered ? "12px 16px 12px 12px" : "12px" }}
    >
      {icon}
      <span
        className="text-sm font-semibold whitespace-nowrap overflow-hidden transition-all duration-300"
        style={{
          maxWidth: hovered ? "8rem" : "0px",
          marginLeft: hovered ? "8px" : "0px",
          opacity: hovered ? 1 : 0,
        }}
      >
        {label}
      </span>
    </a>
  )
}

export default function FloatingCTA() {
  return (
    <>
      {/* Desktop: Right side, vertically centered — round icons, expand on hover */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col items-end gap-3">
        <FloatingButton
          href={CALL_URL}
          label="08065064810"
          bgClass="bg-[#25D366] hover:bg-[#1ebe57] text-white"
          icon={<Phone className="w-5 h-5 shrink-0" />}
        />
        <FloatingButton
          href={CALL_URL}
          label="Enroll Now"
          bgClass="bg-[#DD3E74] hover:bg-[#c4365f] text-white"
          icon={<Phone className="w-5 h-5 shrink-0" />}
        />
        <FloatingButton
          href={DIRECTIONS_URL}
          target="_blank"
          label="Directions"
          bgClass="bg-[#20A1A6] hover:bg-[#1a8a8e] text-white"
          icon={<MapPin className="w-5 h-5 shrink-0" />}
        />
        {/* <FloatingButton
          href={INSTAGRAM_URL}
          target="_blank"
          label="Instagram"
          bgClass="bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] hover:opacity-90 text-white"
          icon={<InstagramIcon className="w-5 h-5 shrink-0" />}
        /> */}
      </div>

      {/* Mobile: Fixed bottom bar */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#25D366] border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] rounded-t-xl overflow-hidden">
        <a
          href={CALL_URL}
          aria-label="Call us"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white active:bg-gray-50 transition-colors"
        >
          <Phone className="w-6 h-6" />
          <span className="text-xs font-semibold">Call</span>
        </a>

        <a
          href={CALL_URL}
          aria-label="Call us"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#20A1A6] text-white active:bg-[#1a8a8e] transition-colors"
        >
          <Phone className="w-6 h-6" />
          <span className="text-xs font-semibold">Call Now</span>
        </a>

        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white active:bg-gray-50 transition-colors bg-[#FCBA28]"
        >
          <MapPin className="w-6 h-6" />
          <span className="text-xs font-semibold">Directions</span>
        </a>
      </div>
    </>
  )
}
