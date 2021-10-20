import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import Layout from '../../Components/Layout/Layout';
import Card from '../../Components/UI/Card/Card';
import CartItem from './CartItem/CartItem';
import {PublicUrlGenerator} from "../../urlConfig"

import "./style.css"

import { useState, useEffect } from 'react';
import { addToCart, getCartItems, removeCartItem } from '../../actions/cart.action';
import { MaterialButton } from '../../Components/MaterialUI/MaterielUI';
import PriceDetials from '../../Components/PriceDeTails/PriceDetials';

export default function CartPage(props) {

        const cart = useSelector(state => state.cart)
        const auth = useSelector(state => state.auth);

        

       /* const cartItems = cart.cartItems;*/ 

        const [cartItems, setCartItems] = useState(cart.cartItems)
        const dispatch = useDispatch()
        

        useEffect(() => {
            setCartItems(cart.cartItems)
        }, [cart.cartItems])



        useEffect(() => {

           if (auth.authenticate) {
               dispatch(getCartItems())
           }
           
        }, [auth.authenticate])


       const onQtnInc = ( _id, qty) =>{
        console.log({_id, qty})
        const {name, price, img} = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img}, 1))
       }
        
       const onQtnDec = ( _id, qty) =>{
        console.log({_id, qty})
        const {name, price, img} = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img}, -1))
       }

                    
        const onRemoveCartItem = (_id) => {
            dispatch(removeCartItem({ productId: _id }));
        };

       
        if (props.onlyCartItems) {
            return (
                <>
                      {
                         Object.keys(cartItems).map((Key, index) => 

                            <CartItem
                                key={index}
                                cartItem = {cartItems[Key]}
                                onQtnInc = {onQtnInc}
                                onQtnDec = {onQtnDec}
                            
                            />
                         )
                     }

                </>
            );
            
        }

    return (
        <div>
           <Layout>
               <div className="cartContainer" 
                style={{alignItems:'flex-start'}}
               >
                   <Card
                   headerLeft ={` My Cart`}
                   headerRight ={` Deliver To : `}
                   style={{width : "calc(100% - 400px)", overflow:"hiden"}}
                   
                   >

                       {/*
                           JSON.stringify(cartItems)
                       */}
                     {
                         Object.keys(cartItems).map((Key, index) => 

                            <CartItem

                                key={index}
                                cartItem = {cartItems[Key]}
                                onQtnInc = {onQtnInc}
                                onQtnDec = {onQtnDec}
                                onRemoveCartItem={onRemoveCartItem}

                            
                            />

                            
                           /* <div key={index} className="flexRow">
                                    <div className="cartProductContainer">
                                        <img  src="" />    
                                    </div>

                                    <div className="cartItemDetails">
                                        <div>
                                        {cartItems[Key].name} - qty  {cartItems[Key].qty}
                                        </div>

                                        <div> Delivery in 3-5 days</div>

                                    </div>
                            </div>
                            */


                         )
                     }

                     
                            <div 
                                style={{
                                    width: "100%",
                                    display:"flex",
                                    background:"#FFF",
                                    justifyContent:"flex-end",
                                    boxShadow:" 0 0 10px 10px #EEE",
                                    padding:'10px 0',
                                    boxSizing:'border-BOX'
                                }}

                            >
                                <div
                                    style={{
                                        width:"250px"
                                    }}
                                >
                                    <MaterialButton 
                                        title="PLACE ORDER"
                                        onClick = {( ) => props.history.push(`/checkout`)}
                                    
                                    
                                    />

                                </div>

                            </div>

                   </Card>

                  {/*<Card
                   style={{
                       width :" 390px "
                   }}
                   headerLeft=" Price"
                   >
                       
                   </Card>  */} 

                   <PriceDetials
                    totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
                        return qty + cart.cartItems[key].qty;
                    }, 0)}
                    totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
                        const { price, qty } = cart.cartItems[key];
                        return totalPrice + price * qty;
                    }, 0)}
                     />

               </div>
           </Layout>
        </div>
    )
}
