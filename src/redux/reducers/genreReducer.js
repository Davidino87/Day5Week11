import { GET_HIPHOP_RESULT, GET_POP_RESULT, GET_ROCK_RESULT } from "../actions/genreActions";

const genreState = {
  rock: [],
  pop: [],
  hiphop: [],
};

const songsReducers = (state = genreState, action) => {
  switch (action.type) {
    case GET_ROCK_RESULT:
      return {
        ...state,
        rock: [...state.rock, action.payload],
      };
    case GET_POP_RESULT:
      return {
        ...state,
        pop: [...state.pop, action.payload],
      };
    case GET_HIPHOP_RESULT:
      return {
        ...state,
        hiphop: [...state.hiphop, action.payload],
      };
    default:
      return state;
  }
};
export default songsReducers;
