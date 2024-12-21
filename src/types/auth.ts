export interface User {
  email: string;
  id: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}