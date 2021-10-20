import React from 'react'

export default function Price(props) {
    return (
        <div
        
          style={{
            fontSize: props.fontSize ? props.fontSize : "14px",
            fontWeight: "bold",
            margin: "5px 0",
          }}
        >
         
          {props.value}
          <span style={{marginLeft:"4px"}}>DA</span>
        </div>
      );
}
