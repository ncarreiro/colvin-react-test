import CardModel from "../models/card-model";

const ADD_CARD = "ADD_CARD";
const DELETE_CARD = "DELETE_CARD";
const EDIT_CARD = "EDIT_CARD";
const UPDATE_CARD = "UPDATE_CARD";

export function addCard(card) {
  return {
    type: ADD_CARD,
    card: new CardModel(card)
  };
}

export function deleteCard(cardId) {
  return {
    type: DELETE_CARD,
    cardId
  };
}

export function editCard(cardId) {
  return {
    type: EDIT_CARD,
    cardId
  };
}

export function updateCard(card) {
  return {
    type: UPDATE_CARD,
    card: new CardModel(card)
  };
}
