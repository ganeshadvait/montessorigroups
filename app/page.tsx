import { AdmissionPopup } from "@/components/boty/admission-popup"
import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { FeatureSection } from "@/components/boty/feature-section"
import { AboutSection } from "@/components/boty/about-section"
import { DirectorSection } from "@/components/boty/director-section"
import { CurriculumSection } from "@/components/boty/curriculum-section"
import { HostelSection } from "@/components/boty/hostel-section"
import { AmenitiesSection } from "@/components/boty/amenities-section"
import { ProductGrid } from "@/components/boty/product-grid"
import { DoctorsSection } from "@/components/boty/doctors-section"
import { Events } from "@/components/boty/events"
import { Testimonials } from "@/components/boty/testimonials"
import { TestimonialCarousel } from "@/components/boty/testimonial-carousel"
import { VideoTestimonials } from "@/components/boty/video-testimonials"
import { BookAppointment } from "@/components/boty/book-appointment"
import { CTABanner } from "@/components/boty/cta-banner"
import { Footer } from "@/components/boty/footer"

export default function HomePage() {
  return (
    <main className="pb-16 md:pb-0">
      {/* <AdmissionPopup /> */}
      <Header />
      <Hero />
      <TrustBadges />
      <CurriculumSection />
      <AboutSection />
      <Testimonials />
      <VideoTestimonials />
      <DirectorSection />
      <HostelSection />
      <FeatureSection />
      {/* <ProductGrid /> */}
      {/* <Events /> */}
      <TestimonialCarousel />
      <DoctorsSection />      
      <BookAppointment />
      <CTABanner />
      <Footer />
    </main>
  )
}
