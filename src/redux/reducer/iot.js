import {
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,

  POST_DATA_FAIL,
  POST_DATA_SUCCESS,

  EDIT_DATA_FAIL,
  EDIT_DATA_SUCCESS,

  GET_DATA_ID_FAIL,
  GET_DATA_ID_SUCCESS,

  DELETE_DATA_SUCCESS,
  DELET_DATA_FAIL,

  GET_DATA_USER_ID_SUCCESS,
  GET_DATA_USER_ID_FAIL
    
} from "../action/types"

const initialState = {
    loading: true,
    data: [],
    data_userId:[],
    error:null,
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_DATA_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          data: payload,
          error:null
        };
     case GET_DATA_ID_FAIL:
       return{
         ...state,
         loading:false,
         data:[],
         error:payload
       }
      case GET_DATA_USER_ID_SUCCESS:
        return{
          ...state,
          loading:false,
          data_userId:payload,
          error:null
        }
     case POST_DATA_SUCCESS:
     case POST_DATA_FAIL:
     case EDIT_DATA_SUCCESS:
     case EDIT_DATA_FAIL:
    default:
        return state;
    }
  }
  