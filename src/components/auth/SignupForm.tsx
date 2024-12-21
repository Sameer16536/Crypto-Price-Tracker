import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup, error } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    signup(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-400 text-sm">{error}</div>}
      
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Sign Up
      </button>
    </form>
  );
}