import React from 'react';
import { BarChart, Activity, Shield, Users } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  {
    name: 'Active Threats',
    value: '24',
    change: '+14%',
    icon: Shield,
    color: 'text-red-400',
  },
  {
    name: 'Network Traffic',
    value: '1.2TB',
    change: '+7.4%',
    icon: Activity,
    color: 'text-blue-400',
  },
  {
    name: 'System Health',
    value: '98%',
    change: '+2.1%',
    icon: BarChart,
    color: 'text-green-400',
  },
  {
    name: 'Active Users',
    value: '573',
    change: '+11.2%',
    icon: Users,
    color: 'text-purple-400',
  },
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Threats Detected',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(34, 211, 238)',
      backgroundColor: 'rgba(34, 211, 238, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Threats Blocked',
      data: [28, 48, 40, 19, 86, 27],
      borderColor: 'rgb(251, 113, 133)',
      backgroundColor: 'rgba(251, 113, 133, 0.1)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'rgb(209, 213, 219)',
      },
    },
  },
  scales: {
    y: {
      grid: {
        color: 'rgba(75, 85, 99, 0.2)',
      },
      ticks: {
        color: 'rgb(209, 213, 219)',
      },
    },
    x: {
      grid: {
        color: 'rgba(75, 85, 99, 0.2)',
      },
      ticks: {
        color: 'rgb(209, 213, 219)',
      },
    },
  },
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{item.name}</p>
                  <p className="mt-2 text-3xl font-semibold">{item.value}</p>
                </div>
                <Icon className={`h-12 w-12 ${item.color}`} />
              </div>
              <div className="mt-4">
                <span className={`text-sm ${
                  item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {item.change}
                </span>
                <span className="text-sm text-gray-400"> from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-medium mb-4">Threat Analytics</h3>
          <Line data={chartData} options={options} />
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-medium mb-4">Recent Incidents</h3>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-red-400"></div>
                  <div>
                    <p className="text-sm font-medium">SQL Injection Attempt</p>
                    <p className="text-xs text-gray-400">192.168.1.{100 + i}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">2 min ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}