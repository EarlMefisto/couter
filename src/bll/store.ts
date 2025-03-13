import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./counter-reducer"
import { thunk } from "redux-thunk"

const rootReduser = combineReducers({
  counter: counterReducer,
})

export type AppStateType = ReturnType<typeof rootReduser>

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

store.subscribe(() => {
  localStorage.setItem("app-state", JSON.stringify(store.getState()))
})

type AppStoreType = typeof store
