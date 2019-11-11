import React from "react";
import { render, cleanup } from "@testing-library/react";

import Card from "../Card";

const mockedCard = {
  id: 1,
  header: "Card header",
  image: "https://www.testsite.com/images/cardimage.png",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales ut nisi vitae cursus. Vestibulum condimentum libero a pretium pulvinar. Nulla id pharetra lectus."
};

describe("Card", () => {
  beforeEach(cleanup);

  it("renders Card with warnings when no props passed", () => {
    const { getByTestId } = render(<Card />);

    const container = getByTestId("card-container");

    expect(container).toBeDefined();
  });

  it("renders Card correctly when data props are passed", () => {
    const { getByTestId, getByText } = render(<Card {...mockedCard} />);

    const header = getByTestId("card-header");
    const headerText = getByText(mockedCard.header);

    const image = getByTestId("card-image");

    const description = getByTestId("card-description");
    const descriptionText = getByText(mockedCard.description);

    expect(header).toBeDefined();
    expect(headerText).toBeDefined();

    expect(image).toBeDefined();
    expect(image.src).toBe(mockedCard.image);

    expect(description).toBeDefined();
    expect(descriptionText).toBeDefined();
  });
});
