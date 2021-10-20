import React from 'react'
import { IoIosCart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";



export default function Cart(props) {
    return (
        <div style={{ fontSize: "20px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          background: "red",
          width: "17px",
          height: "17px",
          borderRadius: "50%",
          fontSize: "11px",
          
          textAlign: "center",
          alignSelf: "center",
          top: "-6px",
          right: "-6px",
          color:"#FFF",
        }}
      >
        {props.count}
      </span>
      {/*<IoIosCart />*/}
      <FaShoppingCart  className="end-nav-icons" />
    </div>
    )
}
