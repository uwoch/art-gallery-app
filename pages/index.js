
import React from "react";
import ArtPieces from "../components/ArtPieces/index.js";

export default function HomePage() {


  return (
    <div>
      <h1>All Art Pieces</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}
/* const fetcher = (url) => fetch(url).then((response) => response.json());

function AllArtPieces () {
  const { data } = useSWR("https://example-apis.vercel.app/api/art/${slug}", fetcher);
} */

/* const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Request with ${JSON.stringify(args)} failed.`);
  }
  return await response.json();
};

 function AallArtPieces({ Component, pageProps }) {
  const { data } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  } */