import React from "react";
import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "../Actions/Actions";

const Counter = ({ count, incrementCount, decrementCount }) => (
  <div>
    <button onClick={incrementCount}>+</button>
    <span>{count}</span>
    <button onClick={decrementCount}>-</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => dispatch(increaseCount({ value: 1 })),
  decrementCount: () => dispatch(decreaseCount({ value: 1 })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
