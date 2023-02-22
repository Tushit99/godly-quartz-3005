import {
  EARRING_DATA_ERROR,
  EARRING_DATA_LOADING,
  EARRING_DATA_SUCCESS,
} from "./actonType";

const initialState = {
  isLoading: false,
  isError: false,
  earring: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EARRING_DATA_LOADING:
      return { ...state, isLoading: true };
    case EARRING_DATA_SUCCESS:
      return { ...state, isLoading: false, earring: payload };
    case EARRING_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
