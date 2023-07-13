import {  BOYS_GET_FAILURE, BOYS_GET_REQUEST, BOYS_GET_SUCCESS, BOYS_SANDAL_GET_FAILURE, BOYS_SANDAL_GET_REQUEST, BOYS_SANDAL_GET_SUCCESS, BOYS_SHOES_GET_FAILURE, BOYS_SHOES_GET_REQUEST, BOYS_SHOES_GET_SUCCESS } from "./actionTypes"


//Boys Chappal Get Data Action
export const boysGetRequestAction = ()=>{
   return {type: BOYS_GET_REQUEST}
}

export const boysGetSuccessAction = (payload)=>{
   return {type: BOYS_GET_SUCCESS, payload}
}

export const boysGetFailureAction = ()=>{
   return {type: BOYS_GET_FAILURE}
}



//Boys sANDAL Get Data Action
export const boysSandalGetRequestAction = ()=>{
   return {type: BOYS_SANDAL_GET_REQUEST}
}

export const boysSandalGetSuccessAction = (payload)=>{
   return {type: BOYS_SANDAL_GET_SUCCESS, payload}
}

export const boysSandalGetFailureAction = ()=>{
   return {type: BOYS_SANDAL_GET_FAILURE}
}


//Boys Shoes Get Data Action
export const boys_Shoes_Get_RequestAction = ()=>{
   return {type: BOYS_SHOES_GET_REQUEST}
}

export const boys_Shoes_Get_SuccessAction = (payload)=>{
   return {type: BOYS_SHOES_GET_SUCCESS, payload}
}

export const boys_Shoes_Get_FailureAction = ()=>{
   return {type: BOYS_SHOES_GET_FAILURE}
}