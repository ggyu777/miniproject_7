import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userClipSlice from "./userClipSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  userClipSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
});