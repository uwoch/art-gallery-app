import React from "react"; 
import Image from "next/image";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
       <h2>{piece.name}</h2>
            <p>{piece.artist}</p>
            <Image
              src={piece.imageSource}
              alt={piece.name}
              height={600}
              width={600}/> 
        </li>
      ))}
    </ul>
  );
}