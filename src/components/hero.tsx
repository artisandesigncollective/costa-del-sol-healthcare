import { Search, MapPin } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

export function Hero({ title, subtitle, description, image }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-100">Costa del Sol, Spain</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {title}
            <span className="block text-blue-300">{subtitle}</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#providers"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              <Search className="w-5 h-5" />
              Find Healthcare
            </a>
            <a
              href="/faq/"
              className="inline-flex items-center gap-2 bg-blue-800/50 text-white border border-blue-400/30 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Healthcare Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
