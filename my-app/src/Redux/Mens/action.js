import { MENS_GET_FAILUE,
     MENS_GET_REQUEST,
      MENS_GET_SUCCESS, 
      MENS_SANDAL_GET_FAILUE, 
      MENS_SANDAL_GET_REQUEST,
      MENS_SANDAL_GET_SUCCESS,
      MENS_SHOES_GET_FAILUE,
      MENS_SHOES_GET_REQUEST,
      MENS_SHOES_GET_SUCCESS
    } from "./actionTypes"

//Mens Chappal Get Data Action
export const mensGetRequestAction = ()=>{
    return {type: MENS_GET_REQUEST}
}

export const mensGetSuccessAction = (payload)=>{
    return {type: MENS_GET_SUCCESS, payload}
}

export const mensGetFailureAction = ()=>{
    return {type: MENS_GET_FAILUE}
}



//Mens sANDAL Get Data Action
export const mensSandalGetRequestAction = ()=>{
    return {type: MENS_SANDAL_GET_REQUEST}
}

export const mensSandalGetSuccessAction = (payload)=>{
    return {type: MENS_SANDAL_GET_SUCCESS, payload}
}

export const mensSandalGetFailureAction = ()=>{
    return {type: MENS_SANDAL_GET_FAILUE}
}


//Mens Shoes Get Data Action
export const mens_Shoes_Get_RequestAction = ()=>{
    return {type: MENS_SHOES_GET_REQUEST}
}

export const mens_Shoes_Get_SuccessAction = (payload)=>{
    return {type: MENS_SHOES_GET_SUCCESS, payload}
}

export const mens_Shoes_Get_FailureAction = ()=>{
    return {type: MENS_SHOES_GET_FAILUE}
}