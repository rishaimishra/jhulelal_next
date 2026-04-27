"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
          >
            <span className="text-lg font-bold text-primary">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="text-accent shrink-0" size={20} />
            ) : (
              <ChevronDown className="text-gray-400 shrink-0" size={20} />
            )}
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 py-5 border-t border-gray-100" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
