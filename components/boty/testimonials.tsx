"use client"

import { useEffect, useRef, useState } from "react"

const images = [
  { id: 1, src: "/basketball.png", alt: "Student testimonial" },
  { id: 2, src: "/Batminton.png", alt: "Parent testimonial" },
  { id: 3, src: "/chess.png", alt: "Parent testimonial" },
  { id: 4, src: "/circket.png", alt: "Student testimonial" },
  { id: 5, src: "/Football.png", alt: "Parent testimonial" },
  { id: 6, src: "/Running.png", alt: "Student testimonial" },
  { id: 7, src: "/Swimming.png", alt: "Parent testimonial" },
  { id: 8, src: "/Table Tennis.png", alt: "Student testimonial" },
  { id: 9, src: "/vollyball.png", alt: "Parent testimonial" },
]

const ImageCard = ({ image }: { image: (typeof images)[0] }) => (
  <div className="rounded-3xl overflow-hidden mb-4 flex-shrink-0 boty-shadow h-[220px]">
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-full object-cover"
    />
  </div>
)

export function Testimonials() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  const column1 = [images[0], images[3], images[6]]
  const column2 = [images[1], images[4], images[7]]
  const column3 = [images[2], images[5], images[8]]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true)
      },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
    }
  }, [])

  return (
    <section className="py-12 md:py-24 bg-background overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}
          >
            Our Students' Sports Journey
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.4s", animationFillMode: "forwards" } : {}}
          >
            From Football to Basketball
          </h2>
          <p className="text-black/75 max-w-xl mx-auto mb-8 md:mb-12 mt-4 md:text-xl lg:text-3xl">
            Our Students Play What They Love
          </p>
        </div>

        {/* Scrolling Images */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

          {/* Mobile */}
          <div className="md:hidden h-[600px]">
            <div className="relative overflow-hidden h-full">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...images, ...images].map((img, i) => (
                  <ImageCard key={`m-${img.id}-${i}`} image={img} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 h-[600px]">
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column1, ...column1].map((img, i) => (
                  <ImageCard key={`c1-${img.id}-${i}`} image={img} />
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="animate-scroll-up hover:animate-scroll-up-slow">
                {[...column2, ...column2].map((img, i) => (
                  <ImageCard key={`c2-${img.id}-${i}`} image={img} />
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column3, ...column3].map((img, i) => (
                  <ImageCard key={`c3-${img.id}-${i}`} image={img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-up {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-down { animation: scroll-down 30s linear infinite; }
        .animate-scroll-up { animation: scroll-up 30s linear infinite; }
        .animate-scroll-down-slow { animation: scroll-down 60s linear infinite; }
        .animate-scroll-up-slow { animation: scroll-up 60s linear infinite; }
      `}</style>
    </section>
  )
}
