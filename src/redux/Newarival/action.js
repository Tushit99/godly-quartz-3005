import axios from "axios";
import { NEWARIVAL_DATA_ERROR, NEWARIVAL_DATA_LOADING, NEWARIVAL_DATA_SUCCESS } from "./actionType";


export const getNewarival = (params)=> async (dispatch) =>{
    try{
        dispatch({type: NEWARIVAL_DATA_LOADING})
        let res = await axios.get("https://tame-lime-hose.cyclic.app/arivals",params).then((e)=>{ 
            dispatch({type:NEWARIVAL_DATA_SUCCESS, payload: e.data}) 
            return e.data; 
        }) 
        console.log(res); 
    }
    catch(err){
        dispatch({type: NEWARIVAL_DATA_ERROR}) 
    }
}  


