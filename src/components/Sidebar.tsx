import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Globe, 
  Newspaper, 
  GraduationCap,
  Shield,
  Terminal,
  AlertTriangle,
  BookOpen
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Threat Map', icon: Globe, path: '/threat-map' },
  { name: 'Security News', icon: Newspaper, path: '/news' },
  { name: 'Tutorials', icon: GraduationCap, path: '/tutorials' },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="space-y-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400'
                    : 'text-gray-300 hover:bg-gray-700'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-700">
        <div className="px-4 py-3">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Quick Stats
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Protection Status</span>
              </div>
              <span className="text-green-400">Active</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Terminal className="h-4 w-4 text-yellow-400" />
                <span>Active Scans</span>
              </div>
              <span className="text-yellow-400">3</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <span>Threats Blocked</span>
              </div>
              <span className="text-red-400">147</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <BookOpen className="h-4 w-4" />
          <span>Documentation</span>
        </div>
      </div>
    </div>
  );
}