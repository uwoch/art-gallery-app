import Navigation from "./navigation/index.js";
import Head from "next/head.js";


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Navigation />
    </>
  );
}
