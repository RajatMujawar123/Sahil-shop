import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as mensChappal } from "./Redux/Mens/reducer";
import {reducer as mensSandal}  from "./Redux/Mens/reducer"
import {reducer as mensShoes} from "./Redux/Mens/reducer"

import {reducer as womens_Chappal} from "./Redux/Womens/reducer"
import {reducer as womens_Sandal} from "./Redux/Womens/reducer"
import {reducer as womens_shoes} from "./Redux/Womens/reducer"

import {reducer as boys_Chappal} from "./Redux/Kids/reducer"
import {reducer as boys_Sandal} from "./Redux/Kids/reducer"
import {reducer as boys_Shoes} from "./Redux/Kids/reducer"

import {reducer as girls_Chappal} from "./Redux/Kids/Girls/reducer"
import {reducer as girls_Sandal} from "./Redux/Kids/Girls/reducer"
import {reducer as girls_Shoes} from "./Redux/Kids/Girls/reducer"

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    mensChappal, mensSandal, mensShoes,

    womens_Chappal, womens_Sandal, womens_shoes,

    boys_Chappal, boys_Sandal, boys_Shoes,

    girls_Chappal, girls_Sandal, girls_Shoes

}) 

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))