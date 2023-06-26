import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
  const router = useRouter();

  function handleGoBack() {
    router.push("/art-pieces");
  }

  return (
    <>
      <div>
        <h2>Title: {name}</h2>
        <Image src={image} alt={name} width={300} height={300} />
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre} </p>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </>
  );
}
