import {
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    POST_DATA_FAIL,
    POST_DATA_SUCCESS,
    EDIT_DATA_FAIL,
    EDIT_DATA_SUCCESS
    
} from "./types"

import { API } from "../../config/api";

export const postData = (
    text,
    data,
  ) => async (dispatch) => {
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      text,
      data
    });

    try {
        const res = await API.post("/data", body, config);
        dispatch({
          type: POST_DATA_SUCCESS,
          payload: res
        });
      } catch (err) {
        dispatch({
          type: POST_DATA_FAIL,
          payload: 'error'
        });
      }
};

export const getData = () => async (dispatch)=>{
  try {
    const res = await API.get("/data/1");
    dispatch({
      type: GET_DATA_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'error',
    });
  }
}

export const editData = (Data) => async (dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = JSON.stringify({
        text:"hello world",
        data:Data
      });
    try {
      const res = await API.patch(`/data/1`,body,config);
      dispatch({
        type: EDIT_DATA_SUCCESS,
        payload: res,
      });
    } catch (err) {
      dispatch({
        type: EDIT_DATA_FAIL,
        payload: 'error',
      });
    }
  }