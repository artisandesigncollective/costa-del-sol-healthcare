import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

interface Guide {
  title: string;
  description: string;
  slug: string;
}

interface RelatedGuidesProps {
  guides: Guide[];
}

export function RelatedGuides({ guides }: RelatedGuidesProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Related Guides
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-teal-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-teal-600" />
              </div>
              
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                {guide.title}
              </h3>
              
              <p className="text-sm text-slate-600 mb-4">{guide.description}</p>
              
              <div className="flex items-center gap-1 text-sm font-medium text-teal-600">
                Read Guide
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
