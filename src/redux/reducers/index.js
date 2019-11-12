import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import cardsReducer from "./cards-reducer";

export default combineReducers({
  cards: cardsReducer,
  form: formReducer
});
