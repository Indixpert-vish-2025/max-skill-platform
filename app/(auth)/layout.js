import React from 'react';
import GuestGuard from '../../components/auth/GuestGuard';

export default function AuthLayout({ children }) {
  return (
    <GuestGuard>
      <div className="auth-layout">{children}</div>
    </GuestGuard>
  );
}
