import { ActionTypes } from "./ActionTypes";

export const increaseCount = () => ({
  type: ActionTypes.INCREMENT,
});

export const decreaseCount = () => ({
  type: ActionTypes.DECREMENT,
});
