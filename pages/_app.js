import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import Head from "next/head";
import Image from "next/image";
import bmc from "../bmc_icon_black.png";
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5981409429859170"
        ></script>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/*  */}
      <div className="icons">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sharjeelabbasdev/"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <Image
            src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
            width={30}
            height={30}
          />
        </a>
        <a
          target="_blank"
          href="https://www.buymeacoffee.com/sharjeelabbas"
          rel="noopener noreferrer"
          className="bmc"
        >
          <Image src={bmc} width={24} height={30} />
        </a>
      </div>
    </div>
  );
}

export default MyApp;
