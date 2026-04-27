import React from "react";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    title: "The Future of Sustainable Construction in India",
    excerpt: "Exploring how green building practices are reshaping the urban landscape and why it matters for future generations.",
    image: "https://images.unsplash.com/photo-1518005020452-959c945116ec?q=80&w=2070&auto=format&fit=crop",
    date: "April 15, 2026",
    author: "Arjun Mandhyani",
    slug: "future-of-sustainable-construction",
  },
  {
    title: "10 Tips for Choosing the Right Home Builder",
    excerpt: "Don't settle for less. Learn the key factors you must consider before signing a contract with a construction company.",
    image: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2073&auto=format&fit=crop",
    date: "March 28, 2026",
    author: "Priya Sharma",
    slug: "tips-choosing-home-builder",
  },
  {
    title: "Modern Architectural Trends for 2026",
    excerpt: "From minimalist aesthetics to smart home integration, discover what's trending in modern Indian architecture.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    date: "March 10, 2026",
    author: "Vikram Singh",
    slug: "modern-architectural-trends",
  },
  {
    title: "Understanding RERA: A Guide for Home Buyers",
    excerpt: "A comprehensive breakdown of the Real Estate Regulation Act and how it protects your interests as a property buyer.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop",
    date: "February 22, 2026",
    author: "Rahul Gupta",
    slug: "understanding-rera-guide",
  },
  {
    title: "Importance of Structural Integrity in High-Rise Buildings",
    excerpt: "Why structural engineering is the most critical aspect of construction that you shouldn't overlook.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    date: "February 05, 2026",
    author: "Anil Kumar",
    slug: "importance-structural-integrity",
  },
  {
    title: "How to Plan Your Home Renovation Budget",
    excerpt: "Expert advice on managing costs and avoiding common financial pitfalls during your home remodeling project.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    date: "January 18, 2026",
    author: "Sonia Verma",
    slug: "home-renovation-budget-plan",
  },
];

const BlogPage = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Construction Insights</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Stay updated with the latest trends, guides, and news from the world of construction and architecture.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest from our Blog"
            subtitle="Articles & News"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16 gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-accent hover:text-white transition-all font-bold">2</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-accent hover:text-white transition-all font-bold">3</button>
            <button className="px-4 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-accent hover:text-white transition-all font-bold">Next</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-primary mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-8">Get the latest project updates and construction insights delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/95 transition-all shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
