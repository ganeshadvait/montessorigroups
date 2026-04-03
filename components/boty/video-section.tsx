"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function VideoSection() {
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
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-4xl leading-tight text-foreground mb-6 ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.2s", animationFillMode: "forwards" }
                : {}
            }
          >
            The Right Colon Care
          </h2>
          <p
            className={`text-muted-foreground text-base leading-relaxed max-w-4xl mx-auto mb-4 ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.4s", animationFillMode: "forwards" }
                : {}
            }
          >
            Chirag Global Hospitals, led by Dr. Rajasekhar Mysore with 38 years of experience,
            Chirag is currently the best colon care hospital in Bangalore, India.
            With more surgical experience & top clinical results, Chirag Global Hospitals
            assure every patient the right care at the right cost.
          </p>
          <p
            className={`text-muted-foreground text-base leading-relaxed max-w-4xl mx-auto ${
              headerVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              headerVisible
                ? { animationDelay: "0.6s", animationFillMode: "forwards" }
                : {}
            }
          >
            We, at Chirag Global, urge you to only consult qualified & experienced
            Proctologists to get the right treatment for Piles, Fistula, Fissure,
            Constipation & other colon/rectal disorders.
          </p>
        </div>

        {/* Video Embed */}
        <div
          ref={sectionRef}
          className={`relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden boty-shadow mb-24 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Chirag Global Hospitals"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Quote Section */}
        <div className="text-center mb-16">
          <h3
            className={`font-serif italic text-2xl md:text-3xl lg:text-4xl text-foreground mb-12 ${
              isVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              isVisible
                ? { animationDelay: "0.3s", animationFillMode: "forwards" }
                : {}
            }
          >
            " Healthcare Explained Through Experience "
          </h3>
        </div>

        {/* Second Video */}
        <div
          className={`relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden boty-shadow mb-24 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Healthcare Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Campaigns Section */}
        <div className="mt-24">
          <h2
            className={`font-serif text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-16 tracking-wide ${
              isVisible ? "animate-blur-in opacity-0" : "opacity-0"
            }`}
            style={
              isVisible
                ? { animationDelay: "0.4s", animationFillMode: "forwards" }
                : {}
            }
          >
            Different Campaigns
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Stacked Images */}
            <div
              className={`space-y-6 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden boty-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=90"
                  alt="Health camp event"
                  fill
                  className="object-cover"
                />
              </div>
              
            </div>

            {/* Right - Content */}
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Community Health Program
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                A structured wellness journey designed to educate, prevent, and treat
                through guided medical consultations, health screenings, and lifestyle corrections.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>Free health checkups supervised by experienced physicians</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>Health awareness programs for communities</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>Early detection and prevention initiatives</span>
                </li>
              </ul>

              <Link
                href="/campaigns"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium tracking-wide boty-transition hover:bg-primary/90"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
