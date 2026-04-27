import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Target, Award, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">About Our Legacy</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Building excellence since 50+ years with trust and dedication.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionHeading
                title="Our Journey Over Half a Century"
                subtitle="Company Story"
                centered={false}
              />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  With a legacy spanning over 50 years, our journey began as <span className="font-bold text-primary">M/s Anil Kumar Mandhyani</span>, a trusted name in railway contracts. We specialized in large-scale infrastructure projects that laid the foundation for our expertise in construction.
                </p>
                <p>
                  As we grew, we expanded into the commercial and residential construction sectors under the banner of <span className="font-bold text-primary">Gannapati Builders</span>. This era saw us creating landmarks that redefined luxury and comfort for hundreds of families.
                </p>
                <p>
                  In the past two years, we have proudly evolved into <span className="font-bold text-primary">Jhulelal Builders</span>. While our name has changed, our core commitment to "Building Trust, Brick by Brick" remains stronger than ever.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2073&auto=format&fit=crop"
                alt="Construction Heritage"
                className="rounded-2xl shadow-lg h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Building"
                className="rounded-2xl shadow-lg h-64 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full group-hover:bg-accent/10 transition-colors"></div>
              <div className="bg-accent/20 p-4 rounded-2xl text-accent w-fit mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver high-quality construction solutions that exceed client expectations through innovation, integrity, and exceptional craftsmanship. We aim to build sustainable spaces that enhance the quality of life for our community.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors"></div>
              <div className="bg-primary/10 p-4 rounded-2xl text-primary w-fit mb-8">
                <Award size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted and preferred construction partner in the region, recognized for our commitment to excellence, timely delivery, and the legacy of building trust across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Stand For"
            subtitle="Core Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                <Shield size={36} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">Integrity</h4>
              <p className="text-gray-600">
                Honesty and transparency are at the heart of everything we do. We believe in being fair and ethical in all our dealings.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                <Award size={36} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">Quality</h4>
              <p className="text-gray-600">
                We never compromise on quality. From materials to craftsmanship, excellence is our standard in every brick we lay.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                <Users size={36} />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">Dedication</h4>
              <p className="text-gray-600">
                Our team is dedicated to bringing your vision to life. We work tirelessly to ensure every project is a masterpiece.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
