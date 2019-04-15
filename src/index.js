import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Example extends React.Component {
  state = {
    text: ""
  };

  basicInput = event => {
    this.setState({ text: event.target.value });
  };

  trickInput = event => {
    this.setState({ text: "Ha ha nope" });
  };
  lettersOnlyInput = event => {
    let text = event.target.value;
    text = text.replace(/[0-9]/g, "");
    this.setState({ text });
  };
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.text}
          onChange={this.lettersOnlyInput}
        />
      </>
    );
  }
}
const EasyInput = () => {
  return <input type="text" />;
};

class RefInput extends React.Component {
  showValue = () => {
    alert(`Input Contains: ${this.input.value}`);
  };

  render() {
    return (
      <div>
        <input type="text" ref={currentValue => (this.input = currentValue)} />
        <button onClick={this.showValue}>Click Me!</button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<RefInput />, rootElement);
