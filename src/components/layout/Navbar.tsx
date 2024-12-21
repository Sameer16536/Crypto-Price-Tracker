import React, { useState } from 'react';
import { 
  Coins, 
  LogOut, 
  User as UserIcon, 
  Search,
  Star,
  TrendingUp as TrendingIcon,
  Newspaper,
  Settings
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { SearchBar } from './SearchBar';
import { AuthModal } from '../auth/AuthModal';

export function Navbar() {
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [activeTab, setActiveTab] = useState('markets');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Coins className="w-8 h-8 text-blue-400" />
                <h1 className="text-2xl font-bold">CryptoTracker</h1>
              </div>
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="md:hidden text-gray-300 hover:text-white"
              >
                <Search size={20} />
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => handleTabClick('markets')}
                className={`flex items-center space-x-2 ${
                  activeTab === 'markets' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <TrendingIcon size={16} />
                <span>Markets</span>
              </button>
              <button 
                onClick={() => handleTabClick('watchlist')}
                className={`flex items-center space-x-2 ${
                  activeTab === 'watchlist' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Star size={16} />
                <span>Watchlist</span>
              </button>
              <button 
                onClick={() => handleTabClick('news')}
                className={`flex items-center space-x-2 ${
                  activeTab === 'news' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Newspaper size={16} />
                <span>News</span>
              </button>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between md:justify-end space-x-6">
            <div className="w-full md:w-64">
              <SearchBar />
            </div>

            {user ? (
              <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white">
                  <Settings size={20} />
                </button>
                <div className="hidden md:flex items-center space-x-2">
                  <UserIcon size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-400">{user.email}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white"
                >
                  <LogOut size={16} />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-700 mt-4">
          <div className="flex justify-around p-2">
            <button 
              onClick={() => handleTabClick('markets')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'markets' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              <TrendingIcon size={16} />
              <span className="text-xs mt-1">Markets</span>
            </button>
            <button 
              onClick={() => handleTabClick('watchlist')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'watchlist' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              <Star size={16} />
              <span className="text-xs mt-1">Watchlist</span>
            </button>
            <button 
              onClick={() => handleTabClick('news')}
              className={`flex flex-col items-center p-2 ${
                activeTab === 'news' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              <Newspaper size={16} />
              <span className="text-xs mt-1">News</span>
            </button>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
}