import { CREATE_TOTALAMOUNT, CREATE_SHOPINGLIST, CHANGE_THEME } from "./types";

export function createShopingList(data) {
  return {
    type: CREATE_SHOPINGLIST,
    payload: data
  }
}

export function setTotalAmount(data) {
  return {
    type: CREATE_TOTALAMOUNT,
    payload: data
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}