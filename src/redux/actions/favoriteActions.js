export const ADD_ALBUM_TO_FAVORITES = "ADD_ALBUM_TO_FAVORITES";
export const REMOVE_ALBUM_FROM_FAVORITES = "REMOVE_ALBUM_FROM_FAVORITES";
export const ADD_ARTIST_TO_FAVORITES = "ADD_ARTIST_TO_FAVORITES";
export const REMOVE_ARTIST_FROM_FAVORITES = "REMOVE_ARTIST_FROM_FAVORITES";
export const ADD_TRACK_TO_FAVORITES = "ADD_TRACK_TO_FAVORITES";
export const REMOVE_TRACK_FROM_FAVORITES = "REMOVE_TRACK_FROM_FAVORITES";

export const addToFavorites = (element, elementType) => ({
  type: `ADD_${elementType.toUpperCase()}_TO_FAVORITES`,
  payload: element,
});
export const removeFromFavorites = (element, elementType) => ({
  type: `REMOVE_${elementType.toUpperCase()}_FROM_FAVORITES`,
  payload: element,
});
