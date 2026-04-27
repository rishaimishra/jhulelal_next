import React from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Jhulelal Ashiyana",
    description: "A premium residential complex offering luxury living with modern amenities. Designed for comfort and community living.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop",
    status: "Completed" as const,
  },
  {
    title: "Jhulelal Enclave",
    description: "A serene gated community designed for security and modern lifestyle. Features lush green spaces and smart home features.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    status: "Ongoing" as const,
  },
  {
    title: "Jhulelal Mansion",
    description: "Ultra-luxury individual villas that redefine elegance and exclusivity. Private pools and high-end finishes throughout.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    status: "Completed" as const,
  },
  {
    title: "Jhulelal Mandir",
    description: "A spiritual landmark combining traditional architectural elements with modern engineering for a peaceful atmosphere.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=2070&auto=format&fit=crop",
    status: "Completed" as const,
  },
  {
    title: "Gannapati Plaza",
    description: "Modern commercial complex in the heart of the city with state-of-the-art facilities for retail and offices.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    status: "Completed" as const,
  },
  {
    title: "Sunrise Heights",
    description: "Upcoming high-rise residential project with a focus on panoramic views and sustainable building practices.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    status: "Ongoing" as const,
  },
];

const ProjectsPage = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Portfolio</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            A showcase of our commitment to excellence across residential, commercial, and spiritual projects.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Building Tomorrow's Landmarks"
            subtitle="Featured Projects"
          />

          <div className="flex justify-center mb-12 gap-4 flex-wrap">
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">All Projects</button>
            <button className="bg-gray-100 text-gray-700 hover:bg-primary hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all">Residential</button>
            <button className="bg-gray-100 text-gray-700 hover:bg-primary hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all">Commercial</button>
            <button className="bg-gray-100 text-gray-700 hover:bg-primary hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all">Ongoing</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Uncompromising Quality in Every Detail</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At Jhulelal Builders, we don't just build structures; we create homes and environments that last for generations. Our rigorous selection of materials and attention to detail ensure that every project in our portfolio is a testament to our legacy.
              </p>
              <ul className="space-y-4">
                {["Certified Building Materials", "Expert Structural Engineering", "Modern Sustainable Designs", "Meticulous Finishing Work"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-accent text-white p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" alt="Quality Work" />
               </div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full -z-0"></div>
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full -z-0"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
