"use client"

import { useRef, useState } from "react"
import { Star, ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Lakshmi Devi R.",
    role: "Parent, Class 8",
    branch: "Warangal",
    text: "My son's transformation has been remarkable. From a shy child to a confident speaker - the teachers truly care about every student's growth.",
  },
  {
    id: 2,
    name: "Ramesh Kumar P.",
    role: "Parent, Class 10",
    branch: "Yellapur",
    text: "The board exam results speak for themselves. My daughter scored 95% and credits her teachers for their dedicated coaching and support.",
  },
  {
    id: 3,
    name: "Sunita Reddy M.",
    role: "Parent, Class 5",
    branch: "Hanumakonda",
    text: "The Montessori approach makes learning joyful. My child actually looks forward to going to school every morning",
  },
  {
    id: 4,
    name: "Venkat Rao K.",
    role: "Parent, Class 12",
    branch: "Kazipet",
    text: "Both my children studied at Montessori. The values and discipline they learned here shaped them into responsible adults. Forever grateful.",
  },
  {
    id: 5,
    name: "Priya Sharma S.",
    role: "Parent, Class 3",
    branch: "Warangal",
    text: "Clean campus, caring teachers, and excellent facilities. The smart classroom technology keeps children engaged and excited about learning.",
  },
  {
    id: 6,
    name: "Nagaraju T.",
    role: "Parent, Class 7",
    branch: "Yellapur",
    text: "What impressed me most is the individual attention. The teachers know every child by name and understand their strengths and areas to improve.",
  },
  {
    id: 7,
    name: "Kavitha Nair B.",
    role: "Parent, Class 9",
    branch: "Kazipet",
    text: "The extracurricular activities are fantastic. My son excels in both academics and sports now. A truly holistic education system.",
  },
  {
    id: 8,
    name: "Srinivas G.",
    role: "Alumni, Batch 2018",
    branch: "Yellapur",
    text: "Montessori shaped who I am today. The values, friendships, and foundation I received here helped me succeed in engineering college.",
  },
  {
    id: 9,
    name: "Madhavi K.",
    role: "Parent, Class 6",
    branch: "Hanumakonda",
    text: "Affordable fees with premium quality education. The management truly cares about making quality education accessible to every family.",
  },
]

const CARDS_PER_PAGE = 3

export function TestimonialCarousel() {
  const [page, setPage] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  const touchStartX = useRef(0)

  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE)
  const nextPage = () => setPage((p) => (p + 1) % totalPages)
  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages)

  const mobileNext = () => setMobileIndex((i) => (i + 1) % testimonials.length)
  const mobilePrev = () => setMobileIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onDesktopTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextPage() : prevPage()
    }
  }
  const onMobileTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? mobileNext() : mobilePrev()
    }
  }

  const currentCards = testimonials.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  )

  return (
    <section className="py-12 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            What Parents Say
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
            Stories That Inspire Us
          </h2>
        </div>

        {/* Mobile - 1 card per slide */}
        <div className="md:hidden" onTouchStart={onTouchStart} onTouchEnd={onMobileTouchEnd}>
          <div className="relative min-h-[280px]">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  index === mobileIndex
                    ? "opacity-100 translate-x-0"
                    : index === (mobileIndex - 1 + testimonials.length) % testimonials.length
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="rounded-3xl p-6 bg-white boty-shadow">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-4 text-pretty font-medium text-lg font-serif tracking-wide">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-foreground text-sm font-bold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                    <span className="text-xs tracking-wide text-secondary bg-secondary/10 px-2 py-1 rounded-full whitespace-nowrap">
                      {t.branch}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === mobileIndex ? "bg-primary scale-[1.4]" : "bg-primary/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop - 3 cards per page */}
        <div className="hidden md:block" onTouchStart={onTouchStart} onTouchEnd={onDesktopTouchEnd}>
          <div className="grid grid-cols-3 gap-6">
            {currentCards.map((t) => (
              <div
                key={t.id}
                className="rounded-3xl p-6 bg-white boty-shadow transition-all duration-500"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4 text-pretty font-medium text-lg font-serif tracking-wide">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-foreground text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <span className="text-xs tracking-wide text-secondary bg-secondary/10 px-2 py-1 rounded-full whitespace-nowrap">
                    {t.branch}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={prevPage}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === page ? "bg-primary scale-[1.4]" : "bg-primary/25"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
