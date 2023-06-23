import React from "react";
import Image from "next/image";

function randomPiece(allArtPieces) {
  const randomIndex = Math.floor(Math.random() * allArtPieces.lenght);
  return allArtPieces[randomIndex];
}


export default function Spotlight({ image, artist }) {

  return (
    <>
      <h2>Spotlight</h2>
      <div>
        <p>{randomPiece.name}</p>
        <Image
          src={randomPiece.image}
          alt={randomPiece.name}
          width={500}
          height={500}
        />
        <p>Artist: {randomPiece.artist}</p>
      </div>
    </>
  );
}
