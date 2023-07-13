import { GIRLS_CHAPPAL_GET_FAILURE, GIRLS_CHAPPAL_GET_REQUEST, GIRLS_CHAPPAL_GET_SUCCESS, GIRLS_SANDAL_GET_FAILURE, GIRLS_SANDAL_GET_REQUEST, GIRLS_SANDAL_GET_SUCCESS, GIRLS_SHOES_GET_FAILURE, GIRLS_SHOES_GET_REQUEST, GIRLS_SHOES_GET_SUCCESS } from "./actionTypes"


//Girls Chappal Get Data Action
export const girls_Chappal_Get_Request_Action = ()=>{
   return {type: GIRLS_CHAPPAL_GET_REQUEST}
}

export const girls_Chappal_Get_Success_Action = (payload)=>{
   return {type: GIRLS_CHAPPAL_GET_SUCCESS, payload}
}

export const girls_Chappal_Get_Failure_Action = ()=>{
   return {type: GIRLS_CHAPPAL_GET_FAILURE}
}



//Girls sANDAL Get Data Action
export const girls_Sandal_Get_Request_Action = ()=>{
   return {type: GIRLS_SANDAL_GET_REQUEST}
}

export const girls_Sandal_Get_Success_Action = (payload)=>{
   return {type: GIRLS_SANDAL_GET_SUCCESS, payload}
}

export const girls_Sandal_Get_Failure_Action = ()=>{
   return {type: GIRLS_SANDAL_GET_FAILURE}
}


//Girls Shoes Get Data Action
export const girls_Shoes_Get_Request_Action = ()=>{
   return {type: GIRLS_SHOES_GET_REQUEST}
}

export const girls_Shoes_Get_Success_Action = (payload)=>{
   return {type: GIRLS_SHOES_GET_SUCCESS, payload}
}

export const girls_Shoes_Get_Failure_Action = ()=>{
   return {type: GIRLS_SHOES_GET_FAILURE}
}