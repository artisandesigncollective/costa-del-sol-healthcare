import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

export function Hero({ title, subtitle, description, image }: HeroProps) {
  return (
    <section className="relative bg-gradient-hero text-white">
      {image && (
        <div className="absolute inset-0 opacity-20">
          <Image
            src={image}
            alt={subtitle}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">{subtitle}</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}{" "}
            <span className="text-teal-400">{subtitle}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="#providers" className="btn-primary">
              Browse Providers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/faq" className="btn-secondary">
              Healthcare Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
