import { CREATE_TOTALAMOUNT, CREATE_SHOPINGLIST } from "./types"

const initalState = {
  items: [],
  totalAmount: ''
}

export const shopingListReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_SHOPINGLIST:
      return {...state, items: [...state.items, action.payload]}
    case CREATE_TOTALAMOUNT:
      return {...state, totalAmount: action.payload}
    default: return state
  }
}