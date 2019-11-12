import mockedCards from "../../mocks/mockedCards";

export const initialState = {
  items: mockedCards
};

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CARD":
      return {
        items: [...state.items, action.card]
      };
    case "EDIT_CARD":
      return {
        items: state.items.map(item => {
          if (item.id === action.id) {
            return action.card;
          } else {
            return item;
          }
        })
      };
    default:
      return state;
  }
}

export default cardsReducer;
