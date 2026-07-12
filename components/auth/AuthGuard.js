'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { getDashboardPath } from '../../lib/auth/credentials';

export default function AuthGuard({ children, requiredRole = null }) {
  const router = useRouter();
  const { isAuthenticated, isHydrated, role } = useAuth();

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    if (!isAuthenticated) {
      router.replace('/signin');
      return;
    }

    if (requiredRole && role !== requiredRole) {
      router.replace(getDashboardPath(role));
    }
  }, [isAuthenticated, isHydrated, requiredRole, role, router]);

  if (!isHydrated) {
    return null;
  }

  if (!isAuthenticated) {
    return null;
  }

  if (requiredRole && role !== requiredRole) {
    return null;
  }

  return children;
}
