import React from 'react'
import { IoIosStar } from "react-icons/io";


export default function Rating(props) {
    
    return (
        <span
        {...props}

          style={{
            display: "inline-block",
            background: "#388e3c",
            color: "#fff",
            fontWeight: "400",
            fontSize: "13px",
            borderRadius: "3px",
            padding: "2px 5px",
          }}

        >
          {props.value} <IoIosStar />
        </span>
      );
    
}
