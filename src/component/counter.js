import React, { Component } from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevstate) => {
        return { count: prevstate.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
