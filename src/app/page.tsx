import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { LocationGrid } from "@/components/location-grid";
import { ProviderSection } from "@/components/provider-section";
import { SearchBar } from "@/components/search-bar";
import { FAQTeaser } from "@/components/faq-teaser";

export const metadata: Metadata = {
  title: "Costa del Sol Healthcare Directory | Private Clinics & English-Speaking Doctors",
  description: "Find private hospitals, dental clinics, and English-speaking doctors in Costa del Sol. Comprehensive healthcare directory for expats in Marbella, Málaga, Estepona & Fuengirola.",
  keywords: ["private healthcare costa del sol", "english speaking doctors marbella", "private hospitals malaga", "dental clinics spain", "expat healthcare spain"],
  openGraph: {
    title: "Costa del Sol Healthcare Directory",
    description: "Your complete guide to private healthcare on Spain's Costa del Sol",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Healthcare Directory"
        subtitle="Costa del Sol"
        description="Find trusted private hospitals, dental clinics, and English-speaking doctors across Spain's Sunshine Coast. From Marbella to Málaga, we've got your healthcare needs covered."
      />

      {/* Search Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SearchBar 
            placeholder="Search hospitals, clinics, dentists, specialists..."
            locations={["All Locations", "Marbella", "Málaga", "Estepona", "Fuengirola"]}
          />
        </div>
      </section>

      {/* Featured Providers */}
      <ProviderSection 
        title="Featured Private Hospitals"
        subtitle="World-class healthcare facilities with English-speaking staff"
        providers={featuredHospitals}
      />

      <ProviderSection 
        title="Top Dental Clinics"
        subtitle="Quality dental care at competitive prices"
        providers={featuredDentists}
        bgColor="bg-slate-50"
      />

      <ProviderSection 
        title="Specialist Clinics"
        subtitle="Expert care in cardiology, dermatology, orthopedics & more"
        providers={featuredSpecialists}
      />

      {/* Location Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Healthcare by Location
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore healthcare providers in your area
            </p>
          </div>
          <LocationGrid />
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Private Health Insurance
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Most private healthcare providers in Costa del Sol work with major international insurance companies including Sanitas, Adeslas, DKV, and Cigna. Many also offer direct billing for UK NHS referrals and private Bupa/AXA plans.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span className="px-4 py-2 bg-slate-100 rounded-full">Sanitas</span>
            <span className="px-4 py-2 bg-slate-100 rounded-full">Adeslas</span>
            <span className="px-4 py-2 bg-slate-100 rounded-full">DKV</span>
            <span className="px-4 py-2 bg-slate-100 rounded-full">Cigna</span>
            <span className="px-4 py-2 bg-slate-100 rounded-full">AXA PPP</span>
            <span className="px-4 py-2 bg-slate-100 rounded-full">Bupa Global</span>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <FAQTeaser />
    </main>
  );
}

const featuredHospitals = [
  {
    id: 1,
    name: "Hospital Costal del Sol",
    location: "Marbella",
    type: "Private Hospital",
    image: "/images/hospitals/costa-del-sol-hospital.jpg",
    rating: 4.8,
    reviews: 324,
    specialties: ["Emergency Care", "Surgery", "Maternity", "Cardiology"],
    phone: "+34 952 86 71 50",
    address: "Autovía A-7, Km 187, 29603 Marbella",
    slug: "hospital-costa-del-sol-marbella",
    featured: true,
  },
  {
    id: 2,
    name: "HC Marbella International Hospital",
    location: "Marbella",
    type: "Private Hospital",
    image: "/images/hospitals/hc-marbella.jpg",
    rating: 4.9,
    reviews: 256,
    specialties: ["Fertility", "Oncology", "Plastic Surgery", "Urology"],
    phone: "+34 952 90 89 00",
    address: "Av. Ernesto Sarti, 5, 29660 Marbella",
    slug: "hc-marbella-international",
    featured: true,
  },
  {
    id: 3,
    name: "Quirónsalud Málaga",
    location: "Málaga",
    type: "Private Hospital",
    image: "/images/hospitals/quironsalud-malaga.jpg",
    rating: 4.7,
    reviews: 412,
    specialties: ["Orthopedics", "Neurology", "Oncology", "Pediatrics"],
    phone: "+34 952 36 76 00",
    address: "Av. del Pintor Joaquín Sorolla, 117, 29016 Málaga",
    slug: "quironsalud-malaga",
    featured: true,
  },
  {
    id: 4,
    name: "Hospital de la Vega",
    location: "Estepona",
    type: "Private Hospital",
    image: "/images/hospitals/vega-estepona.jpg",
    rating: 4.6,
    reviews: 178,
    specialties: ["General Medicine", "Surgery", "Rehabilitation"],
    phone: "+34 952 80 71 00",
    address: "C. José Navarro, 10, 29680 Estepona",
    slug: "hospital-vega-estepona",
    featured: false,
  },
];

const featuredDentists = [
  {
    id: 5,
    name: "Clínica Dental Rocío",
    location: "Marbella",
    type: "Dental Clinic",
    image: "/images/dentists/rocio-dental.jpg",
    rating: 4.9,
    reviews: 189,
    specialties: ["Implants", "Cosmetic Dentistry", "Orthodontics"],
    phone: "+34 952 77 15 00",
    address: "C. Rodolfo Gómez, 2, 29600 Marbella",
    slug: "clinica-dental-rocio-marbella",
    featured: true,
  },
  {
    id: 6,
    name: "Smile Clinic Fuengirola",
    location: "Fuengirola",
    type: "Dental Clinic",
    image: "/images/dentists/smile-fuengirola.jpg",
    rating: 4.8,
    reviews: 134,
    specialties: ["Veneers", "Teeth Whitening", "Emergency Dental"],
    phone: "+34 952 66 33 22",
    address: "Av. Ramón y Cajal, 20, 29640 Fuengirola",
    slug: "smile-clinic-fuengirola",
    featured: true,
  },
  {
    id: 7,
    name: "Dental Care Málaga",
    location: "Málaga",
    type: "Dental Clinic",
    image: "/images/dentists/care-malaga.jpg",
    rating: 4.7,
    reviews: 223,
    specialties: ["All-on-4", "Invisalign", "Root Canal"],
    phone: "+34 951 25 78 90",
    address: "C. Granada, 45, 29015 Málaga",
    slug: "dental-care-malaga",
    featured: false,
  },
  {
    id: 8,
    name: "Estepona Dental Studio",
    location: "Estepona",
    type: "Dental Clinic",
    image: "/images/dentists/estepona-studio.jpg",
    rating: 4.8,
    reviews: 98,
    specialties: ["Dental Implants", "Crowns & Bridges", "Hygiene"],
    phone: "+34 952 80 54 32",
    address: "C. Caridad, 15, 29680 Estepona",
    slug: "estepona-dental-studio",
    featured: false,
  },
];

const featuredSpecialists = [
  {
    id: 9,
    name: "Marbella Dermatology Institute",
    location: "Marbella",
    type: "Dermatology Clinic",
    image: "/images/specialists/marbella-derm.jpg",
    rating: 4.9,
    reviews: 156,
    specialties: ["Skin Cancer Screening", "Aesthetic Treatments", "Mohs Surgery"],
    phone: "+34 952 82 44 55",
    address: "C. Camilo José Cela, 12, 29602 Marbella",
    slug: "marbella-dermatology-institute",
    featured: true,
  },
  {
    id: 10,
    name: "Costa del Sol Fertility Center",
    location: "Marbella",
    type: "Fertility Clinic",
    image: "/images/specialists/fertility-center.jpg",
    rating: 4.9,
    reviews: 201,
    specialties: ["IVF", "Egg Freezing", "Fertility Preservation"],
    phone: "+34 952 90 89 00",
    address: "Av. Ernesto Sarti, 5, 29660 Marbella",
    slug: "costa-del-sol-fertility-center",
    featured: true,
  },
  {
    id: 11,
    name: "Orthopedic Center Málaga",
    location: "Málaga",
    type: "Orthopedic Clinic",
    image: "/images/specialists/ortho-malaga.jpg",
    rating: 4.7,
    reviews: 134,
    specialties: ["Joint Replacement", "Sports Injuries", "Spine Surgery"],
    phone: "+34 952 22 33 44",
    address: "Av. Andalucía, 28, 29007 Málaga",
    slug: "orthopedic-center-malaga",
    featured: false,
  },
  {
    id: 12,
    name: "Cardiology Specialists Estepona",
    location: "Estepona",
    type: "Cardiology Clinic",
    image: "/images/specialists/cardio-estepona.jpg",
    rating: 4.8,
    reviews: 87,
    specialties: ["Heart Screening", "ECG", "Stress Tests"],
    phone: "+34 952 88 99 00",
    address: "Av. España, 50, 29680 Estepona",
    slug: "cardiology-specialists-estepona",
    featured: false,
  },
];
