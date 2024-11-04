import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Bell, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-gray-800 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              CyberSentinel
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-cyan-400 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">{user.email}</span>
                <button
                  onClick={signOut}
                  className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg transition-colors"
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}