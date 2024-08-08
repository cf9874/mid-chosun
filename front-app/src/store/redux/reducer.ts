import { combineReducers } from "@reduxjs/toolkit"
import configReducer from "./config"
const rootReducer = combineReducers({
  configReducer,
})
export default rootReducer

export type RootReducerType = ReturnType<typeof rootReducer>
