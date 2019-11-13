import React from "react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders App correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const wrapper = getByTestId("app-wrapper");
    const header = getByTestId("app-header");
    const container = getByTestId("app-container");

    expect(wrapper).toBeDefined();
    expect(header).toBeDefined();
    expect(container).toBeDefined();
  });
});
