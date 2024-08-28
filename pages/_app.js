// pages/_app.js or pages/_app.tsx
import '../styles/globals.css'; // Verify that this path is correct

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
