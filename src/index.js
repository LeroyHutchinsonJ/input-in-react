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
const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
