import React from "react"; 
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/index.js";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
/* import ArtPiecePreview from "../ArtPiecePreview/index.js"; */

const List = styled.ul`
list-style: none;
text-align: center;
`;


export default function ArtPieces({ pieces }) {
  const [isFavorite, onToggleFavorite]= useState(true);
  return (
    <List>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
        <h2>{piece.name}</h2>
            <p>{piece.artist}</p>
            <Link href={`/art-pieces/${piece.slug}`}><Image
              src={piece.imageSource}
              alt={piece.name}
              height={300}
              width={300}/></Link>
               <FavoriteButton onToggleFavorite={onToggleFavorite} isFavorite={isFavorite}></FavoriteButton>
               </li> 
      ))}
    </List>
  );
}

