"use client"

import { useEffect, useRef, useState } from "react"
import { Play, X, ArrowLeft, ArrowRight } from "lucide-react"

type VideoTestimonial = {
  id: number
  name: string
  role: string
  videoUrl: string
}

const videos: VideoTestimonial[] = [
  { id: 1, name: "Lakshmi Devi R.", role: "Parent, Class 8", videoUrl: "/testimonial 1.webm" },
  { id: 2, name: "Ramesh Kumar P.", role: "Parent, Class 10", videoUrl: "/testimonial 2.webm" },
  { id: 3, name: "Sunita Reddy M.", role: "Parent, Class 5", videoUrl: "/testimonial 3.webm" },
  { id: 4, name: "Venkat Rao K.", role: "Parent, Class 12", videoUrl: "/testimonial 4..mp4" },
]

export function VideoTestimonials() {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState<string | null>(null)

  const touchStartX = useRef(0)

  const total = videos.length
  const next = () => setCurrent((c) => (c + 1) % total)
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (playing) {
        if (e.key === "Escape") setPlaying(null)
        return
      }
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [playing])

  const getPosition = (index: number) => {
    if (index === current) return "active"
    if (index === (current - 1 + total) % total) return "prev"
    if (index === (current + 1) % total) return "next"
    return "hidden"
  }

  const positionClasses: Record<string, string> = {
    active:
      "opacity-100 scale-105 z-30 pointer-events-auto translate-x-0",
    prev: "opacity-0 -translate-x-[110%] md:opacity-50 md:-translate-x-[340px] scale-90 z-20 pointer-events-none",
    next: "opacity-0 translate-x-[110%] md:opacity-50 md:translate-x-[340px] scale-90 z-20 pointer-events-none",
    hidden: "opacity-0 scale-75 pointer-events-none",
  }

  return (
    <section id="testimonials" className="relative py-20 px-5 overflow-hidden bg-gradient-to-br from-[#20A1A6] via-[#178085] to-[#0f6063] text-center">
      {/* Glassy highlight orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#27BDBB]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      {/* Subtle glass sheen overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10" />
      <span className="relative text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
        Video Testimonials
      </span>
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
        Hear From Our Families
      </h2>
      <p className="text-white/75 max-w-xl mx-auto mb-12">
        Real stories from parents and students - hear their experiences first-hand.
      </p>

      <div
        className="relative h-[420px] sm:h-[460px] md:h-[500px] lg:h-[560px] max-w-6xl mx-auto flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Cards */}
        {videos.map((v, index) => {
          const pos = getPosition(index)
          return (
            <div
              key={v.id}
              className={`absolute w-[75%] md:w-80 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-out bg-black ${positionClasses[pos]}`}
            >
              <video
                src={v.videoUrl}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <button
                onClick={() => pos === "active" && setPlaying(v.videoUrl)}
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-secondary/95 border-[3px] border-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
              >
                <Play className="w-7 h-7 fill-white text-white ml-1" />
              </button>
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <p className="text-white font-semibold text-sm md:text-base">{v.name}</p>
                <p className="text-white/70 text-xs md:text-sm">{v.role}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between max-w-6xl mx-auto">
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-11 h-11 rounded-full bg-white text-primary shadow-lg flex items-center justify-center hover:bg-secondary hover:text-[#2a1a4a] transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to video ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-white scale-[1.4]" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="w-11 h-11 rounded-full bg-white text-primary shadow-lg flex items-center justify-center hover:bg-secondary hover:text-[#2a1a4a] transition-all"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Video Modal */}
      {playing && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-5 animate-in fade-in duration-300"
          onClick={() => setPlaying(null)}
        >
          <div
            className="relative w-full max-w-sm aspect-[3/4] bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPlaying(null)}
              aria-label="Close"
              className="absolute -top-11 right-0 w-9 h-9 rounded-full bg-white text-foreground flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <video
              src={playing}
              className="w-full h-full"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  )
}
