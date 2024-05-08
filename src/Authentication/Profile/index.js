import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  // https://api-eduvila.onrender.com/profile
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");
  console.log(token);
  const getProfileFn = async () => {
    const response = await axios.get(
      "https://api-eduvila.onrender.com/profile",
      { params: { token: token } }
    );
    console.log(response.data[0]);
    setData(response.data[0]);
  };

  useEffect(() => {
    getProfileFn();
  }, []);

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.id}</p>
      <p>{data?.gender}</p>
      <p>{data?.email}</p>
    </div>
  );
};

export default Profile;
