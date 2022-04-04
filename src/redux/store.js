import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  const state = store.getState()
  document.body.className = state.themeChenger.value
})

export default store