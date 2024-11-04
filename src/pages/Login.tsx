import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      navigate('/');
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Shield className="h-12 w-12 text-cyan-400" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? 'Create an Account' : 'Welcome Back'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-cyan-400"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-cyan-400"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-cyan-400 hover:text-cyan-300"
          >
            {isSignUp
              ? 'Already have an account? Sign in'
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}