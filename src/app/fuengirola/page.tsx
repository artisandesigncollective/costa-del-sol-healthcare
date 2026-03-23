import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ProviderGrid } from "@/components/provider-grid";
import { QuickFacts } from "@/components/quick-facts";
import { LocationMap } from "@/components/location-map";
import { RelatedLocations } from "@/components/related-locations";

export const metadata: Metadata = {
  title: "Healthcare in Fuengirola | Private Clinics & Medical Centers",
  description: "Find private hospitals, dental clinics, and English-speaking doctors in Fuengirola. Healthcare directory for expats in Los Boliches, Torreblanca, and surrounding areas.",
  keywords: ["private clinic fuengirola", "english speaking doctor fuengirola", "dental clinic fuengirola", "fuengirola healthcare", "los boliches medical center"],
  openGraph: {
    title: "Healthcare in Fuengirola",
    description: "Complete guide to private healthcare in Fuengirola",
    type: "website",
  },
};

export default function FuengirolaPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Healthcare in"
        subtitle="Fuengirola"
        description="Fuengirola combines a large international community with excellent healthcare options. From the central Centro Médico El Cid to dental clinics along the Paseo Marítimo, access quality care with English-speaking professionals."
        image="/images/locations/fuengirola-hero.jpg"
      />

      <QuickFacts
        population="82,000"
        hospitals="2 Private Hospitals"
        clinics="35+ Medical Clinics"
        dentists="25+ Dental Practices"
        emergencyNumber="+34 952 46 72 00"
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
            About Healthcare in Fuengirola
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="mb-4">
              Fuengirola is one of the Costa del Sol's most popular destinations for expats, particularly those from the UK and Ireland. The town has developed a robust healthcare infrastructure to serve its large international community.
            </p>
            <p className="mb-4">
              The <strong>Hospital Xanit</strong>, located just outside town in Benalmádena, serves as the main private hospital for the area. It offers comprehensive services and has an excellent reputation among expats for its English-speaking staff and modern facilities.
            </p>
            <p className="mb-4">
              Fuengirola's <strong>Centro Médico El Cid</strong> in the town center is a popular choice for day-to-day healthcare needs. Many British-trained doctors work here, making it especially welcoming for UK expats.
            </p>
            <p>
              The Los Boliches area has particularly high concentration of English-speaking healthcare providers, reflecting the neighborhood's popularity with British and Irish residents. Dental clinics here often advertise in English and accept UK dental insurance.
            </p>
          </div>
        </div>
      </section>

      <LocationMap
        title="Healthcare Locations in Fuengirola"
        center={{ lat: 36.5399, lng: -4.6248 }}
        markers={mapMarkers}
      />

      <RelatedLocations
        currentLocation="Fuengirola"
        locations={[
          { name: "Marbella", slug: "marbella", distance: "25 km west" },
          { name: "Málaga", slug: "malaga", distance: "35 km east" },
          { name: "Benalmádena", slug: "malaga", distance: "10 km east" },
        ]}
      />
    </main>
  );
}

const hospitals = [
  {
    id: 1,
    name: "Hospital Xanit",
    type: "Private Hospital",
    rating: 4.7,
    reviews: 245,
    address: "Av. de los Argonautas, 8, 29631 Benalmádena",
    phone: "+34 952 33 63 00",
    hours: "24/7 Emergency",
    specialties: ["General Medicine", "Surgery", "Maternity", "Emergency Care", "Oncology"],
    insurance: ["Sanitas", "Adeslas", "DKV", "Cigna", "AXA"],
    slug: "hospital-xanit",
    note: "5 km from Fuengirola center",
  },
  {
    id: 2,
    name: "Centro Médico El Cid",
    type: "Medical Center",
    rating: 4.6,
    reviews: 178,
    address: "C. El Cid, 15, 29640 Fuengirola",
    phone: "+34 952 46 72 00",
    hours: "Mon-Fri 8:00-21:00, Sat 9:00-14:00",
    specialties: ["Family Medicine", "Pediatrics", "Cardiology", "Dermatology", "Physiotherapy"],
    insurance: ["Sanitas", "Adeslas", "DKV", "Cigna"],
    slug: "centro-medico-el-cid",
  },
  {
    id: 3,
    name: "Clínica Fuengirola",
    type: "Private Clinic",
    rating: 4.5,
    reviews: 134,
    address: "Av. Ramón y Cajal, 45, 29640 Fuengirola",
    phone: "+34 952 47 33 22",
    hours: "Mon-Fri 9:00-20:00",
    specialties: ["General Practice", "Gynecology", "Urology", "Digestive Health"],
    insurance: ["Sanitas", "Adeslas", "DKV"],
    slug: "clinica-fuengirola",
  },
  {
    id: 4,
    name: "Los Boliches Medical Center",
    type: "Medical Center",
    rating: 4.7,
    reviews: 156,
    address: "C. Francisco Cano, 12, 29640 Fuengirola",
    phone: "+34 952 58 11 22",
    hours: "Mon-Fri 9:00-19:00, Sat 10:00-13:00",
    specialties: ["General Medicine", "Nursing Services", "Vaccinations", "Travel Medicine"],
    insurance: ["Sanitas", "Adeslas", "DKV", "Cigna"],
    slug: "los-boliches-medical-center",
  },
];

const dentists = [
  {
    id: 5,
    name: "Smile Clinic Fuengirola",
    type: "Dental Clinic",
    rating: 4.8,
    reviews: 134,
    address: "Av. Ramón y Cajal, 20, 29640 Fuengirola",
    phone: "+34 952 66 33 22",
    hours: "Mon-Fri 9:00-20:00, Sat 10:00-14:00",
    specialties: ["Veneers", "Teeth Whitening", "Emergency Dental", "Implants"],
    features: ["English-speaking staff", "NHS patients welcome", "0% finance"],
    slug: "smile-clinic-fuengirola",
  },
  {
    id: 6,
    name: "Fuengirola Dental Care",
    type: "Dental Clinic",
    rating: 4.7,
    reviews: 112,
    address: "C. de la Cruz, 8, 29640 Fuengirola",
    phone: "+34 952 47 11 33",
    hours: "Mon-Sat 9:00-20:00",
    specialties: ["General Dentistry", "Root Canal", "Crowns", "Hygiene"],
    features: ["Same-day emergency", "Digital X-rays", "Sedation available"],
    slug: "fuengirola-dental-care",
  },
  {
    id: 7,
    name: "Los Boliches Dental",
    type: "Dental Clinic",
    rating: 4.9,
    reviews: 98,
    address: "C. Francisco Cano, 25, 29640 Fuengirola",
    phone: "+34 952 58 44 55",
    hours: "Mon-Fri 9:00-18:00",
    specialties: ["Dental Implants", "All-on-4", "Cosmetic Dentistry", "Orthodontics"],
    features: ["UK-trained dentist", "NHS receipts provided", "Free consultation"],
    slug: "los-boliches-dental",
  },
];

const specialists = [
  {
    id: 8,
    name: "Fuengirola Physiotherapy Center",
    type: "Physiotherapy Clinic",
    rating: 4.8,
    reviews: 167,
    address: "Av. Ramón y Cajal, 30, 29640 Fuengirola",
    phone: "+34 952 47 88 99",
    hours: "Mon-Fri 9:00-20:00, Sat 10:00-14:00",
    specialties: ["Sports Rehabilitation", "Back Pain", "Post-Surgery Rehab", "Massage Therapy"],
    doctor: "Mark Thompson (English) / Ana García (Spanish)",
    slug: "fuengirola-physiotherapy",
  },
  {
    id: 9,
    name: "Costa del Sol Eye Clinic",
    type: "Ophthalmology Clinic",
    rating: 4.7,
    reviews: 89,
    address: "C. El Cid, 8, 29640 Fuengirola",
    phone: "+34 952 46 55 66",
    hours: "Mon-Fri 10:00-18:00",
    specialties: ["Cataract Surgery", "Glaucoma Treatment", "Eye Exams", "Contact Lenses"],
    doctor: "Dr. Pedro Martínez (English/Spanish)",
    slug: "costa-del-sol-eye-clinic",
  },
  {
    id: 10,
    name: "Fuengirola Women's Health Center",
    type: "Gynecology Clinic",
    rating: 4.8,
    reviews: 134,
    address: "Av. Jesús Santos Rein, 12, 29640 Fuengirola",
    phone: "+34 952 47 22 33",
    hours: "Mon-Fri 9:00-19:00",
    specialties: ["Women's Health", "Fertility", "Menopause", "Prenatal Care"],
    doctor: "Dr. María López (English/Spanish/French)",
    slug: "fuengirola-womens-health",
  },
  {
    id: 11,
    name: "Torreblanca Medical Specialists",
    type: "Multi-Specialty Clinic",
    rating: 4.6,
    reviews: 78,
    address: "C. Asturias, 45, 29640 Fuengirola",
    phone: "+34 952 66 11 22",
    hours: "Mon-Fri 9:00-20:00",
    specialties: ["Cardiology", "Dermatology", "Endocrinology", "Rheumatology"],
    doctor: "Multiple specialists available",
    slug: "torreblanca-medical-specialists",
  },
];

const mapMarkers = [
  { lat: 36.5967, lng: -4.5667, name: "Hospital Xanit", type: "hospital" },
  { lat: 36.5399, lng: -4.6248, name: "Centro Médico El Cid", type: "hospital" },
  { lat: 36.5395, lng: -4.6255, name: "Smile Clinic", type: "dental" },
  { lat: 36.5412, lng: -4.6200, name: "Los Boliches Dental", type: "dental" },
];
