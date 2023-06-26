import React from "react";
<<<<<<< HEAD
import ArtPieces from "../components/ArtPieces/index.js";

export default function HomePage() {
const { data, error } = useSWR('artPieces', async () => {
  const response = await fetch('https://example-apis.vercel.app/api/art');
  const data = await response.json();
  return data;
});

if (error) return <div>Error: Failed to load!</div>;
if (!data) return <div>Loading...</div>;
=======
import Spotlight from "@/components/Spotlight/Spotlight";
>>>>>>> main

export default function SpotlightPage({ artpieces }) {
  return (
    <div>
      <Spotlight pieces={artpieces} />
    </div>
  );
}
<<<<<<< HEAD
/* const fetcher = (url) => fetch(url).then((response) => response.json());

function AllArtPieces () {
  const { data } = useSWR("https://example-apis.vercel.app/api/art/${slug}", fetcher);
} */
=======
>>>>>>> main
