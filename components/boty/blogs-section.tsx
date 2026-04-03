"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Understanding Piles: Causes, Symptoms & Modern Treatments",
    excerpt: "Learn about the latest minimally invasive treatments for piles and how to prevent them.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=90",
    date: "Jan 15, 2024",
    category: "Treatment",
    featured: true,
  },
  {
    id: 2,
    title: "Diet Tips for Better Digestive Health",
    excerpt: "Essential dietary guidelines for maintaining a healthy colon.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=90",
    date: "Jan 10, 2024",
    category: "Wellness",
    featured: false,
  },
  {
    id: 3,
    title: "When to Consult a Proctologist",
    excerpt: "Key signs that indicate you should see a specialist.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=90",
    date: "Jan 5, 2024",
    category: "Health Tips",
    featured: false,
  },
  {
    id: 4,
    title: "Advances in Fistula Treatment",
    excerpt: "New surgical techniques that ensure faster recovery and minimal discomfort.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=90",
    date: "Dec 28, 2023",
    category: "Treatment",
    featured: true,
  },
  {
    id: 5,
    title: "Post-Surgery Care Guidelines",
    excerpt: "Important tips for recovery after colorectal procedures.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=90",
    date: "Dec 20, 2023",
    category: "Recovery",
    featured: false,
  },
];

export function BlogsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span
            className={`text-sm capitalize mb-6 block text-primary tracking-normal ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                : {}
            }
          >
            Latest Updates
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-4xl leading-tight text-foreground mb-6 ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.4s", animationFillMode: "forwards" }
                : {}
            }
          >
            Health Insights & News
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-xl mx-auto ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.6s", animationFillMode: "forwards" }
                : {}
            }
          >
            Stay informed with the latest medical insights and health tips
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          {blogs.map((blog, index) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className={`group relative rounded-3xl overflow-hidden boty-shadow boty-transition hover:scale-[1.02] ${
                blog.featured ? "md:col-span-2 md:row-span-2" : ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transitionDuration: "700ms",
              }}
            >
              {/* Background Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover boty-transition group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Category Badge */}
                <span className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                  {blog.category}
                </span>

                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 boty-transition">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>

                {/* Text Content */}
                <div>
                  <h3
                    className={`font-serif text-white mb-2 ${
                      blog.featured ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {blog.title}
                  </h3>
                  {blog.featured && (
                    <p className="text-white/80 text-sm mb-3 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-white/70 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium tracking-wide boty-transition hover:bg-primary/90"
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
