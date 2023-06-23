import React from "react"; 
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";
import { useState } from "react";
/* import ArtPiecePreview from "../ArtPiecePreview/index.js"; */

export default function ArtPieces({ pieces }) {
  const [isFavorite, onToggleFavorite]= useState(true);
  return (
    <ul>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
        <h2>{piece.name}</h2>
            <p>{piece.artist}</p>
            <Image
              src={piece.imageSource}
              alt={piece.name}
              height={300}
              width={300}/>
               <FavoriteButton onToggleFavorite={onToggleFavorite} isFavorite={isFavorite}></FavoriteButton>
              </li> 
      ))}
    </ul>
  );
}

