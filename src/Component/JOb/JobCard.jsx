import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
        <p className="text-gray-600 mb-2">
          {job.company} • 📍 {job.location} • 🕒 {job.type} • ⏳ {job.posted}
        </p>
        <div className="flex space-x-2 mb-4">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#e6f0fa] text-[#1D4ED8] px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-gray-700 font-medium">{job.salary}</p>
      </div>
      <button className="bg-[#1D4ED8] text-white px-6 py-2 rounded-md hover:bg-[#164e9a] transition">
        View Details
      </button>
    </div>
  );
};

export default JobCard;