import React from 'react';
import { CryptoCard } from '../crypto/CryptoCard';
import { CryptoPrice } from '../../types/crypto';

interface WatchlistViewProps {
  prices: Record<string, CryptoPrice>;
}

export function WatchlistView({ prices }: WatchlistViewProps) {
  // In a real app, this would be fetched from user's data
  const watchlist = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your Watchlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {watchlist.map(symbol => (
          prices[symbol] && <CryptoCard key={symbol} data={prices[symbol]} />
        ))}
      </div>
    </div>
  );
}