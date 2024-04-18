/**
 * 접속 중인 유저 정보는 앱 전체에서 접근 가능해야 하므로 Redux 상태 관리 라이브러리를 사용하여 저장합니다.
 */

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: "",
  email: "",
  photoURL: "",
  displayName: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state) => {
      state.id = "";
      state.email = "";
      state.photoURL = "";
      state.displayName = "";
    }
  }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;