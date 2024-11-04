import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const THREATS = [
  { lat: 40.7128, lng: -74.0060, city: 'New York', intensity: 50 },
  { lat: 51.5074, lng: -0.1278, city: 'London', intensity: 35 },
  { lat: 35.6762, lng: 139.6503, city: 'Tokyo', intensity: 45 },
  { lat: -33.8688, lng: 151.2093, city: 'Sydney', intensity: 25 },
  { lat: 55.7558, lng: 37.6173, city: 'Moscow', intensity: 40 },
];

export default function ThreatMap() {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <div className="h-[calc(100vh-5rem)] bg-gray-900">
      <div className="absolute top-4 left-4 z-10 bg-gray-800/90 p-4 rounded-lg border border-gray-700">
        <h2 className="text-lg font-semibold mb-2">Global Threat Monitor</h2>
        <p className="text-sm text-gray-400">Real-time cyber attack visualization</p>
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="text-sm">High Severity</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="text-sm">Medium Severity</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span className="text-sm">Low Severity</span>
          </div>
        </div>
      </div>

      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={THREATS}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => '#ff4444'}
        pointAltitude={0.1}
        pointRadius={0.5}
        pointsMerge={true}
        atmosphereColor="#1a90ff"
        atmosphereAltitude={0.15}
      />
    </div>
  );
}