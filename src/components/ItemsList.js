import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTotalAmount } from "../redux/actions";

const ItemsList = () => {
  const [list, setList] = useState(null)

  const dispatch = useDispatch()
  const items = useSelector(state => state.shopingList.items)

  useEffect(() => {
    if (items.length) {
      setList(items)
    }
  })

  const inputHandler = (event) => {
    const index = event.target.name
    list[index].price = event.target.value
    const totalAmount = list.reduce((acc, item) => acc + (+item.price * item.quantity), 0)
    dispatch(setTotalAmount(totalAmount))
  }

  const handleQuantityDecrease = (index) => {
    const newList = [...list]
    if (newList[index].quantity === 0) return
    newList[index].quantity -= 1
    const totalAmount = newList.reduce((acc, item) => acc + (+item.price * item.quantity), 0)
    dispatch(setTotalAmount(totalAmount))
    setList(newList)
  }

  const handleQuantityIncrease = (index) => {
    const newList = [...list]
    newList[index].quantity += 1
    const totalAmount = newList.reduce((acc, item) => acc + (+item.price * item.quantity), 0)
    dispatch(setTotalAmount(totalAmount))
    setList(newList)
  }

  if (list) {
    return (
      <div className="items-list-box">
        {list.map((item, index) => (
          <div className="list-of-items" key={index}>
            <span>{item.productName[0].toUpperCase() + item.productName.slice(1)}</span>
            <div className="item-info">
              <div className="item-price">
                <input 
                  type="text"
                  name={index}
                  defaultValue={item.price || ''}
                  onChange={inputHandler}
                  className="item-price-input"
                  placeholder="Price" 
                />
                <span> $</span>
              </div>
              <div className="item-quantity">
                <button>
                  <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
                </button>
                <span>{item.quantity}</span>
                <button>
                  <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ItemsList