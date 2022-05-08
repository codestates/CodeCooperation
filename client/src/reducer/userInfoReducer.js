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
  },
});
export const { LOG_IN } = userInfoReducer.actions;
export default userInfoReducer.reducer;