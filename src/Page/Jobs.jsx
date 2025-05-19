import React from 'react';
import JobCard from '../Component/JOb/JobCard';
import Pagination from '../Component/JOb/Pagination';

const jobsData = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    posted: '2 days ago',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    salary: '$120,000 - $150,000',
  },
  {
    title: 'Product Manager',
    company: 'InnovateSoft',
    location: 'New York, NY',
    type: 'Full-time',
    posted: '1 day ago',
    skills: ['Product Strategy', 'Agile', 'User Research'],
    salary: '$110,000 - $140,000',
  },
  {
    title: 'Marketing Specialist',
    company: 'GrowthMarketing',
    location: 'Chicago, IL',
    type: 'Part-time',
    posted: '4 days ago',
    skills: ['Social Media', 'Content Creation', 'Analytics'],
    salary: '$60,000 - $75,000',
  },
];

export default function Jobs() {
  return (
    <div className="min-h-screen bg-[#e6f0fa]">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D4ED8] text-center mb-6">
            Find Your Perfect Job
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed">
            Browse through our curated list of opportunities tailored to your skills and preferences.
          </p>

          {/* Search Bar and Filters */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Job title, skills, or company"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                />
              </div>
              <button className="bg-[#1D4ED8] text-white px-6 py-3 rounded-md hover:bg-[#164e9a] transition">
                Search Jobs
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]">
                <option>Job Type</option>
                <option>All Types</option>
                <option>Full-time</option>
                <option>Part-time</option>
              </select>
              <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]">
                <option>Location</option>
                <option>All Locations</option>
                <option>San Francisco, CA</option>
                <option>New York, NY</option>
              </select>
              <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]">
                <option>Experience Level</option>
                <option>All Levels</option>
                <option>Entry</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>
              <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]">
                <option>Salary Range</option>
                <option>Any Range</option>
                <option>$50,000 - $75,000</option>
                <option>$75,000 - $100,000</option>
                <option>$100,000+</option>
              </select>
            </div>
          </div>

          {/* Job Listings */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">{jobsData.length} jobs available</p>
            {jobsData.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
            <Pagination />
          </div>
        </div>
      </section>
    </div>
  );
}