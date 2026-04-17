"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react"

const branches = [
  "Yellandu", "Bhupalpally", "Bhongir", "Bibinagar", "Huzurabad",
  "Manuguru", "Valigonda", "Thirumalagiri", "Zaheerabad", "Tekulapally",
  "Karepally", "Kataram", "Husnabad", "Yellapur", "Kodada",
]

const grades = [
  "Grade KG-I",
  "Grade KG-II",
  "Grade KG-III",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
]

export function BookAppointment() {
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    student_name: "",
    parent_name: "",
    phone: "",
    alt_phone: "",
    email: "",
    previous_school: "",
    class_grade: "",
  })
  const [gradeOpen, setGradeOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const gradeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (gradeRef.current && !gradeRef.current.contains(e.target as Node)) {
        setGradeOpen(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGradeOpen(false)
    }
    if (gradeOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscape)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [gradeOpen])

  const validate = () => {
    const errors: Record<string, string> = {}
    if (!formData.student_name.trim()) errors.student_name = "Student name is required"
    if (!formData.parent_name.trim()) errors.parent_name = "Parent name is required"
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!/^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/.test(formData.phone.replace(/\s/g, ""))) {
      errors.phone = "Enter a valid 10-digit Indian phone number"
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter a valid email address"
    }
    if (!formData.alt_phone.trim()) {
      errors.alt_phone = "Alternative contact number is required"
    } else if (!/^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/.test(formData.alt_phone.replace(/\s/g, ""))) {
      errors.alt_phone = "Enter a valid 10-digit Indian phone number"
    }
    if (!formData.class_grade) errors.class_grade = "Please select a class / grade"
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validate()
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return
    setSubmitting(true)
    setError("")

    try {
      const res = await fetch("https://ekatvam.ai/wp-json/ekatvam/v1/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          branch: "Hyderabad",
          source_url: window.location.href,
        }),
      })

      if (!res.ok) throw new Error("Something went wrong. Please try again.")

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="enquiry" className="relative z-30 py-12 md:py-24 bg-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Image + Trust */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="relative w-full h-80 lg:h-[520px] rounded-3xl overflow-hidden boty-shadow">
                <Image
                  src="/enquiry form image.svg"
                  alt="Happy students at Montessori campus"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Trust Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white rounded-2xl p-4 shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Admissions Open</h4>
                    <p className="text-xs text-muted-foreground">Limited seats for 2026–2027. Apply early to secure your child's spot.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap gap-3 mt-6">
              {/* <a
                href="tel:7700051010"
                className="md:hidden inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium boty-transition hover:bg-primary/90"
              >
                <Phone className="w-4 h-4" />
                Call Admissions
              </a> */}
              {/* <a
                href="https://wa.me/917700051010?text=Hi%2C%20I%27m%20interested%20in%20admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium boty-transition hover:bg-primary/90"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Admissions
              </a> */}
              <a
                href="https://wa.me/917700051010?text=Hi%2C%20I%27m%20interested%20in%20admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full text-sm font-medium boty-transition hover:bg-green-700"
              >
                <img src="/Whatsapp white.svg" alt="WhatsApp" className="w-6 h-6" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span
              className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 block ${
                isVisible ? "animate-blur-in opacity-0" : "opacity-0"
              }`}
              style={isVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}
            >
              Start Your Journey
            </span>

            <h2
              className={`font-serif text-3xl md:text-4xl leading-tight text-foreground mb-2 ${
                isVisible ? "animate-blur-in opacity-0" : "opacity-0"
              }`}
              style={isVisible ? { animationDelay: "0.3s", animationFillMode: "forwards" } : {}}
            >
              Enquire for Admission
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Fill in your details and our admissions team will reach out within 24 hours. Campus tours available on all working days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Student Name *</label>
                    <input
                      type="text"
                      placeholder="Child's full name"
                      value={formData.student_name}
                      onChange={(e) => { setFormData({ ...formData, student_name: e.target.value }); setFieldErrors({ ...fieldErrors, student_name: "" }) }}
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${fieldErrors.student_name ? "border-red-500" : "border-border"}`}
                    />
                    {fieldErrors.student_name && <p className="text-xs text-red-500 mt-1">{fieldErrors.student_name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Parent Name *</label>
                    <input
                      type="text"
                      placeholder="Father / Mother name"
                      value={formData.parent_name}
                      onChange={(e) => { setFormData({ ...formData, parent_name: e.target.value }); setFieldErrors({ ...fieldErrors, parent_name: "" }) }}
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${fieldErrors.parent_name ? "border-red-500" : "border-border"}`}
                    />
                    {fieldErrors.parent_name && <p className="text-xs text-red-500 mt-1">{fieldErrors.parent_name}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 9999 99999"
                      value={formData.phone}
                      onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setFieldErrors({ ...fieldErrors, phone: "" }) }}
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${fieldErrors.phone ? "border-red-500" : "border-border"}`}
                    />
                    {fieldErrors.phone && <p className="text-xs text-red-500 mt-1">{fieldErrors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Alternative Contact Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 9999 99999"
                      value={formData.alt_phone}
                      onChange={(e) => { setFormData({ ...formData, alt_phone: e.target.value }); setFieldErrors({ ...fieldErrors, alt_phone: "" }) }}
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${fieldErrors.alt_phone ? "border-red-500" : "border-border"}`}
                    />
                    {fieldErrors.alt_phone && <p className="text-xs text-red-500 mt-1">{fieldErrors.alt_phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="parent@email.com"
                      value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setFieldErrors({ ...fieldErrors, email: "" }) }}
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${fieldErrors.email ? "border-red-500" : "border-border"}`}
                    />
                    {fieldErrors.email && <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Previous School</label>
                    <input
                      type="text"
                      placeholder="Name of previous school"
                      value={formData.previous_school}
                      onChange={(e) => setFormData({ ...formData, previous_school: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Select Branch *</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition cursor-pointer appearance-none"
                    >
                      <option value="">Choose nearest branch</option>
                      {branches.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div> */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Grade *</label>
                    <div className="relative" ref={gradeRef}>
                      <button
                        type="button"
                        onClick={() => setGradeOpen((o) => !o)}
                        className={`w-full px-4 pr-10 py-3 rounded-xl border bg-background text-left focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition cursor-pointer ${fieldErrors.class_grade ? "border-red-500" : "border-border"} ${formData.class_grade ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {formData.class_grade || "Select Grade"}
                        <ChevronDown
                          className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none transition-transform duration-300 ${gradeOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {gradeOpen && (
                        <ul className="absolute z-[60] left-0 right-0 mt-2 py-2 bg-background border-2 border-primary/30 rounded-xl shadow-xl max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 [scrollbar-width:thin] [scrollbar-color:rgb(var(--primary)/0.4)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:my-2 [&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-primary/60">
                          {grades.map((g) => {
                            const selected = formData.class_grade === g
                            return (
                              <li key={g}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, class_grade: g })
                                    setFieldErrors({ ...fieldErrors, class_grade: "" })
                                    setGradeOpen(false)
                                  }}
                                  className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${selected ? "bg-primary/15 text-foreground font-semibold" : "text-foreground hover:bg-primary/10"}`}
                                >
                                  {g}
                                </button>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </div>
                    {fieldErrors.class_grade && <p className="text-xs text-red-500 mt-1">{fieldErrors.class_grade}</p>}
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-600 text-center bg-red-50 rounded-lg py-2">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-3 bg-secondary text-secondary-foreground py-4 rounded-full font-semibold tracking-wide boty-transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 mt-2 text-lg shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Enquire Now"}
                  {!submitting && <ArrowRight className="w-5 h-5" />}
                </button>

                {submitted ? (
                  <p className="flex items-center justify-center gap-2 text-sm text-green-600 text-center mt-3">
                    <CheckCircle className="w-4 h-4" />
                    Thank you! We will contact you shortly.
                  </p>
                ) : (
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    No spam. Your data is safe with us.
                  </p>
                )}
              </form>
          </div>
        </div>
      </div>
    </section>
  )
}
