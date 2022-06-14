import { persistReducer } from "redux-persist";
import { createSlice } from "@reduxjs/toolkit";

export const userClipSlice = createSlice({
  name: "userClip",
  initialState: {
    content: [{ content: "", id: "", title: "", contents:"", clip: false }],
  },
  reducers: {
    clipNews: (state:any, action:any):any => {
      console.log(state);
      console.log("클립뉴스 함수로 들어왔어요");
      console.log(action.payload);
      state.content.push({ ...action.payload, clip: true });
    },
    unclipNews: (state:any, action:any):any => {
      console.log(action.payload);
      return { ...action.payload, clip: false };
    },
  },
});

export default userClipSlice.reducer;
export const { clipNews, unclipNews } = userClipSlice.actions;