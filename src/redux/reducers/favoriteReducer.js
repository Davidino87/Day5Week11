import {
  ADD_ALBUM_TO_FAVORITES,
  ADD_ARTIST_TO_FAVORITES,
  ADD_TRACK_TO_FAVORITES,
  REMOVE_ALBUM_FROM_FAVORITES,
  REMOVE_ARTIST_FROM_FAVORITES,
  REMOVE_TRACK_FROM_FAVORITES,
} from "../actions/favoriteActions";

const favoriteList = {
  albums: [],
  artists: [],
  tracks: [],
};

const favoritesReducer = (state = favoriteList, action) => {
  switch (action.type) {
    case ADD_ALBUM_TO_FAVORITES:
      return {
        ...state,
        albums: [...state.albums, action.payload],
      };
    case REMOVE_ALBUM_FROM_FAVORITES:
      return {
        ...state,
        albums: state.albums.filter((element) => element.id !== action.payload),
      };

    case ADD_ARTIST_TO_FAVORITES:
      return {
        ...state,
        artists: [...state.artists, action.payload],
      };
    case REMOVE_ARTIST_FROM_FAVORITES:
      return {
        ...state,
        artists: state.artists.filter((element) => element.id !== action.payload),
      };

    case ADD_TRACK_TO_FAVORITES:
      return {
        ...state,
        tracks: [...state.tracks, action.payload],
      };
    case REMOVE_TRACK_FROM_FAVORITES:
      return {
        ...state,
        tracks: state.tracks.filter((element) => element.id !== action.payload),
      };

    default:
      return state;
  }
};

export default favoritesReducer;
