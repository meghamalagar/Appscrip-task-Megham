// app/layout.tsx

import '../styles/globals.css';

export default function RootLayout({ children }) {
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
