import { useState, useEffect, useCallback } from 'react';
import { CryptoPrice } from '../types/crypto';

const BINANCE_WS_URL = 'wss://stream.binance.com:9443/ws';

export function useCryptoWebSocket(symbols: string[]) {
  const [prices, setPrices] = useState<Record<string, CryptoPrice>>({});
  const [isConnected, setIsConnected] = useState(false);

  const connect = useCallback(() => {
    const ws = new WebSocket(BINANCE_WS_URL);
    
    ws.onopen = () => {
      setIsConnected(true);
      const subscribeMsg = {
        method: 'SUBSCRIBE',
        params: symbols.map(symbol => `${symbol.toLowerCase()}@ticker`),
        id: 1
      };
      ws.send(JSON.stringify(subscribeMsg));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.e === '24hrTicker') {
        setPrices(prev => ({
          ...prev,
          [data.s]: {
            symbol: data.s,
            price: parseFloat(data.c).toFixed(2),
            priceChange: parseFloat(data.P),
            volume: parseFloat(data.v).toFixed(2)
          }
        }));
      }
    };

    ws.onclose = () => {
      setIsConnected(false);
      setTimeout(connect, 5000);
    };

    return () => {
      ws.close();
    };
  }, [symbols]);

  useEffect(() => {
    const cleanup = connect();
    return cleanup;
  }, [connect]);

  return { prices, isConnected };
}