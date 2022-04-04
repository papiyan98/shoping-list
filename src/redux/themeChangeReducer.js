import { CHANGE_THEME } from "./types"

const initalThemeState = {
  value: 'light'
}

export const themeChangeReducer = (state = initalThemeState, action) => {
  switch(action.type) {
    case CHANGE_THEME:
      return {...state, value: action.payload}
    default: return state
  }
}