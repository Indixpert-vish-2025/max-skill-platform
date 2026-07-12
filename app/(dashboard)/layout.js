import React from 'react';
import AuthGuard from '../../components/auth/AuthGuard';
import DashboardShell from '../../components/layout/DashboardShell';

export default function DashboardLayout({ children }) {
  return (
    <AuthGuard requiredRole="instructor">
      <DashboardShell>{children}</DashboardShell>
    </AuthGuard>
  );
}
