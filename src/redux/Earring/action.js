import axios from "axios";
import {
  EARRING_DATA_ERROR,
  EARRING_DATA_LOADING,
  EARRING_DATA_SUCCESS,
} from "./actonType";

export const getEaring = (params) => async (dispatch) => {
  dispatch({ type: EARRING_DATA_LOADING });
  try {
    let res = await axios
      .get("https://tame-lime-hose.cyclic.app/earrings", params)
      .then((e) => {
        dispatch({ type: EARRING_DATA_SUCCESS, payload: e.data });
        return e.data;
      });
    console.log(res);
  } catch (err) {
    dispatch({ type: EARRING_DATA_ERROR });
  }
};
