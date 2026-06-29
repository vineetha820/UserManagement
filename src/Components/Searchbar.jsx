import React from 'react';
import { Search } from 'lucide-react';

const Searchbar = ({ value, onChange }) => {
  return (
    <div className="relative w-full sm:w-auto">
      <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search users..."
        className="w-full px-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-64"
      />
    </div>
  );
};

export default Searchbar;
