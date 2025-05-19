import React from 'react';
import { NavLink } from 'react-router';
const Hero = () => {
  return (
    <section className="bg-[#e6f0fa] py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-6">Discover Your Dream Career</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
Personalized job recommendations tailored to your skills, experience, and career goals. Let us help you find the perfect match for your professional journey.        </p>
        <div className="space-x-4">
            <NavLink to="/Jobs"className="bg-[#1D4ED8] text-white px-6 py-3 rounded-md hover:bg-[#164e9a] transition">
            Find Jobs →
            </NavLink>
          <NavLink to="/Services"className="bg-white text-[#1D4ED8] px-6 py-3 rounded-md border border-[#1D4ED8] hover:bg-gray-100 transition">
            Explore Services
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;