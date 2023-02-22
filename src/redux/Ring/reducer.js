import { RING_DATA_ERROR, RING_DATA_LOADING, RING_DATA_SUCCESS } from "./actionType";



const initialState = {
    isLoading: false,
    isError: false,
    ring: [],
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case RING_DATA_LOADING:
        return { ...state, isLoading: true };
      case RING_DATA_SUCCESS:
        return { ...state, isLoading: false, ring: payload };
      case RING_DATA_ERROR:
        return { ...state, isLoading: false, isError: true }; 
      default:
        return state;
    }
  };


