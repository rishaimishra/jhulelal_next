import React from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  status: "Completed" | "Ongoing";
}

const ProjectCard = ({ title, description, image, status }: ProjectCardProps) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            status === "Completed" ? "bg-green-500 text-white" : "bg-accent text-white"
          }`}>
            {status}
          </span>
        </div>
        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <div className="bg-white p-3 rounded-full text-primary hover:bg-accent hover:text-white transition-colors cursor-pointer">
              <ExternalLink size={24} />
           </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
