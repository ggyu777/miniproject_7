import { persistReducer } from "redux-persist";
import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const userClipSlice = createSlice({
  name: "userClip",
  initialState: {
//     content: [{ id: null, title: null, name:null, date:null, content: null, clip: false, url: null }],
    content: [{ id: "", title: "", name:"", date:"", content: "", clip: false, url: "" }],
  },
  reducers: {
    clipNews: (state, action): any => {
      state.content.push({ ...action.payload, clip: true });
      const contentfilter = state.content.filter((char,idx,arr)=>{
        return arr.findIndex((item)=>item.id === char.id)===idx
      })
      state.content=contentfilter
    },

  // });
    unclipNews: (state, action): any|undefined => {
      let findeNewsNum = state.content.findIndex((a)=>{return (a.id == action.payload ? a : null)})
      state.content.splice(findeNewsNum,1)
    },
  },
});

export default userClipSlice.reducer;
export const { clipNews, unclipNews } = userClipSlice.actions;