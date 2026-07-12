'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { getDashboardPath } from '../../lib/auth/credentials';

export default function GuestGuard({ children }) {
  const router = useRouter();
  const { isAuthenticated, isHydrated, role } = useAuth();

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    if (isAuthenticated && role) {
      router.replace(getDashboardPath(role));
    }
  }, [isAuthenticated, isHydrated, role, router]);

  if (!isHydrated) {
    return null;
  }

  if (isAuthenticated) {
    return null;
  }

  return children;
}
