import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoPrice } from '../../types/crypto';
import { formatNumber } from '../../utils/formatters';
import { CryptoDetailModal } from './CryptoDetailModal';

interface CryptoCardProps {
  data: CryptoPrice;
}

export function CryptoCard({ data }: CryptoCardProps) {
  const [showModal, setShowModal] = useState(false);
  const isPositive = data.priceChange >= 0;
  const symbol = data.symbol.replace('USDT', '').toLowerCase();
  const iconUrl = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/128/color/${symbol}.png`;

  return (
    <>
      <div 
        className="bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all hover:transform hover:scale-105 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={iconUrl}
              alt={data.symbol}
              className="w-8 h-8"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/128/color/generic.png';
              }}
            />
            <h3 className="text-lg font-semibold text-white">{data.symbol.replace('USDT', '')}</h3>
          </div>
          {isPositive ? (
            <TrendingUp className="w-5 h-5 text-green-400" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-400" />
          )}
        </div>
        
        <div className="space-y-2">
          <div className="text-2xl font-bold text-white">${formatNumber(parseFloat(data.price))}</div>
          <div className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{data.priceChange}%
          </div>
          <div className="text-sm text-gray-400">
            Volume: {formatNumber(parseFloat(data.volume))}
          </div>
        </div>
      </div>

      <CryptoDetailModal
        data={data}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}