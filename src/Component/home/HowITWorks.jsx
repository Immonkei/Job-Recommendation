import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How Thrive Works</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Our AI-powered platform helps you find the right job based on your unique skills and
          preferences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-700">🔍</span>
            </div>
            <h3 className="text-xl font-semibold uppercase mb-2">Find Jobs</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Discover thousands of job opportunities matched to your skills and experience.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-700">⬆️</span>
            </div>
            <h3 className="text-xl font-semibold uppercase mb-2">Grow Skills</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Access learning resources to enhance your skills and stand out to employers.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-700">⭐</span>
            </div>
            <h3 className="text-xl font-semibold uppercase mb-2">Get Noticed</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Highlight your achievements and get discovered by top companies.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-700">📊</span>
            </div>
            <h3 className="text-xl font-semibold uppercase mb-2">Track Progress</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Monitor your job search progress and career growth with detailed analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;