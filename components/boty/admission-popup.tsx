"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export function AdmissionPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Small delay so it slides in after page load
    const showTimer = setTimeout(() => setVisible(true), 500)
    // Auto-dismiss after 3 seconds
    const hideTimer = setTimeout(() => setVisible(false), 3500)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="ml-auto max-w-xl px-4 pb-4 md:max-w-sm md:mr-4">
        <div className="relative flex items-center gap-4 rounded-2xl bg-white shadow-lg border border-muted px-5 py-4">
          <span className="flex-shrink-0 w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <div className="flex-1 min-w-0">
            <p className="font-serif text-sm font-semibold text-foreground leading-tight">
              Admissions Open 2025 – 2026
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Enroll your child at Montessori Prime School today!
            </p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="flex-shrink-0 p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}
