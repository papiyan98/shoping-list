import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { createShopingList } from "../redux/actions";

const AddItemForm = () => {
  const [item, setItem] = useState('')
  const dispatch = useDispatch()
  
  const clickHandler = () => {
    if (!item) return
    const itemData = {
      productName: item,
      price: 0,
      quantity: 1
    }
    dispatch(createShopingList(itemData))
    setItem('')
  }

  const inputHandler = event => {
    setItem(event.target.value)
  }

  return (
    <div className="add-item-box">
      <input 
        type="text"
        value={item} 
        onChange={inputHandler}
        placeholder="Add an item..." 
        className="add-item-input"
      />
      <FontAwesomeIcon icon={faPlus} onClick={clickHandler} />
    </div>
  )
}

export default AddItemForm