import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Services to Boost Your Career</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Take advantage of our professional services to enhance your job search experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-10 h-10 bg-[#e6f0fa] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-700">1</span>
            </div>
            <h3 className="text-xl font-semibold uppercase mb-2">Resume Review</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Get expert feedback on your resume and make it stand out to potential employers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-10 h-10 bg-[#e6f0fa] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-700">2</span>
            </div>
            <h3 className="text-xl font-semibold uppercase mb-2">Career Counseling</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Schedule one-on-one sessions with career experts to guide your professional journey.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-10 h-10 bg-[#e6f0fa] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-700">3</span>
            </div>
            <h3 className="text-xl font-semibold uppercase mb-2">Interview Prep</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Practice and prepare for interviews with mock sessions and expert feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;