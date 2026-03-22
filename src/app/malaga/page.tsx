import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ProviderGrid } from "@/components/provider-grid";
import { QuickFacts } from "@/components/quick-facts";
import { LocationMap } from "@/components/location-map";
import { RelatedLocations } from "@/components/related-locations";

export const metadata: Metadata = {
  title: "Healthcare in Málaga | Private Hospitals & Medical Centers",
  description: "Discover private hospitals, specialist clinics, and English-speaking doctors in Málaga. Complete healthcare guide for expats living in or visiting Costa del Sol's capital city.",
  keywords: ["private hospital malaga", "english speaking doctor malaga", "hospital malaga spain", "quironsalud malaga", "malaga healthcare expats"],
  openGraph: {
    title: "Healthcare in Málaga",
    description: "Complete guide to private healthcare in Málaga",
    type: "website",
  },
};

export default function MalagaPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Healthcare in"
        subtitle="Málaga"
        description="As the capital of the Costa del Sol, Málaga offers the region's most extensive healthcare infrastructure. From university hospitals to specialized private facilities, access top-tier medical care with English-speaking professionals."
        image="/images/locations/malaga-hero.jpg"
      />

      <QuickFacts
        population="578,000"
        hospitals="8 Private Hospitals"
        clinics="120+ Medical Clinics"
        dentists="80+ Dental Practices"
        emergencyNumber="+34 951 01 00 00"
      />

      <ProviderGrid
        title="Hospitals in Málaga"
        providers={hospitals}
        showFilters={true}
      />

      <ProviderGrid
        title="Dental Clinics"
        providers={dentists}
        bgColor="bg-slate-50"
      />

      <ProviderGrid
        title="Specialist Centers"
        providers={specialists}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            About Healthcare in Málaga
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="mb-4">
              Málaga, as the largest city on the Costa del Sol, boasts the most comprehensive healthcare network in the region. The city combines the resources of a major metropolitan area with the accessibility needed by international residents.
            </p>
            <p className="mb-4">
              <strong>Quirónsalud Málaga</strong> is the flagship private hospital, offering over 30 medical specialties with state-of-the-art facilities. Located near the beach in El Palo, it serves both local and international patients with excellent English-speaking staff.
            </p>
            <p className="mb-4">
              The <strong>Hospital Regional Universitario</strong>, while a public facility, is one of Spain's top-ranked hospitals and accepts some international insurance plans. Many expats choose to live in Málaga specifically for access to this level of care.
            </p>
            <p>
              Málaga's dental sector is particularly competitive, with prices often 50% lower than Northern Europe. The city's dental schools also attract talented practitioners from across Spain and Europe.
            </p>
          </div>
        </div>
      </section>

      <LocationMap
        title="Healthcare Locations in Málaga"
        center={{ lat: 36.7213, lng: -4.4217 }}
        markers={mapMarkers}
      />

      <RelatedLocations
        currentLocation="Málaga"
        locations={[
          { name: "Marbella", slug: "marbella", distance: "60 km west" },
          { name: "Fuengirola", slug: "fuengirola", distance: "35 km west" },
          { name: "Nerja", slug: "estepona", distance: "50 km east" },
        ]}
      />
    </main>
  );
}

const hospitals = [
  {
    id: 1,
    name: "Quirónsalud Málaga",
    type: "Private Hospital",
    rating: 4.7,
    reviews: 412,
    address: "Av. del Pintor Joaquín Sorolla, 117, 29016 Málaga",
    phone: "+34 952 36 76 00",
    hours: "24/7 Emergency",
    specialties: ["Orthopedics", "Neurology", "Oncology", "Pediatrics", "Cardiology"],
    insurance: ["Sanitas", "Adeslas", "DKV", "Cigna", "AXA", "Bupa Global"],
    slug: "quironsalud-malaga",
  },
  {
    id: 2,
    name: "Hospital Vithas Málaga",
    type: "Private Hospital",
    rating: 4.6,
    reviews: 298,
    address: "C. San Lorenzo, 11, 29001 Málaga",
    phone: "+34 952 36 14 00",
    hours: "24/7 Emergency",
    specialties: ["General Surgery", "Internal Medicine", "Gynecology", "Urology"],
    insurance: ["Sanitas", "Adeslas", "DKV", "Cigna"],
    slug: "vithas-malaga",
  },
  {
    id: 3,
    name: "Hospital Regional Universitario",
    type: "Public Hospital",
    rating: 4.4,
    reviews: 567,
    address: "Av. Carlos Haya, 82, 29010 Málaga",
    phone: "+34 951 01 00 00",
    hours: "24/7 Emergency",
    specialties: ["All Specialties", "Trauma Center", "Transplant Unit", "Neonatal ICU"],
    insurance: ["Public (SNS)", "Some private insurance"],
    slug: "hospital-regional-malaga",
  },
  {
    id: 4,
    name: "Clínico Málaga Centro",
    type: "Private Hospital",
    rating: 4.5,
    reviews: 234,
    address: "C. Molina Lario, 13, 29015 Málaga",
    phone: "+34 952 22 33 44",
    hours: "Mon-Fri 8:00-20:00",
    specialties: ["Outpatient Surgery", "Diagnostic Imaging", "Endoscopy", "Pain Management"],
    insurance: ["Sanitas", "Adeslas", "DKV"],
    slug: "clinico-malaga-centro",
  },
];

const dentists = [
  {
    id: 5,
    name: "Dental Care Málaga",
    type: "Dental Clinic",
    rating: 4.7,
    reviews: 223,
    address: "C. Granada, 45, 29015 Málaga",
    phone: "+34 951 25 78 90",
    hours: "Mon-Fri 9:00-21:00, Sat 10:00-14:00",
    specialties: ["All-on-4", "Invisalign", "Root Canal", "Periodontics"],
    features: ["3D CT Scanner", "In-house lab", "0% finance available"],
    slug: "dental-care-malaga",
  },
  {
    id: 6,
    name: "Málaga Dental Specialists",
    type: "Dental Clinic",
    rating: 4.8,
    reviews: 178,
    address: "C. Alcazabilla, 12, 29015 Málaga",
    phone: "+34 952 21 55 66",
    hours: "Mon-Sat 9:00-20:00",
    specialties: ["Implantology", "Prosthodontics", "Oral Surgery", "Pediatric Dentistry"],
    features: ["Specialist referrals", "Sedation dentistry", "Emergency walk-ins"],
    slug: "malaga-dental-specialists",
  },
  {
    id: 7,
    name: "Smile Center Málaga",
    type: "Dental Clinic",
    rating: 4.6,
    reviews: 145,
    address: "Av. Andalucía, 25, 29007 Málaga",
    phone: "+34 952 33 11 22",
    hours: "Mon-Fri 9:00-20:00",
    specialties: ["Cosmetic Dentistry", "Whitening", "Veneers", "Bonding"],
    features: ["Free whitening consultation", "Smile simulations", "Same-day bonding"],
    slug: "smile-center-malaga",
  },
];

const specialists = [
  {
    id: 8,
    name: "Orthopedic Center Málaga",
    type: "Orthopedic Clinic",
    rating: 4.7,
    reviews: 189,
    address: "Av. Andalucía, 28, 29007 Málaga",
    phone: "+34 952 22 33 44",
    hours: "Mon-Fri 9:00-20:00",
    specialties: ["Joint Replacement", "Sports Injuries", "Spine Surgery", "Shoulder & Knee"],
    doctor: "Dr. Roberto García (English/Spanish)",
    slug: "orthopedic-center-malaga",
  },
  {
    id: 9,
    name: "Málaga Neurology Institute",
    type: "Neurology Clinic",
    rating: 4.9,
    reviews: 134,
    address: "C. Marqués de Larios, 8, 29005 Málaga",
    phone: "+34 952 44 55 66",
    hours: "Mon-Fri 10:00-19:00",
    specialties: ["Headache Clinic", "Epilepsy", "Stroke Prevention", "Memory Disorders"],
    doctor: "Dr. María López (English/Spanish/French)",
    slug: "malaga-neurology-institute",
  },
  {
    id: 10,
    name: "Cancer Center Málaga",
    type: "Oncology Center",
    rating: 4.8,
    reviews: 167,
    address: "Av. del Pintor Joaquín Sorolla, 117, 29016 Málaga",
    phone: "+34 952 36 76 10",
    hours: "Mon-Fri 8:00-18:00",
    specialties: ["Medical Oncology", "Radiation Therapy", "Palliative Care", "Clinical Trials"],
    doctor: "Dr. Antonio Sánchez (English/Spanish)",
    slug: "cancer-center-malaga",
  },
  {
    id: 11,
    name: "Málaga Eye Institute",
    type: "Ophthalmology Clinic",
    rating: 4.8,
    reviews: 223,
    address: "C. Strachan, 6, 29015 Málaga",
    phone: "+34 952 22 11 33",
    hours: "Mon-Fri 9:00-19:00",
    specialties: ["LASIK", "Cataract Surgery", "Glaucoma", "Retina Specialist"],
    doctor: "Dr. Carmen Ruiz (English/Spanish/German)",
    slug: "malaga-eye-institute",
  },
];

const mapMarkers = [
  { lat: 36.7273, lng: -4.3655, name: "Quirónsalud Málaga", type: "hospital" },
  { lat: 36.7204, lng: -4.4159, name: "Hospital Vithas", type: "hospital" },
  { lat: 36.7259, lng: -4.4412, name: "Hospital Regional", type: "hospital" },
  { lat: 36.7213, lng: -4.4217, name: "Dental Care Málaga", type: "dental" },
];
