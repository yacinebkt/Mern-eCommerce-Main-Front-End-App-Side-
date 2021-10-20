import React, { useState, useEffect } from "react";

import flipkartLogo from "../../Img/Logo/flipkart.png";
import StoreLogo from "../../Img/store-logos/logo-white.png";
import goldenStar from "../../Img/Logo/golden-star.png";
import {
  IoIosArrowDown,
  IoIosCart,
  IoIosSearch,
  IoMdFitness,
} from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI/MaterielUI";

import { useDispatch, useSelector } from "react-redux";
import {
  login,
  LogOut,
  signup as signupReal,
} from "../../actions/authentification.action";
import Cart from "../UI/Cart";

/* NavBAR REACT bOOTSTRAP */

import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  FormControl,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import "./style02.css";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  IoSearchSharp,
  IoHeartOutline,
  IoInformationCircleSharp,
  IoLogOut,
  IoLogIn, 
  IoPersonAdd
} from "react-icons/io5";
import { FaRegHeart, FaUserAlt, FaUserCircle, FaShoppingCart, FaShoppingBag, } from "react-icons/fa";

export default function Header02(props) {
  const cart = useSelector((state) => state.cart);


  
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /* singup */
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  /* end singup */


  const userSignup = () => {
    const user = {firstName, lastName, email, password};

    if (
      firstName === "" || lastName === "" ||
      email === "" || password === ""
    ) {
      return ;
    } else {
      dispatch(signupReal(user))
    }
  }
  const userLogin = () =>{
    if(signup) {
      userSignup()
    } else{
      dispatch(login({ email, password}))
    }
      
  }


  const Logout = () => {
    dispatch(LogOut());
  }

useEffect(() => {
  if(auth.authenticate){
    setLoginModal(false)
  }
 
}, [auth.authenticate]);



  /* drop down menus */
  const rendreLoggedInMenu = () =>{

    return (
      <DropdownMenu
         menu={
          <a className="fullName">
            {auth.user.firstName}
          </a>}

          menus={[
            { label: 'My Profile', href: '', icon: null },
            { label: 'SuperCoin Zone', href: '', icon: null },
            { label: 'Flipkart Plus Zone', href: '', icon: null },
            { label: 'Orders', href: `/account/orders`, icon: null },
            { label: 'Wishlist', href: '', icon: null },
            { label: 'My Chats', href: '', icon: null },
            { label: 'Coupons', href: '', icon: null },
            { label: 'Rewards', href: '', icon: null },
            { label: 'Notifications', href: '', icon: null },
            { label: 'Gift Cards', href: '', icon: null },
            { label: 'LogOut', href: '', icon: null, onClick: Logout },
          ]}
          /*firstMenu={
            <div className="firstmenu">
              <span>New Customer?</span>
              <a style={{ color: '#2874f0' }}>Sign Up</a>
            </div>
          }*/
        />
    );

  }


  const renderMenu1 = () =>{
    return (

      <>
      <Nav.Item style={{ textDecoration: "none", position:"relative" }} className="Menu1">
      <Nav.Link
        href="#"
        className="icon-container user-icon navLinkitem-container"
        style={{ textDecoration: "none" }}
        onClick={() => {
          setSignup(false);
          setLoginModal(true);
        }}
      >
        <FaUserAlt className="end-nav-icons" />
        <div
          style={{
            marginLeft: ".5rem",
          }}
          id="seConnecterBtn"
        >
          {" "}
          Se Connecter{" "}
        </div>
      </Nav.Link>

        <Dropdown.Menu show className="menu1-dropdown">
        
      

          <Dropdown.Item   onClick={() => {
                setSignup(false);
                setLoginModal(true);
              }} 
            >
              <IoLogIn className="end-nav-icons"
                style={{
                  fontSize: "22px",
                  marginRight: "10px", 
                  padding:"0px",
                  marginLeft:"-13px",
                  
                }} /> 
               S'identifier </Dropdown.Item> 

               <NavDropdown.Divider />


          <Dropdown.Item  onClick={() => {
                  setLoginModal(true);
                  setSignup(true);
                }}
           >
             <IoPersonAdd className="end-nav-icons"
                style={{
                  fontSize: "19px",
                  marginRight: "10px", 
                  padding:"0px",
                  marginLeft:"-13px",
                  
                }} /> 
           Créer un compte  </Dropdown.Item>        

             
          <Dropdown.Item >
          <FaUserAlt className="end-nav-icons"
                style={{
                  fontSize: "17px",
                  marginRight: "10px", 
                  padding:"0px",
                  marginLeft:"-10px",
                  
                }} /> 
                Mon profil</Dropdown.Item>
          <Dropdown.Item href="/account/orders">
          <FaShoppingBag
                style={{
                  fontSize: "17px",
                    marginRight: "10px", 
                    padding:"0px",
                    marginLeft:"-10px"
                }} />
                Mes commandes</Dropdown.Item>
        </Dropdown.Menu>
    </Nav.Item >
       
    </>
   
    )
  }


  
  const renderMenu2 = () =>{
    return (

      <>
      <Nav.Item style={{ textDecoration: "none", position:"relative" }} className="Menu1">
      <Nav.Link
        href="#"
        className="icon-container user-icon navLinkitem-container"
        style={{ textDecoration: "none" }}
       
      >

          <FaUserCircle className="end-nav-icons"
            style={{
              fontSize: "26px",
              display: "block",
              margin: "auto", 
            }} />
        
        <div
           style={{
            marginLeft: "-.7rem",
            fontSize: "19px",
            marginTop: "6px",
          }}
         >
           <a className="fullName" style={{ textDecoration: "none !important"}}>
            {auth.user.firstName}
          </a>
        </div>
      
         

     
          
      </Nav.Link>

        <Dropdown.Menu show className="menu1-dropdown">
        
      

                  
          <Dropdown.Item >
              <FaUserAlt className="end-nav-icons"
                style={{
                  fontSize: "17px",
                  marginRight: "10px", 
                  padding:"0px",
                  marginLeft:"-10px",
                  
                }} /> 
              Mon profil
          </Dropdown.Item>

          <Dropdown.Item href="/account/orders">
          <FaShoppingBag
                style={{
                  fontSize: "17px",
                    marginRight: "10px", 
                    padding:"0px",
                    marginLeft:"-10px"
                }} />
              Mes commandes</Dropdown.Item>
          <NavDropdown.Divider />

          <Dropdown.Item
            onClick={() => {
              Logout ();
            }}  >
              <IoLogOut className="end-nav-icons"
                  style={{
                    fontSize: "21px",
                    marginRight: "10px", 
                    padding:"0px",
                    marginLeft:"-10px"
                  }} /> 
                  Se déconnecter
          </Dropdown.Item>
         
        </Dropdown.Menu>
    </Nav.Item >
       
    </>
   
    )
  }


  
  const rendreNoLoggedInMenu = () =>{

    return (
      <DropdownMenu
          menu={
            /*<a className="loginButton" onClick={() => setLoginModal(true)}>
              Login
            </a>*/
            <a
              className="loginButton"
              onClick={() => {
                setSignup(false);
                setLoginModal(true);
              }}
            >
              Login
            </a>
          }
          menus={[
            { label: 'My Profile', href: '', icon: null },
            { label: 'Flipkart Plus Zone', href: '', icon: null },
            { label: 'Orders', href: `/account/orders`, icon: null, onClick : () => { setLoginModal(true)}},
            { label: 'Wishlist', href: '', icon: null },
            { label: 'Rewards', href: '', icon: null },
            { label: 'Gift Cards', href: '', icon: null },
          ]}
          /*firstMenu={
            <div className="firstmenu">
              <span>New Customer?</span>
              <a style={{ color: '#2874f0' }}>Sign Up</a>
            </div>
          }*/
          firstMenu={
            <div className="firstmenu">
              <span>New Customer?</span>
              <a
                onClick={() => {
                  setLoginModal(true);
                  setSignup(true);
                }}
                style={{ color: "#2874f0", cursor:"pointer"}}
              >
                Sign Up
              </a>
            </div>
          }
        />
    )
    
  }

  /* End drop down menus */

  return (

    <>


    <Navbar collapseOnSelect expand="lg" className="bg-nav navfixed" variant="dark" >
      <Navbar.Brand href="/">
        <div className="logo" style={{ marginLeft: "2rem" }}>
          <a href="/">
            <img src={StoreLogo} className="logoimage" alt="" />
          </a>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Form className="d-flex">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="cherchez un produit, une marque ou une catégorie ..."
              />
              <button type="submit" className="searchButton">
                <IoSearchSharp className="search-icon" id="label-icon" />
              </button>
            </div>
          </Form>
        </Nav>


        <Nav style={{ marginLeft: "2rem" }}>
         {/* <Nav.Item style={{ textDecoration: "none" }}>
            <Nav.Link
              href="/"
              className="icon-container user-icon navLinkitem-container"
              style={{ textDecoration: "none" }}
            >
              <FaUserAlt className="end-nav-icons" />
              <div
                style={{
                  marginLeft: ".5rem",
                }}
              >
                {" "}
                Se Connecter{" "}
              </div>
            </Nav.Link>
          </Nav.Item>
          */}

          { /*
          auth.authenticate ?
            rendreLoggedInMenu() 
            : rendreNoLoggedInMenu()
          */ }


          { 
          auth.authenticate ?
          renderMenu2() 
            : renderMenu1()
          }



        
          <Nav.Link
              href="/account/orders"
              className="icon-container navLinkitem-container"
              style={{ position: "relative" }}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  marginLeft: ".5rem",
                  fontSize: "19px",
                  marginTop: "6px",
                }}
              >
                {" "}
                Commandes{" "}
              </div>
              <FaShoppingBag
                style={{
                  marginLeft: ".5rem",
                  fontSize: "14px",
                  marginTop:"4px"
                }}
              />
            </Nav.Link>

          <NavDropdown title="Aide" id="basic-nav-dropdown"  style={{
                  marginLeft: ".5rem",
                  fontSize: "19px",
                  marginTop: "6px",
                }}>
            
            <NavDropdown.Item href="/">Center d'assictance</NavDropdown.Item>
            <NavDropdown.Item href="/">Passer et suivre ma Commande</NavDropdown.Item>
            <NavDropdown.Item href="/">Modes de paiement</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Contactez-nous</NavDropdown.Item>
          </NavDropdown>

        </Nav>

        <Nav
          className="justify-content-end end-nav"
          style={{ marginRight: "1rem" }}
        >
          <Nav.Item>
            <Nav.Link
              className="icon-container navLinkitem-container "
              href={`/cart`}
              style={{ textDecoration: "none" }}
            >
              {/* <FaShoppingCart className="end-nav-icons cart-icon"/> */}
              <Cart count={Object.keys(cart.cartItems).length} />
              <div
                style={{
                  marginLeft: ".5rem",
                }}
              >
                {" "}
                Pannier{" "}
              </div>

              {/*
                <a  href={`/cart`}  className="cart" style={{ textDecoration:"none" }}>
              <Cart count ={Object.keys(cart.cartItems).length}/>
              <span style={{ margin: '0 10px' }}>Cart</span>
            </a> */}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>






{/*Modals */}

<Modal 
        visible={loginModal}
        onClose={() => setLoginModal(false)}
        className="Modal"
      >
        <div className="authContainer"  >
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
          
            <div className="loginInpCont">

               {/* sing up add input //2 */}
               {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}
              {/* */}
                <MaterialInput 
                  type="text"
                  label="Enter Email/Enter Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <MaterialInput 
                  type="password"
                  label="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  rightElement={<a href="#">Forgot?</a>}
                />

                <MaterialButton 
                  /*title="Login"*/
                  title={signup ? "Register" : "Login"}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{margin:"30px 0 20px 0"}}
                  onClick={userLogin}
                />

               {/* <p> OR </p>*/}
               <p style={{textAlign:"center"}}> OR</p>
                

               
                <MaterialButton 
                  title="Request OTP"
                  bgColor="#FFF"
                  textColor="#2874f0"
                  style={{margin:"20px 0"}}
                />

              </div>  

              

            </div>
          </div>
        </div>
      </Modal>

</>
  );
}
