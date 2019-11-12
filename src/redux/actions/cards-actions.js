import CardModel from "../models/card-model";

const ADD_CARD = "ADD_CARD";
const EDIT_CARD = "EDIT_CARD";

export function addCard(card) {
  return {
    type: ADD_CARD,
    card: new CardModel(card)
  };
}

export function editCard(card) {
  return {
    type: EDIT_CARD,
    id: card.id,
    card: new CardModel(card)
  };
}
