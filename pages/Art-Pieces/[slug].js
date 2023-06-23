import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = allArtPieces.find((artPiece) => artPiece.slug === slug);
  
    if (!currentArtPiece) {
      return null;
    }
  const { image, title, artist, year, genre } = currentArtPiece;

  return (
    <div>
      <ArtPieceDetails
        image={image}
        title={title}
        artist={artist}
        year={year}
        genre={genre}
      />
    </div>
  );
}
