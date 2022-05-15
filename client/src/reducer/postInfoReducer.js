import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const postInfoReducer = createSlice({
  name: "postInfo",
  initialState,
  reducers: {
    GET_POST: (state, action) => {
      console.log(action.payload, "포스트인포액션페이로드");
      state.postInfo = action.payload;

      //localStorage에도 저장
      localStorage.setItem("postInfo", JSON.stringify(state.postInfo));
    },
  },
});
export const { GET_POST } = postInfoReducer.actions;
export default postInfoReducer.reducer;
