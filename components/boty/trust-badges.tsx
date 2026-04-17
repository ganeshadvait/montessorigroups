"use client"

import { useEffect, useRef, useState } from "react"

type Stat = {
  image: string
  label: string
  target?: number
  suffix?: string
  display?: string
}

const stats: Stat[] = [
  {
    image: "/thousand  Students.png",
    target: 10000,
    suffix: "+",
    label: "Students & Alumni",
  },
  {
    image: "/years of excellence.png",
    target: 50,
    suffix: "+",
    label: "Experienced Faculty",
  },
  {
    image: "/LAND.svg",
    target: 9,
    label: "Acres of Campus",
  },
  {
    image: "/CLASS.svg",
    display: "KG - X",
    label: "Grade Offered",
  },
]

const DURATION = 2000

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function CountUp({ target, suffix = "", active }: { target: number; suffix?: string; active: boolean }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frameId: number
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1)
      setValue(Math.round(target * easeOutCubic(progress)))
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }
    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [active, target])

  return (
    <>
      {value.toLocaleString()}
      {suffix}
    </>
  )
}

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section className="py-16 bg-background relative -mt-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative bg-card p-6 md:p-8 text-center rounded-2xl boty-shadow transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={stat.image} alt={stat.label} className="mb-3 mx-auto w-8 h-8 md:w-10 md:h-10 object-contain" />
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-1 font-bold">
                {stat.target !== undefined ? (
                  <CountUp target={stat.target} suffix={stat.suffix} active={isVisible} />
                ) : (
                  stat.display
                )}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
