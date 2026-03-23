import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

interface RelatedLocation {
  name: string;
  slug: string;
  distance: string;
}

interface RelatedLocationsProps {
  currentLocation: string;
  locations: RelatedLocation[];
}

export function RelatedLocations({ currentLocation, locations }: RelatedLocationsProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Nearby Healthcare Locations
        </h2>
        
        <div className="grid sm:grid-cols-3 gap-4">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/${location.slug}`}
              className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {location.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-slate-500">
                  <MapPin className="w-3 h-3" />
                  {location.distance}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-teal-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
