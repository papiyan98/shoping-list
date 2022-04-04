import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/actions";

const ThemeChenger = () => {
  const dispatch = useDispatch()

  const handleBtnClick = () => {
    const newTheme = document.body.classList.contains('light')
      ? 'dark'
      : 'light'
    dispatch(changeTheme(newTheme))
  }

  return (
    <div className="heading">
      <button className="change-theme-btn" onClick={handleBtnClick}>Change Theme</button>
    </div>
  )
}

export default ThemeChenger