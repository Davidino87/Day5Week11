import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer";
import genreReducer from "../reducers/genreReducer";
import favoritesReducer from "../reducers/favoriteReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import songInListenReducer from "../reducers/songInListenReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["favoriteList", "currentSong"],
};

const rootReducers = combineReducers({
  main: mainReducer,
  genre: genreReducer,
  currentSong: songInListenReducer,
  favoriteList: favoritesReducer,
});

const persistReducers = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

export const persistore = persistStore(store);
