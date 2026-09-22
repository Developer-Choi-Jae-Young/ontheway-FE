import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import CustomHomePage from '../pages/CustomHomePage';

export const PrivateRoute = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};

export const PublicRoute = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return !isLogin ? <Outlet /> : <Navigate to="/" replace />;
};

export const OnboardingRoute = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding') === 'true';

  if (isLogin || hasSeenOnboarding) {
    return <CustomHomePage />;
  }

  return <Navigate to="/onboarding" replace />;
};