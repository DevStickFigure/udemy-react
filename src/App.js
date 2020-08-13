import React, { Component } from "react";
import PropTypes from "prop-types";

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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

// User.defaultProps = {
//   age: 1,
// };

export default App;
