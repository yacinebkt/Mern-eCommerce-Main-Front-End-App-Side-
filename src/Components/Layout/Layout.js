import React from 'react';
import Header from '../Header/Header';
import Header02 from '../Header/Header02'
import MenuHeader from '../MenuHeader/MenuHeader';
import MenuHeaader2 from '../MenuHeader/MenuHeader2.js/MenuHeaader2';


export default function Layout(props) {

    
    return (
        <div style={{background: "#f1f3f6" }}>
            {/*<Header />*/} 
            
            <Header02 />  
           {/* <MenuHeaader2 /> */}
          
            <MenuHeader />
           {/* <MenuHeader /> */ }
            {props.children}       
        </div>
    )
}
