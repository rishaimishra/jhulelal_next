import React from "react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { CheckCircle, Shield, Clock, Users, Star, ArrowRight } from "lucide-react";

// Dummy Data
const services = [
  {
    title: "Building Design",
    description: "Tailored architectural solutions that blend functionality with aesthetic excellence for your dream spaces.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Architecture Design",
    description: "Innovative and sustainable architectural designs that redefine modern living and commercial standards.",
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2073&auto=format&fit=crop",
  },
  {
    title: "Flooring & Roofing",
    description: "Premium quality materials and expert installation for durable and stylish flooring and roofing systems.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Project Management",
    description: "End-to-end management ensuring your project is completed on time, within budget, and to the highest standards.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  },
];

const featuredProjects = [
  {
    title: "Jhulelal Ashiyana",
    description: "A premium residential complex offering luxury living with modern amenities.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop",
    status: "Completed" as const,
  },
  {
    title: "Jhulelal Enclave",
    description: "A serene gated community designed for comfort and security.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    status: "Ongoing" as const,
  },
  {
    title: "Jhulelal Mansion",
    description: "Ultra-luxury villas that redefine elegance and exclusivity.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    status: "Completed" as const,
  },
];

const stats = [
  { label: "Years of Legacy", value: "50+" },
  { label: "Projects Completed", value: "200+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Expert Workers", value: "150+" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Home Owner",
    content: "Jhulelal Builders delivered my dream home exactly as promised. Their attention to detail and quality of materials is unmatched.",
    rating: 5,
  },
  {
    name: "Sanjay Sharma",
    role: "Business Owner",
    content: "The commercial complex built by them has exceeded our expectations. Professional management and timely delivery.",
    rating: 5,
  },
  {
    name: "Anita Singh",
    role: "Apartment Owner",
    content: "Transparent communication throughout the process. I highly recommend them for anyone looking for quality construction.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero
        title="Building Trust, Brick by Brick"
        subtitle="50+ Years of Legacy in Construction Excellence. We turn your vision into reality with precision and dedication."
      />

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">{stat.value}</p>
                <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541913057-259c1ec39150?q=80&w=1974&auto=format&fit=crop"
                  alt="Construction site"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full -z-0"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/5 rounded-2xl -z-0"></div>
            </div>
            <div className="lg:w-1/2">
              <SectionHeading
                title="50+ Years of Construction Legacy"
                subtitle="About Our Company"
                centered={false}
              />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With a legacy spanning over 50 years, our journey began as M/s Anil Kumar Mandhyani, a trusted name in railway contracts. We later expanded into commercial and residential construction as Gannapati Builders.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                In the past two years, we have proudly evolved into Jhulelal Builders, continuing our commitment to quality, integrity, and excellence in every project we undertake.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg border-b-2 border-accent pb-1 hover:text-accent transition-colors group"
              >
                Discover Our Story
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Comprehensive Construction Services"
            subtitle="What We Offer"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-primary/90 transition-all inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Building Landmarks of Tomorrow"
            subtitle="Featured Projects"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="bg-accent text-white px-8 py-3 rounded-md font-bold hover:bg-accent-hover transition-all inline-block"
            >
              Explore All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionHeading
                title="Why Choose Jhulelal Builders?"
                subtitle="Our Commitment"
                centered={false}
                light={true}
              />
              <div className="space-y-8 mt-10">
                <div className="flex gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg text-accent shrink-0 h-fit">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Quality in Every Brick</h4>
                    <p className="text-gray-400">We use only the highest grade materials and follow stringent quality control measures to ensure your structure stands the test of time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg text-accent shrink-0 h-fit">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">On Time Delivery</h4>
                    <p className="text-gray-400">We understand the value of your time. Our efficient project management ensures that we meet our deadlines without compromising on quality.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg text-accent shrink-0 h-fit">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Transparent Communication</h4>
                    <p className="text-gray-400">We keep you informed at every step of the construction process. No hidden costs, no surprises, just honest and open communication.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                  alt="Construction worker"
                  className="rounded-2xl h-64 w-full object-cover shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                  alt="Construction site"
                  className="rounded-2xl h-80 w-full object-cover shadow-xl mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Testimonials"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-accent mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">{t.name}</h5>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to Build Your Dream Project?</h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's start building your vision together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-xl"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/projects"
              className="bg-white text-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
