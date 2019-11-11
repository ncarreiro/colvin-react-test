import mockedCards from "../../mocks/mockedCards";

export const initialState = {
  items: mockedCards
};

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default cardsReducer;
