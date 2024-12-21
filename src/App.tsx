import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { CryptoGrid } from './components/crypto/CryptoGrid';
import { WatchlistView } from './components/views/WatchlistView';
import { NewsView } from './components/views/NewsView';
import { useCryptoWebSocket } from './hooks/useCryptoWebSocket';

const CRYPTO_PAIRS = [
  'BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'ADAUSDT', 'DOGEUSDT',
  'XRPUSDT', 'SOLUSDT', 'DOTUSDT', 'MATICUSDT', 'AVAXUSDT',
  'LINKUSDT', 'UNIUSDT', 'AAVEUSDT', 'ATOMUSDT', 'LTCUSDT',
  'ALGOUSDT', 'VETUSDT', 'ICPUSDT', 'FILUSDT', 'XLMUSDT'
];

function App() {
  const { prices, isConnected } = useCryptoWebSocket(CRYPTO_PAIRS);
  const [activeView, setActiveView] = useState('markets');

  const renderView = () => {
    switch (activeView) {
      case 'watchlist':
        return <WatchlistView prices={prices} />;
      case 'news':
        return <NewsView />;
      default:
        return <CryptoGrid prices={prices} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Navbar onViewChange={setActiveView} />
      <main className="container mx-auto px-4 py-8">
        {!isConnected && (
          <div className="text-center text-yellow-400 mb-4">
            Connecting to market data...
          </div>
        )}
        {renderView()}
      </main>
    </div>
  );
}

export default App;