import React from "react";
import AddItemForm from "./AddItemForm";
import ItemsList from "./ItemsList";
import TotalAmount from "./TotalAmount";

const ShopingList = () => {
  return (
    <div className="shoping-list-app">
      <h1 className="title">Shoping List</h1>
      <AddItemForm />
      <ItemsList />
      <TotalAmount />
    </div>
  )
}

export default ShopingList