import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Phone, ArrowRight } from "lucide-react";

interface Provider {
  id: number;
  name: string;
  location: string;
  type: string;
  image?: string;
  rating: number;
  reviews: number;
  specialties: string[];
  phone: string;
  address: string;
  slug: string;
  featured?: boolean;
}

interface ProviderSectionProps {
  title: string;
  subtitle?: string;
  providers: Provider[];
  bgColor?: string;
}

export function ProviderSection({ title, subtitle, providers, bgColor = "bg-white" }: ProviderSectionProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgColor}`} id="providers">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{title}</h2>
          {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${providers[0]?.location.toLowerCase()}`}
            className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors"
          >
            View all {providers[0]?.type.toLowerCase()}s
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className={`group ${provider.featured ? "card-featured" : "card"}`}>
      {provider.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
            Featured
          </span>
        </div>
      )}
      
      <div className="relative h-48 bg-slate-200">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-block px-2 py-1 bg-white/90 text-slate-900 text-xs font-medium rounded">
            {provider.type}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
            {provider.name}
          </h3>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <MapPin className="w-3 h-3 text-slate-400" />
          <span className="text-sm text-slate-500">{provider.location}</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="ml-1 text-sm font-medium text-slate-900">{provider.rating}</span>
          </div>
          <span className="text-sm text-slate-500">({provider.reviews} reviews)</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {provider.specialties.slice(0, 3).map((specialty) => (
            <span key={specialty} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
              {specialty}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
            <Phone className="w-4 h-4 text-slate-400" />
            {provider.phone}
          </div>
          
          <Link
            href={`/providers/${provider.slug}`}
            className="block w-full text-center py-2 bg-teal-50 text-teal-700 font-medium rounded-lg hover:bg-teal-100 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
