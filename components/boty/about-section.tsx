"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-12 md:py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden boty-shadow">
                <Image
                  src="/school image.svg"
                  alt="Sri. Jose Nedumthundam - Founder & Chairman"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Experience Badge */}
              {/* <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl boty-shadow z-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold font-serif">33+</span>
                  <span className="text-sm">
                    Years
                    <br />
                    of Excellence
                  </span>
                </div>
              </div> */}

              {/* Quote Badge */}
              <div className="absolute -top-4 -left-4 lg:top-8 lg:-left-6 bg-secondary text-secondary-foreground px-5 py-3 rounded-2xl boty-shadow z-10">
                <Quote className="w-5 h-5 mb-1" />
                <p className="text-xs font-medium max-w-[160px]">
                  "Education is the bridge between where we are and where we want to be."
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <span
              className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
                isVisible ? "animate-blur-in opacity-0" : "opacity-0"
              }`}
              style={
                isVisible
                  ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                  : {}
              }
            >
              About
            </span>

            <h2
              className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-2 ${
                isVisible ? "animate-blur-in opacity-0" : "opacity-0"
              }`}
              style={
                isVisible
                  ? { animationDelay: "0.3s", animationFillMode: "forwards" }
                  : {}
              }
            >
              Montessori Prime School
            </h2>

            <p
              className={`text-muted-foreground text-base leading-relaxed mb-4 ${
                isVisible ? "animate-blur-in opacity-0" : "opacity-0"
              }`}
              style={
                isVisible
                  ? { animationDelay: "0.5s", animationFillMode: "forwards" }
                  : {}
              }
            >
              Montessori Prime School is a K–XII co-educational institution
              offering Residential, Weekly Boarding, and Day Scholastic
              programs. The school provides a well-balanced daily schedule with
              a thoughtful blend of academics, sports, and co-curricular
              activities to ensure a comprehensive, all-round education.
            </p>

            <p
              className={`text-muted-foreground text-base leading-relaxed mb-8 ${
                isVisible ? "animate-blur-in opacity-0" : "opacity-0"
              }`}
              style={
                isVisible
                  ? { animationDelay: "0.6s", animationFillMode: "forwards" }
                  : {}
              }
            >
              The academic program is student-centered, encouraging every child
              to develop their innate potential to the fullest. A rigorous
              curriculum addresses intellectual growth, with a strong focus on
              preparing students for higher education in India and abroad. A
              supportive and humane environment fosters self-esteem and promotes
              positive student interaction.
            </p>

            <div
              className={`flex flex-wrap gap-4 ${
                isVisible ? "animate-blur-in opacity-0" : "opacity-0"
              }`}
              style={
                isVisible
                  ? { animationDelay: "0.7s", animationFillMode: "forwards" }
                  : {}
              }
            >
              <a
                href="tel:7700051010"
                className="md:hidden inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide boty-transition hover:bg-primary/90"
              >
                <img src="/Call white.svg" alt="Call" className="w-6 h-6" />
                Call Now
              </a>
              <a
                href="https://wa.me/917700051010?text=Hi%2C%20I%27m%20interested%20in%20admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide boty-transition hover:bg-green-700"
              >
                <img src="/Whatsapp white.svg" alt="WhatsApp" className="w-6 h-6" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
