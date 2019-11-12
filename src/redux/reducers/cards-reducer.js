import update from "immutability-helper";
import mockedCards from "../../mocks/mockedCards";

export const initialState = {
  items: mockedCards,
  editing: null
};

const getLastCardID = state => state.items.slice(-1).pop().id;

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        items: update(state.items, {
          $push: [{ ...action.card, id: getLastCardID(state) + 1 }]
        })
      };
    case "EDIT_CARD":
      return {
        ...state,
        editing: action.cardId
      };
    case "UPDATE_CARD":
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.card.id) {
            return action.card;
          } else {
            return item;
          }
        }),
        editing: null
      };
    default:
      return state;
  }
}

export default cardsReducer;
