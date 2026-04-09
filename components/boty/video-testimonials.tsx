"use client"

import { useEffect, useState } from "react"
import { Play, X, ArrowLeft, ArrowRight } from "lucide-react"

type VideoTestimonial = {
  id: number
  thumbnail: string
  videoUrl: string
}

const videos: VideoTestimonial[] = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=800&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    thumbnail:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=800&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    thumbnail:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    thumbnail:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=800&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export function VideoTestimonials() {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState<string | null>(null)

  const total = videos.length
  const next = () => setCurrent((c) => (c + 1) % total)
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

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
    <section className="relative py-20 px-5 overflow-hidden bg-gradient-to-br from-[#20A1A6] via-[#178085] to-[#0f6063] text-center">
      {/* Glassy highlight orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#27BDBB]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      {/* Subtle glass sheen overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10" />
      <span className="relative text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
        Video Stories
      </span>
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
        Voices of Our Families
      </h2>
      <p className="text-white/75 max-w-xl mx-auto mb-12">
        Real stories from parents and students — hear their experiences first-hand.
      </p>

      <div className="relative h-[560px] max-w-6xl mx-auto flex items-center justify-center">
        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white text-primary shadow-lg flex items-center justify-center hover:bg-secondary hover:text-[#2a1a4a] transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Cards */}
        {videos.map((v, index) => {
          const pos = getPosition(index)
          return (
            <div
              key={v.id}
              className={`absolute w-[85%] md:w-80 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-out ${positionClasses[pos]}`}
            >
              <img
                src={v.thumbnail}
                alt="Video testimonial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <button
                onClick={() => pos === "active" && setPlaying(v.videoUrl)}
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-secondary/95 border-[3px] border-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
              >
                <Play className="w-7 h-7 fill-white text-white ml-1" />
              </button>
            </div>
          )
        })}

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white text-primary shadow-lg flex items-center justify-center hover:bg-secondary hover:text-[#2a1a4a] transition-all"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to video ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-secondary scale-[1.4]" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Video Modal */}
      {playing && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-5 animate-in fade-in duration-300"
          onClick={() => setPlaying(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPlaying(null)}
              aria-label="Close"
              className="absolute -top-11 right-0 w-9 h-9 rounded-full bg-white text-foreground flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={`${playing}?autoplay=1`}
              title="Video testimonial"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
