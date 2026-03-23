import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const quickLinks = [
  {
    question: "How do I register with a GP?",
    answer: "Get your social security number, then visit your local health center with ID and proof of address.",
  },
  {
    question: "Is private insurance required?",
    answer: "For residency applications, yes. Once working in Spain, you qualify for public healthcare.",
  },
  {
    question: "What's the convenio especial?",
    answer: "A pay-in program (~€60/month) for those who don't qualify for free public healthcare.",
  },
  {
    question: "Can I use my NHS coverage?",
    answer: "UK pensioners can get an S1 form. Others need private insurance for residency.",
  },
];

export function FAQTeaser() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Healthcare FAQ
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              New to Healthcare in Spain?
            </h2>
            
            <p className="text-lg text-teal-100 mb-8">
              Navigating a new healthcare system can be confusing. Our comprehensive FAQ covers everything from insurance requirements to finding English-speaking doctors.
            </p>
            
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-teal-50 transition-colors"
            >
              Read Full FAQ
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.question}
                href="/faq"
                className="p-4 bg-white/10 backdrop-blur rounded-xl hover:bg-white/20 transition-colors group"
              >
                <h3 className="font-semibold mb-1 group-hover:text-teal-100 transition-colors">
                  {link.question}
                </h3>
                <p className="text-sm text-teal-100">{link.answer}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
