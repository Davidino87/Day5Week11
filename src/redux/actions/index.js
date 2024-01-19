export const GET_QUERY_SONGS = "GET_QUERY_SONGS";
export const DELETE_QUERY_SONGS = "DELETE_QUERY_SONGS";
export const GET_SELECTED_ELEMENT = "GET_SELECTED_ELEMENT";
export const GET_CURRENT_TRUCKS = "GET_CURRENT_TRUCKS";

export const handleSearch = (searchQuery) => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {});

      if (response.ok) {
        let result = await response.json();
        let songs = result.data;

        dispatch({ type: GET_QUERY_SONGS, payload: songs });
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const clearSearchQuery = () => ({ type: DELETE_QUERY_SONGS, payload: [] });

export const setSelectedElem = (id, type) => {
  return async (dispatch) => {
    try {
      let url = "";

      type === "album"
        ? (url = "https://striveschool-api.herokuapp.com/api/deezer/album/")
        : (url = "https://striveschool-api.herokuapp.com/api/deezer/artist/");

      const response = await fetch(url + id);

      if (response.ok) {
        let result = await response.json();

        dispatch({ type: GET_SELECTED_ELEMENT, payload: result });

        if (type === "artist") {
          const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id + "/top?limit=20"
          );

          if (response.ok) {
            let result = await response.json();
            let { data } = result;

            dispatch({ type: GET_CURRENT_TRUCKS, payload: data });
          } else {
            console.log("error");
          }
        }
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
