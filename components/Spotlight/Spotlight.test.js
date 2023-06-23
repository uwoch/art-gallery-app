import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight.js";

test("The art piece image and artist is displayed ", () => {
  render(
    <Spotlight
      artist="Francesco Ungaro"
      image="https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg"
    />
  );

  const image = screen.getAllByAltText("spotlight: Francesco Ungaro");
  expect(image).toHaveAttribute(
    "src",
    expect.stringContaining(
      encodeURIComponent(
        "https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg"
      )
    )
  );
});
