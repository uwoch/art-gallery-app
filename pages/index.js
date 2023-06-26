import React from "react";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ artpieces }) {
  return (
    <div>
      <Spotlight pieces={artpieces} />
    </div>
  );
}
