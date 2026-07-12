'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { getDashboardPath } from '../../lib/auth/credentials';

export default function HomeRedirect() {
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

    router.replace(getDashboardPath(role));
  }, [isAuthenticated, isHydrated, role, router]);

  return null;
}
