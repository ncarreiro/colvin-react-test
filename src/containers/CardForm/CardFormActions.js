import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";

import { CardFormStyles } from "./CardForm.styles";

class CardFormActions extends Component {
  handleDelete = () => {
    const { handleDelete, cardId } = this.props;
    handleDelete(cardId);
  };

  render() {
    const { pristine, handleDelete, handleClose } = this.props;
    return (
      <CardFormStyles.ButtonContainer fullWidth>
        <Button
          color="primary"
          variant="contained"
          margin="normal"
          type="submit"
          disabled={pristine}
          startIcon={<SaveIcon />}
        />
        {handleDelete && (
          <Button
            color="secondary"
            variant="contained"
            margin="normal"
            onClick={this.handleDelete}
            startIcon={<DeleteIcon />}
          />
        )}
        <Button
          variant="contained"
          margin="normal"
          onClick={handleClose}
          startIcon={<CancelIcon />}
        />
      </CardFormStyles.ButtonContainer>
    );
  }
}

CardFormActions.propTypes = {
  pristine: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleClose: PropTypes.func,
  cardId: PropTypes.number
};

export default CardFormActions;
