import { WOMENS_CHAPPAL_GET_FAILUE, WOMENS_CHAPPAL_GET_REQUEST, WOMENS_CHAPPAL_GET_SUCCESS, WOMENS_SANDAL_GET_FAILUE, WOMENS_SANDAL_GET_REQUEST, WOMENS_SANDAL_GET_SUCCESS, WOMENS_SHOES_GET_FAILUE, WOMENS_SHOES_GET_REQUEST, WOMENS_SHOES_GET_SUCCESS } from "./actionTypes"

const initialState = {
    womens_Chappal_Data :[],
    womens_Sandal_Data:[],
    womens_Shoes_Data : [],
    isloading : false,
    isError : false
}

export const reducer = (state = initialState, {type,payload}) =>{

    switch(type){
            //Women chappal data 
        case WOMENS_CHAPPAL_GET_REQUEST : 
            return {...state, isloading: true}

        case WOMENS_CHAPPAL_GET_SUCCESS : 
            return {...state, isloading:false, womens_Chappal_Data:payload }
            
        case WOMENS_CHAPPAL_GET_FAILUE : 
            return {...state, isloading:false, isError:true }    

           //Women Sandal data
           case WOMENS_SANDAL_GET_REQUEST : 
           return {...state, isloading: true}

       case WOMENS_SANDAL_GET_SUCCESS : 
           return {...state, isloading:false, womens_Sandal_Data:payload }
           
       case WOMENS_SANDAL_GET_FAILUE : 
           return {...state, isloading:false, isError:true }   

        //Women Shoes data
        case WOMENS_SHOES_GET_REQUEST : 
        return {...state, isloading: true}

    case WOMENS_SHOES_GET_SUCCESS : 
        return {...state, isloading:false, womens_Shoes_Data:payload }
        
    case WOMENS_SHOES_GET_FAILUE : 
        return {...state, isloading:false, isError:true }       

        default :
        return state
    }

}