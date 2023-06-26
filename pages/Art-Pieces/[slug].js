import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ artpieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = artpieces.find(
    (artPiece) => artPiece.slug === slug
  );

  if (!currentArtPiece) {
    return null;
  }
  const { imageSource, title, artist, year, genre } = currentArtPiece;

  return (
    <div>
      <ArtPieceDetails
        image={imageSource}
        title={title}
        artist={artist}
        year={year}
        genre={genre}
      />
    </div>
  );
}
