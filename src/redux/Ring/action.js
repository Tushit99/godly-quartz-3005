import axios from "axios";
import { RING_DATA_ERROR, RING_DATA_LOADING, RING_DATA_SUCCESS } from "./actionType";



export const getRing = ()=> async (dispatch) =>{
    try{
        dispatch({type: RING_DATA_LOADING})
        let res = await axios.get("http://localhost:8080/rings").then((e)=>{ 
            dispatch({type: RING_DATA_SUCCESS, payload: e.data}) 
            return e.data; 
        }) 
    }
    catch(err){
        dispatch({type: RING_DATA_ERROR}) 
    }
} 

