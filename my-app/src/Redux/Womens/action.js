import { WOMENS_CHAPPAL_GET_FAILUE, WOMENS_CHAPPAL_GET_REQUEST, WOMENS_CHAPPAL_GET_SUCCESS, WOMENS_SANDAL_GET_FAILUE, WOMENS_SANDAL_GET_REQUEST, WOMENS_SANDAL_GET_SUCCESS, WOMENS_SHOES_GET_FAILUE, WOMENS_SHOES_GET_REQUEST, WOMENS_SHOES_GET_SUCCESS } from "./actionTypes"


//Womens Chappal Get Data Action
export const womensChappalGetRequestAction = ()=>{
   return {type: WOMENS_CHAPPAL_GET_REQUEST}
}

export const womensChappalGetSuccessAction = (payload)=>{
   return {type: WOMENS_CHAPPAL_GET_SUCCESS, payload}
}

export const womensChappalGetFailureAction = ()=>{
   return {type: WOMENS_CHAPPAL_GET_FAILUE}
}



//Womens SANDAL Get Data Action
export const WomensSandalGetRequestAction = ()=>{
   return {type: WOMENS_SANDAL_GET_REQUEST}
}

export const WomensSandalGetSuccessAction = (payload)=>{
   return {type: WOMENS_SANDAL_GET_SUCCESS, payload}
}

export const WomensSandalGetFailureAction = ()=>{
   return {type: WOMENS_SANDAL_GET_FAILUE}
}


//Womens Shoes Get Data Action
export const Womens_Shoes_Get_Request_Action = ()=>{
    return {type: WOMENS_SHOES_GET_REQUEST}
 }
 
 export const Womens_Shoes_Get_Success_Action = (payload)=>{
    return {type: WOMENS_SHOES_GET_SUCCESS, payload}
 }
 
 export const Womens_Shoes_Get_Failure_Action = ()=>{
    return {type: WOMENS_SHOES_GET_FAILUE}
 }