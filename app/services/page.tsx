import React from "react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { Shield, Layout, PenTool, ClipboardCheck, Home, Ruler, HardHat, Layers } from "lucide-react";

const services = [
  {
    title: "Building Design",
    description: "Our building design services focus on creating functional, safe, and sustainable structures. We combine engineering excellence with innovative design to bring your vision to life.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Architecture Design",
    description: "We provide comprehensive architectural services from conceptual design to detailed construction documents. Our designs are tailored to meet the unique needs of each client.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2073&auto=format&fit=crop",
  },
  {
    title: "Flooring & Roofing",
    description: "Expert installation of a wide range of flooring and roofing materials. We ensure durability and aesthetic appeal for both residential and commercial properties.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Project Management",
    description: "Professional project management services to ensure your construction project is completed on time and within budget. We handle all aspects of the construction process.",
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  },
];

const subServices = [
  { title: "Renovation", icon: Home },
  { title: "Interior Design", icon: PenTool },
  { title: "Structural Analysis", icon: Ruler },
  { title: "Site Supervision", icon: HardHat },
];

const ServicesPage = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Services</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Providing high-quality construction and design solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Expert Solutions for Every Project"
            subtitle="What We Do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col lg:flex-row bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="lg:w-1/2 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[300px]"
                  />
                </div>
                <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                  <div className="bg-accent/20 p-3 rounded-xl text-accent w-fit mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Excellence in Every Phase"
            subtitle="Our Process"
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="relative">
               <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 border-4 border-white/20">1</div>
               <h4 className="text-white font-bold text-xl mb-3">Consultation</h4>
               <p className="text-gray-400">Understanding your needs and vision.</p>
               <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-accent/30"></div>
            </div>
            <div className="relative">
               <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 border-4 border-white/20">2</div>
               <h4 className="text-white font-bold text-xl mb-3">Planning</h4>
               <p className="text-gray-400">Detailed design and resource allocation.</p>
               <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-accent/30"></div>
            </div>
            <div className="relative">
               <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 border-4 border-white/20">3</div>
               <h4 className="text-white font-bold text-xl mb-3">Execution</h4>
               <p className="text-gray-400">Construction with highest quality standards.</p>
               <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-accent/30"></div>
            </div>
            <div>
               <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 border-4 border-white/20">4</div>
               <h4 className="text-white font-bold text-xl mb-3">Handover</h4>
               <p className="text-gray-400">Delivering your project on time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Additional Expertise"
            subtitle="More Services"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {subServices.map((service, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent transition-colors text-center group">
                <div className="bg-white shadow-sm w-16 h-16 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-primary">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
