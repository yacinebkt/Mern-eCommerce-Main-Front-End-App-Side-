import React, { useState } from "react";
import "./style.css";
import { PublicUrlGenerator } from "../../../urlConfig";
import { addToCart, removeCartItem } from "../../../actions/cart.action";

import {useDispatch } from "react-redux"


export default function CartItem(props) {


  const [qty, setQty] = useState(props.cartItem.qty);

  const { _id, name, price, img } = props.cartItem;
  

 /* const dispatch = useDispatch()*/

  const onQuantityIncrement = () => {
      setQty(qty + 1);
      props.onQtnInc(_id, qty + 1);
      /*dispatch(addToCart({ _id, name, price, img}));*/
    };
  
    const onQuantityDecrement = () => {
      if (qty <= 1) return;
      setQty(qty - 1);
      props.onQtnDec(_id, qty - 1);
    };

    
    /*const onRemoveCartItem = (_id) => {
      dispatch(removeCartItem({ productId: _id }));
  };
  */

  return (
    <div className="cartItemContainer">
      <div className="flexRow">

        <div className="cartProImgContainer">
          <img src={PublicUrlGenerator(img)} alt={""} />
        </div>
        <div className="cartItemDetails">
          <div>
            <p>{name}</p>
            <p>Price : {price}</p>
          </div>
          <div>Delivery in 3 - 5 days</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "5px 0",
        }}
      >
        {/* quantity control */}
        <div className="quantityControl">
          <button onClick={onQuantityDecrement}  >-</button>
          <input value={qty} readOnly />
          <button onClick={onQuantityIncrement}  >+</button>
        </div>
        <button className="cartActionBtn">save for later</button>
        <button
          className="cartActionBtn"
          onClick={() => props.onRemoveCartItem(_id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
