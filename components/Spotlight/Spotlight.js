import React from "react";
import Image from "next/image";

export default function Spotlight({ pieces }) {
    const randomIndex = Math.floor(Math.random() * pieces?.length);
    const randomPiece = pieces?.[randomIndex];

  return (
    <>
      <h2>Spotlight</h2>
      <div>
        <p>{randomPiece?.name}</p>
        <Image
          src={randomPiece?.imageSource}
          alt={randomPiece?.name}
          width={500}
          height={500}
        />
        <p>Artist: {randomPiece?.artist}</p>
      </div>
    </>
  );
}
