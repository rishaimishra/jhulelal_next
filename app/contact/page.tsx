import React from "react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can build your vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Side: Contact Information */}
            <div className="lg:w-1/3 space-y-12">
              <SectionHeading
                title="Get in Touch"
                subtitle="Contact Information"
                centered={false}
              />

              <div className="space-y-8">
                {/* Call Support */}
                <div className="flex gap-6 items-start">
                  <div className="bg-accent/10 p-4 rounded-2xl text-accent shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">Call Support Center 24/7</h4>
                    <p className="text-gray-500 mb-2">Our team is available round the clock for your needs.</p>
                    <a href="tel:+919832058384" className="text-2xl font-extrabold text-primary hover:text-accent transition-colors">
                      +91 98320-58384
                    </a>
                  </div>
                </div>

                {/* Write to Us */}
                <div className="flex gap-6 items-start">
                  <div className="bg-accent/10 p-4 rounded-2xl text-accent shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">Write to Us</h4>
                    <p className="text-gray-500 mb-2">We'll respond to your email within 24 business hours.</p>
                    <a href="mailto:buildersjhulelal@gmail.com" className="text-lg font-bold text-primary hover:text-accent transition-colors">
                      buildersjhulelal@gmail.com
                    </a>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="flex gap-6 items-start">
                  <div className="bg-accent/10 p-4 rounded-2xl text-accent shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">Visit Us</h4>
                    <p className="text-gray-500 mb-2">Come and discuss your project at our office.</p>
                    <p className="text-lg font-bold text-primary leading-relaxed">
                      Aluchoudhury More, Babupara, Siliguri,<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-6 items-start">
                  <div className="bg-accent/10 p-4 rounded-2xl text-accent shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">Working Hours</h4>
                    <p className="text-gray-500 mb-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500">Sunday: Closed (Available for appointments)</p>
                  </div>
                </div>
              </div>

              {/* Social links preview */}
              <div className="pt-8 border-t border-gray-100">
                <h5 className="font-bold text-primary mb-4 uppercase tracking-widest text-sm">Follow Our Progress</h5>
                <div className="flex gap-4">
                   {[1, 2, 3, 4].map((i) => (
                     <div key={i} className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                        <span className="text-xs">S{i}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-gray-50 p-4 sm:p-10 rounded-3xl border border-gray-100">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-primary mb-4">Send Us a Message</h3>
                  <p className="text-gray-600">Fill out the form below and our project consultant will contact you shortly.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-[450px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl">
           <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <MapPin size={48} className="text-accent mx-auto mb-4" />
              <p>Interactive Map Placeholder</p>
              <p className="text-sm font-normal mt-2">Siliguri, West Bengal, India</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
