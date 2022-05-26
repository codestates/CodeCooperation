import { initialState } from "../store/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userInfoReducer = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    LOG_IN: (state, action) => {
      console.log(action.payload, "리듀서액션페이로드");
      state.userInfo = action.payload;
      state.isLogin = true;
      //localStorage에도 저장
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      localStorage.setItem("isLogin", JSON.stringify(true));
    },
    LOG_OUT: (state) => {
      state.userInfo = { id: "", email: "", nickname: "", password: "" };
      state.isLogin = false;

      localStorage.removeItem("userInfo");
      localStorage.removeItem("isLogin");
      localStorage.removeItem("postId");
    },
    POST_ID: (state, action) => {
      console.log(action.payload, "포스트아이디액션페이로드");
      state.postId = action.payload;

      localStorage.setItem("postId", JSON.stringify(state.postId));
    },
  },
});
export const { LOG_IN, LOG_OUT, POST_ID } = userInfoReducer.actions;
export default userInfoReducer.reducer;
