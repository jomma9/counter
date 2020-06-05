import React from "react";
import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "../ActionTypes/Actions";

class Counter extends React.Component {
  render() {
    const { inc, dec } = this.props;
    return (
      <div>
        <button onClick={inc}>+</button>
        <span>{this.props.count}</span>
        <button onClick={dec}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch(increaseCount()),
  dec: () => dispatch(decreaseCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
