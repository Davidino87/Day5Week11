import { DELETE_QUERY_SONGS, GET_CURRENT_TRUCKS, GET_QUERY_SONGS, GET_SELECTED_ELEMENT } from "../actions";

const mainState = {
  searchResults: [],
  selectedElement: null,
  currentTracks: [],
};

const mainReducer = (state = mainState, action) => {
  switch (action.type) {
    case GET_QUERY_SONGS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case DELETE_QUERY_SONGS:
      return {
        ...state,
        searchResults: action.payload,
      };

    case GET_SELECTED_ELEMENT:
      return {
        ...state,
        selectedElement: action.payload,
      };
    case GET_CURRENT_TRUCKS:
      return {
        ...state,
        currentTracks: action.payload,
      };

    default:
      return state;
  }
};
export default mainReducer;
