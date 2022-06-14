import { persistReducer } from "redux-persist";

import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const userClipSlice = createSlice({
  name: "userClip",
  initialState: {
    content: [{ id: "", title: "", abstract: "", clip: null, test: "test" }],
  },
  reducers: {
    clipNews: (state, action): any => {
      // console.log(current(state.content));
      console.log(current(state));
      console.log(action.payload);
      console.log("클립뉴스 함수로 들어왔어요");
      state.content.push({ ...action.payload, clip: true });
    },
    unclipNews: (state, action): any => {
      console.log("언클립 뉴스 함스로 들어왔어요");
      // console.log(action.payload);
      // state.content = { ...action.payload, clip: false };

      return {
        content: state.content.filter(
          (content) => content.id !== action.payload.id
        ),
      };
    },
  },
});

export default userClipSlice.reducer;
export const { clipNews, unclipNews } = userClipSlice.actions;