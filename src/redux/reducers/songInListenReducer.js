import { GET_SONG_IN_LISTEN, SET_PLAYER_OFF, SET_PLAYER_ON } from "../actions/songInListen";

const currentSongState = {
  isPlayerOn: false,
  songInListen: null,
};

const songInListenReducer = (state = currentSongState, action) => {
  switch (action.type) {
    case SET_PLAYER_ON:
      return {
        ...state,
        isPlayerOn: action.payload,
      };
    case SET_PLAYER_OFF:
      return {
        ...state,
        isPlayerOn: action.payload,
      };

    case GET_SONG_IN_LISTEN:
      return {
        ...state,
        songInListen: action.payload,
      };

    default:
      return state;
  }
};
export default songInListenReducer;
