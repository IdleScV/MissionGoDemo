import React from 'react';
import { Search } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
}

export default function SearchFilters({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
}: SearchFiltersProps) {
  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => setSelectedType('all')}
          className={`px-4 py-2 rounded-md ${
            selectedType === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType('church')}
          className={`px-4 py-2 rounded-md ${
            selectedType === 'church'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Churches
        </button>
        <button
          onClick={() => setSelectedType('missionary')}
          className={`px-4 py-2 rounded-md ${
            selectedType === 'missionary'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Missionaries
        </button>
      </div>
    </div>
  );
}