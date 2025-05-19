import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
        Previous
      </button>
      <button className="px-4 py-2 bg-[#1D4ED8] text-white rounded-md">1</button>
      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
        2
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
        3
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
        Next
      </button>
    </div>
  );
};

export default Pagination;