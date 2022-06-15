import { createSlice } from "@reduxjs/toolkit";

export const userClipSlice = createSlice({
  name: "userClip",
  initialState: {
    content: [{ id: "", title: "", name:"", date:"", content: "", clip: false, url: "" }],
  },
  reducers: {
    clipNews: (state, action): any => {
      state.content.push({ ...action.payload, clip: true });
    },
    unclipNews: (state, action): any => {

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