import React from 'react';

const ServiceCard = ({ icon, title, description, features, price, buttonText }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-[#e6f0fa] rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-700 mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#1D4ED8] mr-2">✔</span>
            {feature}
          </li>
        ))}
      </ul>
      <p className="text-gray-800 font-medium mb-4">{price}</p>
      <button className="bg-[#1D4ED8] text-white px-4 py-2 rounded-md hover:bg-[#164e9a] transition">
        {buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;