import React from 'react';
import { ExternalLink, Clock, Tag } from 'lucide-react';

const news = [
  {
    title: 'Major Vulnerability Discovered in Popular Framework',
    description: 'Security researchers have uncovered a critical vulnerability affecting millions of applications...',
    source: 'CyberNews',
    time: '2 hours ago',
    category: 'Vulnerability',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Ransomware Attack Impacts Healthcare Systems',
    description: 'A sophisticated ransomware attack has disrupted operations at several major healthcare facilities...',
    source: 'SecureWorld',
    time: '4 hours ago',
    category: 'Ransomware',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'New Cybersecurity Regulations Announced',
    description: 'Government officials have unveiled new cybersecurity requirements for critical infrastructure...',
    source: 'Tech Daily',
    time: '6 hours ago',
    category: 'Regulation',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
];

export default function News() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Latest Security News</h2>
        <div className="flex space-x-4">
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm">
            <option>All Categories</option>
            <option>Vulnerabilities</option>
            <option>Ransomware</option>
            <option>Data Breaches</option>
          </select>
          <button className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500/20 transition-colors">
            Subscribe to Feed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <article
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-colors"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                <Clock className="h-4 w-4" />
                <span>{item.time}</span>
                <span>•</span>
                <Tag className="h-4 w-4" />
                <span>{item.category}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-cyan-400">{item.source}</span>
                <button className="flex items-center space-x-1 text-sm text-cyan-400 hover:text-cyan-300">
                  <span>Read more</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-gray-800 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
          Load More News
        </button>
      </div>
    </div>
  );
}