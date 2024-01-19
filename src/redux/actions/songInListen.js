export const GET_SONG_IN_LISTEN = "GET_SONG_IN_LISTEN";
export const SET_PLAYER_ON = "SET_PLAYER_ON";
export const SET_PLAYER_OFF = "SET_PLAYER_OFF";

export const SetCurentTruck = (searchQuery) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {});

      if (response.ok) {
        let result = await response.json();
        let song = result.data[0];

        dispatch({ type: GET_SONG_IN_LISTEN, payload: song });
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const setPlayerOn = () => ({ type: SET_PLAYER_ON, payload: true });
export const setPlayerOff = () => ({ type: SET_PLAYER_OFF, payload: false });
