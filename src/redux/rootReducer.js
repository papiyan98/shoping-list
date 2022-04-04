import { combineReducers } from "@reduxjs/toolkit";
import { shopingListReducer } from "./shopingListReducer";
import { themeChangeReducer } from "./themeChangeReducer";

export const rootReducer = combineReducers({
  shopingList: shopingListReducer,
  themeChenger: themeChangeReducer
})