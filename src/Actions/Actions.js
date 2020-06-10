import { ActionTypes } from "./ActionTypes";

export const increaseCount = (value) => ({
  type: ActionTypes.INCREMENT,
  payload: value,
});

export const decreaseCount = (value) => ({
  type: ActionTypes.DECREMENT,
  payload: value,
});
