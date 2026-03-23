import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-100 flex items-center justify-center">
          <Mail className="w-8 h-8 text-teal-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Can't Find What You're Looking For?
        </h2>
        
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          We're constantly updating our directory. If you know of a great healthcare provider we should include, or if you have questions about healthcare in Costa del Sol, get in touch.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href="/suggest"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
          >
            Suggest a Provider
          </Link>
        </div>
      </div>
    </section>
  );
}
