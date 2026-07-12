'use client';

import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getDashboardPath } from '../lib/auth/credentials';
import { loginSuccess, logout as logoutAction, persistAuth } from '../store/slices/authSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isAuthenticated, isHydrated } = useSelector((state) => state.auth);

  const login = useCallback(
    (authUser) => {
      dispatch(loginSuccess(authUser));
      persistAuth(authUser);
      router.replace(getDashboardPath(authUser.role));
    },
    [dispatch, router]
  );

  const logout = useCallback(() => {
    dispatch(logoutAction());
    persistAuth(null);
    router.replace('/signin');
  }, [dispatch, router]);

  return {
    user,
    role: user?.role ?? null,
    isAuthenticated,
    isHydrated,
    login,
    logout,
  };
}
