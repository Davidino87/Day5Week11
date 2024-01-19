export const GET_ROCK_RESULT = "GET_ROCK_RESULT";
export const GET_POP_RESULT = "GET_POP_RESULT";
export const GET_HIPHOP_RESULT = "GET_HIPHOP_RESULT";

export const getGenre = (genre, artistArray) => {
  return async (dispatch) => {
    const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
    let randomArrayArtists = [];

    while (randomArrayArtists.length < 4) {
      randomArrayArtists = artistArray.filter((artist, i) => i === Math.floor(Math.random() * artistArray.length));
    }

    for (let i = 0; i < randomArrayArtists.length; i++) {
      try {
        const response = await fetch(URL + randomArrayArtists[i]);

        if (response.ok) {
          const { data } = await response.json();
          dispatch({ type: `GET_${genre.toUpperCase()}_RESULT`, payload: data[0] });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
};
