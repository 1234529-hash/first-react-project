import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      con_password: "",
    },
    onSubmit: () => {
      console.log(formik.values);
    },
  });

  const signUpData = [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone",
      type: "number",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      name: "con_password",
      label: "Confirm Password",
      type: "password",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 p-5">
      {signUpData.map((input) => {
        return (
          <TextField
            key={input.name}
            size="small"
            name={input.name}
            InputProps={{ className: "!rounded-full" }}
            label={input.label}
            value={formik.values[input.name]}
            onChange={formik.handleChange}
            variant="outlined"
          />
        );
      })}
      <Button type="submit" variant="contained" className="!rounded-full">
        Submit
      </Button>
    </form>
  );
};

export default SignUp;
