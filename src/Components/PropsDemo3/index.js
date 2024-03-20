import { Divider } from "@mui/material";
import React from "react";
import { Component1 } from "./Component";

const PropsDemo3 = () => {
  const str = "Aditya";

  return (
    <div className="bg-[#f44336]">
      Main Component : {str}
      <Divider />
      <Component1 name={str} />
    </div>
  );
};

export default PropsDemo3;
