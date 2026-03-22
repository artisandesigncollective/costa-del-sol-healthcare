import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ProviderGrid } from "@/components/provider-grid";
import { QuickFacts } from "@/components/quick-facts";
import { LocationMap } from "@/components/location-map";
import { RelatedLocations } from "@/components/related-locations";

export const metadata: Metadata = {
  title: "Healthcare in Estepona | Private Clinics & Medical Centers",
  description: "Find private hospitals, dental clinics, and English-speaking doctors in Estepona. Healthcare directory for expats living in Estepona, New Golden Mile, and surrounding areas.",
  keywords: ["private clinic estepona", "english speaking doctor estepona", "dental clinic estepona", "estepona healthcare", "hospital estepona spain"],
  openGraph: {
    title: "Healthcare in Estepona",
    description: "Complete guide to private healthcare in Estepona",
    type: "website",
  },
};

export default function EsteponaPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Healthcare in"
        subtitle="Estepona"
        description="Estepona offers quality healthcare options along the western Costa del Sol. From the modern Hospital de la Vega to specialist clinics along the New Golden Mile, find trusted medical care with English-speaking doctors."
        image="/images/locations/estepona-hero.jpg"
      />

      <QuickFacts
        population="71,000"
        hospitals="1 Private Hospital"
        clinics="25+ Medical Clinics"
        dentists="15+ Dental Practices"
        emergencyNumber="+34 952 80 71 00"
      />

      <ProviderGrid
        title="Hospitals & Medical Centers"
        providers={hospitals}
        showFilters={true}
      />

      <ProviderGrid
        title="Dental Clinics"
        providers={dentists}
        bgColor="bg-slate-50"
      />

      <ProviderGrid
        title="Specialist Clinics"
        providers={specialists}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            About Healthcare in Estepona
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="mb-4">
              Estepona, known as the "Garden of the Costa del Sol," has seen significant development in healthcare infrastructure over the past decade. While smaller than Marbella or Málaga, it offers excellent private healthcare options for its growing international community.
            </p>
            <p className="mb-4">
              The <strong>Hospital de la Vega</strong> serves as the primary private medical facility, offering 24/7 emergency services, surgery, and rehabilitation. It's particularly popular with residents of the New Golden Mile and Selwo areas.
            </p>
            <p className="mb-4">
              Many Estepona residents also utilize healthcare services in nearby Marbella (30km east) for specialized treatments not available locally. The hospital has direct transfer agreements with HC Marbella and Hospital Costa del Sol for complex cases.
            </p>
            <p>
              Dental tourism is growing in Estepona, with several clinics offering comprehensive treatment packages that include airport transfers and accommodation for international patients.
            </p>
          </div>
        </div>
      </section>

      <LocationMap
        title="Healthcare Locations in Estepona"
        center={{ lat: 36.4273, lng: -5.1458 }}
        markers={mapMarkers}
      />

      <RelatedLocations
        currentLocation="Estepona"
        locations={[
          { name: "Marbella", slug: "marbella", distance: "30 km east" },
          { name: "Gibraltar", slug: "gibraltar", distance: "45 km south" },
          { name: "San Pedro", slug: "marbella", distance: "15 km east" },
        ]}
      />
    </main>
  );
}

const hospitals = [
  {
    id: 1,
    name: "Hospital de la Vega",
    type: "Private Hospital",
    rating: 4.6,
    reviews: 178,
    address: "C. José Navarro, 10, 29680 Estepona",
    phone: "+34 952 80 71 00",
    hours: "24/7 Emergency",
    specialties: ["General Medicine", "Surgery", "Rehabilitation", "Emergency Care"],
    insurance: ["Sanitas", "Adeslas", "DKV", "Cigna"],
    slug: "hospital-vega-estepona",
  },
  {
    id: 2,
    name: "Centro Médico Estepona",
    type: "Medical Center",
    rating: 4.5,
    reviews: 98,
    address: "Av. España, 50, 29680 Estepona",
    phone: "+34 952 79 11 22",
    hours: "Mon-Fri 9:00-20:00, Sat 10:00-14:00",
    specialties: ["Family Medicine", "Pediatrics", "Cardiology", "Dermatology"],
    insurance: ["Sanitas", "Adeslas", "DKV"],
    slug: "centro-medico-estepona",
  },
  {
    id: 3,
    name: "Estepona Medical Center",
    type: "Medical Center",
    rating: 4.4,
    reviews: 87,
    address: "C. Caridad, 18, 29680 Estepona",
    phone: "+34 952 80 33 44",
    hours: "Mon-Fri 9:00-21:00",
    specialties: ["General Practice", "Physiotherapy", "Laboratory", "Radiology"],
    insurance: ["Sanitas", "Adeslas"],
    slug: "estepona-medical-center",
  },
  {
    id: 4,
    name: "Clínica del Sol Estepona",
    type: "Private Clinic",
    rating: 4.7,
    reviews: 112,
    address: "Urb. El Paraíso, Local 5, 29688 Estepona",
    phone: "+34 952 88 55 66",
    hours: "Mon-Sat 9:00-19:00",
    specialties: ["Aesthetic Medicine", "Anti-Aging", "Nutrition", "Psychology"],
    insurance: ["Sanitas", "Adeslas", "DKV", "Cigna"],
    slug: "clinica-del-sol-estepona",
  },
];

const dentists = [
  {
    id: 5,
    name: "Estepona Dental Studio",
    type: "Dental Clinic",
    rating: 4.8,
    reviews: 98,
    address: "C. Caridad, 15, 29680 Estepona",
    phone: "+34 952 80 54 32",
    hours: "Mon-Fri 9:00-20:00, Sat 10:00-14:00",
    specialties: ["Dental Implants", "Crowns & Bridges", "Hygiene", "Teeth Whitening"],
    features: ["English-speaking dentist", "Free initial consultation", "Parking available"],
    slug: "estepona-dental-studio",
  },
  {
    id: 6,
    name: "Smile Estepona",
    type: "Dental Clinic",
    rating: 4.7,
    reviews: 76,
    address: "Av. España, 75, 29680 Estepona",
    phone: "+34 952 79 33 22",
    hours: "Mon-Fri 9:00-19:00",
    specialties: ["Cosmetic Dentistry", "Veneers", "Invisalign", "Implants"],
    features: ["Digital X-rays", "Sedation available", "Financing options"],
    slug: "smile-estepona",
  },
  {
    id: 7,
    name: "New Golden Mile Dental",
    type: "Dental Clinic",
    rating: 4.9,
    reviews: 54,
    address: "Ctra. Nacional 340, Km 165, 29688 Estepona",
    phone: "+34 951 22 11 33",
    hours: "Mon-Sat 10:00-18:00",
    specialties: ["Full Mouth Rehabilitation", "All-on-4", "Bone Grafting", "Sinus Lifts"],
    features: ["Dental tourism specialist", "Airport transfers", "Hotel packages"],
    slug: "new-golden-mile-dental",
  },
];

const specialists = [
  {
    id: 8,
    name: "Cardiology Specialists Estepona",
    type: "Cardiology Clinic",
    rating: 4.8,
    reviews: 87,
    address: "Av. España, 50, 29680 Estepona",
    phone: "+34 952 88 99 00",
    hours: "Mon-Fri 10:00-18:00",
    specialties: ["Heart Screening", "ECG", "Echocardiogram", "Stress Tests"],
    doctor: "Dr. Javier Martínez (English/Spanish)",
    slug: "cardiology-specialists-estepona",
  },
  {
    id: 9,
    name: "Estepona Fertility Clinic",
    type: "Fertility Clinic",
    rating: 4.7,
    reviews: 45,
    address: "C. Real, 28, 29680 Estepona",
    phone: "+34 952 79 44 55",
    hours: "Mon-Fri 9:00-18:00",
    specialties: ["Fertility Consultation", "Hormone Testing", "Ovulation Tracking"],
    doctor: "Dr. Laura Gómez (English/Spanish/French)",
    slug: "estepona-fertility-clinic",
  },
  {
    id: 10,
    name: "Estepona Orthopedic Clinic",
    type: "Orthopedic Clinic",
    rating: 4.6,
    reviews: 67,
    address: "C. Puerto, 12, 29680 Estepona",
    phone: "+34 952 80 22 33",
    hours: "Mon-Fri 9:00-19:00",
    specialties: ["Sports Injuries", "Joint Pain", "Arthroscopy", "Rehabilitation"],
    doctor: "Dr. Miguel Ángel Ruiz (English/Spanish)",
    slug: "estepona-orthopedic-clinic",
  },
  {
    id: 11,
    name: "Dermatology Estepona",
    type: "Dermatology Clinic",
    rating: 4.8,
    reviews: 72,
    address: "Av. Andalucía, 8, 29680 Estepona",
    phone: "+34 952 79 66 77",
    hours: "Mon-Fri 10:00-19:00",
    specialties: ["Skin Cancer Screening", "Aesthetic Dermatology", "Acne Treatment", "Mole Mapping"],
    doctor: "Dr. Ana Fernández (English/Spanish/German)",
    slug: "dermatology-estepona",
  },
];

const mapMarkers = [
  { lat: 36.4273, lng: -5.1458, name: "Hospital de la Vega", type: "hospital" },
  { lat: 36.4275, lng: -5.1460, name: "Centro Médico Estepona", type: "hospital" },
  { lat: 36.4269, lng: -5.1455, name: "Estepona Dental Studio", type: "dental" },
  { lat: 36.4280, lng: -5.1470, name: "Cardiology Specialists", type: "specialist" },
];
