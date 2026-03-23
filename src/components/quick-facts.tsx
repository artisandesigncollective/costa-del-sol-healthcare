import { MapPin, Building2, Users, Clock, Phone } from "lucide-react";

interface QuickFactsProps {
  population: string;
  hospitals: string;
  clinics: string;
  dentists: string;
  emergencyNumber: string;
}

export function QuickFacts({ population, hospitals, clinics, dentists, emergencyNumber }: QuickFactsProps) {
  const facts = [
    { icon: Users, label: "Population", value: population },
    { icon: Building2, label: "Hospitals", value: hospitals },
    { icon: MapPin, label: "Medical Clinics", value: clinics },
    { icon: Building2, label: "Dental Clinics", value: dentists },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {facts.map((fact) => (
            <div key={fact.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 mb-3">
                <fact.icon className="w-6 h-6" />
              </div>
              <p className="text-2xl font-bold text-slate-900">{fact.value}</p>
              <p className="text-sm text-slate-500">{fact.label}</p>
            </div>
          ))}
          
          <div className="text-center col-span-2 md:col-span-1">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-3">
              <Phone className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-red-600">{emergencyNumber}</p>
            <p className="text-sm text-slate-500">Emergency</p>
          </div>
        </div>
      </div>
    </section>
  );
}
