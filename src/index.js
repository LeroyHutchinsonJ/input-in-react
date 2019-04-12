import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Example extends React.Component {
  state = {
    text: ""
  };

  takeText = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <>
        <input type="text" value={this.state.text} onChange={this.takeText} />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
