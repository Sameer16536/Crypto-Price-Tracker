# CryptoTracker

A real-time cryptocurrency tracking application built with React, TypeScript, and WebSocket integration with the Binance API.

## Features

- 🚀 Real-time price updates via WebSocket
- 📊 Interactive price charts with multiple timeframes
- 🔐 User authentication system
- 📱 Responsive design for all devices
- 🎨 Modern and clean UI with dark theme
- 🔍 Search functionality for cryptocurrencies
- ⭐ Watchlist support
- 📰 Cryptocurrency news section

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Tailwind CSS
  - Chart.js
  - Lucide Icons

- **Data:**
  - Binance WebSocket API
  - Supabase for Auth and DB

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── AuthModal.tsx
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── crypto/
│   │   ├── CryptoCard.tsx
│   │   ├── CryptoDetailModal.tsx
│   │   └── CryptoGrid.tsx
│   └── layout/
│       ├── Navbar.tsx
│       └── SearchBar.tsx
├── hooks/
│   ├── useAuth.ts
│   └── useCryptoWebSocket.ts
├── types/
│   ├── auth.ts
│   └── crypto.ts
└── utils/
    └── formatters.ts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
