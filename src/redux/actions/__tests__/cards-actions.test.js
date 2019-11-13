import configureMockStore from "redux-mock-store";
import {
  addCard,
  deleteCard,
  editCard,
  updateCard,
  ADD_CARD,
  DELETE_CARD,
  EDIT_CARD,
  UPDATE_CARD
} from "../cards-actions";
import { initialState } from "../../reducers";
import mockedCard from "../../../mocks/mockedCard";
import mockedCardNoId from "../../../mocks/mockedCard";

const createStore = configureMockStore();
const store = createStore(initialState);

describe("Cards Actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("dispatches ADD_CARD after addCard action", () => {
    const expectedActions = [
      {
        card: mockedCardNoId,
        type: ADD_CARD
      }
    ];
    store.dispatch(addCard(mockedCardNoId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches DELETE_CARD after editCard action", () => {
    const expectedActions = [{ cardId: 1, type: DELETE_CARD }];
    store.dispatch(deleteCard(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches EDIT_CARD after editCard action", () => {
    const expectedActions = [{ cardId: 1, type: EDIT_CARD }];
    store.dispatch(editCard(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches UPDATE_CARD after editCard action", () => {
    const expectedActions = [
      {
        card: mockedCard,
        type: UPDATE_CARD
      }
    ];
    store.dispatch(updateCard(mockedCard));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
