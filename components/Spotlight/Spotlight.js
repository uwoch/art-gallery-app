import React from "react";
import Image from "next/image";

function randomArtPiece(allArtPieces) {
  const randomIndex = Math.floor(Math.random() * allArtPieces.lenght);
  return allArtPieces[randomIndex];
}

export default function Spotlight({ image, artist }) {
  /*     const data = // fetch!!!!
   */ const randomArt = randomArtPiece(allArtPieces);

  return (
    <>
      <h2>Spotlight</h2>
      <div>
        <p>{randomArt.name}</p>
        <Image
          src={randomArt.image}
          alt={randomArt.name}
          width={500}
          height={500}
        />
        <p>Artist: {randomArt.artist}</p>
      </div>
    </>
  );
}
