"use client"

import { useState } from "react"
import { Phone, MapPin } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/917700053030?text=Hi%2C%20I%27m%20interested%20in%20admissions"
const CALL_URL = "tel:+917700053030"
const DIRECTIONS_URL = "https://maps.app.goo.gl/LKDPGMnGmtyx8Tsn7"
const INSTAGRAM_URL = "https://www.instagram.com/montessorijnprime/"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

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
          href={WHATSAPP_URL}
          target="_blank"
          label="WhatsApp"
          bgClass="bg-[#25D366] hover:bg-[#1ebe57] text-white"
          icon={<WhatsAppIcon className="w-5 h-5 shrink-0" />}
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
        <FloatingButton
          href={INSTAGRAM_URL}
          target="_blank"
          label="Instagram"
          bgClass="bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] hover:opacity-90 text-white"
          icon={<InstagramIcon className="w-5 h-5 shrink-0" />}
        />
      </div>

      {/* Mobile: Fixed bottom bar */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#25D366] border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] rounded-t-xl overflow-hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white active:bg-gray-50 transition-colors"
        >
          <WhatsAppIcon className="w-6 h-6" />
          <span className="text-xs font-semibold">WhatsApp</span>
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
