
import { GIRLS_CHAPPAL_GET_FAILURE, GIRLS_CHAPPAL_GET_REQUEST, GIRLS_CHAPPAL_GET_SUCCESS, GIRLS_SANDAL_GET_FAILURE, GIRLS_SANDAL_GET_REQUEST, GIRLS_SANDAL_GET_SUCCESS, GIRLS_SHOES_GET_FAILURE, GIRLS_SHOES_GET_REQUEST, GIRLS_SHOES_GET_SUCCESS } from "./actionTypes"

const initialState = {
    girls_Chappal_Data :[],
    girls_Sandal_Data:[],
    girls_shoes_data : [],
    isloading : false,
    isError : false
}

export const reducer = (state = initialState, {type,payload}) =>{

    switch(type){
            //chappal data 
        case GIRLS_CHAPPAL_GET_REQUEST : 
            return {...state, isloading: true}

        case GIRLS_CHAPPAL_GET_SUCCESS : 
            return {...state, isloading:false, girls_Chappal_Data:payload }
            
        case GIRLS_CHAPPAL_GET_FAILURE : 
            return {...state, isloading:false, isError:true }    


           //Sandal data-----------------------------------
           case GIRLS_SANDAL_GET_REQUEST : 
           return {...state, isloading: true}

       case GIRLS_SANDAL_GET_SUCCESS : 
           return {...state, isloading:false, girls_Sandal_Data:payload }
           
       case GIRLS_SANDAL_GET_FAILURE : 
           return {...state, isloading:false, isError:true } 
           

        //Shoes data-------------------------------------
        case GIRLS_SHOES_GET_REQUEST : 
        return {...state, isloading: true}

    case GIRLS_SHOES_GET_SUCCESS : 
        return {...state, isloading:false, girls_shoes_data:payload }
        
    case GIRLS_SHOES_GET_FAILURE : 
        return {...state, isloading:false, isError:true } 
           

        default :
        return state
    }

}