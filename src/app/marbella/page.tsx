import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ProviderGrid } from "@/components/provider-grid";
import { QuickFacts } from "@/components/quick-facts";
import { LocationMap } from "@/components/location-map";
import { RelatedLocations } from "@/components/related-locations";

export const metadata: Metadata = {
  title: "Healthcare in Marbella | Private Hospitals & English-Speaking Doctors",
  description: "Find the best private hospitals, dental clinics, and English-speaking doctors in Marbella. Comprehensive healthcare guide for expats in Marbella, Puerto Banús, and surrounding areas.",
  keywords: ["private hospital marbella", "english speaking doctor marbella", "dental clinic marbella", "marbella healthcare", "hospital costa del sol marbella"],
  openGraph: {
    title: "Healthcare in Marbella",
    description: "Complete guide to private healthcare in Marbella",
    type: "website",
  },
};

export default function MarbellaPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Healthcare in"
        subtitle="Marbella"
        description="Marbella offers world-class private healthcare facilities catering to international residents and visitors. From state-of-the-art hospitals to specialist clinics, find everything you need for your health and wellness."
        image="/images/locations/marbella-hero.jpg"
      />

      <QuickFacts
        population="147,000"
        hospitals="4 Private Hospitals"
        clinics="50+ Medical Clinics"
        dentists="30+ Dental Practices"
        emergencyNumber="+34 952 86 71 50"
      />

      <ProviderGrid
        title="Hospitals in Marbella"
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
            About Healthcare in Marbella
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="mb-4">
              Marbella is home to some of the finest private healthcare facilities in Andalusia. The city attracts thousands of expats and international visitors each year, which has driven demand for high-quality, English-speaking medical services.
            </p>
            <p className="mb-4">
              The flagship <strong>Hospital Costal del Sol</strong> is part of the Quirónsalud network and offers comprehensive medical services with English-speaking staff. Located just off the A-7 motorway, it's easily accessible from Puerto Banús, Nueva Andalucía, and surrounding areas.
            </p>
            <p className="mb-4">
              For specialized care, <strong>HC Marbella International Hospital</strong> is renowned for fertility treatments, oncology, and plastic surgery. Many of their doctors trained in the UK or US and are fluent in English.
            </p>
            <p>
              Marbella also has excellent dental care options, with many clinics offering services at 40-60% less than UK prices. Most dental clinics in the Golden Mile and Puerto Banús areas specifically cater to international patients.
            </p>
          </div>
        </div>
      </section>

      <LocationMap
        title="Healthcare Locations in Marbella"
        center={{ lat: 36.5103, lng: -4.8859 }}
        markers={mapMarkers}
      />

      <RelatedLocations
        currentLocation="Marbella"
        locations={[
          { name: "Estepona", slug: "estepona", distance: "30 km west" },
          { name: "Fuengirola", slug: "fuengirola", distance: "25 km east" },
          { name: "Málaga", slug: "malaga", distance: "60 km east" },
        ]}
      />
    </main>
  );
}

const hospitals = [
  {
    id: 1,
    name: "Hospital Costal del Sol",
    type: "Private Hospital",
    rating: 4.8,
    reviews: 324,
    address: "Autovía A-7, Km 187, 29603 Marbella",
    phone: "+34 952 86 71 50",
    hours: "24/7 Emergency",
    specialties: ["Emergency Care", "Surgery", "Maternity", "Cardiology", "Oncology"],
    insurance: ["Sanitas", "Adeslas", "DKV", "Cigna", "AXA"],
    slug: "hospital-costa-del-sol-marbella",
  },
  {
    id: 2,
    name: "HC Marbella International Hospital",
    type: "Private Hospital",
    rating: 4.9,
    reviews: 256,
    address: "Av. Ernesto Sarti, 5, 29660 Marbella",
    phone: "+34 952 90 89 00",
    hours: "Mon-Fri 8:00-20:00",
    specialties: ["Fertility", "Oncology", "Plastic Surgery", "Urology", "Gynecology"],
    insurance: ["Sanitas", "DKV", "Cigna", "Bupa Global"],
    slug: "hc-marbella-international",
  },
  {
    id: 3,
    name: "Clínica Premium Marbella",
    type: "Private Clinic",
    rating: 4.6,
    reviews: 128,
    address: "C. Ricardo Soriano, 19, 29601 Marbella",
    phone: "+34 952 77 80 00",
    hours: "Mon-Sat 9:00-21:00",
    specialties: ["General Medicine", "Aesthetic Medicine", "Nutrition", "Physiotherapy"],
    insurance: ["Sanitas", "Adeslas"],
    slug: "clinica-premium-marbella",
  },
  {
    id: 4,
    name: "Marbella High Care",
    type: "Medical Center",
    rating: 4.5,
    reviews: 89,
    address: "C. José Meliá, 2, 29602 Marbella",
    phone: "+34 952 82 62 00",
    hours: "Mon-Fri 9:00-20:00, Sat 10:00-14:00",
    specialties: ["Family Medicine", "Pediatrics", "Dermatology", "Psychology"],
    insurance: ["Sanitas", "Adeslas", "DKV"],
    slug: "marbella-high-care",
  },
];

const dentists = [
  {
    id: 5,
    name: "Clínica Dental Rocío",
    type: "Dental Clinic",
    rating: 4.9,
    reviews: 189,
    address: "C. Rodolfo Gómez, 2, 29600 Marbella",
    phone: "+34 952 77 15 00",
    hours: "Mon-Fri 9:00-20:00, Sat 10:00-14:00",
    specialties: ["Dental Implants", "Cosmetic Dentistry", "Orthodontics", "Invisalign"],
    features: ["English-speaking staff", "Free consultation", "Payment plans available"],
    slug: "clinica-dental-rocio-marbella",
  },
  {
    id: 6,
    name: "Smile Design Marbella",
    type: "Dental Clinic",
    rating: 4.8,
    reviews: 145,
    address: "Av. Ricardo Soriano, 31, 29601 Marbella",
    phone: "+34 952 86 52 34",
    hours: "Mon-Fri 9:00-20:00",
    specialties: ["Veneers", "Teeth Whitening", "Smile Makeovers", "All-on-4"],
    features: ["Digital smile design", "Same-day crowns", "Sedation available"],
    slug: "smile-design-marbella",
  },
  {
    id: 7,
    name: "Marbella Dental Implant Center",
    type: "Dental Clinic",
    rating: 4.9,
    reviews: 112,
    address: "Puerto Banús, Local 5, 29660 Marbella",
    phone: "+34 952 81 23 45",
    hours: "Mon-Sat 9:00-18:00",
    specialties: ["Full Mouth Rehabilitation", "Zygomatic Implants", "Bone Grafting"],
    features: ["Specialist oral surgeon", "CT scanner on-site", "Guarantee on implants"],
    slug: "marbella-dental-implant-center",
  },
];

const specialists = [
  {
    id: 8,
    name: "Marbella Dermatology Institute",
    type: "Dermatology Clinic",
    rating: 4.9,
    reviews: 156,
    address: "C. Camilo José Cela, 12, 29602 Marbella",
    phone: "+34 952 82 44 55",
    hours: "Mon-Fri 10:00-19:00",
    specialties: ["Skin Cancer Screening", "Aesthetic Treatments", "Mohs Surgery", "Acne Treatment"],
    doctor: "Dr. Elena Martínez (English/Spanish)",
    slug: "marbella-dermatology-institute",
  },
  {
    id: 9,
    name: "Costa del Sol Fertility Center",
    type: "Fertility Clinic",
    rating: 4.9,
    reviews: 201,
    address: "Av. Ernesto Sarti, 5, 29660 Marbella",
    phone: "+34 952 90 89 00",
    hours: "Mon-Fri 8:00-20:00",
    specialties: ["IVF", "Egg Freezing", "Fertility Preservation", "PGT Testing"],
    doctor: "Dr. Francisco Ruiz (English/Spanish/German)",
    slug: "costa-del-sol-fertility-center",
  },
  {
    id: 10,
    name: "Marbella Cardiovascular Center",
    type: "Cardiology Clinic",
    rating: 4.8,
    reviews: 98,
    address: "C. Gregorio Marañón, 4, 29603 Marbella",
    phone: "+34 952 77 66 11",
    hours: "Mon-Fri 9:00-18:00",
    specialties: ["Heart Screening", "ECG", "Echocardiogram", "Stress Tests"],
    doctor: "Dr. James Wilson (English/Spanish)",
    slug: "marbella-cardiovascular-center",
  },
  {
    id: 11,
    name: "Marbella Orthopedic Clinic",
    type: "Orthopedic Clinic",
    rating: 4.7,
    reviews: 134,
    address: "C. Ramón Gómez de la Serna, 8, 29602 Marbella",
    phone: "+34 952 77 22 33",
    hours: "Mon-Fri 9:00-20:00",
    specialties: ["Joint Replacement", "Sports Injuries", "Arthroscopy", "Spine Surgery"],
    doctor: "Dr. Carlos Navarro (English/Spanish/French)",
    slug: "marbella-orthopedic-clinic",
  },
];

const mapMarkers = [
  { lat: 36.5103, lng: -4.8859, name: "Hospital Costal del Sol", type: "hospital" },
  { lat: 36.4857, lng: -4.9522, name: "HC Marbella", type: "hospital" },
  { lat: 36.5099, lng: -4.8864, name: "Clínica Dental Rocío", type: "dental" },
  { lat: 36.4856, lng: -4.9608, name: "Puerto Banús Dental", type: "dental" },
];
