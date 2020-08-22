import { useReducer } from "react";
const initialstate = { isloading: true, data: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isloading: true, data: [] };
    case "LOADED":
      return { ...state, isloading: false, data: action.payload };
    case "ADD_REVIEW":
      return {
        ...state,
        isloading: false,
        data: state.data.concat(action.payload),
      };
    default:
      return state;
  }
};

const useglobalstate = () => {
  const [globalstate, dispatchglobalstate] = useReducer(reducer, initialstate);
  return { globalstate, dispatchglobalstate };
};

export default useglobalstate;
