import React from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, image, date, author, slug }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} />
            {author}
          </span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-accent transition-colors group/link"
          >
            Read More
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
