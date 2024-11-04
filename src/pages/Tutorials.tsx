import React from 'react';
import { BookOpen, Star, Users, Clock } from 'lucide-react';

const tutorials = [
  {
    title: 'Introduction to Penetration Testing',
    description: 'Learn the fundamentals of ethical hacking and penetration testing...',
    level: 'Beginner',
    duration: '2 hours',
    students: 1234,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Advanced Network Security',
    description: 'Deep dive into network security protocols and best practices...',
    level: 'Advanced',
    duration: '4 hours',
    students: 856,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Web Application Security',
    description: 'Master the art of securing web applications from common vulnerabilities...',
    level: 'Intermediate',
    duration: '3 hours',
    students: 2156,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Tutorials() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Security Tutorials</h2>
          <p className="text-gray-400 mt-1">Learn cybersecurity from industry experts</p>
        </div>
        <div className="flex space-x-4">
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <button className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500/20 transition-colors">
            My Learning
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-colors"
          >
            <img
              src={tutorial.image}
              alt={tutorial.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-2 text-sm text-cyan-400 mb-3">
                <BookOpen className="h-4 w-4" />
                <span>{tutorial.level}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{tutorial.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{tutorial.description}</p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center space-x-1 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>{tutorial.duration}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-400">
                  <Users className="h-4 w-4" />
                  <span>{tutorial.students}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-400">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>{tutorial.rating}</span>
                </div>
              </div>
              <button className="w-full bg-cyan-500/10 text-cyan-400 py-2 rounded-lg hover:bg-cyan-500/20 transition-colors">
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-gray-800 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
          Load More Tutorials
        </button>
      </div>
    </div>
  );
}