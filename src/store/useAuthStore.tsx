import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isLogin: boolean;
  setLogin: (accessToken: string, refreshToken: string) => void;
  setLogout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isLogin: false,
      setLogin: (accessToken: string, refreshToken: string) => set({ accessToken, refreshToken, isLogin: true }),
      setLogout: () => set({ accessToken: null, refreshToken: null, isLogin: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);