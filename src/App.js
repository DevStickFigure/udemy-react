import React, { Component } from "react";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <h1 className="App">
        <Cat />
      </h1>
    );
  }
}

const Cat = () => {
  return <div>Meow</div>;
};

export default App;
