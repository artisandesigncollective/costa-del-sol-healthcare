import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const locations = [
  {
    name: "Marbella",
    slug: "marbella",
    description: "Luxury healthcare with world-class facilities",
    providers: 45,
    image: "/images/locations/marbella.jpg",
    highlights: ["Hospital Costa del Sol", "HC Marbella", "Puerto Banús clinics"],
  },
  {
    name: "Málaga",
    slug: "malaga",
    description: "Regional capital with the most comprehensive care",
    providers: 85,
    image: "/images/locations/malaga.jpg",
    highlights: ["Quirónsalud Málaga", "Regional Hospital", "Specialist centers"],
  },
  {
    name: "Estepona",
    slug: "estepona",
    description: "Growing healthcare hub on the New Golden Mile",
    providers: 28,
    image: "/images/locations/estepona.jpg",
    highlights: ["Hospital de la Vega", "Dental clinics", "Specialist care"],
  },
  {
    name: "Fuengirola",
    slug: "fuengirola",
    description: "Popular with British and Irish expats",
    providers: 38,
    image: "/images/locations/fuengirola.jpg",
    highlights: ["Hospital Xanit", "Los Boliches Medical", "Dental tourism"],
  },
];

export function LocationGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {locations.map((location) => (
        <Link
          key={location.slug}
          href={`/${location.slug}`}
          className="group card overflow-hidden hover:shadow-lg transition-all"
        >
          <div className="relative h-40 bg-gradient-to-br from-teal-500 to-blue-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-16 h-16 text-white/30" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-bold text-white">{location.name}</h3>
              <p className="text-sm text-white/80">{location.providers} providers</p>
            </div>
          </div>
          
          <div className="p-5">
            <p className="text-slate-600 text-sm mb-4">{location.description}</p>
            
            <div className="space-y-1 mb-4">
              {location.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                  {highlight}
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-1 text-teal-600 font-medium text-sm group-hover:gap-2 transition-all">
              Explore {location.name}
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
