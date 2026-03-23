"use client";

import { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  locations: string[];
}

export function SearchBar({ placeholder = "Search...", locations }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl shadow-lg border border-slate-200">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-4 text-slate-900 placeholder-slate-400 bg-transparent border-0 focus:ring-0 text-lg"
          />
        </div>

        <div className="relative sm:w-48">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between gap-2 px-4 py-4 bg-slate-50 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-slate-400" />
              <span className="font-medium truncate">{selectedLocation}</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => {
                    setSelectedLocation(location);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
                    selectedLocation === location ? "bg-teal-50 text-teal-700 font-medium" : "text-slate-700"
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="btn-primary py-4 px-8 rounded-xl">
          Search
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-sm text-slate-500">Popular:</span>
        {["Hospitals", "Dentists", "Cardiology", "Orthopedics", "Dermatology"].map((tag) => (
          <button
            key={tag}
            className="text-sm text-teal-600 hover:text-teal-700 hover:underline"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
