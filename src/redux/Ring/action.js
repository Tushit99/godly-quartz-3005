import axios from "axios";
import { RING_DATA_ERROR, RING_DATA_LOADING, RING_DATA_SUCCESS } from "./actionType";



export const getRing = (param)=> async (dispatch) =>{
    try{
        dispatch({type: RING_DATA_LOADING})
        let res = await axios.get("https://tame-lime-hose.cyclic.app/rings",param).then((e)=>{ 
            dispatch({type: RING_DATA_SUCCESS, payload: e.data}) ; 
            return e.data; 
        }) 
        console.log(res); 
    }
    catch(err){
        dispatch({type: RING_DATA_ERROR}) 
    }
} 

