import { createStore } from "redux";

// Initial state for the assessment
const initialState = {
  score: 0,
};

// Reducer function to handle score updates
const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SCORE":
      return { ...state, score: action.payload };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(scoreReducer);

export default store;
