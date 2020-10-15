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
} from "./types"

import { API } from "../../config/api";

export const postData = (
    text,
    type,
    UserId
  ) => async (dispatch) => {
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      text,
      data:"0",
      UserId,
      type,
    });
    try {
       const res = await API.post("/data", body, config);
        dispatch({
          type: POST_DATA_SUCCESS,
          payload: res.data.data
        });
      } catch (err) {
        dispatch({
          type: POST_DATA_FAIL,
          payload: "error"
        });
      }
};

export const getDataId = (id) => async (dispatch)=>{
  try {
    const res = await API.get(`/data/${id}`);
    dispatch({
      type: GET_DATA_ID_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_DATA_ID_FAIL,
      payload: err.massage,
    });
  }
}

export const getDataUserId=(id)=>async(dispatch)=>{
  try{
    const res = await API.get(`/user/${id}`);
    dispatch({
      type: GET_DATA_USER_ID_SUCCESS,
      payload: res.data.data,
    });
  }catch(err){
    dispatch({
      type: GET_DATA_USER_ID_FAIL,
      payload: err.massage,
    });
  }
}

export const editData = (Data,id) => async (dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = JSON.stringify({
        data:Data
      });
    try {
      const res = await API.patch(`/data/${id}`,body,config);
      dispatch({
        type: EDIT_DATA_SUCCESS,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: EDIT_DATA_FAIL,
        payload: 'error',
      });
    }
  }

export const getData = () => async (dispatch) =>{
  const res = null
  try{
    res = await API.get("/data");
    dispatch({
      type: GET_DATA_SUCCESS,
      payload: res.data.data
    })
  }catch{
    dispatch({
      type: GET_DATA_FAIL,
      payload: res.data.massage
    })
  }
}

export const deletData = (id)=>async(dispatch)=>{
  const res = null
  try{
    res = await API.delete(`/data/${id}`);
    dispatch({
      type: DELETE_DATA_SUCCESS,
      payload:res.data.data
    })
  }catch{
    dispatch({
      type: DELET_DATA_FAIL,
      payload: res.data.massage
    })
  }
}