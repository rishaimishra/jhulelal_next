import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const ServiceCard = ({ title, description, icon: Icon, image }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-accent p-3 rounded-lg text-white shadow-lg">
          <Icon size={24} />
        </div>
      </div>
      <div className="p-8 flex-grow">
        <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="px-8 pb-8">
        <button className="text-primary font-bold flex items-center gap-2 group/btn hover:text-accent transition-colors">
          Learn More
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
