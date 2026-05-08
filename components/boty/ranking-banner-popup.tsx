"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function RankingBannerPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 animate-in fade-in duration-300"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Ranking announcement"
    >
      <div
        className="relative inline-block"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-foreground shadow-lg hover:bg-muted transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <Image
          src="/ranking%20banner.jpeg"
          alt="Ranking Banner"
          width={1200}
          height={1200}
          priority
          className="block max-h-[90vh] w-auto rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  )
}
