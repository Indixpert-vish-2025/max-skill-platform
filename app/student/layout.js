import React from 'react';
import AuthGuard from '../../components/auth/AuthGuard';
import DashboardShell from '../../components/layout/DashboardShell';

export default function StudentLayout({ children }) {
  return (
    <AuthGuard requiredRole="student">
      <DashboardShell sidebarVariant="student">{children}</DashboardShell>
    </AuthGuard>
  );
}
