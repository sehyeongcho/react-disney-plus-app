import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

// 서로 다른 리듀싱 함수들을 값으로 가지는 객체를 받아서 createStore에 넘길 수 있는 하나의 리듀싱 함수로 변환
export const rootReducer = combineReducers({
  user: userReducer
})

const persistConfig = {
  key: "root", // key 이름
  storage, // localStorage에 저장합니다.
  whiteList: [], // 여러 reducer 중에 해당 reducer만 localStorage에 저장.
  blackList: [] // blacklist -> 그것만 제외.
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})
// getDefaultMiddleware: 리덕스 툴킷에서 가지고 있는 기본 미들웨어
// { serializableCheck: false }: 기본 미들웨어에서 serializableCheck는 false로

export const persistor = persistStore(store)