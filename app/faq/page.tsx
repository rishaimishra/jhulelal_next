import React from "react";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import { HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

const faqItems = [
  {
    question: "Who is Jhulelal Builders?",
    answer: "Jhulelal Builders is a construction company with a legacy of over 50 years, founded on a commitment to integrity and quality. We evolved from M/s Anil Kumar Mandhyani, a respected name in railway contracts, and Gannapati Builders to our current brand. Our mission is to build projects that inspire trust and stand the test of time.",
  },
  {
    question: "What types of projects do you specialize in?",
    answer: "We specialize in a wide range of projects, including residential homes, commercial complexes, and industrial ventures. Our extensive experience allows us to handle projects of varying scale and complexity with exceptional craftsmanship and attention to detail.",
  },
  {
    question: "How do I start a project with your company?",
    answer: "Getting started is simple. You can begin by contacting us via phone or email to schedule a free initial consultation. We'll discuss your vision, project requirements, and timeline to prepare a detailed, no-obligation quotation for you.",
  },
  {
    question: "Do you offer a free, no-obligation quotation?",
    answer: "Yes, we provide a free, no-obligation quotation for all our services. We believe in transparency and want you to have a clear understanding of the project scope and costs before making any commitment.",
  },
  {
    question: "How do you ensure the quality of your work?",
    answer: "Our commitment to quality is at the core of everything we do. We achieve this through meticulous onsite supervision, strict quality control measures, and by using high-grade materials. Our team of experienced professionals ensures every detail is executed with precision and care.",
  },
  {
    question: "What is your approach to project management?",
    answer: "We follow a disciplined approach to project management, focusing on clear communication, efficient scheduling, and proactive risk management. Our goal is to ensure your project is completed on time, within budget, and to the highest standards.",
  },
  {
    question: "What services do you offer?",
    answer: "We provide a comprehensive range of contractor services, including detailed project management, cost control, and onsite supervision. We handle everything from the initial planning stages and permitting to the final construction and handover, ensuring a seamless experience.",
  },
  {
    question: "What is your approach to quality craftsmanship?",
    answer: "Quality craftsmanship is at the core of our work. We achieve this through meticulous attention to detail, using high-grade materials, and leveraging the skills of our experienced team. Every project is a testament to our commitment to excellence, ensuring it is durable and built to last.",
  },
  {
    question: "How do you ensure safety and security on your construction sites?",
    answer: "Safety and security are our top priorities. We conduct regular risk assessments, enforce strict safety protocols, and mandate the use of personal protective equipment (PPE). We also implement security measures like controlled site access and surveillance to protect our people and assets.",
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
