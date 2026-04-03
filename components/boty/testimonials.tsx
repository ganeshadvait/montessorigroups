"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Lakshmi Devi R.",
    role: "Parent, Class 8",
    branch: "Bhongir",
    text: "My son's transformation has been remarkable. From a shy child to a confident speaker — the teachers truly care about every student's growth.",
  },
  {
    id: 2,
    name: "Ramesh Kumar P.",
    role: "Parent, Class 10",
    branch: "Huzurabad",
    text: "The board exam results speak for themselves. My daughter scored 95% and credits her teachers for their dedicated coaching and support.",
  },
  {
    id: 3,
    name: "Sunita Reddy M.",
    role: "Parent, Class 5",
    branch: "Yellandu",
    text: "The Montessori approach makes learning joyful. My child actually looks forward to going to school every morning — as a parent, that's priceless.",
  },
  {
    id: 4,
    name: "Venkat Rao K.",
    role: "Parent, Class 12",
    branch: "Zaheerabad",
    text: "Both my children studied at Montessori. The values and discipline they learned here shaped them into responsible adults. Forever grateful.",
  },
  {
    id: 5,
    name: "Priya Sharma S.",
    role: "Parent, Class 3",
    branch: "Bibinagar",
    text: "Clean campus, caring teachers, and excellent facilities. The smart classroom technology keeps children engaged and excited about learning.",
  },
  {
    id: 6,
    name: "Nagaraju T.",
    role: "Parent, Class 7",
    branch: "Manuguru",
    text: "What impressed me most is the individual attention. The teachers know every child by name and understand their strengths and areas to improve.",
  },
  {
    id: 7,
    name: "Kavitha Nair B.",
    role: "Parent, Class 9",
    branch: "Bhupalpally",
    text: "The extracurricular activities are fantastic. My son excels in both academics and sports now. A truly holistic education system.",
  },
  {
    id: 8,
    name: "Srinivas G.",
    role: "Alumni, Batch 2018",
    branch: "Kodada",
    text: "Montessori shaped who I am today. The values, friendships, and foundation I received here helped me succeed in engineering college.",
  },
  {
    id: 9,
    name: "Madhavi K.",
    role: "Parent, Class 6",
    branch: "Husnabad",
    text: "Affordable fees with premium quality education. The management truly cares about making quality education accessible to every family.",
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => (
  <div
    className="rounded-3xl p-6 bg-white mb-4 flex-shrink-0 boty-shadow"
  >
    {/* Stars */}
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-foreground/80 leading-relaxed mb-4 text-pretty font-medium text-lg font-serif tracking-wide">
      &ldquo;{testimonial.text}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-start justify-between gap-2">
      <div>
        <p className="text-foreground text-sm font-bold">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
      <span className="text-xs tracking-wide text-primary/70 bg-primary/5 px-2 py-1 rounded-full whitespace-nowrap">
        {testimonial.branch}
      </span>
    </div>
  </div>
)

export function Testimonials() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  const column1 = [testimonials[0], testimonials[3], testimonials[6]]
  const column2 = [testimonials[1], testimonials[4], testimonials[7]]
  const column3 = [testimonials[2], testimonials[5], testimonials[8]]

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
    <section id="testimonials" className="py-24 bg-background overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}
          >
            Parent Testimonials
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`}
            style={headerVisible ? { animationDelay: "0.4s", animationFillMode: "forwards" } : {}}
          >
            Trusted by Thousands of Families
          </h2>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

          {/* Mobile */}
          <div className="md:hidden h-[600px]">
            <div className="relative overflow-hidden h-full">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={`m-${t.id}-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 h-[600px]">
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column1, ...column1].map((t, i) => (
                  <TestimonialCard key={`c1-${t.id}-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="animate-scroll-up hover:animate-scroll-up-slow">
                {[...column2, ...column2].map((t, i) => (
                  <TestimonialCard key={`c2-${t.id}-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:animate-scroll-down-slow">
                {[...column3, ...column3].map((t, i) => (
                  <TestimonialCard key={`c3-${t.id}-${i}`} testimonial={t} />
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
