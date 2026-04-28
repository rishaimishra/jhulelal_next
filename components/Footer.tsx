import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              JHULELAL <span className="text-accent">BUILDERS</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Our post-construction services gives you peace of mind knowing that we are still here for you even after.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-accent/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-accent transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-accent transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-accent/30 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Building Design</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Architecture Design</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Flooring & Roofing</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent transition-colors">Project Management</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-accent/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  Aluchoudhury More, Babupara, Siliguri, West Bengal, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <span className="text-gray-400">+91 98320-58384</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={18} />
                <span className="text-gray-400">buildersjhulelal@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Jhulelal Builders. All Rights Reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
