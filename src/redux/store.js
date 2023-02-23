import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";  
import {reducer as earReducer} from "./Earring/reducer" 
import {reducer as arivalReducer} from "./Newarival/reducer" 
import {reducer as ringReducer} from "./Ring/reducer" 
import { cartReducer } from "./cart/reducer";
import { checkoutReducer } from "./Checkout/reducer";


const rootReducer = combineReducers({ 
    earReducer, 
    arivalReducer, 
    ringReducer,
    cartReducer,
    checkoutReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
