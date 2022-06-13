import { createStore, combineReducers } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const InitialState = {
    name:"hi",
    title:"",
    date:"",
    current:"",
    unclip:false,
    link:"",
  }

const reducer = persistReducer({
  key:'user',
  storage,
},
  (state=InitialState, action) => {
    return {
      contents: action.payload
    }
  }
)

const store = createStore(
  combineReducers({
    list: reducer
  })
)

const persistor = persistStore(store)

export {persistor}
export default store