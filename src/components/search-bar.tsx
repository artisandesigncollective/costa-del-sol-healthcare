'use client';

import { useState } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  locations?: string[];
}

export function SearchBar({ placeholder = "Search...", locations = ["All Locations"] }: SearchBarProps) {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white rounded-2xl shadow-xl p-2">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>
        
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-4 rounded-xl border border-slate-200 hover:border-blue-300 transition bg-white min-w-[180px]"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-slate-400" />
              <span className="text-slate-700">{selectedLocation}</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden z-10">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => {
                    setSelectedLocation(location);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition ${
                    selectedLocation === location ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
          Search
        </button>
      </div>
    </div>
  );
}
