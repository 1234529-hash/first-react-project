import React from "react";

const Component1 = (props) => {
  console.log(props.name);
  return (
    <div>
      <p>Component1 : {props.name}</p>
      <Component2 name={props.name} />
    </div>
  );
};

const Component2 = (props) => {
  console.log(props);
  return (
    <div>
      <p>Component2 : {props.name}</p>
      <Component3 name={props.name} />
    </div>
  );
};

const Component3 = (props) => {
  console.log(props);
  return (
    <div>
      <p> Component3 : {props.name}</p>
    </div>
  );
};

export { Component1 };
