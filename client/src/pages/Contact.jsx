import { Mail, Phone, MapPin, Link, ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex  items-center text-xs">
        <ArrowLeft />
        <NavLink to={"/"}>Back to Home Page</NavLink>
      </div>
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                placeholder="Your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-slate-800 text-white font-semibold rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>contact@kritix.com</span>
            </div>
            {/* <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91 -----------</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>123 Pune</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
