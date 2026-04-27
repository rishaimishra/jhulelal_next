"use client";

import React, { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      // API call mock
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Even if API route isn't ready, we'll simulate success for UX in this demo if desired
      // but let's stick to proper error handling
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for contacting Jhulelal Builders. We have received your message and will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-primary/90 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-accent"
              } focus:outline-none focus:ring-2 transition-all`}
              placeholder="John Doe"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-accent"
              } focus:outline-none focus:ring-2 transition-all`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-accent"
              } focus:outline-none focus:ring-2 transition-all`}
              placeholder="+91 98XXX-XXXXX"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.subject ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-accent"
              } focus:outline-none focus:ring-2 transition-all`}
            >
              <option value="">Select a subject</option>
              <option value="Residential Inquiry">Residential Inquiry</option>
              <option value="Commercial Inquiry">Commercial Inquiry</option>
              <option value="Building Design">Building Design</option>
              <option value="Project Management">Project Management</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-accent"
            } focus:outline-none focus:ring-2 transition-all`}
            placeholder="Tell us about your project..."
          ></textarea>
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>

        {status === "error" && (
          <p className="text-center text-red-500 text-sm mt-4 font-medium">
            Something went wrong. Please try again or call us directly.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
