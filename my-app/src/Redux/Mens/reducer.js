import { MENS_GET_FAILUE, MENS_GET_REQUEST, MENS_GET_SUCCESS, MENS_SANDAL_GET_FAILUE, MENS_SANDAL_GET_REQUEST, MENS_SANDAL_GET_SUCCESS, MENS_SHOES_GET_FAILUE, MENS_SHOES_GET_REQUEST, MENS_SHOES_GET_SUCCESS } from "./actionTypes"

const initialState = {
    mensData :[],
    mensSandalData:[],
    mens_shoes_data : [],
    isloading : false,
    isError : false
}

export const reducer = (state = initialState, {type,payload}) =>{

    switch(type){
            //chappal data 
        case MENS_GET_REQUEST : 
            return {...state, isloading: true}

        case MENS_GET_SUCCESS : 
            return {...state, isloading:false, mensData:payload }
            
        case MENS_GET_FAILUE : 
            return {...state, isloading:false, isError:true }    

           //Sandal data
           case MENS_SANDAL_GET_REQUEST : 
           return {...state, isloading: true}

       case MENS_SANDAL_GET_SUCCESS : 
           return {...state, isloading:false, mensSandalData:payload }
           
       case MENS_SANDAL_GET_FAILUE : 
           return {...state, isloading:false, isError:true } 
           
        //Shoes data
        case MENS_SHOES_GET_REQUEST : 
        return {...state, isloading: true}

    case MENS_SHOES_GET_SUCCESS : 
        return {...state, isloading:false, mens_shoes_data:payload }
        
    case MENS_SHOES_GET_FAILUE : 
        return {...state, isloading:false, isError:true } 
           

        default :
        return state
    }

}