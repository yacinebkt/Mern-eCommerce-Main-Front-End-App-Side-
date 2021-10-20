import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../actions/cart.action";
import { getAddress /*, getCartItems*/, addOrder } from "../../actions/user.action";

import Layout from '../../Components/Layout/Layout';

import {
  Anchor,
  MaterialButton,
  MaterialInput,
} from "../../Components/MaterialUI/MaterielUI";
import PriceDetials from "../../Components/PriceDeTails/PriceDetials";
/*import PriceDetails from "../../components/PriceDetails";*/

import Card from '../../Components/UI/Card/Card';
import CartPage from "../CartPage/CartPage";

/*import CartPage from "../CartPage";*/
import AddressForm from "./AddressForm";

import "./style.css";



const CheckoutStep = (props) => {
    return (
      <div className="checkoutStep">
        <div
          onClick={props.onClick}
          className={`checkoutHeader ${props.active && "active"}`}
          style={props.style}
        >
          <div>
            <span className="stepNumber">{props.stepNumber}</span>
            <span className="stepTitle">{props.title}</span>
          </div>
        </div>
        {props.body && props.body}
      </div>
    );
};



export default function CheckoutPage(props) {

    const user = useSelector((state) => state.user);
    const auth = useSelector((state) => state.auth);
    const [newAddress, setNewAddress] = useState(false);
    const [address, setAddress] = useState([]);

    
    const [confirmAddress, setConfirmAddress] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [orderSummary, setOrderSummary] = useState(false);

    const [orderConfirmation, setOrderConfirmation] = useState(false);
    const [paymentOption, setPaymentOption] = useState(false);
    const [confirmOrder, setConfirmOrder] = useState(false);
    
    const cart = useSelector(state => state.cart);


   /* const auth = useSelector((state) => state.auth);
    const [newAddress, setNewAddress] = useState(false);
    const [address, setAddress] = useState([]);
    const [confirmAddress, setConfirmAddress] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [orderSummary, setOrderSummary] = useState(false);
    const [orderConfirmation, setOrderConfirmation] = useState(false);
    const [paymentOption, setPaymentOption] = useState(false);
    const [confirmOrder, setConfirmOrder] = useState(false);
    const cart = useSelector((state) => state.cart);
    */
    const dispatch = useDispatch();
  
    const onAddressSubmit = (addr) => {
        setSelectedAddress(addr);
        setConfirmAddress(true);
        setOrderSummary(true);
      /* setOrderSummary(true);
      */
    };
  


    const SelectAddress = (adr) => {
        //console.log(addr);
        const updatedAddressState = address.map((adr2) =>
         adr2._id === adr._id
            ? { ...adr2, selected: true }
            : { ...adr2, selected: false }
        );
        setAddress(updatedAddressState);
      };
    

      

      const ConfirmDeliveryAddress = (addr) => {
        setSelectedAddress(addr);
        setConfirmAddress(true);
        setOrderSummary(true);
        /*setOrderSummary(true);*/
      };

      const EnableAddressEditForm = (addr) => {
        const updatedAddress = address.map((adr) =>
          adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
        );
        setAddress(updatedAddress);
      };

      const userOrderConfirmation = () => {
        setOrderConfirmation(true);
        setOrderSummary(false);
        setPaymentOption(true);
        /*setPaymentOption(true);*/
      };

      const onConfirmOrder = () => {
        const totalPrice = Object.keys(cart.cartItems).reduce(
          (totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          },
          0
        )
        const items = Object.keys(cart.cartItems).map(key =>({
          productId: key, payablePrice: cart.cartItems[key].price, purchasedQty: cart.cartItems[key].qty
        }))

        const payload = {
          addressId: selectedAddress._id,
          totalAmount: totalPrice,
          items,
          paymentStatus: "pending",
          paymentType: "cod"
        }
        console.log(payload)
        dispatch(addOrder(payload))
        setConfirmOrder(true);

        /*const totalAmount = Object.keys(cart.cartItems).reduce(
          (totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          },
          0
        )*/
      };
    
   /* const selectAddress = (addr) => {
      //console.log(addr);
      const updatedAddress = address.map((adr) =>
        adr._id === addr._id
          ? { ...adr, selected: true }
          : { ...adr, selected: false }
      );
      setAddress(updatedAddress);
    };
  
    const confirmDeliveryAddress = (addr) => {
      setSelectedAddress(addr);
      setConfirmAddress(true);
      setOrderSummary(true);
    };
  
    const enableAddressEditForm = (addr) => {
      const updatedAddress = address.map((adr) =>
        adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
      );
      setAddress(updatedAddress);
    };
  
    const userOrderConfirmation = () => {
      setOrderConfirmation(true);
      setOrderSummary(false);
      setPaymentOption(true);
    };
  
    const onConfirmOrder = () => {
      const totalAmount = Object.keys(cart.cartItems).reduce(
        (totalPrice, key) => {
          const { price, qty } = cart.cartItems[key];
          return totalPrice + price * qty;
        },
        0
      );
      const items = Object.keys(cart.cartItems).map((key) => ({
        productId: key,
        payablePrice: cart.cartItems[key].price,
        purchasedQty: cart.cartItems[key].qty,
      }));
      const payload = {
        addressId: selectedAddress._id,
        totalAmount,
        items,
        paymentStatus: "pending",
        paymentType: "cod",
      };
  
      console.log(payload);
      dispatch(addOrder(payload));
      setConfirmOrder(true);
    };
    
    useEffect(() => {
      auth.authenticate && dispatch(getAddress());
      auth.authenticate && dispatch(getCartItems());
    }, [auth.authenticate]);
  
    useEffect(() => {
      const address = user.address.map((adr) => ({
        ...adr,
        selected: false,
        edit: false,
      }));
      setAddress(address);
      //user.address.length === 0 && setNewAddress(true);
    }, [user.address]);
  
    useEffect(() => {
      if (confirmOrder && user.placedOrderId) {
        props.history.push(`/order_details/${user.placedOrderId}`);
      }
    }, [user.placedOrderId]);
    */

    useEffect(() => {
        auth.authenticate  && dispatch(getAddress()); // if true dispatch action
        auth.authenticate  && dispatch(getCartItems()); 

      }, [auth.authenticate]);
    

      
    useEffect(() => {
        const address = user.address.map((addr) => ({
            ...addr,
            selected: false,
            edit: false,
          }));
          setAddress(address);
          //user.address.length === 0 && setNewAddress(true); 
        
      }, [user.address]);
    


      if (confirmOrder) {
        return (
          <>
            <Layout>
              <Card>
                <div> Thank You</div>
              </Card>
            </Layout>
          </>
        )
      }


    return (
       <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <div className="checkoutContainer">

          {/* check if user logged in or not */}
          <CheckoutStep
            stepNumber={"1"}
            title={"LOGIN"}
           /* active={!auth.authenticate}
           active={true}*/
           active={!auth.authenticate}
           
            body={

                auth.authenticate ? 
                    <div className="loggedInId">
                        <span style={{ 
                            fontWeight:"bold"
                            }}
                        >
                            {auth.user.fullName}
                        </span>
                        <span style={{ 
                            fontWeight:"bold"
                            }}
                        >
                            {auth.user.email}
                        </span>

                    </div>
                : /*null*/
                    <div  style={{margin:"0 10px"}}>
                        <MaterialInput
                            label="Email"
                           
                        />

                      
                    </div>
              /*auth.authenticate ? (
                <div className="loggedInId">
                  <span style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                  <span style={{ margin: "0 5px" }}>{auth.user.email}</span>
                </div>
              ) : (
                <div>
                  <MaterialInput label="Email" />
                </div>
              )*/
            }
          />

          

          <CheckoutStep
            stepNumber={"2"}
            title={"DELIVERY ADDRESS"}

           /* active={!confirmAddress && auth.authenticate}
           active={false}
           active={address.length > 0 ? true : false}*/

           active={!confirmAddress && auth.authenticate}
           
            body={
              <>
              {/* <div> {JSON.stringify(address)} </div> */}
                {
                    /*
                    (user.address || []).map ( adr => */
                    /**user.address.map ( adr => */    

                    confirmAddress ?
                     /*JSON.stringify(selectedAddress)*/
                    <div className="stepCompleted"> {`${selectedAddress.name }- ${selectedAddress.address} - ${selectedAddress.pinCode}  `} </div> 
                    :
                    address.map ( adr =>
                        <div className="flexRow addressContainer">
                            <div>
                                <input name="address" type="radio" onClick={ () => SelectAddress(adr)} />
                            </div>

                            <div className="flexRow sb addressinfo">
                                { !adr.edit ?
                                        <div style={{width:"100%"}}>
                                            <div className="addressDetails" style={{display: 'flex', justifyContent: 'space-between'}}> 
                                                <div>
                                                    <span className="addressName"> { adr.name} </span>
                                                    <span className="addressType"> { adr.addressType} </span>
                                                    <span className="addressMobileNumber"> { adr.mobileNumber} </span>
                                                </div>

                                                    {/*
                                                        <div>
                                                            <div> {adr.address} </div>
                                                        </div>
                                                    */}

                                            {
                                                adr.selected ?
                                                <Anchor
                                                name="Edit"
                                                onClick={ () => EnableAddressEditForm(adr)} 
                                                style={{
                                                    fontWeight:'bold',
                                                    color:'#2874f0'
                                                }}                                                
                                                />
                                                :null
                                                /*<MaterialButton 
                                                onClick={ () => ConfirmDeliveryAddress(adr)} 
                                                title='DELIVERY HERE'
                                                style={{
                                                    width:'250px'
                                                }}
                                                />
                                                :null*/

                                            }

                                            </div> 

                                                <div className="fullAddress">
                                                    {adr.address} <br/> {""}
                                                    {` ${adr.state} - ${adr.pinCode}`}                                    
                                                </div>



                                                {
                                                    adr.selected ?
                                                    <MaterialButton 
                                                    onClick={ () => ConfirmDeliveryAddress(adr)} 
                                                    title='DELIVERY HERE'
                                                    style={{
                                                        width:'250px'
                                                    }}
                                                    />
                                                    
                                                    :null

                                                }


                                        </div>
                                    : /*null*/ // click on edit/ edit <-- true
                                     <AddressForm 
                                     onSubmitForm={onAddressSubmit} 
                                     onCancel={() => {}}
                                     initialData={adr}
                                     withoutLayout={true}
                                     />
                                
                                }

                              
                               

                            </div>
                               

                           

                        </div>
                        
                        
                        
                    )
                }


                {/*
                {confirmAddress ? (
                  <div className="stepCompleted">{`${selectedAddress.name} ${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
                ) : (
                  address.map((adr) => (
                    <Address
                      selectAddress={selectAddress}
                      enableAddressEditForm={enableAddressEditForm}
                      confirmDeliveryAddress={confirmDeliveryAddress}
                      onAddressSubmit={onAddressSubmit}
                      adr={adr}
                    />
                  ))
                )}
                  */ }
              </>
            }
          />
        
          {/* AddressForm */}

          
          {
              !confirmAddress ?
              newAddress ?
              <AddressForm 
              onSubmitForm={onAddressSubmit} 
              onCancel={() => {}}
              />
              : 
             /* null*/
              <CheckoutStep
              
              title={"ADD NEW ADDRESS"}
              active={false}
              stepNumber={"+"}
              onClick={ () => setNewAddress(true)}
              style={{cursor: "pointer"}}
              />
              :null

          }
 

          {/*
              auth.authenticate ?
              
              <AddressForm 
              onSubmitForm={onAddressSubmit} 
              onCancel={() => {}}
              />
              : 
              null
              */
          }

          
          
           <CheckoutStep
              stepNumber={"3"}
              title={"ORDER SUMMARY"}
              active={orderSummary}
              body={
                orderSummary ?
                <CartPage onlyCartItems={true}/>
                :/*null*/
                orderConfirmation ?
                <div className="stepCompleted"> {Object.keys(cart.cartItems).length} Items </div>
                :null
              }
           />

              {
                orderSummary ? 
                <Card style={{marginBottom : "12px"}} >
                <div style={{
                  display: "flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  margin:'10px',
                  padding:'5px 0 5px 20px '
                }}>
                  <p style={{fontSize:"15px"}}> Order confirmation email will be sent to : <span style={{fontWeight:'bold'}}>{auth.user.email}</span>  </p>
                  <MaterialButton 
                  title="CONTINUE"
                  onClick={ userOrderConfirmation}
                  style={{
                   width:"200px",
                   margin:'10px'
                   }}
                   
                  />
                </div>
                </Card>
   
                
                :
                null
              }

          
            <CheckoutStep
              stepNumber={"4"}
              title={"PAYMENT OTIONS"}
              active={paymentOption}
              body={

                paymentOption ?
                  <div className="">
                    <div className="flexRow"
                       style={{
                        alignItems: "center",
                        padding:'20px'
                      }} 
                    > 
                      <input type="radio" name="paymentOption" value="cod" style={{ marginLeft:"15px"}} /> {/* cach on delivery */}
                      <div  style={{ marginLeft:"10px"}} > Cash On delivery</div>
                    </div> 

                    <MaterialButton
                      title="CONFIRM ORDER"
                      onClick={onConfirmOrder}
                      style={{
                        width: "180px",
                        margin: '0 0 20px 20px',
                        paddingBottom: ' 20px'
                      }} 
                    
                  
                    />
                    
                  </div>
                :null

              }
           />



          {/*
          {confirmAddress ? null : newAddress ? (
            <AddressForm onSubmitForm={onAddressSubmit} onCancel={() => {}} />
          ) : auth.authenticate ? (
            <CheckoutStep
              stepNumber={"+"}
              title={"ADD NEW ADDRESS"}
              active={false}
              onClick={() => setNewAddress(true)}
            />
          ) : null}
           */}


           {/*
          <CheckoutStep
            stepNumber={"3"}
            title={"ORDER SUMMARY"}
            active={orderSummary}
            body={
              orderSummary ? (
                <CartPage onlyCartItems={true} />
              ) : orderConfirmation ? (
                <div className="stepCompleted">
                  {Object.keys(cart.cartItems).length} items
                </div>
              ) : null
            }
          />
           */}


         {/*
          {orderSummary && (
            <Card
              style={{
                margin: "10px 0",
              }}
            >
              <div
                className="flexRow sb"
                style={{
                  padding: "20px",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "12px" }}>
                  Order confirmation email will be sent to{" "}
                  <strong>{auth.user.email}</strong>
                </p>
                <MaterialButton
                  title="CONTINUE"
                  onClick={userOrderConfirmation}
                  style={{
                    width: "200px",
                  }}
                />
              </div>
            </Card>
          )}

          <CheckoutStep
            stepNumber={"4"}
            title={"PAYMENT OPTIONS"}
            active={paymentOption}
            body={
              paymentOption && (
                <div>
                  <div
                    className="flexRow"
                    style={{
                      alignItems: "center",
                      padding: "20px",
                    }}
                  >
                    <input type="radio" name="paymentOption" value="cod" />
                    <div>Cash on delivery</div>
                  </div>
                  <MaterialButton
                    title="CONFIRM ORDER"
                    onClick={onConfirmOrder}
                    style={{
                      width: "200px",
                      margin: "0 0 20px 20px",
                    }}
                  />
                </div>
              )
            }
          />
           */}
        </div>

        

        {/* Price Component */}

        <PriceDetials
                    totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
                        return qty + cart.cartItems[key].qty;
                    }, 0)}
                    totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
                        const { price, qty } = cart.cartItems[key];
                        return totalPrice + price * qty;
                    }, 0)}
                     />

        {/* 
        <PriceDetails
          totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)}
        />
         */}
      </div>
      
    </Layout>
    )
}
