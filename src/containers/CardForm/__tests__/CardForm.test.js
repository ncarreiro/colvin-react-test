import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import CardForm from "../CardForm";

describe("CardForm", () => {
  it("renders the CardForm container", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CardForm form="newForm" />
      </Provider>
    );

    const container = getByTestId("card-form-container");

    expect(container).toBeDefined();
  });
});
