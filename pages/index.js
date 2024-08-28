// pages/index.js

import Head from 'next/head';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Product Page - Megham</title>
        <meta name="description" content="Discover our wide range of products!" />
      </Head>
      <Header />
      <main>
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}

// Server Side Rendering
export async function getServerSideProps() {
  const res = await axios.get('https://fakestoreapi.com/products');
  const products = res.data;

  return {
    props: {
      products,
    },
  };
}
