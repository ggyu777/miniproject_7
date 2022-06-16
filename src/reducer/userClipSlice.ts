import { persistReducer } from "redux-persist";
import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const userClipSlice = createSlice({
  name: "userClip",
  initialState: {
    content: [{ id: "", title: "", name:"", date:"", content: "", clip: false, url: "" }],
  },
  // 클립뉴스 리듀서 : 클립된 컨텐트 state에 넣어주기
  reducers: {
    clipNews: (state, action): any => {
      state.content.push({ ...action.payload, clip: true });
    },

    // 언클립뉴스 리듀서: 클릭된 뉴스 없애주기
  // });
    unclipNews: (state, action): any|undefined => {
      let findeNewsNum = state.content.findIndex((a)=>{return (a.id == action.payload ? a : null)})
      state.content.splice(findeNewsNum,1)
    },
  },
});

export default userClipSlice.reducer;
export const { clipNews, unclipNews } = userClipSlice.actions;