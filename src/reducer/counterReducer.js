import { ActionTypes } from "../Actions/ActionTypes";
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { count: state.count + action.payload.value };
    case ActionTypes.DECREMENT:
      return { count: state.count - action.payload.value };
    default:
      return state;
  }
};

export default counterReducer;
