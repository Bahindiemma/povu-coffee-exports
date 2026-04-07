'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 3500,
        style: {
          background: '#1C1510',
          color: '#F0E6CC',
          border: '1px solid rgba(201, 145, 58, 0.18)',
          fontFamily: 'Jost, sans-serif',
          fontSize: '13px',
        },
        success: {
          iconTheme: {
            primary: '#C9913A',
            secondary: '#0C0906',
          },
        },
      }}
    />
  );
}
