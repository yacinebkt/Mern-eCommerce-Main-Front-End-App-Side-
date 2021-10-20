import React, { useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'

import { getOrders } from '../../actions/user.action';
import {Provider, useDispatch, useSelector} from "react-redux"
import Card from '../../Components/UI/Card/Card';
import './style.css'
import { PublicUrlGenerator } from '../../urlConfig';
import { Breed } from '../../Components/MaterialUI/MaterielUI';
import { IoIosArrowForward } from 'react-icons/io';
import {Link} from "react-router-dom"


export default function OrderPage(props) {

    const dispatch = useDispatch();
    const user = useSelector( state => state.user)
    

    useEffect (() => {
        dispatch(getOrders())
    }, [])
    return (
        <Layout>
            <div style={{maxWidth:"1160px", margin:'5px auto'}}>
                    <Breed 
                        breed={[
                            { name : "Home", href : "/"},
                            { name : "My Acount", href : "/account"},
                            { name : "My Orders", href : "/account/orders"},
                        ]} 
                        breedIcon= {<IoIosArrowForward />}
            />
                    
                
           



            {
                user.orders.map( order => {
                    return order.items.map( item => (
                        <Card style={{ margin:"5px auto", display:"block"}}>
                            <Link
                            to={`/order_details/${order._id}`}
                            
                            className="orderItemContainer"
                            style={{textDecoration:"none"}}
                            >
                            
                                 {/*<div className="orderItemContainer">*/}
                                <div className="orderImgContainer" style={{width: 80, height:80, overflow: "hidden", textAlign:"center"}}>
                                    <img src={PublicUrlGenerator(item.productId.productPictures[0].img)}
                                    style={{maxWidth: 80, maxHeight:80, overflow: "hidden"}}
                                    /> </div>
                                    <div className="orderRow">
                                        <div  className="orderName"> {item.productId.name} </div>
                                        <div  className="orderPrice"> {item.payablePrice} </div>
                                        <div> {order.paymentStatus} </div>
                                    </div>
                               
                            </Link>
                        </Card>

                    ))
                })
            }
            </div>
            
        </Layout>
    )
}


