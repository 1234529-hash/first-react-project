import React from "react";

const Destructuring = () => {
  const car = { type: "Fiat", model: "500", color: "white" };
  const { type, model, color } = car;
  return (
    <div>
      {/* <p>Type : {car.type}</p>
      <p>Model : {car.model}</p>
      <p>Color : {car.color}</p> */}
      <p>Type : {type}</p>
      <p>Model : {model}</p>
      <p>Color : {color}</p>
    </div>
  );
};

export default Destructuring;
