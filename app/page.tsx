import './styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './components/layout/Layout';

const function Home({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Home;