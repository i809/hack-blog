import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ThreatMap from './pages/ThreatMap';
import News from './pages/News';
import Tutorials from './pages/Tutorials';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-900 text-gray-100">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/threat-map" element={<ThreatMap />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/tutorials" element={<Tutorials />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;