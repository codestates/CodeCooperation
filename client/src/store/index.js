import { configureStore } from "@reduxjs/toolkit";
import userInfo from "../reducer/userInfoReducer";
import postInfo from "../reducer/postInfoReducer";

export const store = configureStore({
  reducer: {
    userInfo,
    postInfo,
  },
});
//configureStore , createStore 와 비슷한 함수
//creatStore = 리듀서를 생성 시키는 api, App.js에 내려주면 dispatch로 사용할수있었음
//reducer = (상태,액션) => {액션,type}에 맞게 상태를 변경 하는 기능
//결국 이파일에서 configureStore 에 만들어둔 리듀서를 내보내서 전역에서 dispatch를 이용해
//상태 변경이 가능해졌다.

export const RootState = store.getState;
