import React, {useState} from "react";

function Item({ name, category}) {
  const [isItem, setIsItem] =useState(false)
  
  function handleItem() {
    setIsItem(() => !isItem)
  } 
 const itemInCart = isItem ? "in-cart" : ""
  return (
    <li className={itemInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>{isItem ? "Remove From Cart": "Add to Cart" }</button>
    </li>
  );
}

export default Item;