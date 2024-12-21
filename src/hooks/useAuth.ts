import { useAuthStore } from '../stores/authStore';

export function useAuth() {
  const { user, isLoading, error, signIn, signUp, signOut } = useAuthStore();

  return {
    user,
    isLoading,
    error,
    login: signIn,
    signup: signUp,
    logout: signOut,
  };
}