"use client";

interface MapMarker {
  lat: number;
  lng: number;
  name: string;
  type: "hospital" | "dental" | "specialist";
}

interface LocationMapProps {
  title: string;
  center: { lat: number; lng: number };
  markers: MapMarker[];
}

export function LocationMap({ title, center, markers }: LocationMapProps) {
  const typeColors = {
    hospital: "bg-red-500",
    dental: "bg-blue-500",
    specialist: "bg-teal-500",
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">{title}</h2>
        
        <div className="bg-slate-200 rounded-2xl overflow-hidden h-96 relative">
          {/* Placeholder for actual map - would integrate Google Maps or Mapbox */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <p className="text-slate-500">Interactive map coming soon</p>
              <p className="text-sm text-slate-400">
                Center: {center.lat.toFixed(4)}, {center.lng.toFixed(4)}
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg shadow-lg p-4">
            <p className="text-sm font-medium text-slate-900 mb-2">Map Legend</p>
            <div className="space-y-2">
              {Object.entries(typeColors).map(([type, color]) => (
                <div key={type} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${color}`}></span>
                  <span className="text-sm text-slate-600 capitalize">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg shadow-lg p-4">
            <p className="text-2xl font-bold text-slate-900">{markers.length}</p>
            <p className="text-sm text-slate-500">Locations mapped</p>
          </div>
        </div>
      </div>
    </section>
  );
}
