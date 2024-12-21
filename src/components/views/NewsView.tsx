import React from 'react';

export function NewsView() {
  // Mock news data - in a real app, this would be fetched from an API
  const news = [
    {
      id: 1,
      title: 'Bitcoin Reaches New All-Time High',
      summary: 'The world\'s largest cryptocurrency continues its bullish trend...',
      source: 'CryptoNews',
      date: '2024-03-20'
    },
    {
      id: 2,
      title: 'Ethereum 2.0 Update: What You Need to Know',
      summary: 'The long-awaited upgrade brings significant improvements...',
      source: 'BlockchainDaily',
      date: '2024-03-19'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Latest Crypto News</h2>
      <div className="space-y-6">
        {news.map(item => (
          <div key={item.id} className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 mb-4">{item.summary}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{item.source}</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}