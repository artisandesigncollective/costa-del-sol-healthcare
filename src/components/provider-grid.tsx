"use client";

import { MapPin, Star, Phone, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Provider {
  id: number;
  name: string;
  type: string;
  rating: number;
  reviews: number;
  address: string;
  phone: string;
  hours: string;
  specialties: string[];
  insurance?: string[];
  features?: string[];
  doctor?: string;
  slug: string;
  note?: string;
}

interface ProviderGridProps {
  title: string;
  providers: Provider[];
  showFilters?: boolean;
  bgColor?: string;
}

export function ProviderGrid({ title, providers, showFilters, bgColor = "bg-white" }: ProviderGridProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
            <p className="text-slate-600">
              {providers.length} providers found
            </p>
          </div>
          
          {showFilters && (
            <div className="mt-4 sm:mt-0 flex gap-2">
              <select className="px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-700">
                <option>All Types</option>
                <option>Hospital</option>
                <option>Clinic</option>
                <option>Dental</option>
              </select>
              <select className="px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-700">
                <option>Sort by Rating</option>
                <option>Most Reviews</option>
                <option>Name A-Z</option>
              </select>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="card p-6 group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full mb-2">
            {provider.type}
          </span>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
            {provider.name}
          </h3>
          {provider.note && (
            <p className="text-sm text-amber-600 mt-1">{provider.note}</p>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-slate-900">{provider.rating}</span>
          <span className="text-sm text-slate-500">({provider.reviews})</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2 text-slate-600">
          <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-slate-400" />
          <span className="text-sm">{provider.address}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <Phone className="w-4 h-4 text-slate-400" />
          <span className="text-sm">{provider.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <Clock className="w-4 h-4 text-slate-400" />
          <span className="text-sm">{provider.hours}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-slate-700 mb-2">Specialties:</p>
        <div className="flex flex-wrap gap-1">
          {provider.specialties.slice(0, 4).map((specialty) => (
            <span
              key={specialty}
              className="px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {provider.doctor && (
        <p className="text-sm text-slate-600 mb-4">
          <span className="font-medium">Doctor: </span>
          {provider.doctor}
        </p>
      )}

      {provider.features && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {provider.features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1 text-xs text-teal-700"
              >
                <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}

      <Link
        href={`/providers/${provider.slug}`}
        className="inline-flex items-center gap-1 text-teal-600 font-medium hover:text-teal-700 transition-colors"
      >
        View Details
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
