import {
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    POST_DATA_FAIL,
    POST_DATA_SUCCESS,
    EDIT_DATA_FAIL,
    EDIT_DATA_SUCCESS
    
} from "../action/types"

const initialState = {
    loading: true,
    data: [],
    error:null,
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          user: payload,
        };
     case GET_DATA_FAIL:
     case POST_DATA_SUCCESS:
     case POST_DATA_FAIL:
     case EDIT_DATA_SUCCESS:
     case EDIT_DATA_FAIL:
    default:
        return state;
    }
  }
  