import { Star, MapPin, Phone, Clock, Award } from 'lucide-react';

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

export function ProviderSection({ title, subtitle, providers, bgColor = 'bg-white' }: ProviderSectionProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgColor}`} id="providers">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition group">
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
        <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
          <Award className="w-10 h-10 text-blue-600" />
        </div>
        {provider.featured && (
          <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <MapPin className="w-4 h-4" />
          {provider.location}
        </div>
        
        <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-blue-600 transition">
          {provider.name}
        </h3>
        
        <p className="text-sm text-slate-500 mb-3">{provider.type}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="ml-1 font-semibold text-slate-900">{provider.rating}</span>
          </div>
          <span className="text-slate-400">({provider.reviews} reviews)</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {provider.specialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        <a
          href={`/providers/${provider.slug}/`}
          className="block w-full text-center bg-slate-900 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
