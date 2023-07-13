import { BOYS_GET_FAILURE, BOYS_GET_REQUEST, BOYS_GET_SUCCESS, BOYS_SANDAL_GET_FAILURE, BOYS_SANDAL_GET_REQUEST, BOYS_SANDAL_GET_SUCCESS, BOYS_SHOES_GET_FAILURE, BOYS_SHOES_GET_REQUEST, BOYS_SHOES_GET_SUCCESS} from "./actionTypes"

const initialState = {
    boys_Chappal_Data :[],
    boys_Sandal_Data:[],
    boys_shoes_data : [],
    isloading : false,
    isError : false
}

export const reducer = (state = initialState, {type,payload}) =>{

    switch(type){
            //chappal data 
        case BOYS_GET_REQUEST : 
            return {...state, isloading: true}

        case BOYS_GET_SUCCESS : 
            return {...state, isloading:false, boys_Chappal_Data:payload }
            
        case BOYS_GET_FAILURE : 
            return {...state, isloading:false, isError:true }    

           //Sandal data
           case BOYS_SANDAL_GET_REQUEST : 
           return {...state, isloading: true}

       case BOYS_SANDAL_GET_SUCCESS : 
           return {...state, isloading:false, boys_Sandal_Data:payload }
           
       case BOYS_SANDAL_GET_FAILURE : 
           return {...state, isloading:false, isError:true } 
           
        //Shoes data
        case BOYS_SHOES_GET_REQUEST : 
        return {...state, isloading: true}

    case BOYS_SHOES_GET_SUCCESS : 
        return {...state, isloading:false, boys_shoes_data:payload }
        
    case BOYS_SHOES_GET_FAILURE : 
        return {...state, isloading:false, isError:true } 
           

        default :
        return state
    }

}