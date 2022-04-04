import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer)

store.subscribe(() => {
  const state = store.getState()
  document.body.className = state.themeChenger.value
})

export default store