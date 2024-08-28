import React, { ReactNode } from 'react';
import '../styles/globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Add any global head tags here */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
