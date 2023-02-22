import { NEWARIVAL_DATA_ERROR, NEWARIVAL_DATA_LOADING, NEWARIVAL_DATA_SUCCESS } from "./actionType";


const initialState = {
    isLoading: false,
    isError: false,
    newArival: [],
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case NEWARIVAL_DATA_LOADING:
        return { ...state, isLoading: true };
      case NEWARIVAL_DATA_SUCCESS:
        return { ...state, isLoading: false, newArival: payload };
      case NEWARIVAL_DATA_ERROR:
        return { ...state, isLoading: false, isError: true }; 
      default:
        return state;
    }
  };

