import React, { Component } from "react";
import { render } from "@testing-library/react";

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 20 },
    { name: "unknown" },
  ];

  return (
    <h1 className="App">
      {profiles.map((profile, index) => {
        return <User key={index} name={profile.name} age={profile.age} />;
      })}
    </h1>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, Iam {props.name}, age{props.age}
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;
