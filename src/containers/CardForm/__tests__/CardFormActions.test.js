import React from "react";
import { render } from "@testing-library/react";
import CardFormActions from "../CardFormActions";

describe("CardFormActions", () => {
  it("renders the CardFormActions container", () => {
    const { getByTestId } = render(
      <CardFormActions
        handleDelete={() => {}}
        handleClose={() => {}}
        cardId={1}
        pristine={true}
      />
    );

    const container = getByTestId("card-form-actions-container");

    expect(container).toBeDefined();
  });
});
