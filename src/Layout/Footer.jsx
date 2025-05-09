import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGift, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <FaGift className="text-blue-600 text-2xl" />
            <span className="font-bold text-lg text-gray-800">Thrive</span>
          </div>
          <p className="text-sm">
            Connecting talent with opportunities.
            <br />
            Your career growth is our mission.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaTwitter className="text-gray-500 hover:text-blue-500 cursor-pointer" />
            <FaLinkedin className="text-gray-500 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/about" className="hover:text-blue-600">About Us</NavLink></li>
            <li><NavLink to="/careers" className="hover:text-blue-600">Careers</NavLink></li>
            <li><NavLink to="/blog" className="hover:text-blue-600">Blog</NavLink></li>
            <li><NavLink to="/press" className="hover:text-blue-600">Press</NavLink></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/jobs" className="hover:text-blue-600">Job Board</NavLink></li>
            <li><NavLink to="/services" className="hover:text-blue-600">Services</NavLink></li>
            <li><NavLink to="/help" className="hover:text-blue-600">Help Center</NavLink></li>
            <li><NavLink to="/resources" className="hover:text-blue-600">Career Resources</NavLink></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">LEGAL</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/privacy" className="hover:text-blue-600">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms" className="hover:text-blue-600">Terms of Service</NavLink></li>
            <li><NavLink to="/cookies" className="hover:text-blue-600">Cookie Policy</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs py-4 text-gray-500 border-t">
        © 2025 Thrive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
