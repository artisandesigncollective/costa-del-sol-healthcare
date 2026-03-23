import Link from "next/link";
import { Heart, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  locations: [
    { name: "Marbella", href: "/marbella" },
    { name: "Málaga", href: "/malaga" },
    { name: "Estepona", href: "/estepona" },
    { name: "Fuengirola", href: "/fuengirola" },
  ],
  resources: [
    { name: "Healthcare FAQ", href: "/faq" },
    { name: "Insurance Guide", href: "/guides/insurance" },
    { name: "Moving Checklist", href: "/guides/moving-checklist" },
    { name: "Emergency Numbers", href: "/emergency" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                Costa del Sol
                <span className="text-teal-400">Healthcare</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 mb-6 max-w-sm">
              Your trusted directory for private healthcare providers on Spain's Costa del Sol. Helping expats find quality medical care since 2024.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>Costa del Sol, Spain</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-500" />
                <a href="mailto:info@costadelsolhealthcare.com" className="hover:text-white transition-colors">
                  info@costadelsolhealthcare.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Locations</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Costa del Sol Healthcare Directory. All rights reserved.
          </p>
          
          <p className="text-sm text-slate-500">
            Information provided for guidance only. Always verify with providers.
          </p>
        </div>
      </div>
    </footer>
  );
}
