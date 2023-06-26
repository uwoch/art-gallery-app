import Image from "next/image.js";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
    return (
      <>
        <button
          style={{ width: "32px", height: "32px" }}
          onClick={() => {
            onToggleFavorite(!isFavorite);
          }}
        >
          <Image src="/assets/heart.svg" width={40} height={40} alt="" />
        </button>
      </>
    );
  }