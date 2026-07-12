'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { hydrateAuth, loadStoredAuth } from '../store/slices/authSlice';

function AuthHydrator({ children }) {
  useEffect(() => {
    store.dispatch(hydrateAuth(loadStoredAuth()));
  }, []);

  return children;
}

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <AuthHydrator>{children}</AuthHydrator>
    </Provider>
  );
}
