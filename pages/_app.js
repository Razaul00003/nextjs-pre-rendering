import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initail-scale=1.0, width=device-width" />
        <title>Nextjs event manager</title>
        <meta name="description" content="nextjs events manager" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
