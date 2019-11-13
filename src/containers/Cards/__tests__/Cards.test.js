import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Cards from "../Cards";

describe("Cards", () => {
  it("renders the Cards container", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    const container = getByTestId("cards-container");

    expect(container).toBeDefined();
  });
});
