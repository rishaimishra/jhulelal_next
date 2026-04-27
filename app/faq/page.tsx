import React from "react";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import { HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    question: "What types of construction projects do you handle?",
    answer: "Jhulelal Builders handles a wide range of projects, including residential complexes, individual luxury villas, commercial buildings, retail spaces, and specialized structures like temples and spiritual landmarks. With 50+ years of legacy, we have the expertise to manage projects of varying scales and complexities.",
  },
  {
    question: "How long does a typical residential project take to complete?",
    answer: "The timeline depends on the scale and complexity of the project. Generally, a single residential villa takes 10–14 months, while larger residential complexes can take 24–36 months. We pride ourselves on our 'On Time Delivery' and provide a detailed timeline during the planning phase.",
  },
  {
    question: "Do you provide architectural design services separately?",
    answer: "Yes, we offer comprehensive architectural and building design services as standalone offerings. You can hire us for just the design phase, which includes conceptualization, 3D rendering, and structural planning, or opt for our full-service design-build package.",
  },
  {
    question: "Are your projects RERA approved?",
    answer: "Absolutely. All our ongoing and upcoming residential projects are registered and approved under the Real Estate Regulation Act (RERA). We ensure full compliance with all local building codes and government regulations to protect our clients' interests.",
  },
  {
    question: "What materials do you use for construction?",
    answer: "We use only premium, certified building materials. This includes high-grade TMT steel, superior quality cement (like ACC or Ultratech), and branded fittings for plumbing and electrical work. Our 'Quality in Every Brick' commitment means we never compromise on the structural integrity of our builds.",
  },
  {
    question: "Can I customize the design of my home during the construction process?",
    answer: "We offer flexibility for minor customizations during the early stages of construction. However, major structural changes are discouraged once the foundation and skeleton are complete to maintain structural integrity. Our design team works closely with you before construction begins to minimize the need for changes later.",
  },
  {
    question: "Do you offer post-construction maintenance?",
    answer: "Yes, we provide a standard warranty on structural components and offer maintenance support for a specified period after handover. We believe in building long-term relationships with our clients and are always available for any assistance required after you move in.",
  },
  {
    question: "What is your payment structure for new projects?",
    answer: "Our payment schedules are typically milestone-based. This means payments are linked to specific stages of construction progress (e.g., foundation completion, slab casting, brickwork, finishing). This ensures transparency and gives you peace of mind that you're paying for work completed.",
  },
];

const FAQPage = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Find answers to common queries about our processes, services, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-32">
                <div className="bg-accent/20 p-4 rounded-2xl text-accent w-fit mb-6">
                  <HelpCircle size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Still have questions?</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  If you can't find the answer you're looking for, please don't hesitate to contact our support team. We're here to help!
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-primary/95 transition-all group shadow-lg"
                >
                  <MessageSquare size={20} />
                  Contact Support
                </Link>
              </div>
            </div>
            <div className="lg:w-2/3">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
               <h4 className="text-xl font-bold text-primary mb-2">Call Us</h4>
               <p className="text-gray-600 mb-4">Available 24/7 for urgent inquiries.</p>
               <p className="text-accent font-bold text-lg">+91 98320-58384</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
               <h4 className="text-xl font-bold text-primary mb-2">Email Us</h4>
               <p className="text-gray-600 mb-4">We'll respond within 24 hours.</p>
               <p className="text-accent font-bold text-lg">buildersjhulelal@gmail.com</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
               <h4 className="text-xl font-bold text-primary mb-2">Visit Us</h4>
               <p className="text-gray-600 mb-4">Our office is open Mon-Sat, 9am-6pm.</p>
               <p className="text-accent font-bold text-lg">Siliguri, West Bengal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
