import React from 'react';
import { CryptoCard } from './CryptoCard';
import { CryptoPrice } from '../../types/crypto';

interface CryptoGridProps {
  prices: Record<string, CryptoPrice>;
}

export function CryptoGrid({ prices }: CryptoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Object.values(prices).map(price => (
        <CryptoCard key={price.symbol} data={price} />
      ))}
    </div>
  );
}