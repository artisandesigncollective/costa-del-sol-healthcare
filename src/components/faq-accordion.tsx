"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border rounded-xl overflow-hidden transition-colors ${
            openIndex === index ? "border-teal-500 bg-teal-50/30" : "border-slate-200 bg-white"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className={`font-semibold pr-4 ${openIndex === index ? "text-teal-900" : "text-slate-900"}`}>
              {item.question}
            </span>
            <span className="flex-shrink-0">
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-teal-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </span>
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-6">
              <div className="prose prose-slate max-w-none">
                {item.answer.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-slate-600 mb-4 last:mb-0 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
