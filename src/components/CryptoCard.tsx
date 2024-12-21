import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoPrice } from '../types/crypto';

interface CryptoCardProps {
  data: CryptoPrice;
}

export function CryptoCard({ data }: CryptoCardProps) {
  const isPositive = data.priceChange >= 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{data.symbol}</h3>
        {isPositive ? (
          <TrendingUp className="w-5 h-5 text-green-500" />
        ) : (
          <TrendingDown className="w-5 h-5 text-red-500" />
        )}
      </div>
      
      <div className="space-y-2">
        <div className="text-2xl font-bold">${data.price}</div>
        <div className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{data.priceChange}%
        </div>
        <div className="text-sm text-gray-500">
          Volume: {data.volume}
        </div>
      </div>
    </div>
  );
}