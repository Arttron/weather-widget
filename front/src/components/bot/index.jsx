import React from "react";


export class Bot extends React.Component {
  state = {
    message: 'no message'
  }
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.state.message}</div>
  }
}
