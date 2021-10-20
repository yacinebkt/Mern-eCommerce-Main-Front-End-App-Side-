

import { combineReducers } from "redux";
import authentificationReducers from "./authentification.reducers";
import CategoryReducer from "./category.reducer";
import ProductReducer from "./product.reducer";
import CartReducer from "./cart.reducer";
import UserReducer from "./user.reducer"

const rootReducer = combineReducers ({
    
    category: CategoryReducer,
    product: ProductReducer,
    auth: authentificationReducers,
    cart: CartReducer,
    user: UserReducer,


    
})

export default rootReducer;

