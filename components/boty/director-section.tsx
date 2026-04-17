"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";

export function DirectorSection() {
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
    <section id="founder" className="py-12 md:py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
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
              Our Founder & Chairman
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
              Sri. Jose Nedumthundam
            </h2>

            <p
              className={`text-sm text-secondary font-medium mb-6 ${
                isVisible ? "animate-blur-in opacity-0" : "opacity-0"
              }`}
              style={
                isVisible
                  ? { animationDelay: "0.4s", animationFillMode: "forwards" }
                  : {}
              }
            >
              M.A. (Pol), M.A. (Pub. Adm), M.Ed. - Founder & Chairman
            </p>

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
              I am dedicated to moulding global citizens.
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
              At Montessori Group of Schools, we take pride in living by the
              words of Willa A. Foster: “Quality is never an accident; it is
              always the result of high intention, sincere effort, intelligent
              direction and skillful execution.” For over 3 decades, Montessori has
              consistently strived for excellence, establishing itself as a
              trusted name in education.
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
              Since 1993, for over three decades, I have led Montessori Group of
              Institutions with a vision to shape the intellectual wealth of our
              future generations. While India has seen material and economic progress,
              true wealth lies in the intellectual power of young minds. Our
              mission at Montessori is to equip students with the skills,
              knowledge, and values to compete globally, emphasizing not only
              academic achievement but also the development of KASSM (Knowledge,
              Attitude, Skills, Social, and Moral Values).
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
            ></div>
          </div>

          {/* Right - Image */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden boty-shadow">
                <Image
                  src="/Founder image.svg"
                  alt="Sri. Jose Nedumthundam - Founder & Chairman"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Experience Badge */}
              {/* <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl boty-shadow z-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold font-serif">33+</span>
                  <span className="text-sm">Years<br />of Vision</span>
                </div>
              </div> */}

              {/* Quote Badge */}
              {/* <div className="absolute -top-4 -right-4 lg:top-8 lg:-right-6 bg-secondary text-secondary-foreground px-5 py-3 rounded-2xl boty-shadow z-10">
                <Quote className="w-5 h-5 mb-1" />
                <p className="text-xs font-medium max-w-[160px]">"Education is the most powerful tool to change lives."</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
