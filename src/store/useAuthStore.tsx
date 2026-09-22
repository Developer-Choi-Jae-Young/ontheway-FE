import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  isLogin: boolean;
  setLogin: (token: string) => void;
  setLogout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      isLogin: false,
      setLogin: (token: string) => set({ accessToken: token, isLogin: true }),
      setLogout: () => set({ accessToken: null, isLogin: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);