import React, { Component } from "react";
import { connect } from "react-redux";

import { Fab } from "@material-ui/core";
import PrintIcon from "@material-ui/icons/Print";

class PrintCardsButton extends Component {
  handleOnClick = () => {
    window.print();
  };

  render() {
    return (
      <Fab color="secondary" aria-label="add" onClick={this.handleOnClick}>
        <PrintIcon />
      </Fab>
    );
  }
}

export default connect()(PrintCardsButton);
