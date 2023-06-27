import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight.js";

test("The art piece image and artist is displayed", () => {
  const pieces = [
    {
      name: "Man digital Illustration",
      imageSource:
        "https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg",
      artist: "Francesco Ungaro"
    },
  ];
  render(
    <Spotlight
      pieces={pieces}
    />
  );

  const image = screen.getByAltText("Francesco Ungaro");
  expect(image).toHaveAttribute(
    "src",
    expect.stringContaining(
      encodeURIComponent(
        "https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg"
      )
    )
  );
});
