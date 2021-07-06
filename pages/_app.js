import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import Head from "next/head";
import { useEffect } from "react";
import { analytics } from "../firebase";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics();
  }, []);
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="As a free flutter gradient generator tool, this website lets you create a colorful gradient background for your mobile app, webiste, and your awesome flutter project"
        />
        <title>Flutter Gradient Tool - Easily Create Gradient In Flutter</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
