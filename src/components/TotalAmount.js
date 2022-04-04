import React from "react";
import { useSelector } from "react-redux";

const TotalAmount = () => {
  const totalAmount = useSelector(state => state.shopingList.totalAmount)

  if (totalAmount) {
    return (
      <div className="total-amount">
        <span>Total amount</span>
        <span>{totalAmount} $</span>
      </div>
    )
  }
}

export default TotalAmount