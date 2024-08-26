// app/page.tsx

import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <>
      <Header />
      <main>
        <h1>Discover Our Products</h1>
        <ProductList products={products} />
      </main>
      <Footer />
    </>
  );
}
