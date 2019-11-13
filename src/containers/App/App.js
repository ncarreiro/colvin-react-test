import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Helmet } from "react-helmet";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { AppStyles } from "./App.styles";
import Cards from "../Cards/Cards";
import CardsActions from "../../components/CardsActions/CardsActions";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#41d5ab",
      contrastText: "#fff"
    },
    secondary: {
      main: "#fff",
      contrastText: "#023838"
    }
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppStyles.AppWrapper data-testid="app-wrapper">
            <Helmet>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
              />
            </Helmet>
            <AppStyles.AppHeader data-testid="app-header">
              Colvin Card Game by Nahuel Carreiro
            </AppStyles.AppHeader>
            <AppStyles.AppContainer data-testid="app-container">
              <CardsActions />
              <Cards />
            </AppStyles.AppContainer>
          </AppStyles.AppWrapper>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
