import React from 'react';
import { X, Globe, Twitter, ExternalLink } from 'lucide-react';
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
import { CryptoPrice } from '../../types/crypto';
import { formatNumber, formatCurrency } from '../../utils/formatters';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CryptoDetailModalProps {
  data: CryptoPrice;
  isOpen: boolean;
  onClose: () => void;
}

export function CryptoDetailModal({ data, isOpen, onClose }: CryptoDetailModalProps) {
  if (!isOpen) return null;

  const symbol = data.symbol.replace('USDT', '');
  const iconUrl = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/128/color/${symbol.toLowerCase()}.png`;

  // Mock chart data - in real app, fetch from API
  const chartData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Price',
        data: Array.from({ length: 24 }, () => 
          parseFloat(data.price) + (Math.random() - 0.5) * parseFloat(data.price) * 0.1
        ),
        borderColor: data.priceChange >= 0 ? '#10B981' : '#EF4444',
        backgroundColor: data.priceChange >= 0 ? '#10B98120' : '#EF444420',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#ffffff10',
        },
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={iconUrl}
                alt={symbol}
                className="w-10 h-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/128/color/generic.png';
                }}
              />
              <div>
                <h2 className="text-2xl font-bold text-white">{symbol}</h2>
                <p className="text-gray-400">USDT</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Price Section */}
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">
              ${formatNumber(parseFloat(data.price))}
              <span className={`ml-2 text-lg ${data.priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {data.priceChange >= 0 ? '+' : ''}{data.priceChange}%
              </span>
            </div>
            <div className="text-gray-400">
              Volume (24h): {formatCurrency(parseFloat(data.volume))}
            </div>
          </div>

          {/* Chart */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Price Chart (24h)</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 rounded bg-gray-700 text-sm text-white hover:bg-gray-600">24H</button>
                <button className="px-3 py-1 rounded bg-gray-700 text-sm text-white hover:bg-gray-600">7D</button>
                <button className="px-3 py-1 rounded bg-gray-700 text-sm text-white hover:bg-gray-600">30D</button>
              </div>
            </div>
            <div className="h-[300px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Market Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Market Cap</span>
                  <span className="text-white">${formatCurrency(parseFloat(data.price) * 1000000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h High</span>
                  <span className="text-white">${formatNumber(parseFloat(data.price) * 1.05)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Low</span>
                  <span className="text-white">${formatNumber(parseFloat(data.price) * 0.95)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Circulating Supply</span>
                  <span className="text-white">{formatNumber(Math.random() * 1000000)} {symbol}</span>
                </div>
              </div>
            </div>

            {/* Info & Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Info & Links</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                  <Globe size={16} />
                  <span>Website</span>
                  <ExternalLink size={14} />
                </a>
                <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                  <Twitter size={16} />
                  <span>Twitter</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}