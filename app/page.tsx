import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { FeatureSection } from "@/components/boty/feature-section"
import { AboutSection } from "@/components/boty/about-section"
import { HostelSection } from "@/components/boty/hostel-section"
import { AmenitiesSection } from "@/components/boty/amenities-section"
import { ProductGrid } from "@/components/boty/product-grid"
import { DoctorsSection } from "@/components/boty/doctors-section"
import { Testimonials } from "@/components/boty/testimonials"
import { BookAppointment } from "@/components/boty/book-appointment"
import { CTABanner } from "@/components/boty/cta-banner"
import { Footer } from "@/components/boty/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <FeatureSection />
      <AboutSection />
      <HostelSection />
      <AmenitiesSection />
      <ProductGrid />
      <Testimonials />
      <BookAppointment />
      <DoctorsSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
