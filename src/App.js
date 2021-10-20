import React, {useEffect} from 'react'
import './App.css';
import HomePage from './Containers/HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductsListPage from './Containers/ProductsListPage/ProductsListPage';

import { useDispatch, useSelector } from 'react-redux'
import { isUserLoginIn } from './actions/authentification.action';
import ProductDetailsPage from './Containers/ProductDetailsPage/ProductDetailsPage';
import CartPage from './Containers/CartPage/CartPage';
import { updateCart } from './actions/cart.action';
import CheckoutPage from './Containers/CheckOutPage/CheckoutPage';
import OrderPage from './Containers/OrderPage/OrderPage';
import OrderDetailsPage from './Containers/OrderDetailsPage/OrderDetailsPage';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  const dispatch = useDispatch();
  const auth = useSelector(state=> state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoginIn())
    }
  }, [auth.authenticate])


  
  useEffect(() => {
    console.log('App js - update Cart')
      dispatch(updateCart())
  }, [auth.authenticate])


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />

          <Route path="/:productSlug/:productId/p" component={ProductDetailsPage} />

       {/*   <Route path="/:categorySlug/sub02" component={categoryPage} />*/ }
          

          <Route path="/:slug" component={ProductsListPage} />
        </Switch>
      </Router>
      
      {/*<HomePage />*/}
    </div>
  );
}

export default App;
