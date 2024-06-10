// pages/_app.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My blog description" />
      </Head>
      <Navbar />
      <main className="flex-1 p-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
