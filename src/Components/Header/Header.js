import React, { useState, useEffect } from 'react'
import './style.css'

/* speed implimentation ui materiel */
import flipkartLogo from '../../Img/Logo/flipkart.png';
import goldenStar from '../../Img/Logo/golden-star.png';
import { IoIosArrowDown, IoIosCart, IoIosSearch, IoMdFitness } from 'react-icons/io';
import { 
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI/MaterielUI';

import { useDispatch, useSelector } from 'react-redux'
import { login, LogOut, signup as signupReal } from '../../actions/authentification.action';
import Cart from '../UI/Cart';

/* End speed implim */


/* NavBAR REACT bOOTSTRAP */


export default function Header(props) {

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

    
  // state cart value
  const cart = useSelector((state) => state.cart);

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

    /* if(auth.authenticate){
        
      }
    */

      const Logout = () => {
        dispatch(LogOut());
      }

    useEffect(() => {
      if(auth.authenticate){
        setLoginModal(false)
      }
     
    }, [auth.authenticate]);

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

    return (
         <div className="header">
      <Modal 
        visible={loginModal}
        onClose={() => setLoginModal(false)}
      >
        <div className="authContainer">
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
      <div className="subHeader">
        <div className="logo">
          <a href="">
            <img src={flipkartLogo} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: '-10px' }}>
            <span className="exploreText">Explore</span>
            <span className="plusText">Plus</span>
            <img src={goldenStar} className="goldenStar" alt="" />
          </a>
        </div>
        <div style={{
          padding: '0 10px'
        }}>
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={'search for products, brands and more'}
            />
            <div className="searchIconContainer">
              <IoIosSearch style={{
                color: '#2874f0'
              }} />
            </div>

          </div>
        </div>
        <div className="rightMenu">
           
           {/* menu in default case */}
          {auth.authenticate ?
            rendreLoggedInMenu() 
            : rendreNoLoggedInMenu()
          }

          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: 'Notification Preference', href: '', icon: null },
              { label: 'Sell on flipkart', href: '', icon: null },
              { label: '24x7 Customer Care', href: '', icon: null },
              { label: 'Advertise', href: '', icon: null },
              { label: 'Download App', href: '', icon: null }
            ]}
          />
          <div>
            <a  href={`/cart`}  className="cart" style={{ textDecoration:"none" }}>
              <Cart count ={Object.keys(cart.cartItems).length}/>
              <span style={{ margin: '0 10px' }}>Cart</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  
    )
}
